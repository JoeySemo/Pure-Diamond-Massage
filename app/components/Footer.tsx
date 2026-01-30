import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="container section-padding">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* About Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 font-display">Pure Diamond Massage</h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Personalized massage therapy focused on healing, tension relief, and pain management in Cuba, MO.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                                <img src="/images/logo.png" alt="Pure Diamond Massage" className="h-12 w-auto opacity-80" />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Home</Link></li>
                            <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Services</Link></li>
                            <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">About</Link></li>
                            <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-slate-300">
                            <li className="flex items-start gap-3">
                                <span className="text-purple-400 mt-1">📍</span>
                                <span>108 Downey Place<br />Cuba, MO 65453</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-purple-400">📞</span>
                                <a href="tel:6363007711" className="hover:text-white transition-colors">(636) 300-7711</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-purple-400">✉️</span>
                                <a href="mailto:massagebydiamond@yahoo.com" className="hover:text-white transition-colors">massagebydiamond@yahoo.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Pure Diamond Massage. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
