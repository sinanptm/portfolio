'use client';

import { useEffect, useRef, useMemo, useCallback } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Object3DNode, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/constants/glob.json";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 10;
const ASPECT = 1.2;
const CAMERA_Z = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

export function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);

  const defaultProps = useMemo(() => ({
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  }), [globeConfig]);

  const globeData = useMemo(() => {
    const points = data.flatMap(arc => {
      const rgb = hexToRgb(arc.color);
      if (!rgb) return [];
      const colorFn = (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`;
      return [
        { size: defaultProps.pointSize, order: arc.order, color: colorFn, lat: arc.startLat, lng: arc.startLng },
        { size: defaultProps.pointSize, order: arc.order, color: colorFn, lat: arc.endLat, lng: arc.endLng }
      ];
    });

    return points.filter((v, i, a) =>
      a.findIndex(v2 => v2.lat === v.lat && v2.lng === v.lng && !isNaN(v2.lat) && !isNaN(v2.lng)) === i
    );
  }, [data, defaultProps.pointSize]);

  const buildMaterial = useCallback(() => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
    globeMaterial.shininess = defaultProps.shininess;
  }, [defaultProps]);

  const startAnimation = useCallback(() => {
    if (!globeRef.current) return;

    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor)
      .arcsData(data)
      //@ts-expect-error #not undefined
      .arcStartLat((d: Position) => d.startLat)
      //@ts-expect-error #not undefined
      .arcStartLng((d: Position) => d.startLng)
      //@ts-expect-error #not undefined
      .arcEndLat((d: Position) => d.endLat)
      //@ts-expect-error #not undefined
      .arcEndLng((d: Position) => d.endLng)
      //@ts-expect-error #not undefined
      .arcColor((e: Position) => e.color)
      //@ts-expect-error #not undefined
      .arcAltitude((e: Position) => e.arcAlt)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
      .arcDashLength(defaultProps.arcLength)
      //@ts-expect-error #not undefined
      .arcDashInitialGap((e: Position) => e.order)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime)
      .pointsData(globeData)
      //@ts-expect-error #not undefined 
      .pointColor((e: { color: (t: number) => string; }) => e.color(1))
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2)
      .ringsData([])
      //eslint-disable-next-line
      .ringColor((e: any) => (t: number) => e.color(t))
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod((defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings);
  }, [data, defaultProps, globeData]);

  useEffect(() => {
    if (globeRef.current) {
      buildMaterial();
      startAnimation();
    }
  }, [buildMaterial, startAnimation]);

  useEffect(() => {
    if (!globeRef.current || !globeData.length) return;

    const interval = setInterval(() => {
      if (!globeRef.current) return;
      const numbersOfRings = genRandomNumbers(0, globeData.length, Math.floor((globeData.length * 4) / 5));
      globeRef.current.ringsData(globeData.filter((_, i) => numbersOfRings.includes(i)));
    }, 2000);

    return () => clearInterval(interval);
  }, [globeData]);

  return <threeGlobe ref={globeRef} />;
}

function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, [gl, size]);

  return null;
}

export function World({ globeConfig, data }: WorldProps) {
  const scene = useMemo(() => {
    const newScene = new Scene();
    newScene.fog = new Fog(0xffffff, 400, 2000);
    return newScene;
  }, []);

  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, ASPECT, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe globeConfig={globeConfig} data={data} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={CAMERA_Z}
        maxDistance={CAMERA_Z}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
}

function genRandomNumbers(min: number, max: number, count: number) {
  const arr: number[] = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}