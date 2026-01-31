import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Book Your Appointment | Pure Diamond Massage',
    description: 'Schedule your massage therapy appointment at Pure Diamond Massage in Cuba, MO. Contact Diamond Payne for personalized healing.',
};

export default function ContactPage() {
    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#3D2B4F] via-[#5A4570] to-[#3D2B4F] text-white overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C9A854]/10 rounded-full blur-3xl" />
                </div>
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                            <span className="text-[#C9A854]">✦</span>
                            <span className="text-sm font-medium">Get in Touch</span>
                        </span>
                        <h1 className="text-white mb-6">Book Your Session</h1>
                        <p className="text-xl text-white/80 leading-relaxed">
                            Ready to experience personalized healing? Reach out to schedule
                            your appointment or ask any questions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section bg-[#FAF8F5]">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <span className="badge mb-4">Contact</span>
                            <h2 className="mb-8">Let's Connect</h2>

                            <div className="space-y-8">
                                {/* Phone */}
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-sm text-2xl">
                                        📞
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-1">Phone</h4>
                                        <a
                                            href="tel:6363007711"
                                            className="text-[#3D2B4F] hover:text-[#C9A854] transition-colors text-lg font-medium"
                                        >
                                            (636) 300-7711
                                        </a>
                                        <p className="text-gray text-sm mt-1">Call or text anytime</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-sm text-2xl">
                                        ✉️
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-1">Email</h4>
                                        <a
                                            href="mailto:massagebydiamond@yahoo.com"
                                            className="text-[#3D2B4F] hover:text-[#C9A854] transition-colors"
                                        >
                                            massagebydiamond@yahoo.com
                                        </a>
                                        <p className="text-gray text-sm mt-1">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-sm text-2xl">
                                        📍
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-1">Location</h4>
                                        <p className="text-gray">
                                            108 Downey Place<br />
                                            Cuba, MO 65453
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-sm text-2xl">
                                        🕐
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-1">Hours</h4>
                                        <p className="text-gray">By Appointment Only</p>
                                        <p className="text-gray text-sm mt-1">Flexible scheduling available</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Proof */}
                            <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="text-[#C9A854] text-2xl">★★★★★</div>
                                    <div>
                                        <p className="font-medium text-[#2D2D2D]">5-Star Rated</p>
                                        <p className="text-gray text-sm">100% Client Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
                                <h3 className="text-2xl mb-6">Send a Message</h3>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="Your first name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="Your last name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="input"
                                            placeholder="(000) 000-0000"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="input"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                                            Service Interest
                                        </label>
                                        <select className="input">
                                            <option value="">Select a service...</option>
                                            <option value="swedish">Swedish Massage</option>
                                            <option value="deep-tissue">Deep Tissue Massage</option>
                                            <option value="myofascial">Myofascial Release</option>
                                            <option value="sports">Sports Massage</option>
                                            <option value="reflexology">Reflexology</option>
                                            <option value="cupping">Cupping Therapy</option>
                                            <option value="unsure">Not Sure - Need Guidance</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            className="input min-h-[120px] resize-none"
                                            placeholder="Tell us about your needs, any health concerns, or preferred appointment times..."
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary w-full">
                                        Send Message
                                    </button>

                                    <p className="text-center text-gray text-sm">
                                        Or call directly: <a href="tel:6363007711" className="text-[#3D2B4F] font-medium hover:text-[#C9A854]">(636) 300-7711</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section Placeholder */}
            <section className="bg-white py-12">
                <div className="container">
                    <div className="bg-[#FAF8F5] rounded-2xl p-8 text-center">
                        <div className="text-4xl mb-4">📍</div>
                        <h3 className="text-xl mb-2">Find Us in Cuba, MO</h3>
                        <p className="text-gray mb-4">108 Downey Place, Cuba, MO 65453</p>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=108+Downey+Place+Cuba+MO+65453"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
