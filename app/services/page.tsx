import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Our Services | Pure Diamond Massage',
    description: 'Explore our range of massage therapy services including Swedish, Deep Tissue, Myofascial Release, Sports Massage, Reflexology, and Cupping.',
};

export default function ServicesPage() {
    const services = [
        {
            name: 'Swedish Massage',
            description: 'The classic relaxation massage. Long, flowing strokes combined with gentle kneading promote deep relaxation, improve circulation, and ease muscle tension. Perfect for those new to massage or seeking pure relaxation.',
            icon: '🌿',
            duration: '60-90 min',
            benefits: ['Deep Relaxation', 'Improved Circulation', 'Stress Relief', 'Better Sleep']
        },
        {
            name: 'Deep Tissue Massage',
            description: 'Focused pressure targets the deeper layers of muscle and connective tissue. Ideal for releasing chronic patterns of tension, breaking up scar tissue, and addressing stubborn knots that resist lighter work.',
            icon: '💎',
            duration: '60-90 min',
            benefits: ['Chronic Pain Relief', 'Muscle Recovery', 'Improved Mobility', 'Tension Release']
        },
        {
            name: 'Myofascial Release',
            description: 'A specialized technique that focuses on releasing fascial restrictions throughout the body. By applying gentle, sustained pressure, this work can restore mobility, reduce pain, and improve overall function.',
            icon: '✨',
            duration: '60-90 min',
            benefits: ['Fascial Release', 'Pain Reduction', 'Increased Range of Motion', 'Postural Improvement']
        },
        {
            name: 'Sports Massage',
            description: 'Designed for athletes and active individuals, this therapeutic approach combines techniques to enhance performance, prevent injury, and speed recovery. Tailored to your specific sport and training cycle.',
            icon: '⚡',
            duration: '60-90 min',
            benefits: ['Performance Enhancement', 'Injury Prevention', 'Faster Recovery', 'Flexibility']
        },
        {
            name: 'Reflexology',
            description: 'This focused foot therapy applies pressure to specific reflex points that correspond to organs and systems throughout the body. A deeply relaxing treatment that promotes whole-body balance and wellness.',
            icon: '🦶',
            duration: '30-60 min',
            benefits: ['Whole-Body Balance', 'Stress Reduction', 'Improved Sleep', 'Enhanced Wellbeing']
        },
        {
            name: 'Cupping Therapy',
            description: 'An ancient healing technique that uses suction cups to lift tissue, increase blood flow, and promote healing. Often combined with massage for enhanced therapeutic benefits. Available as a standalone or add-on service.',
            icon: '🔮',
            duration: 'Add-on',
            benefits: ['Increased Blood Flow', 'Muscle Recovery', 'Detoxification', 'Pain Relief']
        }
    ];

    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#3D2B4F] via-[#5A4570] to-[#3D2B4F] text-white overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#C9A854]/10 rounded-full blur-3xl" />
                </div>
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                            <span className="text-[#C9A854]">✦</span>
                            <span className="text-sm font-medium">Therapeutic Services</span>
                        </span>
                        <h1 className="text-white mb-6">Our Services</h1>
                        <p className="text-xl text-white/80 leading-relaxed">
                            Each treatment is customized to your unique needs, combining expert technique
                            with genuine care to support your journey toward healing and wellness.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="section bg-[#FAF8F5]">
                <div className="container">
                    <div className="space-y-8">
                        {services.map((service, index) => (
                            <div
                                key={service.name}
                                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="grid md:grid-cols-12 gap-8 items-start">
                                    {/* Icon */}
                                    <div className="md:col-span-1">
                                        <div className="w-16 h-16 flex items-center justify-center text-3xl bg-[#FAF8F5] rounded-xl">
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="md:col-span-7">
                                        <div className="flex items-center gap-3 mb-3">
                                            <h2 className="text-2xl">{service.name}</h2>
                                            <span className="text-xs font-semibold px-3 py-1 bg-[#C9A854]/20 text-[#A68B3D] rounded-full uppercase tracking-wider">
                                                {service.duration}
                                            </span>
                                        </div>
                                        <p className="text-gray leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Benefits */}
                                    <div className="md:col-span-4">
                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-[#3D2B4F] mb-3">
                                            Benefits
                                        </h4>
                                        <ul className="space-y-2">
                                            {service.benefits.map((benefit) => (
                                                <li key={benefit} className="flex items-center gap-2 text-sm text-gray">
                                                    <span className="text-[#7A9E7E]">✓</span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section className="section bg-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="mb-6">Ready to Experience the Difference?</h2>
                        <p className="text-lg mb-8">
                            Contact us to discuss your needs and book your personalized session.
                            We'll help you choose the perfect treatment for your goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary">
                                Book Your Session
                            </Link>
                            <a href="tel:6363007711" className="btn btn-outline">
                                Call (636) 300-7711
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
