"use client";
import React from 'react';
import { motion } from 'framer-motion';

/* ────────────────────────────────────────────
   HERO — Animated Ken Burns + Floating Particles
   ──────────────────────────────────────────── */
function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Animated Background — slow Ken Burns zoom & pan */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url(/images/hero.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        animation: 'heroKenBurns 20s ease-in-out infinite alternate',
                    }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5B2D8E]/85 via-[#5B2D8E]/60 to-transparent" />

                {/* Floating bokeh particles */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full pointer-events-none"
                        style={{
                            width: `${6 + Math.random() * 14}px`,
                            height: `${6 + Math.random() * 14}px`,
                            left: `${5 + (i * 8) % 90}%`,
                            bottom: `-${20 + Math.random() * 10}px`,
                            background: i % 3 === 0
                                ? 'rgba(42, 157, 143, 0.35)'
                                : i % 3 === 1
                                    ? 'rgba(255, 255, 255, 0.2)'
                                    : 'rgba(91, 45, 142, 0.3)',
                            filter: 'blur(1px)',
                            animation: `floatUp ${8 + (i % 5) * 3}s ease-in-out ${i * 1.5}s infinite`,
                        }}
                    />
                ))}

                {/* Subtle shimmer sweep */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 8s ease-in-out infinite',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#2A9D8F] animate-pulse" />
                        <span className="text-white/90 text-sm font-medium">Now Accepting Appointments</span>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                        Pure Diamond<br />
                        <span className="text-[#2A9D8F]">Massage</span>
                    </h1>

                    <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                        Your sanctuary for healing and renewal. Professional therapeutic massage
                        in a warm, welcoming environment — located inside{' '}
                        <span className="font-semibold text-white">Roots 66 Salon</span>, Cuba, MO.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="tel:6363007711"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2A9D8F] hover:bg-[#248F83] text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                        >
                            📞 (636) 300-7711
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all"
                        >
                            View Services ↓
                        </a>
                    </div>

                    <p className="mt-6 text-white/60 text-sm">
                        Message or text to book your appointment
                    </p>
                </motion.div>
            </div>
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
   PAGE
   ──────────────────────────────────────────── */
export default function Home() {
    return (
        <main>
            <Hero />
            <MeetDiamond />
            <Services />
            <Reviews />
            <Contact />
        </main>
    );
}
