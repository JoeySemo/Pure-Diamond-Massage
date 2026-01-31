import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
    const services = [
        {
            name: 'Swedish Massage',
            description: 'Experience deep relaxation with our signature Swedish Massage. Gentle, flowing strokes work to release tension and improve circulation.',
            image: '/images/massage-1.jpg', // Placeholder logic, will use colors/icons if images missing
            likes: '1.2k',
            comments: '342',
            icon: '🌿',
            time: '2 hrs ago',
            link: '/services'
        },
        {
            name: 'Deep Tissue Therapy',
            description: 'Got knots? Our Deep Tissue therapy targets chronic muscle tension. Perfect for recovery after a long week or intense workout.',
            likes: '856',
            comments: '128',
            icon: '💎',
            time: '4 hrs ago',
            link: '/services'
        },
        {
            name: 'Myofascial Release',
            description: 'Restore your range of motion. This specialized technique releases restrictions in the connective tissue.',
            likes: '920',
            comments: '56',
            icon: '✨',
            time: 'Yesterday',
            link: '/services'
        },
    ];

    return (
        <main className="min-h-screen bg-[#F0F2F5] pb-20">
            <Navigation />

            {/* Container for Profile Layout */}
            <div className="w-full max-w-[940px] mx-auto">

                {/* 1. Cover Photo Area */}
                <div className="relative w-full bg-white shadow-sm rounded-b-xl overflow-hidden">
                    {/* Cover Gradient/Image */}
                    <div className="h-[200px] md:h-[350px] bg-gradient-to-r from-[#1877F2] to-[#4A90E2] relative">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-md text-white font-medium text-sm flex items-center gap-2 cursor-pointer hover:bg-white/30 transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" /></svg>
                            Edit Cover Photo
                        </div>
                    </div>

                    {/* Profile Header Info */}
                    <div className="px-4 md:px-8 pb-4 relative">
                        <div className="flex flex-col md:flex-row items-center md:items-end gap-4 -mt-[84px] md:-mt-[30px] mb-4">
                            {/* Profile Picture (Logo) */}
                            <div className="relative z-10 p-1 bg-white rounded-full">
                                <div className="w-[168px] h-[168px] rounded-full bg-white overflow-hidden border-4 border-white shadow-md relative">
                                    <img
                                        src="/images/logo.png"
                                        alt="Profile"
                                        className="w-full h-full object-cover animate-pulse-ring"
                                    />
                                    {/* Online Status Indicator */}
                                    <div className="absolute bottom-4 right-4 w-6 h-6 bg-[#42B72A] rounded-full border-4 border-white" title="Open Now"></div>
                                </div>
                            </div>

                            {/* Name & Headline */}
                            <div className="flex-1 text-center md:text-left mb-2 md:mb-8 pt-4 md:pt-12">
                                <h1 className="text-3xl font-bold text-[#050505] flex items-center justify-center md:justify-start gap-2">
                                    Pure Diamond Massage
                                    <span className="text-[#1877F2]">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    </span>
                                </h1>
                                <p className="text-[#65676B] font-semibold text-lg">Massage Service · Cuba, Missouri</p>
                                <div className="flex items-center justify-center md:justify-start gap-[-8px] mt-2">
                                    <div className="flex -space-x-2 overflow-hidden">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-gray-200" />
                                        ))}
                                    </div>
                                    <span className="ml-3 text-sm text-[#65676B] hover:underline cursor-pointer">1.2k friends like this</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 mb-4 md:mb-8">
                                <Link href="/contact" className="btn btn-primary gap-2 px-4">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                    Message
                                </Link>
                                <button className="btn btn-secondary gap-2 px-4">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                                    Like
                                </button>
                            </div>
                        </div>

                        <div className="border-t border-[#CED0D4] pt-1">
                            {/* Profile Navigation Tabs */}
                            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                                {['Posts', 'About', 'Mentions', 'Reviews', 'Followers', 'Photos'].map((tab, i) => (
                                    <div
                                        key={tab}
                                        className={`px-4 py-3 font-semibold text-[15px] cursor-pointer whitespace-nowrap border-b-[3px] transition-colors ${i === 0 ? 'text-[#1877F2] border-[#1877F2]' : 'text-[#65676B] border-transparent hover:bg-[#F0F2F5] rounded-lg'}`}
                                    >
                                        {tab}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Main Layout: Sidebar + Feed */}
                <div className="flex flex-col md:flex-row gap-4 mt-4 px-4 md:px-0">

                    {/* Left Sidebar (Intro) */}
                    <div className="w-full md:w-[360px] flex-shrink-0 space-y-4">
                        {/* Intro Card */}
                        <div className="social-card p-4">
                            <h2 className="text-xl font-bold mb-3 text-[#050505]">Intro</h2>
                            <p className="text-center text-sm text-[#050505] mb-4">Based in Cuba, MO. Healing bodies one session at a time. ✨</p>
                            <div className="space-y-3 mb-4">
                                <Link href="/contact" className="w-full btn btn-secondary bg-[#F0F2F5] hover:bg-[#D8DADF]">Book Appointment</Link>
                            </div>

                            <div className="space-y-3 text-[15px]">
                                <div className="flex items-center gap-3 text-[#050505]">
                                    <svg className="w-5 h-5 text-[#8C939D]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" /><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" /></svg>
                                    <span>Relaxation Specialist at <span className="font-semibold">Pure Diamond</span></span>
                                </div>
                                <div className="flex items-center gap-3 text-[#050505]">
                                    <svg className="w-5 h-5 text-[#8C939D]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                    <span>From <span className="font-semibold">Cuba, Missouri</span></span>
                                </div>
                                <div className="flex items-center gap-3 text-[#050505]">
                                    <svg className="w-5 h-5 text-[#8C939D]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                                    <span>Always Open (Online Booking)</span>
                                </div>
                            </div>
                        </div>

                        {/* Photos Side Preview */}
                        <div className="social-card p-4">
                            <div className="flex justify-between items-center mb-3">
                                <h2 className="text-xl font-bold text-[#050505]">Photos</h2>
                                <a href="#" className="text-[#1877F2] text-[15px] hover:bg-[#F0F2F5] px-2 py-1 rounded">See All Photos</a>
                            </div>
                            <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
                                <div className="aspect-square bg-[#E4E6EB] animate-pulse"></div>
                                <div className="aspect-square bg-[#E4E6EB] animate-pulse"></div>
                                <div className="aspect-square bg-[#E4E6EB] animate-pulse"></div>
                                <div className="aspect-square bg-[#E4E6EB] animate-pulse"></div>
                                <div className="aspect-square bg-[#E4E6EB] animate-pulse"></div>
                                <div className="aspect-square bg-[#E4E6EB] animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Feed) */}
                    <div className="flex-1 space-y-4">
                        {/* "Create Post" Box (Simulated) */}
                        <div className="social-card p-3">
                            <div className="flex gap-2 mb-3 border-b border-[#E4E6EB] pb-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                                    <img src="/images/logo.png" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 bg-[#F0F2F5] rounded-full px-4 flex items-center text-[#65676B] hover:bg-[#E4E6EB] cursor-pointer">
                                    What treatment do you need today?
                                </div>
                            </div>
                            <div className="flex justify-between px-2">
                                <div className="flex items-center gap-2 py-2 px-4 hover:bg-[#F0F2F5] rounded-lg cursor-pointer">
                                    <span className="text-[#F3425F]">🎥</span> <span className="text-[#65676B] font-semibold text-[14px]">Live Video</span>
                                </div>
                                <div className="flex items-center gap-2 py-2 px-4 hover:bg-[#F0F2F5] rounded-lg cursor-pointer">
                                    <span className="text-[#45BD62]">🖼️</span> <span className="text-[#65676B] font-semibold text-[14px]">Photo/Video</span>
                                </div>
                                <div className="flex items-center gap-2 py-2 px-4 hover:bg-[#F0F2F5] rounded-lg cursor-pointer">
                                    <span className="text-[#F7B928]">😊</span> <span className="text-[#65676B] font-semibold text-[14px]">Feeling/Activity</span>
                                </div>
                            </div>
                        </div>

                        {/* Pinned Post */}
                        <div className="social-card">
                            {/* Post Header */}
                            <div className="p-3 pl-4 flex items-start justify-between">
                                <div className="flex gap-2">
                                    <div className="w-10 h-10 rounded-full border border-gray-200 overflow-hidden cursor-pointer">
                                        <img src="/images/logo.png" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#050505] text-[15px] cursor-pointer hover:underline">Pure Diamond Massage</h3>
                                        <div className="flex items-center gap-1 text-xs text-[#65676B]">
                                            <span>Pinned Post</span>
                                            <span>·</span>
                                            <svg className="w-3 h-3 text-[#65676B]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 hover:bg-[#F0F2F5] rounded-full cursor-pointer text-[#65676B]">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
                                </div>
                            </div>

                            {/* Post Content */}
                            <div className="px-4 pb-2 text-[15px] text-[#050505]">
                                Welcome to my new page! 💎 <br />
                                I'm excited to share my passion for healing with you all. Book your session today and experience the difference. #MassageTherapy #CubaMO #Relaxation
                            </div>

                            {/* Post Image (Placeholder Gradient) */}
                            <div className="w-full h-[300px] bg-gradient-to-br from-[#1877F2] to-[#6BC5F8] flex items-center justify-center text-white text-4xl font-bold">
                                New Beginnings!
                            </div>

                            {/* Engagement Stats */}
                            <div className="mx-4 py-2 border-b border-[#CED0D4] flex justify-between text-[#65676B] text-[14px]">
                                <div className="flex items-center gap-1">
                                    <div className="bg-[#1877F2] rounded-full p-1 w-4 h-4 flex items-center justify-center">
                                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>
                                    </div>
                                    <span>You and 84 others</span>
                                </div>
                                <div className="flex gap-4">
                                    <span>24 Comments</span>
                                    <span>6 Shares</span>
                                </div>
                            </div>

                            {/* Action Bar */}
                            <div className="mx-4 py-1 flex items-center justify-between">
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#F0F2F5] rounded-md text-[#65676B] font-semibold text-[14px]">
                                    👍 Like
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#F0F2F5] rounded-md text-[#65676B] font-semibold text-[14px]">
                                    💬 Comment
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#F0F2F5] rounded-md text-[#65676B] font-semibold text-[14px]">
                                    ↗ Share
                                </button>
                            </div>
                        </div>

                        {/* Service Cards as Posts */}
                        {services.map((service, index) => (
                            <div key={index} className="social-card">
                                {/* Post Header */}
                                <div className="p-3 pl-4 flex items-start justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-10 h-10 rounded-full border border-gray-200 overflow-hidden cursor-pointer">
                                            <img src="/images/logo.png" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-[#050505] text-[15px] cursor-pointer hover:underline">Pure Diamond Services</h3>
                                            <div className="flex items-center gap-1 text-xs text-[#65676B]">
                                                <span>{service.time}</span>
                                                <span>·</span>
                                                <svg className="w-3 h-3 text-[#65676B]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 hover:bg-[#F0F2F5] rounded-full cursor-pointer text-[#65676B]">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
                                    </div>
                                </div>

                                {/* Post Content */}
                                <div className="px-4 pb-2 text-[15px] text-[#050505]">
                                    <span className="font-bold block mb-1 text-lg">{service.name} {service.icon}</span>
                                    {service.description}
                                </div>

                                {/* Post "Image" (Service Visual) */}
                                <div className="w-full h-[250px] bg-[#F0F2F5] relative group cursor-pointer overflow-hidden">
                                    {/* Simple decorative background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                                        <span className="text-8xl opacity-20 filter grayscale">{service.icon}</span>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition">
                                        <Link href={service.link} className="btn btn-primary px-6 py-2 shadow-lg scale-95 group-hover:scale-100 transition-transform">
                                            Book This Service
                                        </Link>
                                    </div>
                                </div>

                                {/* Engagement Stats */}
                                <div className="mx-4 py-2 border-b border-[#CED0D4] flex justify-between text-[#65676B] text-[14px]">
                                    <div className="flex items-center gap-1">
                                        <div className="bg-[#1877F2] rounded-full p-1 w-4 h-4 flex items-center justify-center">
                                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>
                                        </div>
                                        <span>{service.likes}</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span>{service.comments} Comments</span>
                                    </div>
                                </div>

                                {/* Action Bar */}
                                <div className="mx-4 py-1 flex items-center justify-between">
                                    <Link href={service.link} className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#F0F2F5] rounded-md text-[#65676B] font-semibold text-[14px]">
                                        👍 Like
                                    </Link>
                                    <Link href="/contact" className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#F0F2F5] rounded-md text-[#65676B] font-semibold text-[14px]">
                                        📅 Book Now
                                    </Link>
                                    <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#F0F2F5] rounded-md text-[#65676B] font-semibold text-[14px]">
                                        ↗ Share
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
