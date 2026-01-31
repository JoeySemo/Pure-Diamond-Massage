import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="mt-8 pb-8 text-[#65676B] text-[13px]">
            <div className="w-full max-w-[940px] mx-auto px-4 border-t border-[#CED0D4] pt-4">
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/services" className="hover:underline">Services</Link>
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                    <span className="hover:underline cursor-pointer">Privacy</span>
                    <span className="hover:underline cursor-pointer">Terms</span>
                    <span className="hover:underline cursor-pointer">Advertising</span>
                    <span className="hover:underline cursor-pointer">Ad Choices</span>
                    <span className="hover:underline cursor-pointer">Cookies</span>
                    <span className="hover:underline cursor-pointer">More</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>Meta © 2026 (Not really, it's Pure Diamond Massage 💎)</span>
                </div>
            </div>
        </footer>
    );
}
