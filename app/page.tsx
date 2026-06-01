"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Star } from "lucide-react";

const destinations = [
  { name: "Bwindi Impenetrable Forest", slug: "bwindi", image: "https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?auto=format&fit=crop&w=800&q=80", desc: "Mountain Gorilla Trekking", tag: "Most Popular" },
  { name: "Queen Elizabeth NP", slug: "queen-elizabeth", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80", desc: "Tree-climbing lions & Big Five", tag: "Wildlife" },
  { name: "Murchison Falls", slug: "murchison-falls", image: "https://images.unsplash.com/photo-1534177616064-ef1385e9bc03?auto=format&fit=crop&w=800&q=80", desc: "Africa's most powerful waterfall", tag: "Adventure" },
  { name: "Lake Bunyonyi", slug: "lake-bunyonyi", image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80", desc: "Scenic highland lake retreat", tag: "Relaxation" },
];

const stats = [
  { num: "15+", label: "Years Experience" },
  { num: "5K+", label: "Happy Travelers" },
  { num: "12", label: "Destinations" },
  { num: "99%", label: "Satisfaction Rate" },
];

const features = [
  { icon: "🦍", title: "Gorilla Trekking Experts", desc: "Specialist permits and expert trackers for the world's most extraordinary wildlife encounter in Bwindi.", href: "/destinations/bwindi" },
  { icon: "🚙", title: "Custom Safari Vehicles", desc: "Purpose-built 4x4 land cruisers with pop-up roofs for unobstructed 360° game viewing across Uganda.", href: "/services" },
  { icon: "🌿", title: "Sustainable Tourism", desc: "We prioritise conservation and reinvest in local communities across every national park we operate in.", href: "/about" },
  { icon: "🏕️", title: "Luxury Lodges", desc: "Handpicked accommodations that blend comfort with Uganda's spectacular wild landscapes.", href: "/services" },
  { icon: "👨‍🏫", title: "Expert Local Guides", desc: "Born and raised in Uganda's wilderness, our guides offer unmatched knowledge of flora and fauna.", href: "/about" },
  { icon: "🛡️", title: "Safety First", desc: "International safety standards and Flying Doctors emergency cover included on every safari.", href: "/contact" },
];

const testimonials = [
  { name: "Sarah M.", origin: "London, UK", text: "The gorilla trek in Bwindi was the most profound wildlife experience of my life. Mbuni's guides are exceptional.", rating: 5 },
  { name: "David K.", origin: "New York, USA", text: "Queen Elizabeth Park blew us away — tree-climbing lions, hippos, and a stunning boat safari at sunset.", rating: 5 },
  { name: "Anita R.", origin: "Nairobi, Kenya", text: "Murchison Falls took my breath away. The team was professional, caring, and made everything seamless.", rating: 5 },
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <Hero />

      {/* ── ABOUT ── */}
      <section className="bg-white page-section overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Image side */}
          <AnimatedSection>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-2/3 h-2/3 bg-gray-50 border border-gray-200 -z-10" />
              <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 opacity-10 -z-10" style={{ background: "var(--color-brand)" }} />
              <div className="w-full relative overflow-hidden" style={{ minHeight: "460px" }}>
                <Image
                  src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?auto=format&fit=crop&w=800&q=80"
                  alt="Uganda Safari"
                  fill
                  className="object-cover"
                />
                {/* Floating stat badge */}
                <div className="absolute -bottom-5 -right-5 lg:-right-8 z-20 p-6 shadow-xl" style={{ background: "var(--color-brand)" }}>
                  <div className="font-[family-name:var(--font-bebas)] text-5xl leading-none text-gray-900">15+</div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase mt-1 text-gray-900/70">Years of Trust</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text side */}
          <AnimatedSection delay={200}>
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">About Mbuni African Safaris</h2>
            <div className="w-12 h-0.5 mb-7" style={{ background: "var(--color-brand)" }} />
            <p className="text-gray-500 leading-relaxed mb-6">
              Our name <strong className="text-gray-800">&apos;Mbuni&apos;</strong> means Ostrich in Swahili, symbolising our deep roots in African soil. Founded in 2009 and based in <strong className="text-gray-800">Kampala, Uganda</strong>, we specialise in authentic, immersive experiences that go beyond the ordinary tourist trail.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              From mountain gorillas in Bwindi to the thundering Murchison Falls and the vast savannahs of Queen Elizabeth — every safari is crafted with meticulous care and an unwavering commitment to your experience.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-4 gap-px bg-gray-200 border border-gray-200">
              {stats.map((s) => (
                <div key={s.label} className="bg-white py-7 px-3 text-center group hover:bg-[var(--color-brand)] transition-colors duration-300 cursor-default">
                  <div className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl leading-none group-hover:text-gray-900 transition-colors duration-300" style={{ color: "var(--color-brand)" }}>{s.num}</div>
                  <div className="text-[9px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-gray-900/70 transition-colors duration-300 mt-2">{s.label}</div>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-flex items-center gap-4 mt-10 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900 hover:text-[var(--color-brand)] transition-colors group no-underline">
              <span className="block w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
              Our Full Story
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section className="bg-gray-50 page-section">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="section-label">Discover Uganda</span>
              <h2 className="section-title">Top Destinations</h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
              The Pearl of Africa offers some of the world&apos;s most extraordinary wildlife encounters.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <AnimatedSection key={dest.name} delay={i * 100}>
              <Link href={`/destinations/${dest.slug}`} className="no-underline block h-full">
                <div className="group relative bg-white border border-gray-200 overflow-hidden hover:border-[var(--color-brand)] hover:shadow-xl transition-all duration-500 cursor-pointer h-full">
                  {/* Gold sweep from bottom */}
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-0" style={{ background: "var(--color-brand)" }} />
                  {/* Number watermark */}
                  <span className="absolute -bottom-3 -right-2 font-[family-name:var(--font-bebas)] leading-none select-none text-gray-100 group-hover:text-white/10 transition-colors z-0" style={{ fontSize: "90px" }}>{String(i + 1).padStart(2, "0")}</span>

                  <div className="relative h-52 overflow-hidden">
                    <Image src={dest.image} alt={dest.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 border border-[var(--color-brand)] text-[var(--color-brand)] bg-white group-hover:border-gray-900 group-hover:text-gray-900 transition-colors z-10">
                        {dest.tag}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 p-7">
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-gray-700 mb-2 transition-colors">
                      <MapPin className="w-3 h-3" /> {dest.desc}
                    </div>
                    <h3 className="font-[family-name:var(--font-bebas)] text-xl tracking-wide text-gray-900 mb-2 leading-tight">{dest.name}</h3>
                    <div className="w-8 h-0.5 mb-4 group-hover:bg-gray-900 transition-colors duration-300" style={{ background: "var(--color-brand)" }} />
                    <div className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-brand)] group-hover:text-gray-900 transition-colors flex items-center gap-2">
                      Explore <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/destinations" className="btn-gold">View All Destinations</Link>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <AnimatedSection>
        <section className="bg-white page-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="section-label">Why Mbuni Safaris</span>
              <h2 className="section-title">Built on Trust & Excellence</h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
              Everything we do is designed around delivering the perfect Uganda safari experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Link key={f.title} href={f.href} className="no-underline block h-full">
                <div className="group relative bg-gray-50 border border-gray-200 p-10 overflow-hidden hover:border-[var(--color-brand)] hover:shadow-xl transition-all duration-500 h-full">
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-0" style={{ background: "var(--color-brand)" }} />
                  <span className="absolute -bottom-3 -right-2 font-[family-name:var(--font-bebas)] text-gray-200 group-hover:text-white/10 leading-none select-none transition-colors" style={{ fontSize: "90px" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="relative z-10">
                    <div className="w-14 h-14 border-2 border-gray-200 group-hover:border-gray-900 flex items-center justify-center mb-8 text-2xl transition-colors duration-300">{f.icon}</div>
                    <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-gray-900 mb-2 leading-tight">{f.title}</h3>
                    <div className="w-8 h-0.5 mb-5 group-hover:bg-gray-900 transition-colors duration-300" style={{ background: "var(--color-brand)" }} />
                    <p className="text-sm text-gray-500 group-hover:text-gray-700 leading-relaxed transition-colors duration-300">{f.desc}</p>
                    <div className="mt-6 text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-brand)] group-hover:text-gray-900 transition-colors flex items-center gap-2">
                      Learn More <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-gray-50 page-section">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="section-label" style={{ display: "block", textAlign: "center" }}>Traveler Stories</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>What They Say</h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="group relative bg-white border border-gray-200 p-10 overflow-hidden hover:border-[var(--color-brand)] hover:shadow-xl transition-all duration-500 h-full">
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-0" style={{ background: "var(--color-brand)" }} />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[var(--color-brand)] text-[var(--color-brand)] group-hover:fill-gray-900 group-hover:text-gray-900 transition-colors" />
                    ))}
                  </div>
                  <p className="text-gray-500 group-hover:text-gray-700 text-sm leading-relaxed mb-8 italic transition-colors">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="w-8 h-0.5 mb-5 group-hover:bg-gray-900 transition-colors" style={{ background: "var(--color-brand)" }} />
                  <div>
                    <p className="font-[family-name:var(--font-bebas)] text-xl tracking-wide text-gray-900">{t.name}</p>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-gray-700 transition-colors mt-1">{t.origin}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="relative overflow-hidden bg-gray-900 px-6 md:px-16 lg:px-24 py-24">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10" style={{ background: "var(--color-brand)" }} />
        <div className="absolute -left-10 -bottom-10 w-56 h-56 border border-white/5 rounded-full" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 border border-white/5 rounded-full" />
        <span className="absolute right-0 top-1/2 -translate-y-1/2 font-[family-name:var(--font-bebas)] leading-none select-none pointer-events-none text-white/[0.03]" style={{ fontSize: "220px" }}>UGANDA</span>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="max-w-xl">
            <span className="block text-[11px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-brand)" }}>Begin Your Adventure</span>
            <h2 className="font-[family-name:var(--font-bebas)] text-white tracking-wide leading-none mb-4" style={{ fontSize: "clamp(40px,5vw,64px)" }}>
              Ready to Experience the Pearl of Africa?
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              Let us craft your dream Uganda safari — from mountain gorillas to the mighty Nile.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact" className="btn-gold text-center">Plan Your Safari</Link>
            <a href="https://wa.me/256751621506" target="_blank" rel="noopener noreferrer"
              className="border border-white/30 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:border-white hover:bg-white/10 transition-all inline-block text-center">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
