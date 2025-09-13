import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import CookieConsent from "@/components/layout/CookieConsent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jeunesse de Porsel",
  description: "Site officiel de la jeunesse de Porsel !",
  metadataBase: new URL("https://jeunessedeporsel.ch"),
  openGraph: {
    title: "Jeunesse de Porsel",
    description: "Site officiel de la jeunesse de Porsel !",
    url: "https://jeunessedeporsel.ch/",
    siteName: "Jeunesse de Porsel",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} font-poppins antialiased`} >
        {children}
        <CookieConsent />
        <Analytics/>
        <SpeedInsights />

      </body>
    </html>
  );
}
