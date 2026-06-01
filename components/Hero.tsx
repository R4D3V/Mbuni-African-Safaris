"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* BG image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://africageographic.com/wp-content/uploads/2023/11/Philip-Nduwumwami-Defassa-Waterbuck-at-Lake-Mburo-National-park-1.jpg')",
          filter: "brightness(0.72)",
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 55%, rgba(212,168,67,0.08) 100%)",
        }}
      />
      {/* Diagonal gold accent */}
      <div
        className="absolute top-0 right-0 w-[45%] h-full opacity-[0.05] pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 40%, #D4A843 100%)",
        }}
      />
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-[55%] top-0 bottom-0 w-px bg-white/[0.04]" />
        <div className="absolute left-[72%] top-0 bottom-0 w-px bg-white/[0.04]" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-28">
        <div
          className="max-w-3xl"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px)",
            transition: "opacity 1s ease 0.2s, transform 1s ease 0.2s",
          }}
        >
          {/* Label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex gap-1">
              <span className="block w-6 h-px bg-[var(--color-brand)]" />
              <span className="block w-2 h-px bg-[var(--color-brand)] opacity-50" />
            </div>
            <span className="text-[var(--color-brand)] text-[11px] font-bold tracking-[0.35em] uppercase">
              Mbuni African Safaris
            </span>
          </div>

          {/* Headline */}
          <div
            className="font-[family-name:var(--font-bebas)] leading-[0.92] tracking-tight text-white mb-4"
            style={{
              fontSize: "clamp(32px, 5.5vw, 72px)",
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 0.5s",
            }}
          >
            Discover the
          </div>
          <h1
            className="font-[family-name:var(--font-bebas)] leading-[0.88] tracking-tight mb-8"
            style={{
              fontSize: "clamp(68px, 11vw, 140px)",
              color: "var(--color-brand)",
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 0.7s",
            }}
          >
            Pearl of Africa
          </h1>

          {/* Divider */}
          <div
            className="flex items-center gap-4 mb-8"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 1s",
            }}
          >
            <div className="w-16 h-0.5 bg-[var(--color-brand)]" />
            <span className="text-white/30 text-xs tracking-widest uppercase font-bold">
              Uganda Safari Specialists
            </span>
          </div>

          {/* Subtext */}
          <p
            className="text-white/50 text-lg leading-relaxed max-w-md mb-12 font-light"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 1.2s",
            }}
          >
            Gorilla trekking in Bwindi. Big game in Queen Elizabeth. Thundering
            Murchison Falls. Uganda&apos;s wilderness is waiting — let us take
            you there.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-16"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 1.5s",
            }}
          >
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-[var(--color-brand)] text-gray-900 px-9 py-4 text-xs font-bold tracking-[0.2em] uppercase no-underline inline-flex items-center gap-3 transition-all duration-300 hover:gap-5"
            >
              <span>Plan Your Safari</span>
              <span className="text-base leading-none">→</span>
            </Link>
            <Link
              href="/destinations"
              className="border border-white/20 text-white/70 px-9 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 no-underline inline-block"
            >
              Explore Destinations
            </Link>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-px bg-white/10 border border-white/10 max-w-sm"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 1.8s",
            }}
          >
            {[
              { val: "15+", label: "Years" },
              { val: "5K+", label: "Travelers" },
              { val: "12", label: "Destinations" },
            ].map((s) => (
              <div key={s.label} className="bg-black/40 px-5 py-4 text-center">
                <div
                  className="font-[family-name:var(--font-bebas)] text-2xl"
                  style={{ color: "var(--color-brand)" }}
                >
                  {s.val}
                </div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-white/30 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes blink { from { opacity:1 } to { opacity:0 } }`}</style>
    </section>
  );
}
