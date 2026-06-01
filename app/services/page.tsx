import { Services } from "@/components/Services";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safari Packages | Mbuni African Safaris Uganda",
  description:
    "Curated Uganda safari itineraries — gorilla trekking, game drives, cultural tours. Bwindi, Queen Elizabeth, Murchison Falls.",
};

const included = [
  "Gorilla or chimpanzee trekking permits",
  "Custom 4x4 safari land cruiser",
  "Professional Ugandan safari guide",
  "All national park entrance fees",
  "All meals while on safari",
  "Airport transfers from Entebbe",
  "Flying Doctors emergency cover",
  "Unlimited water during game drives",
];

export default function ServicesPage() {
  return (
    <>
      <div
        className="page-hero "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=600&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40 " />
        <span
          className="hidden md:block font-[family-name:var(--font-bebas)] absolute right-0 top-0 leading-none select-none pointer-events-none text-black/[0.04]"
          style={{ fontSize: "130px" }}
        >
          SAFARIS
        </span>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-4">
          <Link
            href="/"
            className="no-underline"
            // style={{ color: "var(--color-brand)" }}
          >
            Home
          </Link>{" "}
          / Safari Packages
        </p>
        <h1
          className="font-[family-name:var(--font-bebas)] tracking-wide text-white"
          style={{ fontSize: "clamp(48px,8vw,80px)" }}
        >
          Our Safaris
        </h1>
        <p className="text-white mt-3 max-w-lg">
          Curated Uganda safari itineraries to show you the very best of the
          Pearl of Africa.
        </p>
      </div>

      {/* Packages */}
      <section className="bg-white page-section">
        <Services />
      </section>

      {/* What's included */}
      <section className="bg-gray-50 page-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <AnimatedSection>
            <span className="section-label">The Mbuni Standard</span>
            <h2 className="section-title">What&apos;s Always Included</h2>
            <div
              className="w-12 h-0.5 mb-8"
              style={{ background: "var(--color-brand)" }}
            />
            <p className="text-gray-500 leading-relaxed mb-8">
              Transparent pricing with no hidden costs. Every Mbuni Uganda
              safari includes premium services for your comfort, safety, and an
              unforgettable experience.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border border-gray-200 px-5 py-3.5 hover:border-[var(--color-brand)] transition-colors group"
                >
                  <div
                    className="w-5 h-5 border-2 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[var(--color-brand)] group-hover:border-[var(--color-brand)]"
                    style={{ borderColor: "var(--color-brand)" }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4l3 3 5-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[var(--color-brand)] group-hover:text-gray-900 transition-colors"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative">
              <div
                className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 opacity-20 pointer-events-none"
                style={{ borderColor: "var(--color-brand)" }}
              />
              <div
                className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 opacity-20 pointer-events-none"
                style={{ borderColor: "var(--color-brand)" }}
              />
              <div className="border border-gray-200 p-8 md:p-12">
                <h3 className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-gray-900 mb-2">
                  Design Your Own Safari
                </h3>
                <p className="text-sm text-gray-400 mb-10">
                  Can&apos;t find the perfect package? We specialise in bespoke
                  Uganda itineraries crafted entirely around you.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: "🗓️",
                      title: "Any Duration",
                      desc: "From 3-day gorilla getaways to 21-day complete Uganda circuits.",
                    },
                    {
                      icon: "👥",
                      title: "Any Group Size",
                      desc: "Solo, couples, families, or large groups — we cater for all.",
                    },
                    {
                      icon: "💰",
                      title: "Any Budget",
                      desc: "Budget camping to ultra-luxury — we have options for every wallet.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 border border-gray-200 p-5 hover:border-[var(--color-brand)] transition-colors group"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <h4 className="font-[family-name:var(--font-bebas)] text-lg tracking-wide text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-gold mt-8 inline-block">
                  Design Custom Safari
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <div className="relative overflow-hidden bg-gray-900 px-6 md:px-16 lg:px-24 py-20">
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-[0.07]"
          style={{ background: "var(--color-brand)" }}
        />
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div>
            <span
              className="block text-[11px] font-bold tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--color-brand)" }}
            >
              Not Sure What You Need?
            </span>
            <h2
              className="font-[family-name:var(--font-bebas)] text-white tracking-wide leading-none"
              style={{ fontSize: "clamp(36px,5vw,56px)" }}
            >
              Talk to Our Safari Experts
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact" className="btn-gold text-center">
              Contact Us
            </Link>
            <a
              href="https://wa.me/256751621506"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:border-white hover:bg-white/10 transition-all inline-block text-center"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
