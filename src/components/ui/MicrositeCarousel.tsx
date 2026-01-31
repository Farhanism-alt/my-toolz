"use client";

import { useState, useEffect } from "react";

const images = [
    "https://ik.imagekit.io/898snlfu8/New%20Folder/image.png?updatedAt=1769045176762",
    "https://ik.imagekit.io/898snlfu8/image.png?updatedAt=1769045147462",
    "https://ik.imagekit.io/898snlfu8/New%20Folderrkf/image.png?updatedAt=1769045256987",
    "https://ik.imagekit.io/898snlfu8/mic/image.png?updatedAt=1769045011722"
];

const steps = [
    { label: "Upload", index: 0 },
    { label: "Customize", index: 1 },
    { label: "Share", index: 2 },
    { label: "Track Everything!", index: 3 }
];

export default function MicrositeCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [fadeState, setFadeState] = useState<'idle' | 'fade-out' | 'fade-in'>('idle');

    useEffect(() => {
        // Preload all images
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (isTransitioning) return;

            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                changeImage(prevIndex);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
                changeImage(nextIndex);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentIndex, isTransitioning]);

    const changeImage = (index: number) => {
        if (isTransitioning || index === currentIndex) return;

        setIsTransitioning(true);
        setFadeState('fade-out');

        setTimeout(() => {
            setCurrentIndex(index);
            setFadeState('fade-in');

            setTimeout(() => {
                setFadeState('idle');
                setIsTransitioning(false);
            }, 600);
        }, 300);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full my-12">
            {/* Pill buttons */}
            <div className="flex flex-wrap gap-3 border border-zinc-200 rounded-full p-2 mb-8 bg-white shadow-sm">
                {steps.map((step) => (
                    <button
                        key={step.index}
                        onClick={() => changeImage(step.index)}
                        className={`rounded-full px-5 py-2.5 border text-sm font-bold transition-all duration-300 relative overflow-hidden min-w-[90px] ${currentIndex === step.index
                                ? 'bg-black text-white border-black transform -translate-y-0.5 shadow-md'
                                : 'bg-white text-zinc-800 border-zinc-200 hover:border-zinc-400'
                            }`}
                    >
                        {currentIndex === step.index && (
                            <span className="absolute inset-0 bg-white/10 rounded-full animate-pulse" />
                        )}
                        <span className="relative z-10">{step.label}</span>
                    </button>
                ))}
            </div>

            {/* Carousel container */}
            <div className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl bg-white border border-zinc-100">
                <img
                    src={images[currentIndex]}
                    alt={`Step ${currentIndex + 1}: ${steps[currentIndex].label}`}
                    className={`w-full h-auto block transition-all duration-600 ${fadeState === 'fade-out'
                            ? 'opacity-0 scale-105'
                            : fadeState === 'fade-in'
                                ? 'opacity-100 scale-100 animate-in'
                                : 'opacity-100 scale-100'
                        }`}
                    style={{
                        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                />
            </div>

            {/* Keyboard hint */}
            <p className="text-xs text-zinc-400 mt-4 font-medium">
                Use ← → arrow keys to navigate
            </p>
        </div>
    );
}
