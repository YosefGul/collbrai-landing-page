import type React from "react"
import type { Metadata, Viewport } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Rethink_Sans, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-rethink",
})

export const metadata: Metadata = {
  title: {
    default: "Collbrai | Yapay Zeka & Görüntü İşleme Çözümleri",
    template: "%s | Collbrai",
  },
  description:
    "Collbrai olarak yapay zekâ destekli görüntü işleme ve davranış analizi teknolojileri geliştiriyoruz. İş güvenliği, hijyen kontrolü, performans yönetimi ve akıllı otopark çözümleri sunuyoruz.",
  keywords: [
    "yapay zeka",
    "görüntü işleme",
    "AI",
    "machine learning",
    "iş güvenliği",
    "hijyen kontrolü",
    "performans yönetimi",
    "akıllı otopark",
    "davranış analizi",
    "Türkiye yapay zeka",
    "endüstriyel AI",
    "kalite kontrol",
    "öğrenci takip sistemi",
    "Collbrai",
  ],
  authors: [{ name: "Collbrai", url: "https://collbrai.com" }],
  creator: "Collbrai",
  publisher: "Collbrai",
  metadataBase: new URL("https://collbrai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://collbrai.com",
    siteName: "Collbrai",
    title: "Collbrai | Yapay Zeka & Görüntü İşleme Çözümleri",
    description:
      "Yapay zekâ destekli görüntü işleme ve davranış analizi teknolojileri. İşletmelerin üretimden hijyene, güvenlikten performansa kadar uzanan kontrol süreçlerinde yöneticilerin gözü oluyoruz.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Collbrai - Yapay Zeka & Görüntü İşleme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Collbrai | Yapay Zeka & Görüntü İşleme Çözümleri",
    description: "Yapay zekâ destekli görüntü işleme ve davranış analizi teknolojileri geliştiriyoruz.",
    images: ["/og-image.png"],
    creator: "@collbrai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Collbrai",
              url: "https://collbrai.com",
              logo: "https://collbrai.com/logo.png",
              description:
                "Yapay zekâ destekli görüntü işleme ve davranış analizi teknolojileri geliştiren yazılım şirketi.",
              foundingDate: "2024",
              address: {
                "@type": "PostalAddress",
                addressCountry: "TR",
              },
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@collbrai.com",
                contactType: "customer service",
                availableLanguage: ["Turkish", "English"],
              },
              offers: {
                "@type": "AggregateOffer",
                offerCount: 6,
                itemOffered: [
                  {
                    "@type": "Service",
                    name: "İş ve İşçi Güvenliği İhlalleri Tespiti",
                    description: "AI destekli iş güvenliği izleme ve ihlal tespit sistemi",
                  },
                  {
                    "@type": "Service",
                    name: "Çalışan Performans Yönetimi",
                    description: "Yapay zeka ile objektif performans değerlendirme sistemi",
                  },
                  {
                    "@type": "Service",
                    name: "Hijyen Kontrolü",
                    description: "Gıda üretiminde AI destekli hijyen standart kontrolü",
                  },
                  {
                    "@type": "Service",
                    name: "Akıllı Otopark Sistemi",
                    description: "Yapay zeka destekli otopark yönetim çözümü",
                  },
                  {
                    "@type": "Service",
                    name: "Görüntülü Kalite Kontrol",
                    description: "Üretim hatlarında AI ile otomatik kalite denetimi",
                  },
                  {
                    "@type": "Service",
                    name: "Öğrenci Takip ve Performans Sistemi",
                    description: "Eğitim kurumları için AI destekli öğrenci izleme sistemi",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${rethinkSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
