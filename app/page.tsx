"use client";
import React from 'react';
import { motion } from 'framer-motion';

/* ────────────────────────────────────────────
   HERO — Logo-Centric Animated Experience
   ──────────────────────────────────────────── */

/* Leaf SVG shape for floating background particles */
function FloatingLeaf({ delay, x, size, dur }: { delay: number; x: number; size: number; dur: number }) {
    return (
        <motion.svg
            width={size}
            height={size * 2}
            viewBox="0 0 20 40"
            className="absolute pointer-events-none"
            style={{ left: `${x}%`, bottom: '-40px' }}
            initial={{ y: 0, opacity: 0, rotate: 0 }}
            animate={{
                y: [0, -800, -1200],
                opacity: [0, 0.5, 0],
                rotate: [0, 180, 360],
                x: [0, Math.sin(delay) * 60, Math.cos(delay) * 40],
            }}
            transition={{
                duration: dur,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            <path
                d="M10,2 Q18,10 16,22 Q14,32 10,38 Q6,32 4,22 Q2,10 10,2Z"
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1"
            />
            <path
                d="M10,2 Q12,16 10,38"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.5"
            />
        </motion.svg>
    );
}

function Hero() {
    return (
        <section id="hero" className="relative min-h-[130vh] flex items-start justify-center overflow-hidden pt-40 md:pt-48">
            {/* Deep gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at 30% 50%, #3D1A6E 0%, #2A1052 40%, #1A0A38 70%, #0D0520 100%)',
                }}
            />

            {/* Animated gradient orbs */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(42,157,143,0.15) 0%, transparent 70%)',
                    top: '10%',
                    right: '-10%',
                }}
                animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(91,45,142,0.2) 0%, transparent 70%)',
                    bottom: '-5%',
                    left: '-5%',
                }}
                animate={{ scale: [1, 1.3, 1], x: [0, 40, 0], y: [0, -25, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Floating leaves */}
            {/* Floating leaves — increased count for taller hero */}
            {Array.from({ length: 24 }).map((_, i) => (
                <FloatingLeaf
                    key={i}
                    delay={i * 1.2}
                    x={2 + (i * 4.5) % 96}
                    size={6 + (i % 5) * 4}
                    dur={15 + (i % 7) * 4}
                />
            ))}

            {/* Energy pulse rings — radiating outward from center */}
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={`pulse-${i}`}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        top: '50%',
                        left: '50%',
                        width: '200px',
                        height: '200px',
                        marginTop: '-100px',
                        marginLeft: '-100px',
                        border: '1px solid rgba(42,157,143,0.12)',
                    }}
                    animate={{
                        scale: [1, 4, 6],
                        opacity: [0.4, 0.15, 0],
                    }}
                    transition={{
                        duration: 6,
                        delay: i * 2,
                        repeat: Infinity,
                        ease: 'easeOut',
                    }}
                />
            ))}

            {/* Floating essential oil droplets */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.svg
                    key={`drop-${i}`}
                    className="absolute pointer-events-none"
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    style={{
                        left: `${5 + i * 16}%`,
                        top: `${25 + (i * 13) % 50}%`,
                    }}
                    animate={{
                        y: [0, -30, 10, -20, 0],
                        x: [0, 10, -8, 5, 0],
                        opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
                        rotate: [0, 15, -10, 5, 0],
                    }}
                    transition={{
                        duration: 8 + i * 1.5,
                        delay: i * 1.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <path
                        d="M6,1 Q10,6 9,10 Q8,13 6,14 Q4,13 3,10 Q2,6 6,1Z"
                        fill={i % 2 === 0 ? 'rgba(42,157,143,0.08)' : 'rgba(91,45,142,0.06)'}
                        stroke={i % 2 === 0 ? 'rgba(42,157,143,0.18)' : 'rgba(91,45,142,0.14)'}
                        strokeWidth="0.5"
                    />
                </motion.svg>
            ))}

            {/* Undulating wave bands */}
            {[0, 1, 2, 3].map((i) => (
                <motion.div
                    key={`band-${i}`}
                    className="absolute pointer-events-none"
                    style={{
                        top: `${20 + i * 18}%`,
                        left: '-10%',
                        width: '120%',
                        height: '1px',
                        background: `linear-gradient(90deg, transparent, rgba(42,157,143,${0.06 - i * 0.01}), rgba(91,45,142,${0.04}), rgba(42,157,143,${0.06 - i * 0.01}), transparent)`,
                    }}
                    animate={{
                        y: [0, Math.sin(i) * 20, -Math.cos(i) * 15, 0],
                        scaleY: [1, 2, 1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 8 + i * 2,
                        delay: i * 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Shimmering motes */}
            {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                    key={`mote-${i}`}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        width: `${2 + (i % 3)}px`,
                        height: `${2 + (i % 3)}px`,
                        background: i % 3 === 0 ? 'rgba(42,157,143,0.5)' : i % 3 === 1 ? 'rgba(91,45,142,0.4)' : 'rgba(255,255,255,0.3)',
                        left: `${5 + (i * 9.5) % 90}%`,
                        top: `${10 + (i * 8.3) % 80}%`,
                        boxShadow: `0 0 ${4 + i}px ${i % 3 === 0 ? 'rgba(42,157,143,0.3)' : 'rgba(91,45,142,0.2)'}`,
                    }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1.5, 0.5],
                        y: [0, -(10 + i * 3), 0],
                    }}
                    transition={{
                        duration: 3 + (i % 4) * 1.5,
                        delay: i * 0.6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Geometric diamond sparkles */}
            {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                    key={`sparkle-${i}`}
                    className="absolute pointer-events-none"
                    style={{
                        left: `${10 + (i * 12) % 80}%`,
                        top: `${15 + (i * 11) % 70}%`,
                        width: '4px',
                        height: '4px',
                        background: i % 2 === 0 ? '#2A9D8F' : '#8B5CF6',
                        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                        duration: 3 + (i % 3),
                        delay: i * 0.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Subtle grid pattern overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-5"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Flowing aurora band — healing energy */}
            <motion.div
                className="absolute pointer-events-none"
                style={{
                    top: '30%',
                    left: '-20%',
                    width: '140%',
                    height: '200px',
                    background: 'linear-gradient(90deg, transparent, rgba(42,157,143,0.08), rgba(91,45,142,0.06), rgba(42,157,143,0.08), transparent)',
                    filter: 'blur(40px)',
                    borderRadius: '50%',
                }}
                animate={{
                    y: [0, -30, 20, -10, 0],
                    rotate: [-2, 2, -1, 1, -2],
                    scaleY: [1, 1.3, 0.8, 1.1, 1],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Water ripple waves at bottom */}
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={`wave-${i}`}
                    className="absolute pointer-events-none"
                    style={{
                        bottom: `${30 + i * 25}px`,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: `linear-gradient(90deg, transparent 0%, rgba(42,157,143,${0.08 - i * 0.02}) 30%, rgba(91,45,142,${0.06 - i * 0.015}) 50%, rgba(42,157,143,${0.08 - i * 0.02}) 70%, transparent 100%)`,
                        borderRadius: '50%',
                    }}
                    animate={{
                        scaleX: [0.8, 1.1, 0.8],
                        y: [0, -4, 0],
                        opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                        duration: 4 + i,
                        delay: i * 1.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Drifting hot stone shapes */}
            {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                    key={`stone-${i}`}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        width: `${20 + i * 6}px`,
                        height: `${14 + i * 4}px`,
                        borderRadius: '50%',
                        border: `1px solid rgba(42,157,143,${0.1 + (i % 3) * 0.05})`,
                        background: `radial-gradient(ellipse, rgba(42,157,143,0.04) 0%, transparent 70%)`,
                        left: `${8 + i * 18}%`,
                        top: `${20 + (i * 17) % 60}%`,
                    }}
                    animate={{
                        y: [0, -20, 10, -15, 0],
                        x: [0, 15, -10, 5, 0],
                        rotate: [0, 10, -5, 8, 0],
                        opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 10 + i * 2,
                        delay: i * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Orbiting wellness symbols */}
            <motion.div
                className="absolute pointer-events-none"
                style={{
                    top: '50%',
                    left: '50%',
                    width: '780px',
                    height: '780px',
                    marginTop: '-390px',
                    marginLeft: '-390px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            >
                {/* Lotus petal */}
                <svg className="absolute" style={{ top: '-10px', left: '50%', marginLeft: '-10px' }} width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12,2 Q16,8 16,14 Q14,18 12,20 Q10,18 8,14 Q8,8 12,2Z" fill="rgba(42,157,143,0.15)" stroke="rgba(42,157,143,0.25)" strokeWidth="0.5" />
                </svg>
                {/* Water drop */}
                <svg className="absolute" style={{ bottom: '-8px', left: '50%', marginLeft: '-8px' }} width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d="M8,2 Q14,10 12,15 Q10,18 8,18 Q6,18 4,15 Q2,10 8,2Z" fill="rgba(91,45,142,0.12)" stroke="rgba(91,45,142,0.2)" strokeWidth="0.5" />
                </svg>
                {/* Yin-yang dot */}
                <circle className="absolute" style={{ top: '50%', right: '-6px', marginTop: '-6px' }} cx="6" cy="6" r="4" fill="rgba(42,157,143,0.15)" stroke="rgba(42,157,143,0.25)" strokeWidth="0.5">
                </circle>
            </motion.div>

            {/* Center content — oversized logo + CTAs only */}
            <div className="relative z-10 text-center px-6">
                {/* Massive logo container */}
                <div className="relative mx-auto mb-6" style={{ width: '594px', height: '594px', maxWidth: '90vw', maxHeight: '90vw' }}>
                    {/* Outer rotating ring — wider */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                    >
                        <svg viewBox="0 0 594 594" className="w-full h-full">
                            <defs>
                                <linearGradient id="heroRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#2A9D8F" stopOpacity="0.5" />
                                    <stop offset="50%" stopColor="#5B2D8E" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#2A9D8F" stopOpacity="0.5" />
                                </linearGradient>
                            </defs>
                            <circle cx="297" cy="297" r="290" fill="none" stroke="url(#heroRingGrad)" strokeWidth="1" strokeDasharray="14,20" />
                            <circle cx="297" cy="297" r="275" fill="none" stroke="url(#heroRingGrad)" strokeWidth="0.5" strokeDasharray="7,24" />
                        </svg>
                    </motion.div>

                    {/* Counter-rotating inner ring */}
                    <motion.div
                        className="absolute inset-6"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    >
                        <svg viewBox="0 0 540 540" className="w-full h-full">
                            <circle cx="270" cy="270" r="265" fill="none" stroke="rgba(42,157,143,0.15)" strokeWidth="0.5" strokeDasharray="5,16" />
                        </svg>
                    </motion.div>

                    {/* Large pulsing glow */}
                    <motion.div
                        className="absolute inset-10 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(42,157,143,0.15) 0%, rgba(91,45,142,0.08) 50%, transparent 70%)',
                        }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Second glow layer — slower breathe */}
                    <motion.div
                        className="absolute inset-16 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(42,157,143,0.1) 0%, transparent 60%)',
                        }}
                        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* LOGO — fills the container */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                        <motion.img
                            src="/images/logo-hero.png"
                            alt="Pure Diamond Massage"
                            className="w-full h-full object-contain p-6"
                            style={{
                                filter: 'drop-shadow(0 0 30px rgba(42,157,143,0.35)) brightness(1.15)',
                            }}
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </motion.div>
                </div>

                {/* Subtitle */}
                <motion.p
                    className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    Your sanctuary for healing and renewal
                </motion.p>

                {/* Location badge */}
                <motion.div
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <span className="w-2 h-2 rounded-full bg-[#2A9D8F] animate-pulse" />
                    <span className="text-white/80 text-sm">
                        Inside <span className="font-semibold text-white">Roots 66 Salon</span> · Cuba, MO
                    </span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.1 }}
                >
                    <a
                        href="tel:6363007711"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2A9D8F] hover:bg-[#248F83] text-white font-semibold text-lg shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all hover:scale-105"
                    >
                        📞 (636) 300-7711
                    </a>
                    <a
                        href="/services"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/25 text-white font-semibold hover:bg-white/10 transition-all"
                    >
                        View Services →
                    </a>
                </motion.div>

                {/* Helper text */}

            </div>

            {/* Bottom fade to white */}
            <div
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                style={{ background: 'linear-gradient(to top, white, transparent)' }}
            />
        </section>
    );
}

/* ────────────────────────────────────────────
   MEET DIAMOND (About / Owner)
   ──────────────────────────────────────────── */
function MeetDiamond() {
    return (
        <section id="about" className="py-20 md:py-28 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Diamond's Photo */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="/images/diamond-payne.png"
                                alt="Diamond Payne, Licensed Massage Therapist"
                                className="w-full h-auto md:h-[550px] object-cover"
                            />
                        </div>
                        {/* Rating Badge */}
                        <div className="absolute -bottom-6 right-4 md:right-8 bg-white rounded-2xl shadow-xl px-6 py-4 border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                    style={{ background: 'linear-gradient(135deg, #5B2D8E, #2A9D8F)' }}
                                >
                                    <span className="text-white text-xl">★</span>
                                </div>
                                <div>
                                    <span className="block text-2xl font-bold text-[#5B2D8E]">100%</span>
                                    <span className="text-sm text-gray-500">Recommended</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8DFF5] text-[#5B2D8E] text-sm font-semibold mb-4">
                            Meet Your Therapist
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2D2D3F] mb-6 leading-tight">
                            Diamond <span className="text-[#2A9D8F]">Payne</span>
                        </h2>
                        <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Welcome! My name is <strong className="text-[#2D2D3F]">Diamond Payne</strong>.
                                I am a recent graduate of{' '}
                                <strong className="text-[#2D2D3F]">The Healing Arts Center</strong> in Saint Louis.
                                I am trained in several massage techniques and specialize in personalized massage therapy.
                            </p>
                            <p>
                                My goal is to create a soothing and healing environment where you can
                                unwind, relieve tension, and find relief from pain and stress. I focus on
                                understanding each client&apos;s needs to tailor sessions that support both
                                physical and mental well-being.
                            </p>
                            <p>
                                Whether you&apos;re seeking relief from chronic pain, recovery from an injury,
                                or simply a moment of relaxation, I am here to guide you on your path to wellness.
                            </p>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 rounded-xl bg-[#F3F4F6]">
                                <span className="text-2xl mb-1 block">📍</span>
                                <span className="text-sm font-semibold text-[#2D2D3F]">Cuba, MO</span>
                                <span className="text-xs text-gray-500 block">Inside Roots 66 Salon</span>
                            </div>
                            <div className="p-4 rounded-xl bg-[#F3F4F6]">
                                <span className="text-2xl mb-1 block">🎓</span>
                                <span className="text-sm font-semibold text-[#2D2D3F]">The Healing Arts Center</span>
                                <span className="text-xs text-gray-500 block">Saint Louis, MO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   SERVICES & PRICING
   ──────────────────────────────────────────── */
const services = [
    {
        title: 'Swedish Massage',
        desc: 'Classic relaxation therapy using long, flowing strokes to promote deep relaxation and improve circulation.',
        icon: '🌿',
    },
    {
        title: 'Deep Tissue',
        desc: 'Focused pressure on deeper muscle layers to release chronic tension and stubborn knots.',
        icon: '💎',
    },
    {
        title: 'Myofascial Release',
        desc: 'Gentle, sustained pressure on connective tissue to restore mobility and reduce pain.',
        icon: '✨',
    },
    {
        title: 'Sports Massage',
        desc: 'Performance-focused techniques to prevent injury, speed recovery, and enhance flexibility.',
        icon: '⚡',
    },
    {
        title: 'Reflexology',
        desc: 'Targeted pressure on specific reflex points to promote natural healing and overall wellness.',
        icon: '🦶',
    },
    {
        title: 'Cupping Therapy',
        desc: 'Ancient healing using suction cups to increase blood flow, promote healing, and relieve tension.',
        icon: '🔮',
    },
];

const pricing = [
    { duration: '30 min', price: '$30' },
    { duration: '60 min', price: '$60' },
    { duration: '90 min', price: '$90' },
];

const addOns = [
    { name: 'Hot Towel', price: '$9' },
    { name: 'Cupping', price: '$15' },
    { name: 'Sports Therapy', price: '$30' },
];

function Services() {
    return (
        <section id="services" className="py-20 md:py-28 px-6 md:px-12 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4F0ED] text-[#2A9D8F] text-sm font-semibold mb-4">
                        Our Services
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2D2D3F] mb-4">
                        Therapeutic <span className="text-[#5B2D8E]">Treatments</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Customized massage therapy designed to meet your individual wellness needs.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((svc, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-8 border border-gray-100 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
                        >
                            <span className="text-4xl block mb-4">{svc.icon}</span>
                            <h3 className="font-display text-xl font-bold text-[#2D2D3F] mb-3">
                                {svc.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {svc.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Pricing */}
                <div className="mt-16 rounded-2xl overflow-hidden border border-gray-100 bg-white p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Base Pricing */}
                        <div>
                            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#2D2D3F] mb-2">
                                Session <span className="text-[#5B2D8E]">Pricing</span>
                            </h3>
                            <p className="text-gray-500 mb-8">All massage types available at every session length</p>
                            <div className="space-y-4">
                                {pricing.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between p-5 rounded-xl bg-[#FAFAFA] border border-gray-100"
                                    >
                                        <span className="text-lg font-semibold text-[#2D2D3F]">{item.duration}</span>
                                        <span className="text-2xl font-bold text-[#5B2D8E]">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Add-Ons */}
                        <div>
                            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#2D2D3F] mb-2">
                                <span className="text-[#2A9D8F]">Add-Ons</span>
                            </h3>
                            <p className="text-gray-500 mb-8">Enhance your session with extras</p>
                            <div className="space-y-4">
                                {addOns.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between p-5 rounded-xl bg-[#FAFAFA] border border-gray-100"
                                    >
                                        <span className="text-lg font-semibold text-[#2D2D3F]">{item.name}</span>
                                        <span className="text-2xl font-bold text-[#2A9D8F]">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gift Certificates */}
                <div className="mt-8 rounded-2xl overflow-hidden relative">
                    <img
                        src="/images/gift-certificate.jpg"
                        alt="Gift certificates available"
                        className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5B2D8E]/80 to-transparent flex items-center">
                        <div className="px-8 md:px-16">
                            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                                Gift Certificates Available
                            </h3>
                            <p className="text-white/80 text-lg mb-6 max-w-md">
                                The perfect gift for someone who deserves luxury and relaxation. Available in 30, 60, and 90 minute sessions.
                            </p>
                            <a
                                href="tel:6363007711"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A9D8F] text-white font-semibold hover:bg-[#248F83] transition-colors"
                            >
                                📞 Call to Purchase
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   REVIEWS / TESTIMONIALS
   ──────────────────────────────────────────── */
const reviews = [
    {
        name: 'Amy Bright',
        text: 'Highly recommend Pure Diamond Massage. Diamond made me feel comfortable and did one of the best massages I have ever gotten. She knows about all those special points that make you relax and help those fatigued muscles. Booking was easy and accommodations from Diamond made my experience top tier. Go treat yourself!',
        date: 'April 2025',
    },
    {
        name: 'Tammy Highley',
        text: 'Diamond has been amazing for me! I have had multiple surgeries and hurt constantly— she has been a life changer for me! Highly recommend giving her a try!',
        date: 'August 2025',
    },
    {
        name: 'Paige Gunn',
        text: 'Had a great experience with Diamond — the massage was amazing and really helped relieve the tension I was having in my neck and shoulders. Absolutely recommend!',
        date: 'November 2025',
    },
    {
        name: 'Tracie Johanning',
        text: 'I have had an hour and an hour and a half massages with Diamond so far. She is amazing! I highly recommend giving this new business a try.',
        date: 'September 2025',
    },
    {
        name: 'Norman Payne Jr.',
        text: 'She did a wonderful job and I will be going back!',
        date: 'September 2025',
    },
    {
        name: 'Shane Anselm',
        text: 'Very Good Job I will go back.',
        date: 'October 2025',
    },
];

function Reviews() {
    return (
        <section id="reviews" className="py-20 md:py-28 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8DFF5] text-[#5B2D8E] text-sm font-semibold mb-4">
                        Client Reviews
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2D2D3F] mb-4">
                        What Our <span className="text-[#2A9D8F]">Clients</span> Say
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        100% recommended on Facebook — real reviews from real clients.
                    </p>
                </div>

                {/* Review Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#FAFAFA] rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, j) => (
                                    <span key={j} className="text-[#F59E0B] text-lg">★</span>
                                ))}
                            </div>
                            {/* Quote */}
                            <p className="text-gray-600 leading-relaxed mb-6 text-sm italic">
                                &ldquo;{review.text}&rdquo;
                            </p>
                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                                    style={{ background: 'linear-gradient(135deg, #5B2D8E, #2A9D8F)' }}
                                >
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <span className="block font-semibold text-[#2D2D3F] text-sm">{review.name}</span>
                                    <span className="text-xs text-gray-400">{review.date} · Facebook</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Facebook link */}
                <div className="text-center mt-10">
                    <a
                        href="https://www.facebook.com/profile.php?id=61574471992072&sk=reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#5B2D8E] font-semibold hover:underline"
                    >
                        See All Reviews on Facebook →
                    </a>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   CONTACT / FOOTER
   ──────────────────────────────────────────── */
function Contact() {
    return (
        <section
            id="contact"
            className="py-20 md:py-28 px-6 md:px-12 text-white"
            style={{ background: 'linear-gradient(135deg, #5B2D8E, #2A9D8F)' }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Left: CTA */}
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Book Your<br />Appointment
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-md">
                            Ready to experience the healing power of professional massage therapy?
                            Reach out today — we&apos;d love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:6363007711"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#5B2D8E] font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
                            >
                                📞 (636) 300-7711
                            </a>
                            <a
                                href="mailto:massagebydiamond@yahoo.com"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all"
                            >
                                ✉️ Email Us
                            </a>
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-2">Location</h4>
                            <p className="text-xl font-semibold">108 Downey Place</p>
                            <p className="text-white/80">Cuba, MO 65453</p>
                            <p className="text-white/60 text-sm mt-1">Inside Roots 66 Salon</p>
                        </div>
                        <div>
                            <h4 className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-2">Contact</h4>
                            <p className="text-xl font-semibold">
                                <a href="tel:6363007711" className="hover:underline">(636) 300-7711</a>
                            </p>
                            <p className="text-white/80">
                                <a href="mailto:massagebydiamond@yahoo.com" className="hover:underline">massagebydiamond@yahoo.com</a>
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-2">Hours</h4>
                            <p className="text-xl font-semibold">By Appointment Only</p>
                            <p className="text-white/60 text-sm mt-1">Message or text to schedule</p>
                        </div>
                        <div>
                            <h4 className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-2">Social</h4>
                            <a
                                href="https://www.facebook.com/profile.php?id=61574471992072"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white hover:underline font-medium"
                            >
                                Facebook →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bar */}
                <div className="mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
                    <p>&copy; {new Date().getFullYear()} Pure Diamond Massage. All rights reserved.</p>
                    <p>Massage Therapy Services Only</p>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   GIFT CERTIFICATES (Moved from Services)
   ──────────────────────────────────────────── */
function GiftCertificates() {
    return (
        <section className="py-16 px-6 md:px-12 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="rounded-2xl overflow-hidden relative">
                    <img
                        src="/images/gift-certificate.jpg"
                        alt="Gift certificates available"
                        className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5B2D8E]/90 to-transparent flex items-center">
                        <div className="px-8 md:px-16">
                            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                                Gift Certificates Available
                            </h3>
                            <p className="text-white/90 text-lg mb-6 max-w-md">
                                The perfect gift for someone who deserves luxury and relaxation. Available in 30, 60, and 90 minute sessions.
                            </p>
                            <a
                                href="tel:6363007711"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A9D8F] text-white font-semibold hover:bg-[#248F83] transition-colors shadow-lg"
                            >
                                📞 Call to Purchase
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────── */
export default function Home() {
    return (
        <main>
            <Hero />
            <GiftCertificates />
            <Reviews />
            <Contact />
        </main>
    );
}
