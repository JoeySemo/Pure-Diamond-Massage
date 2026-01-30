import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
    const services = [
        {
            name: 'Swedish Massage',
            description: 'Gentle, flowing strokes to promote relaxation and improve circulation.',
            icon: '🌊'
        },
        {
            name: 'Deep Tissue',
            description: 'Targeted pressure to release chronic muscle tension and knots.',
            icon: '💪'
        },
        {
            name: 'Myofascial Massage',
            description: 'Specialized technique to release fascial restrictions and improve mobility.',
            icon: '🎯'
        },
        {
            name: 'Sports Massage',
            description: 'Performance-focused therapy for athletes and active individuals.',
            icon: '⚡'
        },
        {
            name: 'Reflexology',
            description: 'Pressure point therapy on feet to promote whole-body wellness.',
            icon: '🦶'
        },
        {
            name: 'Cupping',
            description: 'Ancient therapy using suction to enhance circulation and healing.',
            icon: '🔮'
        }
    ];

    return (
        <>
            <Navigation />

            {/* Split Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20 lg:pt-0">
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in-up">
                            <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-900 border border-purple-100 text-sm font-semibold tracking-wide mb-6">
                                NEW IN CUBA, MO
                            </span>
                            <h1 className="mb-6 leading-tight text-slate-900">
                                Personalized <span className="text-purple-900 relative">Healing
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-purple-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                                    </svg>
                                </span> & Wellness
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Experience a soothing environment designed for unwinding, relieving tension, and managing pain through expert massage therapy.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="/contact" className="btn btn-primary text-lg px-8 py-4 shadow-xl shadow-purple-900/10 hover:shadow-purple-900/20">
                                    Book Your Session
                                </Link>
                                <Link href="/services" className="btn btn-outline text-lg px-8 py-4">
                                    View Services
                                </Link>
                            </div>

                            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center border-2 border-white">⭐</div>
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center border-2 border-white">⭐</div>
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center border-2 border-white">⭐</div>
                                </div>
                                <p>5-Star Rated Service</p>
                            </div>
                        </div>

                        {/* Hero Image / Shape */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-3 transform transition-transform hover:rotate-1 duration-500">
                                <img
                                    src="/images/logo.png"
                                    alt="Pure Diamond Massage Logo"
                                    className="w-full h-auto bg-purple-50 p-12 object-contain"
                                />
                            </div>
                            {/* Decorative Blobs */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="mb-4 text-slate-900">Our Services</h2>
                        <p className="text-lg text-slate-600">
                            Tailored massage therapy sessions designed to meet your individual needs,
                            from chronic pain recovery to deep relaxation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={service.name}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="text-4xl mb-6 bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-purple-900 transition-colors">
                                    {service.name}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link href="/services" className="btn btn-primary text-lg">
                            Explore All Treatments
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Split Section */}
            <section className="section-padding bg-white overflow-hidden">
                <div className="container">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white shadow-2xl">
                                <h3 className="text-purple-300 text-sm font-bold uppercase tracking-widest mb-2">The Philosophy</h3>
                                <h2 className="text-white mb-6 text-3xl md:text-4xl">Healing Through Connection</h2>
                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    "I believe that true healing happens when we create a space for the body to feel safe enough to let go."
                                </p>
                                <div className="flex items-center gap-4 pt-6 border-t border-slate-800">
                                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center font-serif text-xl">D</div>
                                    <div>
                                        <p className="font-bold text-white">Diamond Payne</p>
                                        <p className="text-purple-300 text-sm">Owner & Therapist</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100 rounded-full filter blur-[100px] opacity-50 -z-10"></div>
                        </div>

                        <div className="lg:w-1/2">
                            <h2 className="mb-6 text-slate-900">Meet Diamond Payne</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                A graduate of The Healing Arts Center in Saint Louis, Diamond brings fresh expertise and a genuine passion for holistic wellness to Cuba, MO.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Each session is meticulously tailored to your body's needs—whether you're recovering from an injury, managing chronic pain, or simply seeking a moment of profound relaxation.
                            </p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <span className="text-green-500 text-xl">✓</span> Specialized in Myofascial Release
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <span className="text-green-500 text-xl">✓</span> Certified & Licensed Therapist
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <span className="text-green-500 text-xl">✓</span> Customized Treatment Plans
                                </li>
                            </ul>

                            <Link href="/about" className="btn btn-secondary text-lg">
                                Read More About Diamond
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Section (Redesigned) */}
            <section className="py-20 bg-purple-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                <div className="container relative z-10 text-center">
                    <div className="text-yellow-400 text-4xl mb-6">★★★★★</div>
                    <h2 className="text-white mb-6 text-3xl md:text-5xl max-w-3xl mx-auto">
                        "100% Recommended by our community."
                    </h2>
                    <p className="text-xl text-purple-200 mb-8">
                        Based on verified client reviews
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12 pt-12 border-t border-purple-800">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">6+</div>
                            <div className="text-purple-300 text-sm">5-Star Reviews</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">100%</div>
                            <div className="text-purple-300 text-sm">Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">6</div>
                            <div className="text-purple-300 text-sm">Specialties</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">New</div>
                            <div className="text-purple-300 text-sm">Location</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Contact CTA */}
            <section className="section-padding bg-slate-50">
                <div className="container">
                    <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100 p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h2 className="mb-4 text-slate-900">Visit Our Studio</h2>
                            <p className="text-xl text-slate-600">
                                A tranquil space in the heart of Cuba, MO
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                            <div className="p-4">
                                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">📍</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Location</h3>
                                <p className="text-slate-600">108 Downey Place<br />Cuba, MO 65453</p>
                            </div>
                            <div className="p-4">
                                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">📞</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Phone</h3>
                                <a href="tel:6363007711" className="text-purple-700 font-semibold hover:underline block text-lg">(636) 300-7711</a>
                                <p className="text-sm text-slate-500 mt-2">Call or Text</p>
                            </div>
                            <div className="p-4">
                                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">⏰</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Hours</h3>
                                <p className="text-slate-600">By Appointment Only</p>
                                <Link href="/contact" className="inline-block mt-4 text-sm font-semibold text-purple-700 hover:text-purple-900 underline">
                                    Check Availability →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
