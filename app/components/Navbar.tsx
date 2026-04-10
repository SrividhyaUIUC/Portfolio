"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import profileData from "../../data/profile.json";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Publications", path: "/publications" },
    { name: "Awards", path: "/awards" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 inset-x-0 w-full z-[9999] border-b border-slate-200/80 bg-background shadow-sm isolate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 flex justify-between h-16 items-center bg-background">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-xl font-bold text-primary tracking-tight h-full flex items-center">
                            {profileData.name}
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:ml-6 md:flex md:space-x-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={clsx(
                                        "inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors border-b-2",
                                        isActive
                                            ? "border-accent text-accent"
                                            : "border-transparent text-text-secondary hover:text-primary hover:border-slate-300"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls="mobile-nav-menu"
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative z-10 inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-primary hover:bg-slate-100 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    id="mobile-nav-menu"
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 border-t border-slate-200/80 bg-background md:hidden shadow-inner"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    "block px-3 py-2 rounded-md text-base font-medium",
                                    pathname === item.path
                                        ? "bg-blue-50 text-accent"
                                        : "text-text-secondary hover:text-primary hover:bg-slate-50"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
