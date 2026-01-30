import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[hsl(280,40%,25%)] to-[hsl(280,35%,35%)] text-white">
            <div className="container section-padding">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* About Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Pure Diamond Massage</h3>
                        <p className="text-white/80 mb-4">
                            Personalized massage therapy focused on healing, tension relief, and pain management in Cuba, MO.
                        </p>
                        <img src="/images/logo.png" alt="Pure Diamond Massage" className="h-16 w-auto opacity-80" />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About</Link></li>
                            <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-white/80">
                            <li className="flex items-start gap-2">
                                <span className="text-[hsl(45,85%,65%)]">📍</span>
                                <span>108 Downey Place<br />Cuba, MO 65453</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[hsl(45,85%,65%)]">📞</span>
                                <a href="tel:6363007711" className="hover:text-white transition-colors">(636) 300-7711</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[hsl(45,85%,65%)]">✉️</span>
                                <a href="mailto:massagebydiamond@yahoo.com" className="hover:text-white transition-colors">massagebydiamond@yahoo.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
                    <p>&copy; {new Date().getFullYear()} Pure Diamond Massage. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
