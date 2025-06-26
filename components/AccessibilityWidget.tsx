'use client';

import { useEffect } from 'react';

interface AccessibilityWidgetProps {
    iconId?: string;
    position?: {
        mobile: string;
        desktop: string;
    };
    language?: {
        default: string;
        selected: string[];
    };
}

const AccessibilityWidget = ({
    iconId = "default",
    position = { mobile: "bottom-right", desktop: "bottom-right" },
    language = { default: "en", selected: [] }
}: AccessibilityWidgetProps) => {
    useEffect(() => {
        // Check if already loaded
        if (document.querySelector('script[src*="accessibility.js"]')) {
            return;
        }

        // Set global configuration using type assertion
        window._cyA11yConfig = {
            iconId,
            position,
            language
        };

        // Create script element
        const script = document.createElement('script');
        script.src = "https://cdn-cookieyes.com/widgets/accessibility.js?id=483afc49-1088-4300-aad1-496a7691794c";
        script.async = true;

        // Insert script
        const firstScript = document.getElementsByTagName('script')[0];
        if (firstScript && firstScript.parentNode) {
            firstScript.parentNode.insertBefore(script, firstScript);
        } else {
            document.head.appendChild(script);
        }

        return () => {
            // Cleanup on unmount
            const existingScript = document.querySelector('script[src*="accessibility.js"]');
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, [iconId, position, language]);

    return null;
};

export default AccessibilityWidget;