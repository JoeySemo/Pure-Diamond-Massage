import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'About Diamond Payne | Pure Diamond Massage',
    description: 'Meet Diamond Payne, a licensed massage therapist and graduate of The Healing Arts Center, dedicated to personalized healing in Cuba, MO.',
};

export default function AboutPage() {
    const certifications = [
        'Licensed Massage Therapist',
        'Healing Arts Center Graduate',
        'Myofascial Release Specialist',
        'Deep Tissue Certified',
        'Sports Massage Trained',
        'Cupping Therapy Certified'
    ];

    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#3D2B4F] via-[#5A4570] to-[#3D2B4F] text-white overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#C9A854]/10 rounded-full blur-3xl" />
                </div>
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                            <span className="text-[#C9A854]">✦</span>
                            <span className="text-sm font-medium">Our Story</span>
                        </span>
                        <h1 className="text-white mb-6">About Pure Diamond Massage</h1>
                        <p className="text-xl text-white/80 leading-relaxed">
                            A sanctuary for healing in the heart of Cuba, Missouri
                        </p>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="section bg-[#FAF8F5]">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Photo/Quote Card */}
                        <div className="relative">
                            <div className="bg-white rounded-3xl p-8 shadow-lg">
                                <div className="aspect-square bg-gradient-to-br from-[#3D2B4F] to-[#5A4570] rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-[200px] text-[#C9A854]/30 font-display">D</span>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl mb-1">Diamond Payne</h3>
                                    <p className="text-gray">Licensed Massage Therapist</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C9A854]/20 rounded-full blur-2xl -z-10" />
                        </div>

                        {/* Bio Content */}
                        <div>
                            <span className="badge mb-4">Meet Diamond</span>
                            <h2 className="mb-6">A Passion for Healing</h2>

                            <div className="space-y-6 text-gray">
                                <p className="text-lg leading-relaxed">
                                    Diamond Payne is a recent graduate of The Healing Arts Center in Saint Louis,
                                    bringing fresh expertise and a genuine passion for holistic wellness to the
                                    Cuba, Missouri community.
                                </p>

                                <p className="leading-relaxed">
                                    Her journey into massage therapy began with a simple belief: that the body
                                    has an incredible capacity to heal when given the right environment and care.
                                    This philosophy guides every treatment she provides.
                                </p>

                                <p className="leading-relaxed">
                                    Diamond's goal is to create a soothing and healing environment where clients
                                    can truly unwind, relieve built-up tension, and effectively manage pain and stress.
                                    Each session is carefully tailored to individual needs—whether you're recovering
                                    from chronic pain, healing from an injury, or simply seeking moments of
                                    profound relaxation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="badge mb-4">Philosophy</span>
                            <h2 className="mb-4">The Pure Diamond Approach</h2>
                            <div className="divider" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-[#FAF8F5] rounded-2xl flex items-center justify-center text-3xl">
                                    🤝
                                </div>
                                <h4 className="text-xl mb-3">Personalized Care</h4>
                                <p className="text-gray text-sm leading-relaxed">
                                    Every body is unique. We take time to understand your specific needs,
                                    history, and goals before creating your treatment plan.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-[#FAF8F5] rounded-2xl flex items-center justify-center text-3xl">
                                    🌿
                                </div>
                                <h4 className="text-xl mb-3">Holistic Wellness</h4>
                                <p className="text-gray text-sm leading-relaxed">
                                    True healing addresses mind, body, and spirit. Our treatments
                                    support your overall wellbeing, not just symptoms.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-[#FAF8F5] rounded-2xl flex items-center justify-center text-3xl">
                                    💎
                                </div>
                                <h4 className="text-xl mb-3">Expert Technique</h4>
                                <p className="text-gray text-sm leading-relaxed">
                                    With specialized training in multiple modalities, we bring
                                    professional expertise to every session.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Credentials */}
            <section className="py-16 bg-[#FAF8F5]">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="mb-8">Certifications & Training</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {certifications.map((cert) => (
                                <span
                                    key={cert}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-[#3D2B4F] shadow-sm"
                                >
                                    <span className="text-[#7A9E7E]">✓</span>
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-white">
                <div className="container">
                    <div className="bg-gradient-to-br from-[#3D2B4F] to-[#5A4570] rounded-3xl p-10 md:p-16 text-white text-center">
                        <h2 className="text-white mb-6">Ready to Start Your Healing Journey?</h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                            I'd love to meet you and discuss how massage therapy can support your
                            health and wellness goals.
                        </p>
                        <Link href="/contact" className="btn btn-secondary">
                            Book Your First Session
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
