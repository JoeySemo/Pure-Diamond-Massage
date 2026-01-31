import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
    const services = [
        {
            name: 'Swedish Massage',
            description: 'Gentle, flowing strokes to promote deep relaxation and improve circulation.',
            icon: '🌿',
            duration: '60-90 min'
        },
        {
            name: 'Deep Tissue',
            description: 'Targeted pressure to release chronic muscle tension and stubborn knots.',
            icon: '💎',
            duration: '60-90 min'
        },
        {
            name: 'Myofascial Release',
            description: 'Specialized technique to release fascial restrictions and restore mobility.',
            icon: '✨',
            duration: '60-90 min'
        },
        {
            name: 'Sports Massage',
            description: 'Performance-focused therapy designed for athletes and active lifestyles.',
            icon: '⚡',
            duration: '60-90 min'
        },
        {
            name: 'Reflexology',
            description: 'Pressure point therapy on feet to promote whole-body balance.',
            icon: '🦶',
            duration: '30-60 min'
        },
        {
            name: 'Cupping Therapy',
            description: 'Ancient healing technique using suction to enhance circulation.',
            icon: '🔮',
            duration: 'Add-on'
        }
    ];

    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-[#3D2B4F] via-[#5A4570] to-[#3D2B4F]"
                />

                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A854]/10 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float delay-300" />
                </div>

                {/* Content */}
                <div className="container relative z-10 text-center text-white">
                    <div className="max-w-3xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
                            <span className="text-[#C9A854]">✦</span>
                            <span className="text-sm font-medium tracking-wide">Cuba, Missouri</span>
                        </div>

                        {/* Logo */}
                        <div className="mb-8 animate-fade-in-up">
                            <img
                                src="/images/logo.png"
                                alt="Pure Diamond Massage"
                                className="mx-auto h-24 md:h-32 w-auto brightness-0 invert drop-shadow-2xl"
                            />
                        </div>

                        {/* Headline */}
                        <h1 className="text-white mb-6 animate-fade-in-up delay-100">
                            Where Healing Meets <span className="text-[#C9A854]">Tranquility</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed animate-fade-in-up delay-200">
                            Experience personalized massage therapy in a serene environment,
                            designed to relieve tension and restore your natural balance.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link href="/contact" className="btn btn-secondary">
                                Book Your Session
                            </Link>
                            <Link href="/services" className="btn btn-ghost">
                                Explore Services
                            </Link>
                        </div>

                        {/* Trust Indicator */}
                        <div className="mt-16 flex items-center justify-center gap-8 text-white/60 text-sm animate-fade-in delay-500">
                            <div className="flex items-center gap-2">
                                <span className="text-[#C9A854]">★★★★★</span>
                                <span>5-Star Reviews</span>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-white/20" />
                            <div className="hidden sm:flex items-center gap-2">
                                <span>✓</span>
                                <span>Licensed Therapist</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Services Section */}
            <section className="section bg-[#FAF8F5]">
                <div className="container">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="badge mb-4">Our Services</span>
                        <h2 className="mb-4">Tailored Treatments for Your Wellbeing</h2>
                        <div className="divider mb-6" />
                        <p className="text-lg">
                            Each session is carefully customized to address your unique needs,
                            whether you seek relaxation, recovery, or relief.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={service.name}
                                className="card group cursor-pointer"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 flex items-center justify-center text-2xl bg-[#FAF8F5] rounded-xl group-hover:bg-[#3D2B4F] group-hover:scale-110 transition-all duration-300">
                                        <span className="group-hover:brightness-0 group-hover:invert transition-all duration-300">
                                            {service.icon}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl mb-2 group-hover:text-[#3D2B4F] transition-colors">
                                            {service.name}
                                        </h3>
                                        <p className="text-sm mb-3">{service.description}</p>
                                        <span className="text-xs font-medium text-[#C9A854] uppercase tracking-wider">
                                            {service.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                        <Link href="/services" className="btn btn-primary">
                            View All Services & Pricing
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image/Quote Column */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-[#3D2B4F] to-[#5A4570] rounded-2xl p-10 md:p-14 text-white">
                                <div className="text-[#C9A854] text-5xl mb-6 font-serif">"</div>
                                <p className="text-xl md:text-2xl font-display italic leading-relaxed mb-8">
                                    My goal is to create a sanctuary where your body feels safe
                                    enough to release tension and begin true healing.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-[#C9A854] rounded-full flex items-center justify-center text-[#3D2B4F] font-display text-2xl font-bold">
                                        D
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Diamond Payne</p>
                                        <p className="text-white/60 text-sm">Licensed Massage Therapist</p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C9A854]/20 rounded-full blur-2xl -z-10" />
                        </div>

                        {/* Content Column */}
                        <div>
                            <span className="badge mb-4">About</span>
                            <h2 className="mb-6">Meet Your Therapist</h2>
                            <p className="text-lg mb-6">
                                Diamond Payne is a graduate of The Healing Arts Center in Saint Louis,
                                bringing fresh expertise and a genuine passion for holistic wellness
                                to the Cuba, Missouri community.
                            </p>
                            <p className="mb-8">
                                With specialized training in myofascial release and deep tissue techniques,
                                Diamond creates personalized treatment plans that address each client's
                                unique needs—whether recovering from injury, managing chronic pain,
                                or simply seeking moments of profound relaxation.
                            </p>

                            {/* Credentials */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-10 bg-[#7A9E7E]/20 rounded-full flex items-center justify-center text-[#7A9E7E]">✓</span>
                                    <span className="text-sm font-medium">Licensed & Certified</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-10 bg-[#7A9E7E]/20 rounded-full flex items-center justify-center text-[#7A9E7E]">✓</span>
                                    <span className="text-sm font-medium">Myofascial Specialist</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-10 bg-[#7A9E7E]/20 rounded-full flex items-center justify-center text-[#7A9E7E]">✓</span>
                                    <span className="text-sm font-medium">Custom Treatments</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-10 bg-[#7A9E7E]/20 rounded-full flex items-center justify-center text-[#7A9E7E]">✓</span>
                                    <span className="text-sm font-medium">Healing Arts Graduate</span>
                                </div>
                            </div>

                            <Link href="/about" className="btn btn-outline">
                                Learn More About Diamond
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial/Social Proof Section */}
            <section className="py-20 bg-[#FAF8F5]">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="text-[#C9A854] text-5xl mb-6">★★★★★</div>
                        <h2 className="mb-8">Trusted by the Cuba Community</h2>
                        <p className="text-xl text-gray mb-4">
                            "Absolutely amazing experience. Diamond truly listens to what your body
                            needs and delivers exactly that. I left feeling like a new person."
                        </p>
                        <p className="text-sm text-gray-light font-medium">— Satisfied Client</p>

                        <div className="mt-12 flex items-center justify-center gap-12 text-center">
                            <div>
                                <div className="text-4xl font-display font-bold text-[#3D2B4F]">100%</div>
                                <div className="text-sm text-gray mt-1">5-Star Reviews</div>
                            </div>
                            <div className="w-px h-12 bg-[#3D2B4F]/10" />
                            <div>
                                <div className="text-4xl font-display font-bold text-[#3D2B4F]">6+</div>
                                <div className="text-sm text-gray mt-1">Massage Modalities</div>
                            </div>
                            <div className="w-px h-12 bg-[#3D2B4F]/10" />
                            <div>
                                <div className="text-4xl font-display font-bold text-[#3D2B4F]">∞</div>
                                <div className="text-sm text-gray mt-1">Dedication to Healing</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & CTA Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="bg-gradient-to-br from-[#3D2B4F] to-[#5A4570] rounded-3xl p-10 md:p-16 text-white text-center">
                        <span className="inline-block px-4 py-1 bg-[#C9A854] text-[#3D2B4F] text-sm font-semibold rounded-full mb-6">
                            Visit Us
                        </span>
                        <h2 className="text-white mb-6">Begin Your Wellness Journey</h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                            Located in the heart of Cuba, Missouri. Sessions are by appointment only
                            to ensure you receive our undivided attention and care.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-10">
                            <div className="text-center">
                                <div className="text-3xl mb-3">📍</div>
                                <div className="text-white/90 font-medium">108 Downey Place</div>
                                <div className="text-white/60 text-sm">Cuba, MO 65453</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-3">📞</div>
                                <a href="tel:6363007711" className="text-white/90 font-medium hover:text-[#C9A854] transition-colors">
                                    (636) 300-7711
                                </a>
                                <div className="text-white/60 text-sm">Call or Text</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-3">🕐</div>
                                <div className="text-white/90 font-medium">By Appointment</div>
                                <div className="text-white/60 text-sm">Flexible Scheduling</div>
                            </div>
                        </div>

                        <Link href="/contact" className="btn btn-secondary">
                            Schedule Your Appointment
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
