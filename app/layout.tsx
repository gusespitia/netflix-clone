import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Netflix Clone - Streaming Platform",
  description:
    "Explore Netflix Clone, a modern streaming platform showcasing a sleek UI built with Next.js, Tailwind CSS, and TypeScript.",
  keywords: [
    "Netflix Clone",
    "Streaming Platform",
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Full Stack Developer",
    "Modern Web Applications",
    "Frontend Development",
    "Backend Development",
  ],
  authors: [
    { name: "Gus", url: "https://github.com/gusespitia" },
  ],
  openGraph: {
    title: "Netflix Clone - Streaming Platform",
    description:
      "Discover Netflix Clone, a beautifully designed streaming platform built using Next.js and Tailwind CSS. Experience high-quality UI/UX and seamless functionality.",
    url: "https://gusflix.vercel.app",
    siteName: "Netflix Clone",
    images: [
      {
        url: "/gusflix.png", // Cambia este enlace por una imagen representativa.
        width: 1200,
        height: 630,
        alt: "Netflix Clone - Streaming Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netflix Clone - Streaming Platform",
    description:
      "Explore the Netflix Clone, a feature-rich streaming platform with a modern UI/UX designed using Next.js and Tailwind CSS.",
    site: "@gusspitya", // Cambia por tu nombre de usuario en Twitter.
    creator: "@gusspitya",
    images: ["/gusflix.png"], // Imagen optimizada para Twitter.
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://gusflix.vercel.app",
    languages: {
      "en-US": "https://gusflix.vercel.app",
    },
  },
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <link rel="icon" href="/favicon.ico" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950`}
      >
        <NextTopLoader />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
