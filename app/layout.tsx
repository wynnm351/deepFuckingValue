import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

const kurri = localFont({
  src: [
    {
      path: "../public/KurriIslandCapsPERSONAL-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/KurriIslandCapsPERSONAL-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/KurriIslandCapsPERSONAL-Med.ttf",
      weight: "500",
      style: "medium",
    },
  ],
  variable: "--font-kurri",
});

export const metadata: Metadata = {
  title: "Deep Fucking Value",
  description: "A app to trade with you for your cripto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${kurri.variable} font-lexend`}>
        {children}
      </body>
    </html>
  );
}
