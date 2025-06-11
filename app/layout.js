import Navbar from "@/components/Navbar";
import "./globals.css";


// ✅ SEO Metadata (supports Google, OG, Twitter)
export const metadata = {
  title: {
    default: "Deaf Link | Bridging Communication Gaps",
    template: "%s | Deaf Link",
  },
  description:
    "Innovative assistive technology solutions for the Deaf and hard-of-hearing community. Cutting-edge listening devices and communication tools.",
  keywords: [
    "Deaf technology",
    "assistive listening devices",
    "hearing impaired solutions",
    "sign language tech",
    "Deaf communication tools",
    "accessible technology"
  ],
  authors: [{ name: "Deaf Link", url: "https://www.deaflink.co/" }],
  metadataBase: new URL("https://www.deaflink.co/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Deaf Link | Accessible Communication Technology",
    description:
      "Empowering the Deaf community through innovative assistive technology solutions.",
    url: "https://www.deaflink.co/",
    siteName: "Deaf Link",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deaf Link - Assistive Communication Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deaf Link | Accessible Communication Technology",
    description:
      "Empowering the Deaf community through innovative assistive technology solutions.",
    images: ["/twitter-image.jpg"],
    creator: "@DeafLinkTech",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#3182ce',
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#3182ce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        <meta name="google-site-verification" content="rljyM5oEs3x-cCBQatA9tRu6G35j-rEiA5VrKgb7JxM" />

        {/* Structured data for search engines */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Deaf Link",
          "url": "https://www.deaflink.co/",
          "logo": "https://www.deaflink.co/logo.png",
          "description": "Innovative assistive technology for the Deaf community",
          "foundingDate": "2023",
          "sameAs": [
            "https://twitter.com/DeafLinkTech",
            "https://www.linkedin.com/company/deaf-link-innovations",
            "https://www.facebook.com/DeafLinkInnovations"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Assistive Technology Products",
            "itemListElement": [
              {
                "@type": "OfferCatalog",
                "name": "Listening Devices",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Sign Language Translator"
                    }
                  }
                ]
              }
            ]
          }
        })}} />
      </head>

      <body>
        <Navbar />
          {children}
      </body>
    </html>
  );
}
