import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Massage Services",
    description:
        "Explore massage therapy services at Pure Diamond Massage in Cuba, MO. Swedish, Deep Tissue, Sports Massage, and more. Book your appointment today — call or text (636) 300-7711.",
    keywords: [
        "massage services Cuba MO",
        "Swedish massage Cuba Missouri",
        "deep tissue massage Cuba MO",
        "sports massage Cuba Missouri",
        "therapeutic massage services Cuba MO",
        "relaxation massage Cuba Missouri",
        "30 minute massage Cuba MO",
        "60 minute massage Cuba MO",
        "90 minute massage Cuba Missouri",
    ],
    alternates: {
        canonical: "https://solyn.org/services",
    },
    openGraph: {
        title: "Massage Services | Pure Diamond Massage | Cuba, MO",
        description:
            "Swedish, Deep Tissue, Sports Massage & more in Cuba, MO. Book your session at Pure Diamond Massage — call or text (636) 300-7711.",
        url: "https://solyn.org/services",
    },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
