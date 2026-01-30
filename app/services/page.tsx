import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Our Services | Pure Diamond Massage',
    description: 'Professional massage therapy services including Swedish massage, deep tissue, myofascial massage, sports massage, reflexology, and cupping in Cuba, MO.',
};

export default function ServicesPage() {
    const services = [
        {
            name: 'Swedish Massage',
            icon: '🌊',
            description: 'The classic massage therapy technique that promotes deep relaxation and stress relief.',
            details: 'Swedish massage uses long, flowing strokes with gentle to moderate pressure. This technique improves circulation, reduces muscle tension, and promotes overall relaxation. Perfect for those new to massage therapy or seeking a calming, restorative experience.',
            benefits: ['Reduces stress and anxiety', 'Improves circulation', 'Promotes relaxation', 'Relieves muscle tension']
        },
        {
            name: 'Deep Tissue Massage',
            icon: '💪',
            description: 'Intensive therapy targeting chronic muscle tension and deep-seated knots.',
            details: 'Deep tissue massage uses slower strokes and firm pressure to reach deeper layers of muscle and connective tissue. This technique is especially effective for chronic aches and pains, contracted areas like stiff neck, upper back, low back pain, and sore shoulders.',
            benefits: ['Relieves chronic pain', 'Breaks up scar tissue', 'Improves mobility', 'Reduces inflammation']
        },
        {
            name: 'Myofascial Massage',
            icon: '🎯',
            description: 'Specialized technique focusing on releasing fascial restrictions.',
            details: 'Myofascial release is a safe and effective hands-on technique that involves applying gentle sustained pressure to the myofascial connective tissue restrictions. This helps eliminate pain and restore motion, allowing the body to heal naturally.',
            benefits: ['Improves range of motion', 'Reduces pain', 'Enhances flexibility', 'Promotes healing']
        },
        {
            name: 'Sports Massage',
            icon: '⚡',
            description: 'Performance-focused therapy designed for athletes and active individuals.',
            details: 'Sports massage combines various techniques to enhance athletic performance, prevent injuries, and support recovery. Whether you\'re training for competition or staying active, sports massage helps maintain peak physical condition.',
            benefits: ['Enhances performance', 'Prevents injuries', 'Speeds recovery', 'Increases flexibility']
        },
        {
            name: 'Reflexology',
            icon: '🦶',
            description: 'Pressure point therapy on the feet promoting whole-body wellness.',
            details: 'Reflexology is based on the principle that reflex points on the feet correspond to different organs and systems in the body. By applying pressure to these points, reflexology promotes healing and balance throughout the entire body.',
            benefits: ['Promotes relaxation', 'Improves circulation', 'Supports body balance', 'Reduces pain']
        },
        {
            name: 'Cupping Therapy',
            icon: '🔮',
            description: 'Ancient healing practice using suction to enhance circulation.',
            details: 'Cupping therapy involves placing special cups on the skin to create suction. This ancient technique helps improve blood flow, reduce inflammation, promote cell repair, and create new connective tissues. It\'s excellent for pain relief and relaxation.',
            benefits: ['Increases blood flow', 'Reduces inflammation', 'Relieves muscle tension', 'Promotes healing']
        }
    ];

    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[hsl(280,40%,25%)] to-[hsl(280,35%,35%)] text-white">
                <div className="container text-center">
                    <h1 className="text-white mb-6">Our Services</h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Personalized massage therapy tailored to your unique needs. Whether you\'re recovering
                        from chronic pain, healing from an injury, or seeking deep relaxation, Diamond has the
                        expertise to help.
                    </p>
                </div>
            </section>

            {/* Services Detail Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <div
                                key={service.name}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                            >
                                <div className="flex-1">
                                    <div className="card">
                                        <div className="text-6xl mb-4">{service.icon}</div>
                                        <h2 className="text-3xl mb-4">{service.name}</h2>
                                        <p className="text-xl text-gray-700 mb-4">{service.description}</p>
                                        <p className="text-gray-600 mb-6">{service.details}</p>

                                        <div className="bg-[hsl(145,25%,88%)] p-6 rounded-lg">
                                            <h4 className="font-semibold text-lg mb-3">Benefits:</h4>
                                            <ul className="grid md:grid-cols-2 gap-2">
                                                {service.benefits.map(benefit => (
                                                    <li key={benefit} className="flex items-center gap-2">
                                                        <span className="text-[hsl(145,20%,45%)]">✓</span>
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 text-center">
                        <div className="glass p-12 rounded-2xl max-w-3xl mx-auto">
                            <h3 className="text-3xl mb-4">Ready to Experience Relief?</h3>
                            <p className="text-xl text-gray-600 mb-8">
                                Each session is personalized to your specific needs and goals.
                                Book your appointment today and start your journey to wellness.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact" className="btn btn-primary text-lg">
                                    Schedule Appointment
                                </Link>
                                <a href="tel:6363007711" className="btn btn-outline text-lg">
                                    Call (636) 300-7711
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
