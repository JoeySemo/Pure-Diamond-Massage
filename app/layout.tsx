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
    metadataBase: new URL("https://solyn.org"),
    title: {
        default: "Pure Diamond Massage | Cuba, MO | Therapeutic Massage & Wellness",
        template: "%s | Pure Diamond Massage | Cuba, MO",
    },
    description:
        "Professional massage therapy in Cuba, MO. Book Swedish, Deep Tissue, Sports Massage & more with Diamond. Located inside Roots 46 Salon at 108 Downey Place. Call (636) 300-7711.",
    keywords: [
        "massage therapy Cuba MO",
        "massage Cuba Missouri",
        "therapeutic massage Cuba MO",
        "deep tissue massage Cuba Missouri",
        "Swedish massage Cuba MO",
        "sports massage Cuba Missouri",
        "relaxation massage Cuba MO",
        "massage therapist Cuba Missouri",
        "Pure Diamond Massage",
        "Roots 46 Salon Cuba MO",
        "massage near me Cuba MO",
        "Crawford County massage",
    ],
    authors: [{ name: "Pure Diamond Massage" }],
    creator: "Pure Diamond Massage",
    publisher: "Pure Diamond Massage",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://solyn.org",
        siteName: "Pure Diamond Massage",
        title: "Pure Diamond Massage | Cuba, MO | Therapeutic Massage & Wellness",
        description:
            "Professional massage therapy in Cuba, MO. Book Swedish, Deep Tissue, Sports Massage & more. Located inside Roots 46 Salon. Call (636) 300-7711.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pure Diamond Massage | Cuba, MO",
        description:
            "Professional massage therapy in Cuba, MO. Swedish, Deep Tissue, Sports Massage & more. Call (636) 300-7711 to book.",
    },
    alternates: {
        canonical: "https://solyn.org",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://solyn.org",
    name: "Pure Diamond Massage",
    description:
        "Professional massage therapy in Cuba, MO offering Swedish, Deep Tissue, Sports Massage, and more. Located inside Roots 46 Salon.",
    url: "https://solyn.org",
    telephone: "+1-636-300-7711",
    email: "massagebydiamond@yahoo.com",
    address: {
        "@type": "PostalAddress",
        streetAddress: "108 Downey Place",
        addressLocality: "Cuba",
        addressRegion: "MO",
        postalCode: "65453",
        addressCountry: "US",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 38.0617,
        longitude: -91.3982,
    },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        description: "By appointment only — message or text to schedule",
    },
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    areaServed: [
        {
            "@type": "City",
            name: "Cuba",
            containedInPlace: {
                "@type": "State",
                name: "Missouri",
            },
        },
        { "@type": "City", name: "Rolla" },
        { "@type": "City", name: "Sullivan" },
        { "@type": "City", name: "Steelville" },
        { "@type": "City", name: "St. James" },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Massage Therapy Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Swedish Massage",
                    description: "Gentle, relaxing full-body massage to relieve tension and promote relaxation.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Deep Tissue Massage",
                    description: "Targets deep muscle layers to release chronic tension and pain.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Sports Massage",
                    description: "Helps athletes recover faster, reduce soreness, and improve performance.",
                },
            },
        ],
    },
    sameAs: ["https://www.facebook.com/people/Pure-Diamond-Massage/61565432539630/"],
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "6",
        bestRating: "5",
        worstRating: "1",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
            </head>
            <body className="font-sans antialiased">
                <Header />
                {children}
            </body>
        </html>
    );
}
