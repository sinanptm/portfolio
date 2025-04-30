import { useState, useCallback, useRef } from 'react';
import { useAudio } from './useAudio';
import { KEY_PRESS_DURATION, POPUP_DURATION } from '@/constants';

/**
 * Custom hook for handling key press behavior
 */
export const useKeyPress = (
    typedString: string,
    setTypedString: (value: string) => void
) => {
    const [isPressed, setIsPressed] = useState(false);
    const [glowIntensity, setGlowIntensity] = useState(0.3);
    const [showPopup, setShowPopup] = useState(false);
    const popupTimerRef = useRef<NodeJS.Timeout | null>(null);
    const { playKeySound } = useAudio();

    // Handle key press with optimized debounce
    const handleKeyPress = useCallback((key: string) => {
        // Play sound
        playKeySound();

        // Set pressed state
        setIsPressed(true);

        // Process the key
        let newText = typedString;
        switch (key) {
            case "Backspace":
                newText = typedString.slice(0, -1);
                break;
            case "Space":
                newText = typedString + " ";
                break;
            default:
                newText = typedString + key;
                break;
        }

        setTypedString(newText);

        // Increase glow intensity
        setGlowIntensity(1);

        // Show popup
        setShowPopup(true);

        // Clear existing timeouts
        if (popupTimerRef.current) {
            clearTimeout(popupTimerRef.current);
        }

        // Reset pressed state after delay
        const pressTimer = setTimeout(() => setIsPressed(false), KEY_PRESS_DURATION);

        // Create fade effect for glow
        const fadeGlow = () => {
            const fadeInterval = setInterval(() => {
                setGlowIntensity(prev => {
                    const newIntensity = prev - 0.05;
                    if (newIntensity <= 0.3) {
                        clearInterval(fadeInterval);
                        return 0.3; // Minimum glow
                    }
                    return newIntensity;
                });
            }, 30);

            // Clear interval after max duration
            setTimeout(() => clearInterval(fadeInterval), 900);
        };

        // Start fade after delay
        const glowTimer = setTimeout(fadeGlow, 200);

        // Hide popup after delay
        popupTimerRef.current = setTimeout(() => {
            setShowPopup(false);
        }, POPUP_DURATION);

        // Cleanup timeouts
        return () => {
            clearTimeout(pressTimer);
            clearTimeout(glowTimer);
            if (popupTimerRef.current) {
                clearTimeout(popupTimerRef.current);
            }
        };
    }, [typedString, setTypedString, playKeySound]);

    return {
        isPressed,
        glowIntensity,
        showPopup,
        handleKeyPress
    };
};