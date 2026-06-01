import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Clock, DollarSign } from "lucide-react";

export default function Page() {
  const highlights = ["Tree-climbing lions in Ishasha sector","Kazinga Channel boat safari","600+ bird species — a birder's paradise","Hippos, crocodiles, elephants & buffalo","Maramagambo Forest chimpanzee tracking"];
  return (
    <>
      <div className="page-hero">
        <span className="hidden md:block font-[family-name:var(--font-bebas)] absolute right-0 top-0 leading-none select-none pointer-events-none text-black/[0.04]" style={{ fontSize: "130px" }}>SAFARI</span>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
          <Link href="/" className="no-underline" style={{ color: "var(--color-brand)" }}>Home</Link>{" / "}
          <Link href="/destinations" className="no-underline" style={{ color: "var(--color-brand)" }}>Destinations</Link>{" / "}
          Queen Elizabeth National Park
        </p>
        <div className="flex items-center gap-5 mb-4">
          <div className="w-16 h-16 border-2 flex items-center justify-center text-3xl flex-shrink-0 bg-white" style={{ borderColor: "var(--color-brand)" }}>🌍</div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-gray-400 mb-1">Uganda's Most Diverse Park</p>
            <h1 className="font-[family-name:var(--font-bebas)] tracking-wide text-gray-900" style={{ fontSize: "clamp(30px,5vw,60px)" }}>Queen Elizabeth National Park</h1>
          </div>
        </div>
        <p className="text-gray-500 max-w-2xl leading-relaxed">Famous for tree-climbing lions, Kazinga Channel boat safaris, and over 600 bird species across stunning diverse habitats.</p>
      </div>

      <section className="bg-white page-section">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14 lg:gap-20">
          <div className="space-y-14">
            {/* Image */}
            <AnimatedSection>
              <div className="relative w-full overflow-hidden" style={{ height: "420px" }}>
                <Image src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80" alt="Queen Elizabeth National Park" fill className="object-cover" />
              </div>
            </AnimatedSection>

            {/* About */}
            <AnimatedSection>
              <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-gray-900 mb-8">About This Destination</h2>
              <p className="text-gray-500 leading-relaxed text-lg mb-10">Queen Elizabeth National Park stretches across 1,978 km² of diverse habitats. Famous for its unique tree-climbing lions in Ishasha and the stunning Kazinga Channel, where hippos, Nile crocodiles and hundreds of bird species can be observed at close range.</p>
              <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-gray-900 mb-6">Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((h: string) => (
                  <div key={h} className="flex items-center gap-4 border border-gray-200 px-5 py-3.5 hover:border-[var(--color-brand)] transition-colors group">
                    <div className="w-5 h-5 border-2 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[var(--color-brand)] group-hover:border-[var(--color-brand)]" style={{ borderColor: "var(--color-brand)" }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand)] group-hover:text-gray-900 transition-colors"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">{h}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <AnimatedSection delay={300}>
            <div className="sticky top-24">
              <div className="border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 px-7 py-5">
                  <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-white">Book This Safari</h3>
                  <p className="text-xs text-gray-400 mt-1">Get a tailored itinerary from our experts</p>
                </div>
                <div className="relative p-7">
                  <div className="absolute -top-px -left-px w-12 h-12 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: "var(--color-brand)" }}/>
                  <div className="absolute -bottom-px -right-px w-12 h-12 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: "var(--color-brand)" }}/>
                  <div className="space-y-3">
                    <a href="https://wa.me/256751621506?text=Hi, I'm interested in a safari to Queen Elizabeth National Park. Can you help?" target="_blank" rel="noopener noreferrer" className="btn-gold w-full text-center block">💬 WhatsApp Now</a>
                    <Link href="/contact" className="btn-outline w-full text-center block">Send Inquiry →</Link>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 shrink-0" style={{ color: "var(--color-brand)" }}/>
                      <div><p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Location</p><p className="text-sm text-gray-600">Southwest Uganda</p></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 shrink-0" style={{ color: "var(--color-brand)" }}/>
                      <div><p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Best Time</p><p className="text-sm text-gray-600">Year-round</p></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-4 h-4 shrink-0" style={{ color: "var(--color-brand)" }}/>
                      <div><p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Starting From</p><p className="text-sm text-gray-600">From $150/day</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 overflow-hidden">
                <a href="tel:+256200992240" className="flex items-center gap-4 border-t border-gray-100 px-7 py-4 hover:bg-gray-50 hover:text-[var(--color-brand)] transition-colors no-underline group">
                  <span>📞</span>
                  <div><p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Call Us</p><p className="text-sm text-gray-600 group-hover:text-[var(--color-brand)] transition-colors">+256 200 992240</p></div>
                  <span className="ml-auto text-gray-300 group-hover:text-[var(--color-brand)] transition-colors">→</span>
                </a>
                <a href="mailto:info@mbuniafricansafaris.com" className="flex items-center gap-4 border-t border-gray-100 px-7 py-4 hover:bg-gray-50 hover:text-[var(--color-brand)] transition-colors no-underline group">
                  <span>✉️</span>
                  <div><p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Email</p><p className="text-sm text-gray-600 group-hover:text-[var(--color-brand)] transition-colors break-all">info@mbuniafricansafaris.com</p></div>
                  <span className="ml-auto text-gray-300 group-hover:text-[var(--color-brand)] transition-colors">→</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
