"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedDiamondProps {
    className?: string;
    style?: React.CSSProperties;
}

export default function AnimatedDiamond({ className = '', style = {} }: AnimatedDiamondProps) {
    return (
        <div className={`relative ${className}`} style={style}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_0_10px_rgba(42,157,143,0.5)]"
            >
                <defs>
                    <linearGradient id="gTable" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#E6FBF9" />
                        <stop offset="100%" stopColor="#A3EBE3" />
                    </linearGradient>
                    <linearGradient id="gLeftTop" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#A3EBE3" />
                        <stop offset="100%" stopColor="#41B2A4" />
                    </linearGradient>
                    <linearGradient id="gRightTop" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#A3EBE3" />
                    </linearGradient>
                    <linearGradient id="gLeftBot" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2A9D8F" />
                        <stop offset="100%" stopColor="#1A6158" />
                    </linearGradient>
                    <linearGradient id="gRightBot" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#5BE0D4" />
                        <stop offset="100%" stopColor="#2A9D8F" />
                    </linearGradient>
                    <linearGradient id="gShine" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                        <stop offset="30%" stopColor="rgba(255,255,255,0.05)" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
                        <stop offset="70%" stopColor="rgba(255,255,255,0.05)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                    <clipPath id="diamondClip">
                        <polygon points="30,20 70,20 85,40 50,85 15,40" />
                    </clipPath>
                </defs>

                {/* Diamond Facets */}
                <g>
                    {/* Table (Center Top) */}
                    <polygon points="30,20 70,20 50,40" fill="url(#gTable)" stroke="#228074" strokeWidth="0.4" />
                    {/* Left Top */}
                    <polygon points="15,40 30,20 50,40" fill="url(#gLeftTop)" stroke="#228074" strokeWidth="0.4" />
                    {/* Right Top */}
                    <polygon points="70,20 85,40 50,40" fill="url(#gRightTop)" stroke="#228074" strokeWidth="0.4" />
                    {/* Left Bottom */}
                    <polygon points="15,40 50,40 50,85" fill="url(#gLeftBot)" stroke="#228074" strokeWidth="0.4" />
                    {/* Right Bottom */}
                    <polygon points="85,40 50,40 50,85" fill="url(#gRightBot)" stroke="#228074" strokeWidth="0.4" />
                </g>

                {/* Shimmer sweep effect */}
                <g clipPath="url(#diamondClip)">
                    <motion.rect
                        x="-120"
                        y="-20"
                        width="60"
                        height="140"
                        fill="url(#gShine)"
                        style={{ transform: 'rotate(25deg)' }}
                        animate={{
                            x: [-120, 220]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            repeatDelay: 3
                        }}
                    />
                </g>
            </svg>
        </div>
    );
}
