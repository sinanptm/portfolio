import { useEffect, useRef } from 'react';
import { AUDIO_SRC } from '@/constants';

export const useAudio = () => {
    const audioContextRef = useRef<AudioContext | null>(null);
    const audioBufferRef = useRef<AudioBuffer | null>(null);
    const isLoadingRef = useRef<boolean>(false);

    // Initialize audio context
    useEffect(() => {
        if (typeof window !== 'undefined' && !audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();

            // Resume audio context on user interaction (browser policy)
            const resumeAudio = () => {
                if (audioContextRef.current?.state === 'suspended') {
                    audioContextRef.current.resume();
                }
                document.removeEventListener('click', resumeAudio);
            };

            document.addEventListener('click', resumeAudio);

            // Cleanup
            return () => {
                document.removeEventListener('click', resumeAudio);
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
            console.error('Error loading audio:', error);
        } finally {
            isLoadingRef.current = false;
        }
    };

    // Play sound effect
    const playKeySound = () => {
        if (!audioContextRef.current || !audioBufferRef.current) return;

        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBufferRef.current;
        source.connect(audioContextRef.current.destination);
        source.start(0);
    };

    return { preloadAudio, playKeySound };
};