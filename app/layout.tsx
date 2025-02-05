import type { Metadata } from "next";
import { Geist, Geist_Mono, Parkinsans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const displayFont = Parkinsans({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Community Notes Dataset",
  description: "A dataset of community notes from Twitter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} antialiased bg-gradient-to-br from-slate-50 to-blue-50`}
      >
        {children}
      </body>
    </html>
  );
}
