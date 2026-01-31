import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#2A1D37] text-white">
            {/* Main Footer */}
            <div className="container section">
                <div className="grid md:grid-cols-12 gap-12">
                    {/* Brand Column */}
                    <div className="md:col-span-4">
                        <img
                            src="/images/logo.png"
                            alt="Pure Diamond Massage"
                            className="mb-6 brightness-0 invert opacity-90"
                        />
                        <p className="text-white/70 leading-relaxed mb-6">
                            Experience personalized massage therapy in a serene,
                            healing environment. Your journey to wellness begins here.
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="text-[#C9A854] text-lg">★★★★★</span>
                            <span className="text-white/60 text-sm">5.0 Rating</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2 md:col-start-6">
                        <h4 className="text-white font-display text-lg mb-6">Explore</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-white/70 hover:text-[#C9A854] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-white/70 hover:text-[#C9A854] transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-white/70 hover:text-[#C9A854] transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white/70 hover:text-[#C9A854] transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-display text-lg mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li className="text-white/70">Swedish Massage</li>
                            <li className="text-white/70">Deep Tissue</li>
                            <li className="text-white/70">Myofascial Release</li>
                            <li className="text-white/70">Sports Massage</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-display text-lg mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-[#C9A854] mt-1">📍</span>
                                <span className="text-white/70">
                                    108 Downey Place<br />
                                    Cuba, MO 65453
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#C9A854]">📞</span>
                                <a href="tel:6363007711" className="text-white/70 hover:text-[#C9A854] transition-colors">
                                    (636) 300-7711
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#C9A854]">✉️</span>
                                <a href="mailto:massagebydiamond@yahoo.com" className="text-white/70 hover:text-[#C9A854] transition-colors text-sm">
                                    massagebydiamond@yahoo.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-white/10">
                <div className="container py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-white/50 text-sm">
                            © {currentYear} Pure Diamond Massage. All rights reserved.
                        </p>
                        <p className="text-white/50 text-sm">
                            By Appointment Only
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
