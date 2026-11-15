import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.fullTitle} à ${site.city} | Cabinet de pédiatrie`,
    template: `%s | ${site.name}`,
  },
  description: `Cabinet de pédiatrie du ${site.fullTitle} à ${site.city}. Consultations, suivi du nourrisson et accompagnement des parents. Prenez rendez-vous par téléphone ou WhatsApp.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_TN",
    url: site.domain,
    siteName: site.fullTitle,
    title: `${site.fullTitle} — Pédiatre à ${site.city}`,
    description: `Suivi pédiatrique attentif à ${site.city}. Contactez le cabinet pour un rendez-vous.`,
    images: [
      {
        url: site.portrait.src,
        width: site.portrait.width,
        height: site.portrait.height,
        alt: site.portrait.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullTitle} — Pédiatre à ${site.city}`,
    description: `Cabinet de pédiatrie à ${site.city}. Rendez-vous par téléphone ou WhatsApp.`,
    images: [site.portrait.src],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${sourceSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <JsonLd />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
