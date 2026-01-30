import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'About Diamond Payne | Pure Diamond Massage',
    description: 'Learn about Diamond Payne, a recent graduate of The Healing Arts Center in Saint Louis, specializing in personalized massage therapy in Cuba, MO.',
};

export default function AboutPage() {
    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[hsl(280,40%,25%)] to-[hsl(280,35%,35%)] text-white">
                <div className="container text-center">
                    <h1 className="text-white mb-6">About Diamond Payne</h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Bringing professional healing and personalized care to Cuba, Missouri
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding">
                <div className="container max-w-4xl">
                    {/* Introduction */}
                    <div className="card mb-12">
                        <h2 className="text-4xl mb-6">Your Healing Journey Starts Here</h2>
                        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                            Diamond Payne is a recent graduate of <strong>The Healing Arts Center in Saint Louis</strong>,
                            bringing fresh expertise, dedication, and genuine passion for healing to the Cuba, MO community.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Founded on September 3, 2025, Pure Diamond Massage represents Diamond\'s commitment to creating
                            a welcoming space where clients can experience true healing and relaxation.
                        </p>
                    </div>

                    {/* Philosophy */}
                    <div className="bg-gradient-to-br from-[hsl(145,25%,88%)] to-[hsl(210,20%,98%)] p-8 md:p-12 rounded-2xl mb-12">
                        <h3 className="text-3xl mb-6">Philosophy & Approach</h3>
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                            Diamond\'s goal is to create a <strong>soothing and healing environment</strong> where clients
                            can unwind, relieve tension, and effectively manage pain and stress.
                        </p>
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                            Each massage session is carefully <strong>tailored to individual needs</strong>—whether you\'re
                            recovering from chronic pain, healing from an injury, or simply seeking a moment of deep relaxation.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            This personalized approach ensures that every client receives exactly the care and attention
                            they need to achieve their wellness goals.
                        </p>
                    </div>

                    {/* Training & Expertise */}
                    <div className="card mb-12">
                        <h3 className="text-3xl mb-6">Training & Expertise</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <span className="text-3xl">🎓</span>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">The Healing Arts Center, Saint Louis</h4>
                                    <p className="text-gray-600">
                                        Recent graduate with comprehensive training in multiple massage therapy modalities
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-3xl">💎</span>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">Specialized Techniques</h4>
                                    <p className="text-gray-600 mb-3">
                                        Expertise in six distinct massage therapy approaches:
                                    </p>
                                    <ul className="grid md:grid-cols-2 gap-2">
                                        {['Swedish Massage', 'Myofascial Massage', 'Deep Tissue', 'Sports Massage', 'Reflexology', 'Cupping'].map(technique => (
                                            <li key={technique} className="flex items-center gap-2 text-gray-700">
                                                <span className="text-[hsl(280,40%,25%)]">✓</span>
                                                {technique}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <div className="glass p-12 rounded-2xl text-center mb-12">
                        <div className="text-6xl mb-4">⭐⭐⭐⭐⭐</div>
                        <h3 className="text-3xl mb-4">100% Recommended</h3>
                        <p className="text-xl text-gray-600">
                            Based on 6 reviews from satisfied clients
                        </p>
                        <p className="text-gray-500 mt-2">
                            Diamond\'s commitment to personalized care has earned her excellent reviews from the Cuba, MO community
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="card bg-gradient-to-br from-[hsl(280,40%,25%)] to-[hsl(280,35%,35%)] text-white text-center">
                        <h3 className="text-3xl text-white mb-4">Experience the Pure Diamond Difference</h3>
                        <p className="text-xl text-white/90 mb-8">
                            Whether you\'re seeking relief from chronic pain or a peaceful escape from daily stress,
                            Diamond is here to help you achieve your wellness goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-secondary text-lg">
                                Book Your Session
                            </Link>
                            <Link href="/services" className="btn btn-outline text-lg !border-white !text-white hover:!bg-white hover:!text-[hsl(280,40%,25%)]">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
