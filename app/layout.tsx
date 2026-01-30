import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Pure Diamond Massage | Cuba, MO | Professional Massage Therapy",
    description: "Pure Diamond Massage in Cuba, MO offers Swedish massage, myofascial massage, deep tissue, sports massage, reflexology, and cupping. Personalized healing and tension relief by Diamond Payne.",
    keywords: ["massage therapy", "Cuba MO", "Swedish massage", "deep tissue", "sports massage", "reflexology", "cupping", "myofascial massage", "Diamond Payne"],
    authors: [{ name: "Pure Diamond Massage" }],
    openGraph: {
        title: "Pure Diamond Massage | Cuba, MO",
        description: "Professional massage therapy services in Cuba, MO. Specializing in personalized healing and tension relief.",
        type: "website",
        locale: "en_US",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
