import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

export const metadata: Metadata = {
    title: "Pure Diamond Massage | Cuba, MO | Therapeutic Massage & Wellness",
    description: "Professional massage therapy in Cuba, MO. Swedish, Deep Tissue, Sports Massage & more. Located inside Roots 46 Salon. Call or text (636) 300-7711 to book.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
            <body className="font-sans antialiased">
                <Header />
                {children}
            </body>
        </html>
    );
}
