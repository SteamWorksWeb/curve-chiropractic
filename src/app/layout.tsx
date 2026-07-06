import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://curve-chiropractic.vercel.app";

const TITLE       = "Curve Chiropractic | Tampa Bay Chiropractic Care";
const DESCRIPTION =
  "Relief starts with one visit. We specialize in structural correction, auto accidents, and prenatal care to permanently fix the root cause of your pain.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* ── Core SEO ── */
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "chiropractor Tampa Bay",
    "structural correction chiropractor",
    "auto injury chiropractor Tampa",
    "prenatal chiropractor Tampa Bay",
    "upper cervical care Florida",
    "whiplash treatment Tampa",
    "car accident chiropractor",
  ],

  /* ── Favicons ── */
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple:   [{ url: "/images/apple-touch-icon.png" }],
    other:   [
      { rel: "android-chrome", url: "/images/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/images/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },

  /* ── Open Graph ── */
  openGraph: {
    title:       TITLE,
    description: DESCRIPTION,
    url:         SITE_URL,
    siteName:    "Curve Chiropractic",
    images: [
      {
        url:    "/images/og-image.jpg",
        width:  1200,
        height: 630,
        alt:    "Curve Chiropractic – Tampa Bay Chiropractic Care",
      },
    ],
    locale: "en_US",
    type:   "website",
  },

  /* ── Twitter / X Cards ── */
  twitter: {
    card:        "summary_large_image",
    title:       TITLE,
    description: DESCRIPTION,
    images:      ["/images/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
