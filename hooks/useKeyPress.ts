"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { AUDIO_SRC, KEY_PRESS_DURATION } from "@/constants";

export const useKeyPress = (typedString: string, setTypedString: (value: string) => void) => {
    const [isPressed, setIsPressed] = useState(false);
    const [glowIntensity, setGlowIntensity] = useState(0.3);
    const [isWindowFocused, setIsWindowFocused] = useState(true);
    const popupTimerRef = useRef<NodeJS.Timeout | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const audioBufferRef = useRef<AudioBuffer | null>(null);
    const isLoadingRef = useRef<boolean>(false);

    // Track window focus state
    useEffect(() => {
        const handleFocus = () => setIsWindowFocused(true);
        const handleBlur = () => setIsWindowFocused(false);

        window.addEventListener("focus", handleFocus);
        window.addEventListener("blur", handleBlur);

        return () => {
            window.removeEventListener("focus", handleFocus);
            window.removeEventListener("blur", handleBlur);
        };
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined" && !audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();

            // Resume audio context on user interaction (browser policy)
            const resumeAudio = () => {
                if (audioContextRef.current?.state === "suspended") {
                    audioContextRef.current.resume();
                }
                document.removeEventListener("click", resumeAudio);
            };

            document.addEventListener("click", resumeAudio);

            // Cleanup
            return () => {
                document.removeEventListener("click", resumeAudio);
                audioContextRef.current?.close();
            };
        }
    }, []);

    // Load audio buffer once
    const preloadAudio = async () => {
        if (!audioContextRef.current || audioBufferRef.current || isLoadingRef.current) return;

        isLoadingRef.current = true;

        try {
            const response = await fetch(AUDIO_SRC);
            const arrayBuffer = await response.arrayBuffer();
            audioBufferRef.current = await audioContextRef.current.decodeAudioData(arrayBuffer);
        } catch (error) {
            console.error("Error loading audio:", error);
        } finally {
            isLoadingRef.current = false;
        }
    };

    // Play sound effect
    const playKeySound = useCallback(() => {
        if (!audioContextRef.current || !audioBufferRef.current || !isWindowFocused) return;

        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBufferRef.current;
        source.connect(audioContextRef.current.destination);
        source.start(0);
    }, [isWindowFocused])

    // Handle key press with optimized debounce
    const handleKeyPress = useCallback(
        (key: string) => {
    // Play sound
            playKeySound()

            // Set pressed state
            setIsPressed(true)

            // Process the key
            let newText = typedString;
            switch (key) {
                case "Backspace":
                    newText = typedString.slice(0, -1);
                    break;
                case "Space":
                    newText = typedString + " ";
                    break;
              case "Tab":
              case "CapsLock":
              case "Shift":
              case "Control":
              case "Alt":
              case "Meta":
                  // Ignore these keys
                  break;
              default:
                  if (key.length === 1) {
                  newText = typedString + key;
              }
                  break;
          }

            setTypedString(newText)

            // Increase glow intensity
            setGlowIntensity(1)

            // Clear existing timeouts
            if (popupTimerRef.current) {
                clearTimeout(popupTimerRef.current);
            }

            // Reset pressed state after delay
            const pressTimer = setTimeout(() => setIsPressed(false), KEY_PRESS_DURATION)

            // Create fade effect for glow
            const fadeGlow = () => {
                const fadeInterval = setInterval(() => {
                  setGlowIntensity((prev) => {
                      const newIntensity = prev - 0.05;
                      if (newIntensity <= 0.3) {
                          clearInterval(fadeInterval);
                          return 0.3; // Minimum glow
                      }
                      return newIntensity;
                  });
              }, 30)

              // Clear interval after max duration
              setTimeout(() => clearInterval(fadeInterval), 900);
          }

            // Start fade after delay
            const glowTimer = setTimeout(fadeGlow, 600)

            // Cleanup timeouts
            return () => {
                clearTimeout(pressTimer);
                clearTimeout(glowTimer);
                if (popupTimerRef.current) {
                    clearTimeout(popupTimerRef.current);
                }
            };
        },
        [typedString, setTypedString, playKeySound],
    )

    return {
        isPressed,
        glowIntensity,
        isWindowFocused,
        handleKeyPress,
        preloadAudio,
    };
};
