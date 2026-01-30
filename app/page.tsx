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

            {/* Hero Section */}
            <section
                className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
                style={{
                    backgroundImage: 'url(/images/hero-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(280,40%,25%)]/80 to-[hsl(280,35%,35%)]/60"></div>

                <div className="container relative z-10 text-center">
                    <div className="animate-fade-in-up">
                        <img
                            src="/images/logo.png"
                            alt="Pure Diamond Massage"
                            className="mx-auto mb-8 max-w-xs md:max-w-md w-full h-auto drop-shadow-2xl"
                        />
                        <h1 className="text-white mb-6">
                            Personalized Healing & Wellness
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
                            Diamond Payne specializes in creating a soothing environment for unwinding,
                            relieving tension, and managing pain through personalized massage therapy.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-secondary text-lg px-8 py-4">
                                Book Your Session
                            </Link>
                            <Link href="/services" className="btn btn-outline text-lg px-8 py-4 !border-white !text-white hover:!bg-white hover:!text-[hsl(280,40%,25%)]">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding bg-gradient-to-b from-white to-[hsl(210,20%,98%)]">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="gradient-text mb-4">Our Services</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Tailored massage therapy sessions designed to meet your individual needs,
                            from chronic pain recovery to deep relaxation.
                        </p>
                    </div>

                    <div className="service-grid">
                        {services.map((service, index) => (
                            <div
                                key={service.name}
                                className="card"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl mb-3">{service.name}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/services" className="btn btn-primary text-lg">
                            Learn More About Our Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="section-padding bg-gradient-to-br from-[hsl(280,40%,25%)] to-[hsl(280,35%,35%)] text-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-white mb-6">Meet Diamond Payne</h2>
                        <p className="text-xl text-white/90 mb-6 leading-relaxed">
                            Diamond Payne is a recent graduate of The Healing Arts Center in Saint Louis,
                            bringing fresh expertise and genuine passion for healing to Cuba, MO.
                        </p>
                        <p className="text-lg text-white/80 mb-8">
                            Her goal is to create a soothing and healing environment where clients can
                            unwind, relieve tension, and effectively manage pain and stress. Each session
                            is tailored to individual needs—whether recovering from chronic pain, healing
                            from injury, or simply seeking deep relaxation.
                        </p>
                        <Link href="/about" className="btn btn-secondary text-lg">
                            Read More About Diamond
                        </Link>
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="glass p-12 rounded-2xl">
                            <div className="text-6xl mb-4">⭐⭐⭐⭐⭐</div>
                            <h3 className="text-3xl mb-4">100% Recommended</h3>
                            <p className="text-xl text-gray-600">
                                Based on 6 reviews from satisfied clients on Facebook
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Contact CTA */}
            <section className="section-padding bg-gradient-to-b from-[hsl(210,20%,98%)] to-white">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="gradient-text mb-4">Visit Us in Cuba, MO</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Conveniently located at 108 Downey Place
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto glass p-8 rounded-2xl">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <span className="text-2xl">📞</span>
                                        <a href="tel:6363007711" className="text-[hsl(280,40%,25%)] hover:underline font-medium">
                                            (636) 300-7711
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-2xl">✉️</span>
                                        <a href="mailto:massagebydiamond@yahoo.com" className="text-[hsl(280,40%,25%)] hover:underline">
                                            massagebydiamond@yahoo.com
                                        </a>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">📍</span>
                                        <span>108 Downey Place<br />Cuba, MO 65453</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-4">Hours</h4>
                                <p className="text-gray-600 mb-6">By appointment only</p>
                                <Link href="/contact" className="btn btn-primary w-full justify-center">
                                    Schedule Your Appointment
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
