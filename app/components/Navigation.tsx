'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white shadow-lg py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-10">
                        <img
                            src="/images/logo.png"
                            alt="Pure Diamond Massage"
                            className={`transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={`hidden md:flex items-center gap-10 ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
                        <Link href="/" className="nav-link">Home</Link>
                        <Link href="/services" className="nav-link">Services</Link>
                        <Link href="/about" className="nav-link">About</Link>
                        <Link
                            href="/contact"
                            className={`btn ${isScrolled ? 'btn-primary' : 'btn-ghost'}`}
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden relative z-10 p-2 ${isScrolled || isMenuOpen ? 'text-[#2D2D2D]' : 'text-white'}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={`block h-0.5 w-full bg-current transform transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-full bg-current transform transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                                    }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-500 ${isMenuOpen
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                        }`}
                >
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        <Link
                            href="/"
                            className="text-2xl font-display text-[#2D2D2D] hover:text-[#C9A854] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/services"
                            className="text-2xl font-display text-[#2D2D2D] hover:text-[#C9A854] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/about"
                            className="text-2xl font-display text-[#2D2D2D] hover:text-[#C9A854] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="btn btn-primary mt-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
