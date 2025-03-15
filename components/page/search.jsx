"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";

export default function Search() {
    const [query, setQuery] = useState("");
    const linkRef = useRef();
    const inpRef = useRef();

    const placeholders = [
        "Search your favorite...",
        "Find the best beats...",
        "Discover new melodies...",
        "Explore trending music...",
        "Unleash your sound..."
    ];

    const [displayedText, setDisplayedText] = useState(""); 
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPlaceholder = placeholders[placeholderIndex];

        if (!isDeleting && charIndex < currentPlaceholder.length) {
            setTimeout(() => setDisplayedText(currentPlaceholder.substring(0, charIndex + 1)), 100);
            setCharIndex((prev) => prev + 1);
        } else if (isDeleting && charIndex > 0) {
            setTimeout(() => setDisplayedText(currentPlaceholder.substring(0, charIndex - 1)), 50);
            setCharIndex((prev) => prev - 1);
        } else if (!isDeleting && charIndex === currentPlaceholder.length) {
            setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        }
    }, [charIndex, isDeleting, placeholderIndex]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query) return;
        linkRef.current.click();
        inpRef.current.blur();
        setQuery("");
    };

    return (
        <>
            <Link href={"/search/" + query} ref={linkRef}></Link>
            <form onSubmit={handleSubmit} className="flex items-center relative z-10 w-full">
                <Button
                    variant="ghost"
                    type="submit"
                    size="icon"
                    className="absolute right-0 rounded-xl rounded-l-none bg-none transition-all hover:bg-primary/10 hover:scale-110"
                >
                    <SearchIcon className="w-5 h-5 transition-all text-gray-500 hover:text-primary" />
                </Button>
                <Input
                    ref={inpRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoComplete="on"
                    type="search"
                    className="rounded-lg bg-secondary/50 px-4 py-2 text-white-300 focus:outline-none focus:ring-2 focus:ring-primary focus:scale-105 transition-all placeholder:transition-opacity placeholder:duration-30000"
                    name="query"
                    placeholder={displayedText} 
                />
            </form>
        </>
    );
}
