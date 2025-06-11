'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

interface CrystalPoint {
    x: number;
    y: number;
    originalX: number;
    originalY: number;
    vx: number;
    vy: number;
    intensity: number;
    phase: number;
}

const InteractivePurpleCrystal: React.FC = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const animationRef = useRef<number | null>(null);
    const pointsRef = useRef<CrystalPoint[]>([]);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const width = 500;
    const height = 400;
    const centerX = width / 2;
    const centerY = height / 2;

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        if (!svg.node()) return;

        svg.selectAll("*").remove();

        // Create gradient definitions
        const defs = svg.append("defs");

        // Main purple gradient
        const purpleGradient = defs.append("linearGradient")
            .attr("id", "purpleGradient")
            .attr("x1", "0%").attr("y1", "0%")
            .attr("x2", "100%").attr("y2", "100%");

        purpleGradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#8b5cf6")
            .attr("stop-opacity", 0.9);

        purpleGradient.append("stop")
            .attr("offset", "50%")
            .attr("stop-color", "#a855f7")
            .attr("stop-opacity", 0.7);

        purpleGradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", "#c084fc")
            .attr("stop-opacity", 0.5);

        // Glow filter
        const glowFilter = defs.append("filter")
            .attr("id", "purpleGlow")
            .attr("x", "-50%").attr("y", "-50%")
            .attr("width", "200%").attr("height", "200%");

        glowFilter.append("feGaussianBlur")
            .attr("stdDeviation", "4")
            .attr("result", "coloredBlur");

        const feMerge = glowFilter.append("feMerge");
        feMerge.append("feMergeNode").attr("in", "coloredBlur");
        feMerge.append("feMergeNode").attr("in", "SourceGraphic");

        // Sharp glow for edges
        const sharpGlow = defs.append("filter")
            .attr("id", "sharpGlow")
            .attr("x", "-20%").attr("y", "-20%")
            .attr("width", "140%").attr("height", "140%");

        sharpGlow.append("feGaussianBlur")
            .attr("stdDeviation", "2")
            .attr("result", "blur");

        const sharpMerge = sharpGlow.append("feMerge");
        sharpMerge.append("feMergeNode").attr("in", "blur");
        sharpMerge.append("feMergeNode").attr("in", "SourceGraphic");

        // Initialize crystal points in a complex geometric pattern
        const initializePoints = () => {
            const points: CrystalPoint[] = [];

            // Main crystal vertices (dodecagon base)
            for (let i = 0; i < 12; i++) {
                const angle = (i / 12) * Math.PI * 2;
                const radius = 80 + Math.sin(i * 0.7) * 20;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;

                points.push({
                    x, y,
                    originalX: x,
                    originalY: y,
                    vx: 0, vy: 0,
                    intensity: 0.8 + Math.random() * 0.2,
                    phase: i * 0.5
                });
            }

            // Inner crystal pattern
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2 + 0.2;
                const radius = 40 + Math.sin(i * 1.2) * 15;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;

                points.push({
                    x, y,
                    originalX: x,
                    originalY: y,
                    vx: 0, vy: 0,
                    intensity: 0.6 + Math.random() * 0.3,
                    phase: i * 0.8 + Math.PI
                });
            }

            // Center anchor points
            for (let i = 0; i < 4; i++) {
                const angle = (i / 4) * Math.PI * 2;
                const radius = 15;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;

                points.push({
                    x, y,
                    originalX: x,
                    originalY: y,
                    vx: 0, vy: 0,
                    intensity: 1,
                    phase: i * 1.5
                });
            }

            return points;
        };

        pointsRef.current = initializePoints();

        // Create the main crystal shape
        const crystalGroup = svg.append("g").attr("class", "crystal");
        const pathElement = crystalGroup.append("path")
            .attr("fill", "url(#purpleGradient)")
            .attr("stroke", "#a855f7")
            .attr("stroke-width", 2)
            .attr("filter", "url(#purpleGlow)")
            .attr("opacity", 0.8);

        // Create inner glow lines
        const glowLines = crystalGroup.append("g").attr("class", "glow-lines");

        // Create floating particles
        const particles = svg.append("g").attr("class", "particles");
        const particleData = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            x: centerX + (Math.random() - 0.5) * 200,
            y: centerY + (Math.random() - 0.5) * 200,
            size: 2 + Math.random() * 3,
            speed: 0.5 + Math.random() * 1,
            angle: Math.random() * Math.PI * 2,
            opacity: 0.3 + Math.random() * 0.4
        }));

        particles.selectAll("circle")
            .data(particleData)
            .enter()
            .append("circle")
            .attr("r", d => d.size)
            .attr("fill", "#c084fc")
            .attr("opacity", d => d.opacity)
            .attr("filter", "url(#sharpGlow)");

        // Animation loop
        let time = 0;
        const animate = () => {
            time += 0.015;

            const points = pointsRef.current;

            // Update points with morphing animation
            points.forEach((point, i) => {
                const waveOffset = Math.sin(time + point.phase) * 15;
                const pulseOffset = Math.cos(time * 1.5 + point.phase) * 8;

                // Mouse interaction
                if (isHovered) {
                    const dx = mousePos.x - point.originalX;
                    const dy = mousePos.y - point.originalY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 150;

                    if (distance < maxDistance) {
                        const force = (maxDistance - distance) / maxDistance;
                        const attractionStrength = 0.3;
                        point.vx += (dx / distance) * force * attractionStrength;
                        point.vy += (dy / distance) * force * attractionStrength;
                    }
                }

                // Apply physics
                point.vx *= 0.85; // Damping
                point.vy *= 0.85;

                // Return to original position
                const returnForce = 0.08;
                point.vx += (point.originalX - point.x) * returnForce;
                point.vy += (point.originalY - point.y) * returnForce;

                // Update position
                point.x += point.vx + Math.cos(time + point.phase) * 0.5;
                point.y += point.vy + Math.sin(time * 0.8 + point.phase) * 0.5;

                // Add morphing effects
                point.x += waveOffset * Math.cos(point.phase);
                point.y += pulseOffset * Math.sin(point.phase);
            });

            // Generate crystal path using Delaunay triangulation for organic shape
            const delaunay = d3.Delaunay.from(points.slice(0, 12), d => d.x, d => d.y);
            const voronoi = delaunay.voronoi([0, 0, width, height]);

            // Create main crystal hull
            const hull = d3.polygonHull(points.slice(0, 12).map(p => [p.x, p.y]));
            if (hull) {
                const pathData = `M${hull.join('L')}Z`;
                pathElement.attr("d", pathData);
            }

            // Update glow lines connecting points
            glowLines.selectAll("line").remove();
            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const dx = points[i].x - points[j].x;
                    const dy = points[i].y - points[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 80 && Math.random() > 0.7) {
                        glowLines.append("line")
                            .attr("x1", points[i].x)
                            .attr("y1", points[i].y)
                            .attr("x2", points[j].x)
                            .attr("y2", points[j].y)
                            .attr("stroke", "#a855f7")
                            .attr("stroke-width", 1)
                            .attr("opacity", 0.3 + Math.sin(time * 2) * 0.2)
                            .attr("filter", "url(#sharpGlow)");
                    }
                }
            }

            // Update particles
            particles.selectAll("circle")
                .data(particleData)
                .attr("cx", d => {
                    d.x += Math.cos(d.angle + time) * d.speed;
                    if (d.x < 0 || d.x > width) d.x = centerX;
                    return d.x;
                })
                .attr("cy", d => {
                    d.y += Math.sin(d.angle + time * 0.8) * d.speed;
                    if (d.y < 0 || d.y > height) d.y = centerY;
                    return d.y;
                })
                .attr("opacity", d => d.opacity * (0.5 + Math.sin(time + d.id) * 0.5));

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Mouse interaction handlers
        const handleMouseMove = (event: MouseEvent) => {
            const rect = svgRef.current?.getBoundingClientRect();
            if (rect) {
                setMousePos({
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                });
            }
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        const svgElement = svgRef.current;
        svgElement?.addEventListener('mousemove', handleMouseMove);
        svgElement?.addEventListener('mouseenter', handleMouseEnter);
        svgElement?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            svgElement?.removeEventListener('mousemove', handleMouseMove);
            svgElement?.removeEventListener('mouseenter', handleMouseEnter);
            svgElement?.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isHovered, mousePos.x, mousePos.y]);

    return (
        <div className="flex items-center justify-center p-8">
            <div className="relative group cursor-pointer">
                <svg
                    ref={svgRef}
                    width={width}
                    height={height}
                    className="transition-transform duration-300 group-hover:scale-105"
                />

                {/* Interactive hint */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <p className="text-sm text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        hover to interact
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InteractivePurpleCrystal;