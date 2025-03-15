import Link from "next/link";
import { useState, useEffect } from "react";

export default function Logo() {
    const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-500", "text-purple-500", "text-pink-500"];
    const [currentColor, setCurrentColor] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColor((prev) => (prev + 1) % colors.length);
        }, 10000); // Change color every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <Link href="/" className="select-none">
            <div className={`transition-all duration-[5000ms] ease-in-out transform hover:scale-105 ${colors[currentColor]}`}>
                <h1 className="text-2xl font-bold">
                    Melo_<span className="opacity-65">Fi</span>
                </h1>
            </div>
        </Link>
    );
}
