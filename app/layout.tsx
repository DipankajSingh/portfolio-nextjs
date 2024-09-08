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
  metadataBase: new URL("https://dipdev.tech"),
  title: "Dipankaj (Dipdev) | Full-Stack Developer Portfolio",
  description:
    "Portfolio showcasing Dipankaj's (Dipdev) full-stack development expertise with projects built using Next.js, MongoDB, and more. Discover innovative web applications and solutions.",
  keywords:
    "full-stack developer, portfolio, Next.js, MongoDB, React, web development, software engineer, Dipankaj, Dipdev, Dipankaj, dipankaj, javascript",
  openGraph: {
    title: "Dipankaj (Dipdev) | Full-Stack Developer Portfolio",
    description:
      "Portfolio showcasing Dipankaj's (Dipdev) full-stack development expertise. Discover innovative web applications and solutions.",
    url: "https://dipdev.tech",
    siteName: "Dipankaj (Dipdev) Portfolio",
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
