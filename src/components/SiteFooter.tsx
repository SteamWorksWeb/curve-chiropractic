"use client";

import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" style={{ backgroundColor: "#342E37" }}>
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link href="/" id="footer-logo" className="block mb-4">
            <Image
              src="/logo.png"
              alt="Curve Chiropractic"
              width={140}
              height={66}
              className="object-contain"
              style={{
                height: "38px",
                width: "auto",
                filter: "brightness(0) invert(1)",
                opacity: 0.85,
              }}
            />
          </Link>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(247,243,235,0.55)" }}>
            Helping Tampa Bay patients recover from auto-injury accidents with personalized,
            insurance-covered chiropractic care.
          </p>
        </div>

        {/* Services links */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(247,243,235,0.4)" }}>
            Services
          </h3>
          <ul className="space-y-2.5 list-none">
            {["Spinal Adjustment", "Auto-Injury Rehab", "Massage Therapy", "Corrective Exercise", "Spinal Decompression"].map((s) => (
              <li key={s}>
                <a
                  href={`/#services`}
                  id={`footer-svc-${s.toLowerCase().replace(/[\s-]/g, "-")}`}
                  className="text-sm transition-colors duration-150"
                  style={{ color: "rgba(247,243,235,0.65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#7EB2DD")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,243,235,0.65)")}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation links */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(247,243,235,0.4)" }}>
            Navigation
          </h3>
          <ul className="space-y-2.5 list-none">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Conditions", href: "/conditions" },
              { label: "Why Choose Us", href: "/why-us" },
              { label: "Location & Hours", href: "/location" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
              { label: "Schedule a Consultation", href: "/consultation" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  id={`footer-nav-${link.label.toLowerCase().replace(/[\s&]/g, "-")}`}
                  className="text-sm transition-colors duration-150"
                  style={{ color: "rgba(247,243,235,0.65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#7EB2DD")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,243,235,0.65)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Legal */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(247,243,235,0.4)" }}>
            Contact
          </h3>
          <address className="not-italic space-y-2 text-sm" style={{ color: "rgba(247,243,235,0.65)" }}>
            <p>3408 S Manhattan Ave, Ste 1</p>
            <p>Tampa, FL 33629</p>
            <a
              href="tel:+18138323164"
              id="footer-phone"
              className="block mt-1 transition-colors duration-150"
              style={{ color: "rgba(247,243,235,0.65)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#7EB2DD")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,243,235,0.65)")}
            >
              (813) 832-3164
            </a>
          </address>

          {/* Legal links */}
          <div className="mt-6 pt-6 border-t" style={{ borderColor: "rgba(247,243,235,0.1)" }}>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(247,243,235,0.4)" }}>
              Legal
            </h3>
            <ul className="space-y-2 list-none">
              <li>
                <Link
                  href="/privacy-policy"
                  id="footer-privacy-policy"
                  className="text-sm transition-colors duration-150"
                  style={{ color: "rgba(247,243,235,0.65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#7EB2DD")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,243,235,0.65)")}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  id="footer-terms-of-service"
                  className="text-sm transition-colors duration-150"
                  style={{ color: "rgba(247,243,235,0.65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#7EB2DD")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,243,235,0.65)")}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar — dynamic copyright */}
      <div className="border-t" style={{ borderColor: "rgba(247,243,235,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(247,243,235,0.35)" }}>
            © {year} Curve Chiropractic - Serving Tampa Bay. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(247,243,235,0.25)" }}>
            Designed with care in Tampa Bay, FL
          </p>
        </div>
      </div>
    </footer>
  );
}
