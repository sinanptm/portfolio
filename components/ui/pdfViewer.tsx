"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(
  async () => {
    const pdfjsVersion = '3.11.174'; 
    
    const { Viewer, Worker } = await import('@react-pdf-viewer/core');
    const { defaultLayoutPlugin } = await import('@react-pdf-viewer/default-layout');
    
    // @ts-expect-error the css files exists
    await import('@react-pdf-viewer/core/lib/styles/index.css');
    // @ts-expect-error the css files exists
    await import('@react-pdf-viewer/default-layout/lib/styles/index.css');
    
    const Component = ({ url }: { url: string }) => {
      const defaultLayoutPluginInstance = defaultLayoutPlugin();
      const [scale, setScale] = useState(1.3);
      
      const calculateScale = useCallback(() => {
        const width = window.innerWidth;
        return width < 768 ? 0.65 : 1.3;
      }, []);
      
      useEffect(() => {
        const handleResize = () => {
          setScale(calculateScale());
        };
        setScale(calculateScale());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [calculateScale]);
      
      return (
        <div className="h-screen w-screen">
          <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`}>
            <Viewer
              fileUrl={url}
              initialPage={0}
              enableSmoothScroll
              defaultScale={scale}
              theme={"dark"}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </div>
      );
    };
    
    return Component
  },
  { ssr: false } // Disable server-side rendering
);


const PdfViewer = ({ url = "/assets/resume.pdf" }: { url?: string }) => {
  return <PDFViewer url={url} />;
};

export default PdfViewer;