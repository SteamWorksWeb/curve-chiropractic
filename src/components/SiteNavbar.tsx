"use client";

import Image from "next/image";

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.71 3.53 2 2 0 0 1 3.67 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function SiteNavbar() {
  return (
    <header
      id="navbar"
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: "rgba(247, 243, 235, 0.97)",
        borderColor: "rgba(0, 95, 97, 0.08)",
      }}
    >
      <nav
        className="max-w-7xl mx-auto px-6 flex items-center justify-between"
        style={{ paddingTop: "18px", paddingBottom: "18px" }}
      >
        {/* Logo */}
        <a href="/" id="nav-logo" aria-label="Curve Chiropractic home">
          <Image
            src="/logo.png"
            alt="Curve Chiropractic"
            width={160}
            height={75}
            className="object-contain"
            style={{ height: "44px", width: "auto" }}
            priority
          />
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {[
            { label: "Services", href: "/#services" },
            { label: "Conditions", href: "/#conditions" },
            { label: "Why Us", href: "/#why-us" },
            { label: "Location", href: "/#location" },
            { label: "FAQ", href: "/faq" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                id={`nav-${item.label.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "#4a4a4a" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#005F61")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4a4a4a")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Phone + CTA */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+18139994147"
            id="nav-phone"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium"
            style={{ color: "#005F61" }}
          >
            <PhoneIcon className="w-4 h-4" />
            (813) 999-4147
          </a>
          <a
            href="/#book"
            id="nav-book-cta"
            className="btn-cta text-sm px-5 py-2.5"
          >
            Book Online
          </a>
        </div>
      </nav>
    </header>
  );
}
