"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Icon helpers ─────────────────────────────────────────────────────────── */

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.71 3.53 2 2 0 0 1 3.67 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function HamburgerIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ─── Nav data ─────────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Home",        href: "/" },
  { label: "About",       href: "/about" },
  { label: "Services",    href: "/services" },
  { label: "Conditions",  href: "/conditions" },
  { label: "Why Us",      href: "/why-us" },
  { label: "Location",    href: "/location" },
  { label: "FAQ",         href: "/faq" },
  { label: "Contact",     href: "/contact" },
];

const PHONE_DISPLAY = "(813) 832-3164";
const PHONE_HREF    = "tel:+18138323164";
const BOOK_HREF     = "/#book";

/* ─── Component ────────────────────────────────────────────────────────────── */

export default function SiteNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  /* Lock body scroll while drawer is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* Close drawer on ESC */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────────────────────── */}
      <header
        id="navbar"
        className="sticky top-0 z-50 backdrop-blur-md border-b"
        style={{
          backgroundColor: "rgba(247, 243, 235, 0.97)",
          borderColor: "rgba(0, 95, 97, 0.08)",
        }}
      >
        <nav
          className="max-w-7xl mx-auto px-5 flex items-center justify-between"
          style={{ paddingTop: "16px", paddingBottom: "16px" }}
        >
          {/* Logo — always visible */}
          <Link href="/" id="nav-logo" aria-label="Curve Chiropractic home">
            <Image
              src="/logo.png"
              alt="Curve Chiropractic"
              width={160}
              height={75}
              className="object-contain"
              style={{ height: "40px", width: "auto" }}
              priority
            />
          </Link>

          {/* ── Desktop: nav links (hidden on mobile) ───────────────────────── */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  id={`nav-${item.label.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: "#4a4a4a" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#005F61")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#4a4a4a")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Desktop: phone + CTA (hidden on mobile) ─────────────────────── */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={PHONE_HREF}
              id="nav-phone"
              className="flex items-center gap-1.5 text-sm font-medium"
              style={{ color: "#BA5A31" }}
            >
              <PhoneIcon className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href={BOOK_HREF}
              id="nav-book-cta"
              className="btn-cta-teal text-sm px-5 py-2.5"
            >
              Book Online
            </Link>
          </div>

          {/* ── Mobile: phone number + hamburger (hidden on desktop) ─────────── */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={PHONE_HREF}
              id="nav-phone-mobile"
              aria-label="Call us"
              className="flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: "#005F61" }}
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            </a>

            <button
              id="nav-hamburger"
              aria-label="Open menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-150"
              style={{ color: "#1a1a1a" }}
            >
              <HamburgerIcon className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Framer Motion Drawer ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="drawer-backdrop"
              className="fixed inset-0 z-[60]"
              style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeDrawer}
              aria-hidden="true"
            />

            {/* Slide-in panel */}
            <motion.aside
              key="drawer-panel"
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="fixed top-0 right-0 bottom-0 z-[70] flex flex-col w-4/5 max-w-xs shadow-2xl"
              style={{ backgroundColor: "#F7F3EB" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between px-6 py-5 border-b"
                style={{ borderColor: "rgba(0,95,97,0.1)" }}
              >
                <Link href="/" onClick={closeDrawer} aria-label="Curve Chiropractic home">
                  <Image
                    src="/logo.png"
                    alt="Curve Chiropractic"
                    width={130}
                    height={62}
                    className="object-contain"
                    style={{ height: "36px", width: "auto" }}
                  />
                </Link>
                <button
                  id="nav-drawer-close"
                  aria-label="Close menu"
                  onClick={closeDrawer}
                  className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-150"
                  style={{ color: "#1a1a1a", backgroundColor: "rgba(0,95,97,0.08)" }}
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer nav links */}
              <nav className="flex-1 overflow-y-auto px-6 py-8">
                <ul className="space-y-1 list-none">
                  {NAV_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        id={`drawer-nav-${item.label.toLowerCase().replace(" ", "-")}`}
                        onClick={closeDrawer}
                        className="flex items-center gap-3 px-3 py-3.5 rounded-xl text-lg font-semibold transition-colors duration-150"
                        style={{ color: "#1a1a1a" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#005F61";
                          e.currentTarget.style.backgroundColor = "rgba(0,95,97,0.07)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#1a1a1a";
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(0,95,97,0.1)" }}>
                  <a
                    href={PHONE_HREF}
                    id="drawer-phone"
                    className="flex items-center gap-2.5 px-3 py-3 rounded-xl text-base font-semibold transition-colors duration-150"
                    style={{ color: "#005F61" }}
                  >
                    <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </nav>

              {/* Drawer footer — full-width orange CTA */}
              <div
                className="px-6 pb-8 pt-4 border-t"
                style={{ borderColor: "rgba(0,95,97,0.1)" }}
              >
                <Link
                  href={BOOK_HREF}
                  id="drawer-book-cta"
                  onClick={closeDrawer}
                  className="block w-full text-center text-base font-bold rounded-2xl py-4 transition-transform duration-150 active:scale-95"
                  style={{
                    backgroundColor: "#BA5A31",
                    color: "#ffffff",
                    boxShadow: "0 4px 24px rgba(186,90,49,0.35)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#a34a24")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#BA5A31")
                  }
                >
                  Book Online →
                </Link>
                <p
                  className="text-center text-xs mt-3"
                  style={{ color: "rgba(0,0,0,0.4)" }}
                >
                  Same-day appointments · Insurance accepted
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
