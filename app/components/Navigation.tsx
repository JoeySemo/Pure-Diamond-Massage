"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();
    const [searchFocused, setSearchFocused] = useState(false);

    // Active state helper
    const isActive = (path: string) => pathname === path ? 'text-[#1877F2] border-b-2 border-[#1877F2]' : 'text-[#65676B] hover:bg-[#F0F2F5]';

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-[60px] shadow-sm flex items-center justify-between px-4 lg:px-6">
            {/* Left: Branding & Search */}
            <div className="flex items-center gap-2 lg:gap-4 flex-1">
                {/* Logo Icon */}
                <Link href="/" className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1877F2] to-[#4A90E2] flex items-center justify-center text-white font-bold text-xl overflow-hidden shadow-inner">
                        <img
                            src="/images/logo.png"
                            alt="Pure Diamond Massage"
                            className="w-full h-full object-cover p-1 animate-shimmer"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </Link>

                {/* Search Bar - Hidden on very small screens, expands on large */}
                <div className={`relative hidden md:block transition-all duration-300 ${searchFocused ? 'w-64' : 'w-60'}`}>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#65676B]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search treatments..."
                        className="w-full bg-[#F0F2F5] rounded-full py-2 pl-10 pr-4 text-sm outline-none focus:ring-0 focus:bg-[#E4E6EB] transition-colors"
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                    />
                </div>

                {/* Mobile Search Icon Only */}
                <button className="md:hidden w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center text-[#050505]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>

            {/* Middle: Tab Navigation (Hidden on small, visible on lg) */}
            <div className="hidden lg:flex items-center justify-center flex-1 h-full gap-2">
                <Link
                    href="/"
                    className={`h-full px-8 flex items-center justify-center rounded-lg transition-all ${isActive('/')}`}
                    title="Home"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill={pathname === '/' ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </Link>
                <Link
                    href="/services"
                    className={`h-full px-8 flex items-center justify-center rounded-lg transition-all ${isActive('/services')}`}
                    title="Services"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill={pathname === '/services' ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </Link>
                <Link
                    href="/about"
                    className={`h-full px-8 flex items-center justify-center rounded-lg transition-all ${isActive('/about')}`}
                    title="About"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill={pathname === '/about' ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </Link>
            </div>

            {/* Right: User Actions / Mobile Menu Toggle */}
            <div className="flex items-center justify-end gap-2 lg:gap-3 flex-1">
                {/* Book Now Button (Primary CTA) */}
                <Link href="/contact" className="hidden sm:flex items-center justify-center bg-[#E7F3FF] text-[#1877F2] hover:bg-[#D8E4F0] px-3 py-2 rounded-lg font-semibold text-sm transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Book Now
                </Link>

                {/* Notification Icon */}
                <button className="w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center text-[#050505] relative hover:bg-[#E4E6EB] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="absolute top-0 right-0 w-3 h-3 bg-[#FA3E3E] rounded-full border-2 border-white"></span>
                </button>

                {/* Mobile Menu Toggle (Hamburger) */}
                <button className="lg:hidden w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center text-[#050505] hover:bg-[#E4E6EB] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
