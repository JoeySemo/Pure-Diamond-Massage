'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="container">
                <div className="flex items-center justify-between py-4">
                    <Link href="/" className="flex items-center gap-3">
                        <img src="/images/logo.png" alt="Pure Diamond Massage" className="h-10 md:h-12 w-auto max-w-[200px]" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="nav-link text-slate-700 hover:text-purple-900 font-medium">Home</Link>
                        <Link href="/services" className="nav-link text-slate-700 hover:text-purple-900 font-medium">Services</Link>
                        <Link href="/about" className="nav-link text-slate-700 hover:text-purple-900 font-medium">About</Link>
                        <Link href="/contact" className="btn btn-primary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">Book Now</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-800"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`block h-0.5 w-full bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 w-full bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col gap-4 pt-2">
                        <Link href="/" className="nav-link block py-2 text-slate-700" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="/services" className="nav-link block py-2 text-slate-700" onClick={() => setIsMenuOpen(false)}>Services</Link>
                        <Link href="/about" className="nav-link block py-2 text-slate-700" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link href="/contact" className="btn btn-primary w-full justify-center mt-2" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
