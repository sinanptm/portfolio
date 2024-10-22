"use client";
import { useState, useEffect, useCallback } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = ({ url }: { url: string }) => {
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
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
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

export default PdfViewer;
