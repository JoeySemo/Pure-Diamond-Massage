"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ────────────────────────────────────────────
   ANIMATED SVG ICONS
   ──────────────────────────────────────────── */

function SwedishIcon() {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <defs>
                <linearGradient id="swGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2A9D8F" />
                    <stop offset="100%" stopColor="#5B2D8E" />
                </linearGradient>
            </defs>
            {/* Flowing wave lines */}
            {[0, 1, 2].map((i) => (
                <motion.path
                    key={i}
                    d={`M6,${18 + i * 10} Q14,${12 + i * 10} 22,${18 + i * 10} T38,${18 + i * 10} T50,${18 + i * 10}`}
                    stroke="url(#swGrad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    strokeOpacity={0.8 - i * 0.2}
                    animate={{
                        d: [
                            `M6,${18 + i * 10} Q14,${12 + i * 10} 22,${18 + i * 10} T38,${18 + i * 10} T50,${18 + i * 10}`,
                            `M6,${18 + i * 10} Q14,${24 + i * 10} 22,${18 + i * 10} T38,${18 + i * 10} T50,${18 + i * 10}`,
                            `M6,${18 + i * 10} Q14,${12 + i * 10} 22,${18 + i * 10} T38,${18 + i * 10} T50,${18 + i * 10}`,
                        ],
                    }}
                    transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                />
            ))}
            {/* Floating leaf accent */}
            <motion.path
                d="M42,8 Q48,12 46,18 Q44,14 42,8Z"
                fill="#2A9D8F"
                fillOpacity="0.3"
                animate={{ rotate: [0, 10, -5, 0], y: [0, -2, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
        </svg>
    );
}

function DeepTissueIcon() {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <defs>
                <linearGradient id="dtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5B2D8E" />
                    <stop offset="100%" stopColor="#2A9D8F" />
                </linearGradient>
            </defs>
            {/* Layered pressure arrows */}
            {[0, 1, 2].map((i) => (
                <motion.g key={i}>
                    <motion.path
                        d={`M${20 + i * 6},${8 + i * 4} L28,${20 + i * 6} L${36 - i * 6},${8 + i * 4}`}
                        stroke="url(#dtGrad)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        strokeOpacity={1 - i * 0.25}
                        animate={{
                            y: [0, 4, 0],
                            opacity: [0.6 + i * 0.1, 1, 0.6 + i * 0.1],
                        }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </motion.g>
            ))}
            {/* Muscle fiber lines */}
            {[0, 1, 2, 3].map((i) => (
                <motion.line
                    key={`fiber-${i}`}
                    x1={12 + i * 9}
                    y1="38"
                    x2={12 + i * 9}
                    y2="48"
                    stroke="#5B2D8E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeOpacity="0.3"
                    animate={{ scaleY: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                />
            ))}
        </svg>
    );
}

function MyofascialIcon() {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <defs>
                <linearGradient id="mfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2A9D8F" />
                    <stop offset="100%" stopColor="#5B2D8E" />
                </linearGradient>
            </defs>
            {/* Expanding web/mesh */}
            <motion.circle
                cx="28" cy="28" r="8"
                stroke="url(#mfGrad)" strokeWidth="1.5" fill="none"
                animate={{ r: [8, 12, 8], opacity: [0.8, 0.4, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.circle
                cx="28" cy="28" r="16"
                stroke="url(#mfGrad)" strokeWidth="1" fill="none"
                animate={{ r: [16, 20, 16], opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.circle
                cx="28" cy="28" r="24"
                stroke="url(#mfGrad)" strokeWidth="0.5" fill="none"
                animate={{ r: [24, 26, 24], opacity: [0.3, 0.15, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Radiating lines */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <motion.line
                    key={angle}
                    x1="28" y1="28"
                    x2={28 + Math.cos((angle * Math.PI) / 180) * 22}
                    y2={28 + Math.sin((angle * Math.PI) / 180) * 22}
                    stroke="#2A9D8F"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, delay: angle / 360, repeat: Infinity }}
                />
            ))}
            {/* Center dot */}
            <motion.circle
                cx="28" cy="28" r="3"
                fill="#5B2D8E"
                fillOpacity="0.6"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </svg>
    );
}

function SportsIcon() {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <defs>
                <linearGradient id="spGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#2A9D8F" />
                </linearGradient>
            </defs>
            {/* Lightning bolt */}
            <motion.path
                d="M30,6 L22,26 L30,26 L24,50 L38,22 L28,22 L34,6Z"
                fill="url(#spGrad)"
                fillOpacity="0.7"
                stroke="url(#spGrad)"
                strokeWidth="1"
                animate={{
                    fillOpacity: [0.5, 0.9, 0.5],
                    filter: [
                        'drop-shadow(0 0 2px rgba(245,158,11,0.3))',
                        'drop-shadow(0 0 8px rgba(245,158,11,0.6))',
                        'drop-shadow(0 0 2px rgba(245,158,11,0.3))',
                    ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Energy pulse rings */}
            {[0, 1].map((i) => (
                <motion.circle
                    key={i}
                    cx="28" cy="28" r={14 + i * 8}
                    stroke="#F59E0B"
                    strokeWidth="0.5"
                    fill="none"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{ duration: 2.5, delay: i * 0.5, repeat: Infinity }}
                />
            ))}
        </svg>
    );
}

function ReflexologyIcon() {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <defs>
                <linearGradient id="rfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2A9D8F" />
                    <stop offset="100%" stopColor="#5B2D8E" />
                </linearGradient>
            </defs>
            {/* Foot outline */}
            <path
                d="M22,48 Q14,42 14,32 Q14,22 18,14 Q20,10 24,8 Q28,6 30,8 Q34,10 34,16 Q40,14 42,18 Q42,22 38,24 Q40,22 42,26 Q42,30 38,30 Q36,28 34,30 Q32,46 28,48Z"
                stroke="url(#rfGrad)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
            />
            {/* Pressure points with pulse */}
            {[
                { cx: 24, cy: 20 },
                { cx: 26, cy: 30 },
                { cx: 22, cy: 38 },
                { cx: 30, cy: 22 },
                { cx: 28, cy: 42 },
            ].map((pt, i) => (
                <motion.circle
                    key={i}
                    cx={pt.cx}
                    cy={pt.cy}
                    r="2"
                    fill="#2A9D8F"
                    animate={{
                        r: [2, 3.5, 2],
                        opacity: [0.4, 1, 0.4],
                        fill: ['#2A9D8F', '#5B2D8E', '#2A9D8F'],
                    }}
                    transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                />
            ))}
        </svg>
    );
}

function CuppingIcon() {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <defs>
                <linearGradient id="cpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5B2D8E" />
                    <stop offset="100%" stopColor="#2A9D8F" />
                </linearGradient>
            </defs>
            {/* Cup shape */}
            <path
                d="M16,16 Q16,8 28,8 Q40,8 40,16 L38,36 Q38,42 28,42 Q18,42 18,36Z"
                stroke="url(#cpGrad)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
            />
            {/* Suction flow lines */}
            {[0, 1, 2].map((i) => (
                <motion.path
                    key={i}
                    d={`M${24 + i * 4},${44} L${24 + i * 4},48`}
                    stroke="#5B2D8E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeOpacity="0.4"
                    animate={{
                        y: [0, -6, 0],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                />
            ))}
            {/* Inner suction circle */}
            <motion.circle
                cx="28" cy="20" r="6"
                stroke="#2A9D8F"
                strokeWidth="1"
                fill="none"
                strokeDasharray="3,3"
                animate={{ r: [5, 8, 5], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.circle
                cx="28" cy="20" r="3"
                fill="#5B2D8E"
                fillOpacity="0.3"
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </svg>
    );
}

/* ────────────────────────────────────────────
   SERVICE DATA
   ──────────────────────────────────────────── */
const services = [
    {
        title: 'Swedish Massage',
        icon: <SwedishIcon />,
        shortDesc: 'Classic relaxation therapy using long, flowing strokes.',
        fullDesc: 'Swedish massage is the most popular type of massage. It involves soft, long, kneading strokes combined with light, rhythmic tapping on the topmost layers of muscles. This is combined with movement of the joints to relieve muscle tension.',
        benefits: ['Deep relaxation & stress relief', 'Improved circulation', 'Reduced muscle tension', 'Enhanced flexibility'],
        bestFor: 'First-time massage clients, stress relief, general relaxation.',
        recommended: '60 or 90 minutes',
    },
    {
        title: 'Deep Tissue',
        icon: <DeepTissueIcon />,
        shortDesc: 'Focused pressure on deeper muscle layers.',
        fullDesc: 'Deep tissue massage targets the deeper layers of muscle and connective tissue. Using slower, more forceful strokes, this technique is designed to reach the sub-layer of muscles and the fascia surrounding them.',
        benefits: ['Chronic pain relief', 'Breaks up scar tissue', 'Reduces inflammation', 'Improves range of motion'],
        bestFor: 'Chronic muscle problems, injuries, or imbalances.',
        recommended: '60 or 90 minutes',
    },
    {
        title: 'Myofascial Release',
        icon: <MyofascialIcon />,
        shortDesc: 'Gentle, sustained pressure on connective tissue.',
        fullDesc: 'Myofascial release focuses on releasing muscular shortness and tightness by applying gentle sustained pressure into the myofascial connective tissue. This eliminates pain and restores motion.',
        benefits: ['Pain reduction', 'Restored mobility', 'Improved posture', 'Release of fascial restrictions'],
        bestFor: 'Limited mobility, postural issues, chronic pain patterns.',
        recommended: '60 or 90 minutes',
    },
    {
        title: 'Sports Massage',
        icon: <SportsIcon />,
        shortDesc: 'Performance-focused recovery techniques.',
        fullDesc: 'Sports massage is geared toward athletes and active individuals. It focuses on areas of the body that are overused and stressed from repetitive and often aggressive movements, using techniques designed to prevent and treat injuries.',
        benefits: ['Faster recovery', 'Injury prevention', 'Enhanced flexibility', 'Improved performance'],
        bestFor: 'Athletes, active individuals, pre/post workout recovery.',
        recommended: '30 or 60 minutes',
    },
    {
        title: 'Reflexology',
        icon: <ReflexologyIcon />,
        shortDesc: 'Targeted pressure on specific reflex points.',
        fullDesc: 'Reflexology involves applying pressure to specific points on the feet, hands, and ears that correspond to different body organs and systems. This promotes natural healing and overall balance throughout the body.',
        benefits: ['Natural healing promotion', 'Stress & anxiety relief', 'Improved nerve function', 'Whole-body balance'],
        bestFor: 'Overall wellness, stress relief, those who prefer focused work.',
        recommended: '30 or 60 minutes',
    },
    {
        title: 'Cupping Therapy',
        icon: <CuppingIcon />,
        shortDesc: 'Ancient suction healing for blood flow.',
        fullDesc: 'Cupping therapy uses specially designed cups placed on the skin to create suction. This ancient technique increases blood flow, reduces inflammation, and promotes cellular repair. It is an excellent complement to massage therapy.',
        benefits: ['Increased blood flow', 'Reduced inflammation', 'Cellular repair', 'Toxin release'],
        bestFor: 'Muscle recovery, inflammation, those seeking alternative therapy.',
        recommended: 'As an add-on to any session',
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

/* ────────────────────────────────────────────
   EXPANDABLE SERVICE CARD
   ──────────────────────────────────────────── */
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`bg-white rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${expanded
                ? 'border-[#2A9D8F]/30 shadow-xl shadow-[#2A9D8F]/5'
                : 'border-gray-100 hover:border-[#2A9D8F]/20 hover:shadow-lg hover:-translate-y-1'
                }`}
            onClick={() => setExpanded(!expanded)}
        >
            {/* Header — always visible */}
            <div className="p-8 flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
                    {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                        <h3 className="font-display text-xl font-bold text-[#2D2D3F]">
                            {service.title}
                        </h3>
                        <motion.div
                            animate={{ rotate: expanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M3 5L7 9L11 5" stroke="#5B2D8E" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </motion.div>
                    </div>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                        {service.shortDesc}
                    </p>
                </div>
            </div>

            {/* Expanded content */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                        <div className="px-8 pb-8 pt-0">
                            <div className="border-t border-gray-100 pt-6">
                                {/* Full description */}
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {service.fullDesc}
                                </p>

                                {/* Benefits */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-[#5B2D8E] uppercase tracking-wider mb-3">
                                        Benefits
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {service.benefits.map((b, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex items-center gap-2 text-sm text-gray-600"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.08 }}
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F] flex-shrink-0" />
                                                {b}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Best for & recommended */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-[#F3F4F6]">
                                        <span className="text-xs font-semibold text-[#5B2D8E] uppercase tracking-wider block mb-1">
                                            Best For
                                        </span>
                                        <p className="text-sm text-gray-600">{service.bestFor}</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-[#D4F0ED]/30">
                                        <span className="text-xs font-semibold text-[#2A9D8F] uppercase tracking-wider block mb-1">
                                            Recommended
                                        </span>
                                        <p className="text-sm text-gray-600">{service.recommended}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ────────────────────────────────────────────
   SERVICES PAGE
   ──────────────────────────────────────────── */
export default function ServicesPage() {
    return (
        <main>
            {/* Hero Banner */}
            <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at 70% 50%, #1A3A35 0%, #1A0A38 50%, #0D0520 100%)',
                    }}
                />
                {/* Animated particles */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full pointer-events-none"
                        style={{
                            width: `${2 + (i % 3)}px`,
                            height: `${2 + (i % 3)}px`,
                            background: i % 2 === 0 ? 'rgba(42,157,143,0.5)' : 'rgba(91,45,142,0.4)',
                            left: `${8 + i * 12}%`,
                            top: `${15 + (i * 11) % 70}%`,
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0.5, 1.5, 0.5],
                            y: [0, -12, 0],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            delay: i * 0.4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
                <div className="relative z-10 text-center px-6">
                    <motion.span
                        className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#2A9D8F] text-sm font-semibold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Services
                    </motion.span>
                    <motion.h1
                        className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Therapeutic <span className="text-[#2A9D8F]">Treatments</span>
                    </motion.h1>
                    <motion.p
                        className="text-white/60 text-lg max-w-xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Customized massage therapy designed to meet your individual wellness needs.
                        <br />
                        <span className="text-white/40 text-sm">Click any treatment to learn more.</span>
                    </motion.p>
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, #FAFAFA, transparent)' }}
                />
            </section>

            {/* Service Cards */}
            <section className="py-12 md:py-20 px-6 md:px-12 bg-[#FAFAFA]">
                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-5">
                        {services.map((svc, i) => (
                            <ServiceCard key={i} service={svc} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-2xl overflow-hidden border border-gray-100 bg-[#FAFAFA] p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Base Pricing */}
                            <div>
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#2D2D3F] mb-2">
                                    Session <span className="text-[#5B2D8E]">Pricing</span>
                                </h3>
                                <p className="text-gray-500 mb-8">All massage types available at every session length</p>
                                <div className="space-y-4">
                                    {pricing.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-center justify-between p-5 rounded-xl bg-white border border-gray-100"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <span className="text-lg font-semibold text-[#2D2D3F]">{item.duration}</span>
                                            <span className="text-2xl font-bold text-[#5B2D8E]">{item.price}</span>
                                        </motion.div>
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
                                        <motion.div
                                            key={i}
                                            className="flex items-center justify-between p-5 rounded-xl bg-white border border-gray-100"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <span className="text-lg font-semibold text-[#2D2D3F]">{item.name}</span>
                                            <span className="text-2xl font-bold text-[#2A9D8F]">{item.price}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Contact Footer */}
            <section
                className="py-20 md:py-28 px-6 md:px-12 text-white"
                style={{ background: 'linear-gradient(135deg, #5B2D8E, #2A9D8F)' }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
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
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-2">Location</h4>
                                <p className="text-xl font-semibold">108 Downey Place</p>
                                <p className="text-white/80">Cuba, MO 65453</p>
                                <p className="text-white/60 text-sm mt-1">Inside Roots 66 Salon</p>
                            </div>
                            <div>
                                <h4 className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-2">Hours</h4>
                                <p className="text-xl font-semibold">By Appointment Only</p>
                                <p className="text-white/60 text-sm mt-1">Message or text to schedule</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
                        <p>&copy; {new Date().getFullYear()} Pure Diamond Massage. All rights reserved.</p>
                        <p>Massage Therapy Services Only</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
