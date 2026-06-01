import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Mbuni African Safaris Uganda",
  description:
    "Ready to explore Uganda? Contact us today to start planning your Pearl of Africa adventure.",
};

const randomHeroImage =
  "https://source.unsplash.com/random/1600x900/?safari,uganda";

const contactDetails = [
  {
    icon: "📍",
    label: "Visit Our Office",
    value: "Plot 1/3 Nkurumah Road, Nakasero, Kampala, Uganda",
    href: "https://maps.google.com/?q=Nakasero+Kampala+Uganda",
  },
  {
    icon: "📞",
    label: "Call or WhatsApp",
    value: "+256 200 992240",
    sub: "Available 24/7 for emergencies",
    href: "tel:+256200992240",
  },
  {
    icon: "✉️",
    label: "Email Us",
    value: "info@mbuniafricansafaris.com",
    href: "mailto:info@mbuniafricansafaris.com",
  },
  {
    icon: "🕐",
    label: "Office Hours",
    value: "Mon – Fri: 8:00 AM – 6:00 PM EAT",
    sub: "Sat: 9:00 AM – 3:00 PM EAT",
    href: "#",
  },
];

const faqs = [
  {
    q: "Do I need a visa to visit Uganda?",
    a: "Yes, most nationalities require a visa. You can obtain an East Africa Tourist Visa on arrival or in advance online, which also covers Kenya and Rwanda.",
  },
  {
    q: "When is the best time for gorilla trekking?",
    a: "June–September and December–February are the dry seasons offering the best trekking conditions. However, gorilla permits can be booked year-round.",
  },
  {
    q: "How far in advance should I book?",
    a: "Gorilla permits are limited — we recommend booking 3–6 months in advance, especially for peak season travel.",
  },
  {
    q: "What is included in your safari prices?",
    a: "All our safaris include: 4x4 safari vehicle, professional guide, all park fees, accommodation, meals on safari, airport transfers, and Flying Doctors emergency cover.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <div
        className="page-hero relative"
        style={{
          backgroundImage: `url('https://africageographic.com/wp-content/uploads/2023/11/Mihingo-Lodge-3-1536x1026.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <span
          className="hidden md:block font-[family-name:var(--font-bebas)] absolute right-0 top-0 leading-none select-none pointer-events-none text-black/[0.04]"
          style={{ fontSize: "130px" }}
        >
          CONTACT
        </span>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-black mb-4">
          <Link
            href="/"
            className="no-underline"
            // style={{ color: "var(--color-brand)" }}
          >
            Home
          </Link>{" "}
          / Contact Us
        </p>
        <h1
          className="font-[family-name:var(--font-bebas)] tracking-wide text-white"
          style={{ fontSize: "clamp(48px,8vw,80px)" }}
        >
          Start Your Journey
        </h1>
        <p className="text-white mt-3 max-w-lg">
          Ready to explore Uganda? Our safari experts are here to craft your
          perfect Pearl of Africa adventure.
        </p>
      </div>

      {/* Main grid: info + form */}
      <section className="bg-white page-section">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-14 lg:gap-20 items-start">
          {/* Left — contact details */}
          <AnimatedSection>
            <span className="section-label">Get in Touch</span>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-gray-900 mb-2">
              We&apos;d Love to Hear from You
            </h2>
            <div
              className="w-12 h-0.5 mb-8"
              style={{ background: "var(--color-brand)" }}
            />
            <p className="text-gray-500 leading-relaxed mb-10">
              Whether you&apos;re ready to book or just exploring options, our
              team responds within 24 hours — usually much sooner via WhatsApp.
            </p>

            {/* Detail cards */}
            <div className="space-y-3 mb-10">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 border border-gray-200 px-6 py-5 hover:border-[var(--color-brand)] hover:shadow-md transition-all duration-300 group no-underline"
                >
                  <div
                    className="w-12 h-12 border-2 flex items-center justify-center text-xl shrink-0 group-hover:bg-[var(--color-brand)] transition-colors duration-300"
                    style={{ borderColor: "var(--color-brand)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-[var(--color-brand)] transition-colors">
                      {item.value}
                    </p>
                    {item.sub && (
                      <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                    )}
                  </div>
                  <span className="ml-auto text-gray-300 group-hover:text-[var(--color-brand)] transition-colors self-center">
                    →
                  </span>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/256751621506"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 no-underline"
              style={{ background: "#25D366", color: "#fff" }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp Now
            </a>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection delay={200}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-gray-50 page-section">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span
              className="section-label"
              style={{ display: "block", textAlign: "center" }}
            >
              Common Questions
            </span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Frequently Asked
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="group border border-gray-200 hover:border-[var(--color-brand)] transition-colors duration-300 overflow-hidden">
                <div className="flex items-start gap-5 p-7">
                  <span
                    className="font-[family-name:var(--font-bebas)] text-3xl leading-none shrink-0 group-hover:text-gray-900 transition-colors"
                    style={{ color: "var(--color-brand)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-[family-name:var(--font-bebas)] text-xl tracking-wide text-gray-900 mb-2">
                      {faq.q}
                    </h4>
                    <div
                      className="w-8 h-0.5 mb-3 group-hover:bg-gray-900 transition-colors"
                      style={{ background: "var(--color-brand)" }}
                    />
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-400 mb-5">
            Still have questions? Our team is happy to help.
          </p>
          <a
            href="https://wa.me/256751621506"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            💬 Ask on WhatsApp
          </a>
        </div>
      </section>

      {/* Map placeholder / dark CTA */}
      <div className="relative overflow-hidden bg-gray-900 px-6 md:px-16 lg:px-24 py-20">
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-[0.07]"
          style={{ background: "var(--color-brand)" }}
        />
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 font-[family-name:var(--font-bebas)] leading-none select-none pointer-events-none text-white/[0.03]"
          style={{ fontSize: "200px" }}
        >
          UGANDA
        </span>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div>
            <span
              className="block text-[11px] font-bold tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--color-brand)" }}
            >
              Kampala, Uganda 🇺🇬
            </span>
            <h2
              className="font-[family-name:var(--font-bebas)] text-white tracking-wide leading-none mb-4"
              style={{ fontSize: "clamp(36px,5vw,60px)" }}
            >
              We&apos;re Based in the Heart of Kampala.
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-md">
              Plot 1/3 Nkurumah Road, Nakasero — just minutes from Entebbe
              International Airport and all major hotels.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/services" className="btn-gold text-center">
              View Safari Packages
            </Link>
            <a
              href="tel:+256200992240"
              className="border border-white/30 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:border-white hover:bg-white/10 transition-all inline-block text-center"
            >
              📞 Call Us Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
