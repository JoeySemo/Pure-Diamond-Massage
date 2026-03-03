import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Diamond",
    description:
        "Meet Diamond, your licensed massage therapist in Cuba, MO. Learn about her training, approach, and passion for helping clients feel their best at Pure Diamond Massage.",
    keywords: [
        "massage therapist Cuba MO",
        "licensed massage therapist Cuba Missouri",
        "Diamond massage therapist",
        "Pure Diamond Massage about",
        "massage therapy Cuba MO therapist",
        "therapeutic massage Cuba Missouri",
    ],
    alternates: {
        canonical: "https://solyn.org/about",
    },
    openGraph: {
        title: "About Diamond | Pure Diamond Massage | Cuba, MO",
        description:
            "Meet Diamond, licensed massage therapist in Cuba, MO. Passionate about helping clients heal, relax, and feel their best.",
        url: "https://solyn.org/about",
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
