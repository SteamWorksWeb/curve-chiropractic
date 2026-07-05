import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Curve Chiropractic | Auto Injury & Chiropractic Care – Tampa Bay, FL",
  description:
    "Curve Chiropractic in Tampa Bay, FL specializes in auto-injury rehab, spinal adjustments, massage therapy, and corrective care. Accepted by major auto insurers. Book your appointment today.",
  keywords: [
    "chiropractor Tampa Bay",
    "auto injury chiropractor",
    "whiplash treatment Tampa",
    "spinal adjustment Florida",
    "car accident chiropractor",
  ],
  openGraph: {
    title: "Curve Chiropractic | Auto Injury & Chiropractic Care – Tampa Bay, FL",
    description:
      "Specialized chiropractic care for auto-injury patients in Tampa Bay. Most major auto insurance accepted.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
