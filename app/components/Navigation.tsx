'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="container">
                <div className="flex items-center justify-between py-4">
                    <Link href="/" className="flex items-center gap-3">
                        <img src="/images/logo.png" alt="Pure Diamond Massage" className="h-12 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="nav-link">Home</Link>
                        <Link href="/services" className="nav-link">Services</Link>
                        <Link href="/about" className="nav-link">About</Link>
                        <Link href="/contact" className="btn btn-primary">Book Now</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`block h-0.5 w-full bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block h-0.5 w-full bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 w-full bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4 animate-fade-in">
                        <div className="flex flex-col gap-4">
                            <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link href="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
                            <Link href="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
                            <Link href="/contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
