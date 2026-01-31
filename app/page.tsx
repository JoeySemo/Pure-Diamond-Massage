import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
    const services = [
        {
            name: 'Swedish Massage',
            description: 'Gentle, flowing strokes to promote deep relaxation and improve circulation.',
            icon: '🌿',
            duration: '60-90 min',
            link: '/services'
        },
        {
            name: 'Deep Tissue',
            description: 'Targeted pressure to release chronic muscle tension and stubborn knots.',
            icon: '💎',
            duration: '60-90 min',
            link: '/services'
        },
        {
            name: 'Myofascial Release',
            description: 'Specialized technique to release fascial restrictions and restore mobility.',
            icon: '✨',
            duration: '60-90 min',
            link: '/services'
        },
        {
            name: 'Sports Massage',
            description: 'Performance-focused therapy designed for athletes and active lifestyles.',
            icon: '⚡',
            duration: '60-90 min',
            link: '/services'
        },
        {
            name: 'Reflexology',
            description: 'Pressure point therapy on feet to promote whole-body balance.',
            icon: '🦶',
            duration: '30-60 min',
            link: '/services'
        },
        {
            name: 'Cupping Therapy',
            description: 'Ancient healing technique using suction to enhance circulation.',
            icon: '🔮',
            duration: 'Add-on',
            link: '/services'
        }
    ];

    return (
        <main className="min-h-screen bg-cream">
            <Navigation />

            {/* Hero Section - Refactored for Robustness */}
            <section id="home" className="relative min-h-screen w-full flex flex-col justify-center pt-32 pb-20 bg-[#2D1F3D] overflow-hidden">
                {/* Background Gradient Applied via Inline Style for Safety */}
                <div
                    className="absolute inset-0 z-0 opacity-80"
                    style={{
                        background: 'linear-gradient(135deg, #2D1F3D 0%, #4A3660 50%, #2D1F3D 100%)'
                    }}
                />

                {/* Dark Overlay for Contrast */}
                <div className="absolute inset-0 z-0 bg-black/30" />

                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[10%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#D4A84B]/10 rounded-full blur-[80px] animate-float" />
                    <div className="absolute bottom-[10%] right-[10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/5 rounded-full blur-[60px] animate-float delay-700" />
                </div>

                {/* Content Container */}
                <div className="container relative z-10 text-center text-white">
                    <div className="max-w-4xl mx-auto">
                        {/* Location Badge */}
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in shadow-lg">
                            <span className="text-[#D4A84B] animate-pulse">✦</span>
                            <span className="text-sm font-medium tracking-widest uppercase">Cuba, Missouri</span>
                        </div>

                        {/* Logo - FORCED HEIGHT, NO FILTERS FOR FULL COLOR */}
                        <div className="mb-8 animate-fade-in-up">
                            <img
                                src="/images/logo.png"
                                alt="Pure Diamond Massage"
                                className="mx-auto h-28 md:h-36 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                style={{ height: '9rem', width: 'auto' }}
                            />
                        </div>

                        {/* Headline */}
                        <h1 className="text-white mb-6 animate-fade-in-up delay-200 drop-shadow-lg leading-tight">
                            Where Healing Meets <span className="text-[#D4A84B] font-serif italic">Tranquility</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed animate-fade-in-up delay-300 max-w-2xl mx-auto font-light">
                            Experience personalized massage therapy in a serene environment,
                            designed to relieve tension and restore your natural balance.
                        </p>

                        {/* Call to Actions */}
                        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up delay-500">
                            <Link href="/contact" className="btn btn-primary min-w-[180px]">
                                Book Your Session
                            </Link>
                            <Link href="/services" className="btn btn-ghost min-w-[180px]">
                                Explore Services
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-white/80 text-sm animate-fade-in delay-700">
                            <div className="flex items-center gap-2">
                                <span className="text-[#D4A84B]">★★★★★</span>
                                <span className="font-medium">5-Star Reviews</span>
                            </div>
                            <div className="hidden md:block w-px h-6 bg-white/20" />
                            <div className="flex items-center gap-2">
                                <span className="text-[#5A8A5E]">✓</span>
                                <span className="font-medium">Licensed Therapist</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFFEF9] to-transparent z-10" />
            </section>

            {/* Services Section with Clickable Cards */}
            <section className="section bg-cream relative z-20">
                <div className="container">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <span className="badge mb-6">Our Services</span>
                        <h2 className="mb-6 text-charcoal">Tailored Treatments</h2>
                        <div className="divider mb-8" />
                        <p className="text-lg text-gray">
                            Each session is carefully customized to address your unique needs,
                            whether you seek relaxation, recovery, or relief.
                        </p>
                    </div>

                    {/* Services Grid - Now Clickable */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link
                                href={service.link}
                                key={service.name}
                                className="card group block relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="w-8 h-8 flex items-center justify-center bg-[#D4A84B] rounded-full text-white">
                                        →
                                    </span>
                                </div>
                                <div className="flex items-start gap-5">
                                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center text-3xl bg-cream-dark rounded-2xl group-hover:bg-[#2D1F3D] group-hover:scale-110 transition-all duration-300 shadow-inner">
                                        <span className="group-hover:brightness-0 group-hover:invert transition-all duration-300 filter">
                                            {service.icon}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-3 text-charcoal group-hover:text-[#2D1F3D] transition-colors">
                                            {service.name}
                                        </h3>
                                        <p className="text-sm text-gray mb-4 leading-relaxed group-hover:text-charcoal transition-colors">
                                            {service.description}
                                        </p>
                                        <span className="text-xs font-bold text-[#D4A84B] uppercase tracking-wider bg-[#D4A84B]/10 px-3 py-1 rounded-full">
                                            {service.duration}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* View All CTA */}
                    <div className="text-center mt-16">
                        <Link href="/services" className="btn btn-outline hover:bg-[#2D1F3D] hover:border-[#2D1F3D] hover:text-white transition-all duration-300">
                            View Full Menu & Pricing
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section - Redesigned Layout */}
            <section className="section bg-white relative overflow-hidden">
                {/* Decorative Background Blob */}
                <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-[#D4A84B]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Image/Quote Column */}
                        <div className="relative animate-slide-right">
                            <div className="bg-gradient-to-br from-[#2D1F3D] to-[#4A3660] rounded-[2rem] p-10 md:p-14 text-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="text-[#D4A84B] text-6xl mb-8 font-serif leading-none">"</div>
                                <p className="text-2xl font-display italic leading-relaxed mb-10 text-white/95">
                                    My goal is to create a sanctuary where your body feels safe
                                    enough to release tension and begin true healing.
                                </p>
                                <div className="flex items-center gap-5 border-t border-white/10 pt-8">
                                    <div className="w-16 h-16 bg-[#D4A84B] rounded-full flex items-center justify-center text-[#2D1F3D] font-display text-3xl font-bold shadow-lg">
                                        D
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg text-white">Diamond Payne</p>
                                        <p className="text-[#D4A84B] text-sm uppercase tracking-wider font-medium">Licensed Massage Therapist</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="animate-slide-left">
                            <span className="badge mb-6">About the Therapist</span>
                            <h2 className="mb-8 text-charcoal">Meet Diamond Payne</h2>
                            <p className="text-lg mb-6 leading-relaxed text-gray">
                                Diamond Payne is a graduate of The Healing Arts Center in Saint Louis,
                                bringing fresh expertise and a genuine passion for holistic wellness
                                to the Cuba, Missouri community.
                            </p>
                            <p className="mb-10 leading-relaxed text-gray">
                                With specialized training in <span className="font-semibold text-[#2D1F3D]">myofascial release</span> and <span className="font-semibold text-[#2D1F3D]">deep tissue techniques</span>,
                                Diamond creates personalized treatment plans that address each client's
                                unique needs—whether recovering from injury, managing chronic pain,
                                or simply seeking moments of profound relaxation.
                            </p>

                            <Link href="/about" className="btn btn-secondary group">
                                Read More About Diamond
                                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="py-24 bg-[#2D1F3D] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
                <div className="container relative z-10 text-center">
                    <div className="text-[#D4A84B] text-4xl mb-8 animate-bounce">★★★★★</div>
                    <h2 className="mb-10 text-white text-3xl md:text-5xl">Trusted by the Community</h2>
                    <blockquote className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8 font-light italic leading-relaxed">
                        "Absolutely amazing experience. Diamond truly listens to what your body
                        needs and delivers exactly that. I left feeling like a new person."
                    </blockquote>
                    <cite className="text-[#D4A84B] font-medium not-italic tracking-wider uppercase text-sm">— Satisfied Client</cite>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-cream">
                <div className="container">
                    <div className="bg-white rounded-[3rem] p-10 md:p-20 text-center shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A84B]/10 rounded-bl-full" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2D1F3D]/5 rounded-tr-full" />

                        <div className="relative z-10">
                            <span className="text-[#D4A84B] font-bold tracking-widest uppercase text-sm mb-4 block">Ready to Relax?</span>
                            <h2 className="mb-8 text-charcoal">Begin Your Wellness Journey</h2>
                            <p className="text-xl text-gray max-w-2xl mx-auto mb-10 leading-relaxed">
                                Located in the heart of Cuba, Missouri. Sessions are by appointment only
                                to ensure you receive our undivided attention.
                            </p>
                            <Link href="/contact" className="btn btn-primary text-lg px-10 py-4">
                                Schedule Your Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
