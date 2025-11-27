import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "Northeast Philadelphia",
        "Hall of Fame",
        "NE Philly",
        "Philadelphia history",
        "local heroes",
        "community recognition",
        "Holmesburg",
        "Tacony",
        "Frankford",
        "inductees",
    ],
    authors: [{ name: siteConfig.name }],
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: siteConfig.name,
        title: siteConfig.name,
        description: siteConfig.description,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
        </html>
    );
}
