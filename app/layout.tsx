import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import { Gelasio } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/client/CustomCursor";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });
const gelasio = Gelasio({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dipankaj (DipDev) | Full-Stack Developer & Innovator",
  description:
    "Welcome to Dipankaj's (DipDev) portfolio, where cutting-edge web and mobile applications come to life. Explore projects developed with Next.js, MongoDB, Kotlin, and other modern technologies. Crafting seamless and innovative user experiences.",
  keywords:
    "full-stack developer, portfolio, Next.js, MongoDB, Kotlin, React, Android, web development, mobile development, software engineer, Dipankaj, DipDev, programming, JavaScript, TypeScript, innovative solutions",
  openGraph: {
    title: "Dipankaj (DipDev) | Full-Stack Developer & Innovator",
    description:
      "Explore Dipankaj's (DipDev) portfolio featuring web and mobile development expertise. From Next.js websites to Kotlin-based apps, discover innovative projects built with passion.",
    url: "https://dipdev.tech/",
    siteName: "Dipankaj's (DipDev) Portfolio",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
      },
    ],
    locale: "IN en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipankaj (Dipdev) | Full-Stack Developer Portfolio",
    description:
      "Portfolio showcasing Dipankaj's (Dipdev) full-stack development expertise. Discover innovative web applications and solutions",
    creator: "@its_Dipankaj",
    images: ["/ss.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "favicon.ico",
    apple: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${gelasio.className} ${inter.className} ${nunito.className}`}
      >
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
