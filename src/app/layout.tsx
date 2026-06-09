import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NavShell, FooterShell } from "@/components/ClientShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Good Food Restaurant | Best Restaurant in Barra, Kanpur",
  description:
    "Good Food Restaurant in Barra, Kanpur — North Indian, Chinese, Pizza, Burgers & Mocktails. Open till midnight. 4.8★ on Google. ₹200–400 per person.",
  openGraph: {
    title: "Good Food Restaurant Kanpur",
    description: "Barra's favourite table. Dine-in, delivery, party bookings.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Outfit:wght@300;400;500;600&family=Josefin+Sans:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
      <body>
        {/* Ambient Background Orbs */}
        <div className="ambient-orbs" aria-hidden="true">
          <div className="orb"></div>
          <div className="orb"></div>
          <div className="orb"></div>
        </div>
        <div className="grain-overlay" aria-hidden="true"></div>

        <NavShell />
        <main>{children}</main>
        <FooterShell />
      </body>
    </html>
  );
}
