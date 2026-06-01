import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Mbuni African Safaris Uganda",
  description:
    "Born from a deep love for Uganda's wilderness, Mbuni African Safaris has been connecting travelers with the Pearl of Africa since 2009.",
};

const team = [
  { name: "James Musoke", role: "Founder & Lead Guide", initial: "JM" },
  { name: "Amina Nakato", role: "Operations Director", initial: "AN" },
  { name: "David Kamya", role: "Head Safari Guide", initial: "DK" },
  { name: "Sarah Nakirya", role: "Travel Consultant", initial: "SN" },
];

const values = [
  {
    icon: "🌿",
    title: "Conservation",
    desc: "Protecting Uganda's unique wildlife and habitats for generations to come. Every safari directly funds conservation efforts.",
  },
  {
    icon: "❤️",
    title: "Authenticity",
    desc: "Real connections with Uganda's people, culture, and pristine nature — experiences beyond the ordinary tourist trail.",
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "Empowering local Ugandan communities through responsible tourism and fair employment practices.",
  },
  {
    icon: "🛡️",
    title: "Safety",
    desc: "Uncompromising international safety standards and Flying Doctors cover for your complete peace of mind.",
  },
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "We learn about your interests, budget, group size, and dream experience to tailor a perfect Uganda itinerary.",
  },
  {
    step: "02",
    title: "Custom Itinerary Design",
    desc: "Our experts craft a bespoke safari plan covering your chosen destinations — from gorillas to game parks.",
  },
  {
    step: "03",
    title: "Seamless Booking",
    desc: "We handle all permits, transfers, accommodation, and logistics so you can focus on the excitement ahead.",
  },
  {
    step: "04",
    title: "Unforgettable Safari",
    desc: "Your expert Ugandan guide meets you at Entebbe and delivers an experience of a lifetime.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <div
        className="page-hero relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://cloudfront.safaribookings.com/lib/uganda/1000x625/Lake_Mburo_National_Park_031.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <span
          className="hidden md:block font-[family-name:var(--font-bebas)] absolute right-0 top-0 leading-none select-none pointer-events-none text-white/10"
          style={{ fontSize: "140px" }}
        >
          ABOUT
        </span>
        <p className="relative z-10 text-xs font-bold tracking-[0.2em] uppercase text-white/80 mb-4">
          <Link
            href="/"
            className="no-underline"
            style={{ color: "var(--color-brand)" }}
          >
            Home
          </Link>{" "}
          / About Us
        </p>
        <h1
          className="relative z-10 font-[family-name:var(--font-bebas)] tracking-wide text-white"
          style={{ fontSize: "clamp(48px,8vw,80px)" }}
        >
          Our Story
        </h1>
        <p className="relative z-10 text-white/80 mt-3 max-w-lg">
          Born from a deep love for Uganda&apos;s extraordinary wilderness,
          connecting travelers with the Pearl of Africa since 2009.
        </p>
      </div>

      {/* Mission section */}
      <section className="bg-white page-section">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-20 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-2/3 h-2/3 bg-gray-50 border border-gray-200 -z-10" />
              <div
                className="absolute -bottom-6 -right-6 w-1/2 h-1/2 opacity-10 -z-10"
                style={{ background: "var(--color-brand)" }}
              />
              <div
                className="w-full bg-gray-900 relative"
                style={{ minHeight: "460px" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80"
                  alt="Uganda Safari"
                  fill
                  className="object-cover opacity-70"
                />
                <div
                  className="absolute -bottom-5 -right-5 lg:-right-8 z-20 p-6 shadow-xl"
                  style={{ background: "var(--color-brand)" }}
                >
                  <div className="font-[family-name:var(--font-bebas)] text-5xl leading-none text-gray-900">
                    2009
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase mt-1 text-gray-900/70">
                    Founded in Kampala
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <span className="section-label">Our Mission</span>
            <h2 className="section-title">
              Connecting Travelers with the Wild
            </h2>
            <div
              className="w-12 h-0.5 mb-7"
              style={{ background: "var(--color-brand)" }}
            />
            <p className="text-gray-500 leading-relaxed mb-6">
              Our name{" "}
              <strong className="text-gray-800">&apos;Mbuni&apos;</strong> means
              Ostrich in Swahili, symbolising our deep roots in African soil. We
              were founded by a team of passionate conservationists and travel
              experts who believed Uganda deserved a world-class safari
              operator.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              To create transformative safari experiences that connect travelers
              with Uganda&apos;s extraordinary wildlife — from mountain gorillas
              in Bwindi to the vast savannahs of Queen Elizabeth — while
              supporting conservation and local communities.
            </p>
            <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 mb-10">
              {[
                { num: "15+", label: "Years Active" },
                { num: "4", label: "Conservation Projects" },
                { num: "50+", label: "Safari Routes" },
                { num: "100%", label: "Tailored Trips" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white py-7 px-4 text-center group hover:bg-[var(--color-brand)] transition-colors duration-300"
                >
                  <div
                    className="font-[family-name:var(--font-bebas)] text-4xl leading-none group-hover:text-gray-900 transition-colors"
                    style={{ color: "var(--color-brand)" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-gray-900/70 transition-colors mt-2">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-gold">
              Plan Your Safari
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 page-section">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span
              className="section-label"
              style={{ display: "block", textAlign: "center" }}
            >
              What We Stand For
            </span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Core Values
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 100}>
              <div className="group relative bg-white border border-gray-200 p-10 overflow-hidden hover:border-[var(--color-brand)] hover:shadow-xl transition-all duration-500 h-full">
                <div
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-0"
                  style={{ background: "var(--color-brand)" }}
                />
                <span
                  className="absolute -bottom-3 -right-2 font-[family-name:var(--font-bebas)] text-gray-100 group-hover:text-white/10 leading-none select-none transition-colors"
                  style={{ fontSize: "90px" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10">
                  <div className="w-14 h-14 border-2 border-gray-200 group-hover:border-gray-900 flex items-center justify-center mb-8 text-2xl transition-colors duration-300">
                    {v.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-gray-900 mb-2 leading-tight">
                    {v.title}
                  </h3>
                  <div
                    className="w-8 h-0.5 mb-5 group-hover:bg-gray-900 transition-colors duration-300"
                    style={{ background: "var(--color-brand)" }}
                  />
                  <p className="text-sm text-gray-500 group-hover:text-gray-700 leading-relaxed transition-colors">
                    {v.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-white page-section">
        <AnimatedSection>
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Our Safari Process</h2>
          <div
            className="w-12 h-0.5 mb-14"
            style={{ background: "var(--color-brand)" }}
          />
        </AnimatedSection>
        <div className="space-y-4">
          {process.map((p) => (
            <AnimatedSection key={p.step}>
              <div className="group flex gap-6 border border-gray-200 p-7 hover:border-[var(--color-brand)] hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-50 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-0" />
                <div className="relative z-10 flex gap-6 w-full">
                  <span
                    className="font-[family-name:var(--font-bebas)] text-5xl leading-none shrink-0"
                    style={{ color: "var(--color-brand)" }}
                  >
                    {p.step}
                  </span>
                  <div>
                    <h4 className="font-[family-name:var(--font-bebas)] text-xl tracking-wide text-gray-900 mb-1">
                      {p.title}
                    </h4>
                    <div
                      className="w-8 h-0.5 mb-3"
                      style={{ background: "var(--color-brand)" }}
                    />
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 page-section">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span
              className="section-label"
              style={{ display: "block", textAlign: "center" }}
            >
              The People
            </span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Meet the Team
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 100}>
              <div className="group text-center">
                <div className="w-full aspect-square bg-gray-900 border-2 border-gray-200 group-hover:border-[var(--color-brand)] flex items-center justify-center mb-5 transition-colors duration-300 relative overflow-hidden">
                  <div
                    className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                    style={{ background: "var(--color-brand)" }}
                  />
                  <span
                    className="relative z-10 font-[family-name:var(--font-bebas)] text-5xl tracking-widest group-hover:text-gray-900 transition-colors"
                    style={{ color: "var(--color-brand)" }}
                  >
                    {member.initial}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-bebas)] text-xl tracking-wide text-gray-900">
                  {member.name}
                </h3>
                <p
                  className="text-[10px] font-bold tracking-[0.2em] uppercase mt-1"
                  style={{ color: "var(--color-brand)" }}
                >
                  {member.role}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="relative overflow-hidden bg-gray-900 px-6 md:px-16 lg:px-24 py-24">
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-[0.07]"
          style={{ background: "var(--color-brand)" }}
        />
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 font-[family-name:var(--font-bebas)] leading-none select-none pointer-events-none text-white/[0.03]"
          style={{ fontSize: "200px" }}
        >
          SAFARI
        </span>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div>
            <span
              className="block text-[11px] font-bold tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--color-brand)" }}
            >
              Ready to Explore Uganda?
            </span>
            <h3
              className="font-[family-name:var(--font-bebas)] text-white tracking-wide leading-none"
              style={{ fontSize: "clamp(36px,5vw,60px)" }}
            >
              Let&apos;s Plan Your Safari Together.
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact" className="btn-gold text-center">
              Get in Touch
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
