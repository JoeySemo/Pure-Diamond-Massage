'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredDate: '',
        service: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create mailto link with form data
        const subject = encodeURIComponent(`Appointment Request from ${formData.name}`);
        const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Service: ${formData.service || 'Not specified'}
Preferred Date/Time: ${formData.preferredDate || 'Not specified'}

Message:
${formData.message}
    `);

        window.location.href = `mailto:massagebydiamond@yahoo.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[hsl(280,40%,25%)] to-[hsl(280,35%,35%)] text-white">
                <div className="container text-center">
                    <h1 className="text-white mb-6">Contact & Book Appointment</h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Ready to start your healing journey? Get in touch to schedule your personalized massage therapy session.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-4xl mb-8">Get in Touch</h2>

                            <div className="space-y-6 mb-8">
                                <div className="card">
                                    <div className="flex items-start gap-4">
                                        <span className="text-4xl">📞</span>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Phone</h3>
                                            <a
                                                href="tel:6363007711"
                                                className="text-lg text-[hsl(280,40%,25%)] hover:underline font-medium"
                                            >
                                                (636) 300-7711
                                            </a>
                                            <p className="text-gray-600 mt-1">Call for immediate booking</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="flex items-start gap-4">
                                        <span className="text-4xl">✉️</span>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Email</h3>
                                            <a
                                                href="mailto:massagebydiamond@yahoo.com"
                                                className="text-lg text-[hsl(280,40%,25%)] hover:underline break-all"
                                            >
                                                massagebydiamond@yahoo.com
                                            </a>
                                            <p className="text-gray-600 mt-1">Send us a message anytime</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="flex items-start gap-4">
                                        <span className="text-4xl">📍</span>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Location</h3>
                                            <p className="text-lg">108 Downey Place<br />Cuba, MO 65453</p>
                                            <p className="text-gray-600 mt-1">By appointment only</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="flex items-start gap-4">
                                        <span className="text-4xl">🕐</span>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Hours</h3>
                                            <p className="text-lg">By Appointment Only</p>
                                            <p className="text-gray-600 mt-1">Flexible scheduling available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="card bg-gradient-to-br from-[hsl(145,25%,88%)] to-[hsl(210,20%,98%)]">
                                <h3 className="text-xl font-semibold mb-3">Located in Cuba, MO</h3>
                                <p className="text-gray-600">
                                    Conveniently located in Cuba, Missouri. Easy access with ample parking available.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="card">
                                <h2 className="text-3xl mb-6">Request an Appointment</h2>

                                {submitted && (
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                                        <p className="text-green-800">
                                            Your email client should open shortly. If it doesn\'t, please email us directly at
                                            massagebydiamond@yahoo.com or call (636) 300-7711.
                                        </p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block font-semibold mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(280,40%,25%)]"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block font-semibold mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(280,40%,25%)]"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block font-semibold mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(280,40%,25%)]"
                                            placeholder="(XXX) XXX-XXXX"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block font-semibold mb-2">
                                            Preferred Service
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(280,40%,25%)]"
                                        >
                                            <option value="">Select a service...</option>
                                            <option value="Swedish Massage">Swedish Massage</option>
                                            <option value="Deep Tissue">Deep Tissue</option>
                                            <option value="Myofascial Massage">Myofascial Massage</option>
                                            <option value="Sports Massage">Sports Massage</option>
                                            <option value="Reflexology">Reflexology</option>
                                            <option value="Cupping">Cupping</option>
                                            <option value="Not Sure">Not Sure / Consultation</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="preferredDate" className="block font-semibold mb-2">
                                            Preferred Date/Time
                                        </label>
                                        <input
                                            type="text"
                                            id="preferredDate"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(280,40%,25%)]"
                                            placeholder="e.g., Next Tuesday afternoon"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block font-semibold mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(280,40%,25%)]"
                                            placeholder="Tell us about your needs, any specific concerns, or questions you have..."
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary w-full text-lg justify-center">
                                        Send Appointment Request
                                    </button>

                                    <p className="text-sm text-gray-500 text-center">
                                        Or call us directly at <a href="tel:6363007711" className="text-[hsl(280,40%,25%)] hover:underline font-medium">(636) 300-7711</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
