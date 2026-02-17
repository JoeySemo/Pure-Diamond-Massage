"use client";
import React from 'react';

interface LogoProps {
    size?: number;
    className?: string;
    showText?: boolean;
}

export default function Logo({ size = 48, className = '', showText = false }: LogoProps) {
    const svgSize = size;
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <svg
                width={svgSize}
                height={svgSize}
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
            >
                <defs>
                    <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#5B2D8E" />
                        <stop offset="100%" stopColor="#2A9D8F" />
                    </linearGradient>
                    <linearGradient id="diamondGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" stopColor="#2A9D8F" />
                        <stop offset="50%" stopColor="#5BE0D4" />
                        <stop offset="100%" stopColor="#2A9D8F" />
                    </linearGradient>
                    <filter id="diamondGlow">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Circular leaf wreath — left arc */}
                <g stroke="url(#leafGrad)" strokeWidth="1.5" fill="none" opacity="0.9">
                    {/* Left side leaves */}
                    <path d="M40,160 Q30,145 38,130" />
                    <path d="M35,145 Q20,138 28,122" />
                    <path d="M32,135 Q18,125 25,110" />
                    <path d="M28,120 Q14,108 22,95" />
                    <path d="M26,105 Q14,92 24,80" />
                    <path d="M28,90 Q18,75 28,65" />
                    <path d="M32,75 Q25,60 35,50" />
                    <path d="M38,62 Q33,48 45,40" />
                    <path d="M48,50 Q45,38 56,32" />
                    <path d="M58,40 Q58,28 70,26" />
                    <path d="M70,34 Q72,22 84,22" />
                    {/* Leaf blades — left */}
                    <path d="M40,160 Q25,150 30,135 Q38,148 40,160" fill="url(#leafGrad)" fillOpacity="0.15" />
                    <path d="M35,140 Q18,130 24,115 Q32,128 35,140" fill="url(#leafGrad)" fillOpacity="0.12" />
                    <path d="M30,120 Q14,108 20,95 Q28,108 30,120" fill="url(#leafGrad)" fillOpacity="0.12" />
                    <path d="M28,100 Q15,86 22,74 Q28,88 28,100" fill="url(#leafGrad)" fillOpacity="0.12" />
                    <path d="M32,80 Q22,65 30,54 Q34,68 32,80" fill="url(#leafGrad)" fillOpacity="0.12" />
                    <path d="M40,62 Q34,46 44,38 Q42,52 40,62" fill="url(#leafGrad)" fillOpacity="0.12" />
                    <path d="M52,46 Q48,32 58,26 Q55,38 52,46" fill="url(#leafGrad)" fillOpacity="0.12" />
                    <path d="M66,34 Q65,20 78,20 Q72,28 66,34" fill="url(#leafGrad)" fillOpacity="0.12" />
                </g>

                {/* Right side leaves — mirrored */}
                <g stroke="url(#leafGrad)" strokeWidth="1.5" fill="none" opacity="0.9" transform="scale(-1,1) translate(-200,0)">
                    <path d="M40,160 Q30,145 38,130" />
                    <path d="M35,145 Q20,138 28,122" />
                    <path d="M32,135 Q18,125 25,110" />
                    <path d="M28,120 Q14,108 22,95" />
                    <path d="M26,105 Q14,92 24,80" />
                    <path d="M28,90 Q18,75 28,65" />
                    <path d="M32,75 Q25,60 35,50" />
                    <path d="M38,62 Q33,48 45,40" />
                    <path d="M48,50 Q45,38 56,32" />
                    <path d="M58,40 Q58,28 70,26" />
                    <path d="M70,34 Q72,22 84,22" />
                    <path d="M40,160 Q25,150 30,135 Q38,148 40,160" fill="url(#leafGrad)" fillOpacity="0.15" />
                    <path d="M35,140 Q18,130 24,115 Q32,128 35,140" fill="url(#leafGrad)" fillOpacity="0.12" />
                    <path d="M30,120 Q14,108 20,95 Q28,108 30,120" fill="url(#leafGrad)" fillOpacity="0.12" />
                    <path d="M28,100 Q15,86 22,74 Q28,88 28,100" fill="url(#leafGrad)" fillOpacity="0.12" />
                    <path d="M32,80 Q22,65 30,54 Q34,68 32,80" fill="url(#leafGrad)" fillOpacity="0.12" />
                    <path d="M40,62 Q34,46 44,38 Q42,52 40,62" fill="url(#leafGrad)" fillOpacity="0.12" />
                    <path d="M52,46 Q48,32 58,26 Q55,38 52,46" fill="url(#leafGrad)" fillOpacity="0.12" />
                    <path d="M66,34 Q65,20 78,20 Q72,28 66,34" fill="url(#leafGrad)" fillOpacity="0.12" />
                </g>

                {/* Bottom join curve */}
                <path d="M40,160 Q100,185 160,160" stroke="url(#leafGrad)" strokeWidth="1.5" fill="none" opacity="0.5" />

                {/* Diamond gem */}
                <g filter="url(#diamondGlow)">
                    <polygon
                        points="100,22 88,38 100,52 112,38"
                        fill="url(#diamondGrad)"
                        stroke="#2A9D8F"
                        strokeWidth="1"
                    />
                    {/* Diamond facet lines */}
                    <line x1="100" y1="22" x2="100" y2="52" stroke="#fff" strokeWidth="0.5" opacity="0.4" />
                    <line x1="88" y1="38" x2="112" y2="38" stroke="#fff" strokeWidth="0.5" opacity="0.3" />
                </g>

                {/* Text */}
                <text x="100" y="78" textAnchor="middle" fill="#5B2D8E" fontSize="14" fontFamily="serif" letterSpacing="3" fontWeight="300">PURE</text>
                <text x="100" y="110" textAnchor="middle" fill="#5B2D8E" fontSize="28" fontFamily="serif" letterSpacing="2" fontWeight="700">DIAMOND</text>
                <text x="100" y="132" textAnchor="middle" fill="#2A9D8F" fontSize="12" fontFamily="sans-serif" letterSpacing="5" fontWeight="500">MASSAGE</text>
            </svg>

            {showText && (
                <div className="flex flex-col leading-tight">
                    <span className="font-display text-lg md:text-xl font-bold text-[#5B2D8E]">
                        Pure Diamond
                    </span>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#2A9D8F] font-semibold">
                        Massage Therapy
                    </span>
                </div>
            )}
        </div>
    );
}
