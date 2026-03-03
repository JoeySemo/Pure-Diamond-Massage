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
        "Professional massage therapy in Cuba, MO. Book Swedish, Deep Tissue, Sports Massage & more with Diamond. Located inside Roots 66 Salon at 108 Downey Place. Call (636) 300-7711.",
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
        "Roots 66 Salon Cuba MO",
        "massage near me Cuba MO",
        "Crawford County massage",
