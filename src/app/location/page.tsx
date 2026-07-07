import type { Metadata } from "next";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import CTABanner from "@/components/CTABanner";

/* ─── Local SEO metadata ────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Location & Hours | Curve Chiropractic – Tampa, FL 33629",
  description:
    "Curve Chiropractic is located at 3408 S Manhattan Ave, Ste 1, Tampa, FL 33629. Free parking available. Serving Tampa Bay with structural correction, auto injury, and prenatal chiropractic care.",
};

const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.630097728445!2d-82.52026212398464!3d27.912654316049283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c338f165f101%3A0x2285a4b1994067d6!2sCurve%20Chiropractic!5e0!3m2!1sen!2sus!4v1783379644026!5m2!1sen!2sus";
const MAPS_DIRECTIONS =
  "https://maps.app.goo.gl/DbSK7nXwCBzjyrZB6";

/* ─── Hours data ────────────────────────────────────────────────────────────── */
const hours = [
  { days: "Monday – Wednesday", time: "8:00 am – 5:00 pm" },
  { days: "Thursday",           time: "8:00 am – 12:00 pm" },
  { days: "Friday",             time: "8:00 am – 3:00 pm" },
  { days: "Saturday – Sunday",  time: "Closed" },
];

/* ─── Icon helpers ──────────────────────────────────────────────────────────── */
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z" />
    </svg>
  );
}
function ParkingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function LocationPage() {
  return (
    <main>
      <SiteNavbar />

      {/* ── Page Hero ── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ backgroundColor: "#005F61" }}
      >
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: "#7EB2DD" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: "#7EB2DD" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: "rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Tampa Bay, FL
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}
          >
            Find Us
          </h1>
          <p
            className="text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Conveniently located to serve the Tampa Bay area. Come see why
            patients drive from across the region to experience structural
            chiropractic care done right.
          </p>
        </div>
      </section>

      {/* ── Logistics Grid ── */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "#F7F3EB" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* ── Col 1: Address & Contact ── */}
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,95,97,0.08)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                borderTop: "3px solid #005F61",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(0,95,97,0.08)" }}
              >
                <MapPinIcon className="w-5 h-5" />
              </div>
              <h2
                className="text-base font-bold mb-4"
                style={{
                  fontFamily: "var(--font-jakarta, system-ui, sans-serif)",
                  color: "#1a1a1a",
                }}
              >
                Address &amp; Contact
              </h2>
              <address className="not-italic space-y-1 text-sm mb-5" style={{ color: "#555" }}>
                <p className="font-semibold" style={{ color: "#1a1a1a" }}>Curve Chiropractic</p>
                <p>3408 S Manhattan Ave, Ste 1</p>
                <p>Tampa, FL 33629</p>
              </address>
              <a
                href="tel:+18138323164"
                id="location-phone"
                className="flex items-center gap-2 text-sm font-semibold mb-4 transition-colors duration-150"
                style={{ color: "#005F61" }}
              >
                <PhoneIcon className="w-4 h-4" />
                (813) 832-3164
              </a>
              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                id="location-directions"
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase transition-colors duration-150 mt-1"
                style={{ color: "#BA5A31" }}
              >
                Get Directions →
              </a>
            </div>

            {/* ── Col 2: Hours ── */}
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,95,97,0.08)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                borderTop: "3px solid #005F61",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(0,95,97,0.08)" }}
              >
                <ClockIcon className="w-5 h-5" />
              </div>
              <h2
                className="text-base font-bold mb-4"
                style={{
                  fontFamily: "var(--font-jakarta, system-ui, sans-serif)",
                  color: "#1a1a1a",
                }}
              >
                Hours of Operation
              </h2>
              <ul className="space-y-3 list-none">
                {hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex justify-between items-baseline gap-2 pb-3"
                    style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    <span className="text-xs font-semibold" style={{ color: "#555" }}>
                      {h.days}
                    </span>
                    <span
                      className="text-xs font-bold flex-shrink-0"
                      style={{
                        color: h.time === "Closed" ? "#BA5A31" : "#005F61",
                      }}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs mt-4" style={{ color: "#888" }}>
                Hours subject to change on holidays. Call ahead to confirm.
              </p>
            </div>

            {/* ── Col 3: Arrival Instructions ── */}
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,95,97,0.08)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                borderTop: "3px solid #005F61",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(0,95,97,0.08)" }}
              >
                <ParkingIcon className="w-5 h-5" />
              </div>
              <h2
                className="text-base font-bold mb-4"
                style={{
                  fontFamily: "var(--font-jakarta, system-ui, sans-serif)",
                  color: "#1a1a1a",
                }}
              >
                Arrival &amp; Parking
              </h2>
              <div className="space-y-4 text-sm" style={{ color: "#555" }}>
                <p>
                  <span className="font-semibold" style={{ color: "#1a1a1a" }}>Free patient parking</span> is
                  available directly in front of the clinic. No meters, no
                  garages, no stress.
                </p>
                <p>
                  The clinic is{" "}
                  <span className="font-semibold" style={{ color: "#1a1a1a" }}>
                    wheelchair and walker accessible
                  </span>
                  . Ground-floor entrance, no stairs required.
                </p>
                <p>
                  First-time patients: please arrive <span className="font-semibold" style={{ color: "#1a1a1a" }}>10 minutes early</span> to
                  complete your intake paperwork comfortably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-Width Map ── */}
      <section
        className="pb-20 md:pb-28"
        style={{ backgroundColor: "#F7F3EB" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs font-bold tracking-widest uppercase text-center mb-6"
            style={{ color: "#005F61" }}
          >
            Interactive Map
          </p>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
              border: "1px solid rgba(0,95,97,0.1)",
            }}
          >
            <iframe
              title="Curve Chiropractic – 3408 S Manhattan Ave, Tampa FL 33629"
              src={MAPS_EMBED}
              width="100%"
              height="500"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/contact"
              id="location-book-cta"
              className="btn-cta text-base px-10 py-4 inline-block"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
      <SiteFooter />
    </main>
  );
}
