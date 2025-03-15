"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Instagram, Globe, Twitter, Linkedin } from "lucide-react"; // Import icons

export default function Footer() {
    // Dynamic text options
    const taglines = [
        "🎶 Crafting melodies, coding dreams, and vibing high!",
        "🔥 Where beats meet code, and music meets magic!",
        "🎧 Listen, Create, Elevate – Your Music Playground!",
        "🚀 Fueling passion with sound, rhythm, and innovation!",
        "💡 Soundscapes of creativity, built for dreamers!"
    ];

    const colors = ["text-red-400", "text-blue-400", "text-green-400", "text-yellow-400", "text-purple-400"];

    const [displayedText, setDisplayedText] = useState(""); 
    const [taglineIndex, setTaglineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTagline = taglines[taglineIndex];

        if (!isDeleting && charIndex < currentTagline.length) {
            setTimeout(() => setDisplayedText(currentTagline.substring(0, charIndex + 1)), 100);
            setCharIndex((prev) => prev + 1);
        } else if (isDeleting && charIndex > 0) {
            setTimeout(() => setDisplayedText(currentTagline.substring(0, charIndex - 1)), 50);
            setCharIndex((prev) => prev - 1);
        } else if (!isDeleting && charIndex === currentTagline.length) {
            setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTaglineIndex((prev) => (prev + 1) % taglines.length);
        }
    }, [charIndex, isDeleting, taglineIndex]);

    return (
        <footer className="py-5 backdrop-blur-3xl mt-8 px-6 md:px-20 lg:px-32 flex flex-col items-center text-center">
            {/* Dynamic animated tagline */}
            <p className={`text-sm font-semibold transition-all duration-10000 ${colors[taglineIndex]}`}>
                {displayedText}
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4 items-center mt-3">
                <Link target="_blank" className="flex items-center gap-1 text-sm opacity-80 hover:opacity-100" href="https://github.com/Prince671">
                    <Github size={20} className="hover:text-gray-700 transition-all" />
                </Link>
                <Link target="_blank" className="flex items-center gap-1 text-sm opacity-80 hover:opacity-100" href="https://prince-soni-portfolio.vercel.app/">
                    <Globe size={20} className="hover:text-blue-500 transition-all" />
                </Link>
                <Link target="_blank" className="flex items-center gap-1 text-sm opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/prince-soni-671/">
                    <Linkedin size={20} className="hover:text-blue-600 transition-all" />
                </Link>
                <Link target="_blank" className="flex items-center gap-1 text-sm opacity-80 hover:opacity-100" href="https://x.com/Princs67">
                    <Twitter size={20} className="hover:text-black transition-all" />
                </Link>
            </div>
        </footer>
    );
}
