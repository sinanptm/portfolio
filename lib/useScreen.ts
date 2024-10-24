import { useEffect, useState } from "react";

const useScreen = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event: any) => setIsMobile(event.matches);
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, [setIsMobile]);

    return { isMobile };
};

export default useScreen;