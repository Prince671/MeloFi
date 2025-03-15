import { Home, Search } from "lucide-react";
import Link from "next/link";

export default function MobileMenu() {
    return (
        <div className="fixed z-50 bottom-4 left-0 right-0 flex items-center justify-center">
            <div className="flex bg-primary/80 backdrop-blur-lg shadow-lg justify-center w-fit gap-3 items-center p-3 
                           h-fit rounded-full border border-gray-700 dark:border-gray-500">
                <Link 
                    className="rounded-full h-10 w-10 flex items-center justify-center bg-background text-foreground 
                               hover:bg-opacity-80 transition-all"
                    href="/"
                >
                    <Home className="w-5 h-5" />
                </Link>
                <Link 
                    className="rounded-full h-10 w-10 flex items-center justify-center bg-background text-foreground 
                               hover:bg-opacity-80 transition-all"
                    href="/search/latest"
                >
                    <Search className="w-5 h-5" />
                </Link>
            </div>
        </div>
    );
};
