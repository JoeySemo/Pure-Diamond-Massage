"use client";
import React from 'react';
import { motion } from 'framer-motion';

/* ────────────────────────────────────────────
   ABOUT PAGE
   ──────────────────────────────────────────── */

export default function AboutPage() {
    return (
        <main>
            {/* Hero Banner */}
            <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at 30% 50%, #3D1A6E 0%, #2A1052 40%, #1A0A38 70%, #0D0520 100%)',
                    }}
                />
                {/* Animated particles */}
                {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full pointer-events-none"
                        style={{
                            width: `${3 + (i % 3)}px`,
                            height: `${3 + (i % 3)}px`,
                            background: i % 2 === 0 ? 'rgba(42,157,143,0.4)' : 'rgba(91,45,142,0.3)',
                            left: `${10 + i * 15}%`,
                            top: `${20 + (i * 12) % 60}%`,
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0.5, 1.5, 0.5],
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 3 + i,
                            delay: i * 0.5,
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
                        Meet Your Therapist
                    </motion.span>
                    <motion.h1
                        className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Diamond <span className="text-[#2A9D8F]">Payne</span>
                    </motion.h1>
                    <motion.p
                        className="text-white/60 text-lg max-w-xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Licensed Massage Therapist — Cuba, MO
                    </motion.p>
                </div>
                {/* Bottom fade */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, white, transparent)' }}
                />
            </section>

            {/* Bio Section */}
            <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Diamond's Photo */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
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
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
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

                            {/* CTA */}
                            <div className="mt-10">
                                <a
                                    href="tel:6363007711"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                                    style={{ background: 'linear-gradient(135deg, #5B2D8E, #2A9D8F)' }}
                                >
                                    📞 Book a Session
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-16 md:py-24 px-6 md:px-12 bg-[#FAFAFA]">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="font-display text-3xl md:text-4xl font-bold text-[#2D2D3F] mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        My <span className="text-[#5B2D8E]">Philosophy</span>
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🌿',
                                title: 'Personalized Care',
                                desc: 'Every session is tailored to your unique needs, addressing specific concerns and goals.',
                            },
                            {
                                icon: '💎',
                                title: 'Healing Touch',
                                desc: 'Combining techniques to promote deep relaxation, pain relief, and overall wellness.',
                            },
                            {
                                icon: '✨',
                                title: 'Safe Space',
                                desc: 'A warm, welcoming environment where you can fully relax and restore your well-being.',
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                            >
                                <span className="text-4xl block mb-4">{item.icon}</span>
                                <h3 className="font-display text-xl font-bold text-[#2D2D3F] mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
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
                                Ready to
                                <br />
                                Feel Better?
                            </h2>
                            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-md">
                                Book a session and experience the difference personalized massage therapy can make.
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
