"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const links = [
        { label: 'Home', href: '#hero' },
        { label: 'Services', href: '#services' },
        { label: 'About', href: '#about' },
        { label: 'Reviews', href: '#reviews' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white shadow-md'
                : 'bg-white/80 backdrop-blur-sm'
                }`}
        >
            <div className="flex items-center justify-between">
                {/* Logo — flush left, max size */}
                <a href="#hero" className="flex items-center pl-2 md:pl-4 group">
                    <Logo
                        size={scrolled ? 44 : 64}
                        showText={true}
                        className="transition-all duration-300"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 pr-6">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-[#2D2D3F] hover:text-[#5B2D8E] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="tel:6363007711"
                        className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
                        style={{ background: 'linear-gradient(135deg, #5B2D8E, #2A9D8F)' }}
                    >
                        📞 Book Now
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden relative w-8 h-8 flex items-center justify-center mr-4"
                    aria-label="Toggle menu"
                >
                    <span className={`absolute w-6 h-0.5 bg-[#5B2D8E] transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
                    <span className={`absolute w-6 h-0.5 bg-[#5B2D8E] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`absolute w-6 h-0.5 bg-[#5B2D8E] transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100"
                    >
                        <nav className="flex flex-col p-6 gap-1">
                            {links.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="py-3 px-4 text-[#2D2D3F] font-medium hover:bg-[#E8DFF5] rounded-lg transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="tel:6363007711"
                                onClick={() => setMenuOpen(false)}
                                className="mt-3 py-3 px-4 text-center rounded-full text-white font-semibold"
                                style={{ background: 'linear-gradient(135deg, #5B2D8E, #2A9D8F)' }}
                            >
                                📞 (636) 300-7711
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
