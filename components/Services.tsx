"use client";
import { useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

interface PricingTier { name: string; price: string; features: string[]; }
interface Package {
  icon: string; sub: string; title: string; duration: string; basePrice: string;
  desc: string; locations: string; image: string;
  features: string[]; pricing: PricingTier[];
  waMessage: string;
}

const packages: Package[] = [
  {
    icon: "🦍", sub: "Bwindi & Kampala", title: "Gorilla Trekking Safari", duration: "5 Days", basePrice: "$2,800",
    desc: "The ultimate wildlife encounter — trek through Bwindi's ancient forest to meet Uganda's mountain gorillas face to face.",
    locations: "Bwindi & Kampala", image: "https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?auto=format&fit=crop&w=800&q=80",
    features: ["Gorilla trekking permit & experience", "Expert tracker guides in Bwindi Forest", "Kampala city cultural tour", "Luxury forest lodge accommodation", "Batwa cultural village visit", "Scenic southwest Uganda drive"],
    pricing: [
      { name: "Standard", price: "$2,800", features: ["Shared 4x4 vehicle", "Mid-range lodge", "Group trekking"] },
      { name: "Premium", price: "$4,500", features: ["Private vehicle", "Luxury lodge", "Personal guide"] },
      { name: "Luxury", price: "$6,500", features: ["Private vehicle & guide", "5-star lodge", "Helicopter option"] },
    ],
    waMessage: "Hi, I'm interested in the Gorilla Trekking Safari (5 Days from $2,800). Can you send me more details?",
  },
  {
    icon: "🦁", sub: "Queen Elizabeth & Murchison Falls", title: "Uganda Big Game Circuit", duration: "8 Days", basePrice: "$3,200",
    desc: "Uganda's two greatest parks — tree-climbing lions, Nile hippos, and the world's most powerful waterfall.",
    locations: "Queen Elizabeth & Murchison Falls", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    features: ["Tree-climbing lion sighting in Ishasha", "Kazinga Channel boat safari", "Murchison Falls boat cruise", "Nile Delta game drives", "Professional wildlife guide", "All park fees included"],
    pricing: [
      { name: "Standard", price: "$3,200", features: ["Shared accommodation", "Group game drives", "Basic meals"] },
      { name: "Premium", price: "$5,000", features: ["Mid-range lodges", "Small group", "Enhanced dining"] },
      { name: "Luxury", price: "$7,500", features: ["Luxury tented camps", "Private tours", "Gourmet meals"] },
    ],
    waMessage: "Hi, I'm interested in the Uganda Big Game Circuit (8 Days from $3,200). Can you send me more details?",
  },
  {
    icon: "🐒", sub: "Kibale, Bwindi & Mgahinga", title: "Uganda Primates Circuit", duration: "10 Days", basePrice: "$3,800",
    desc: "Track chimpanzees in Kibale, gorillas in Bwindi, and golden monkeys in Mgahinga — the ultimate primate adventure.",
    locations: "Kibale, Bwindi & Mgahinga", image: "https://images.unsplash.com/photo-1534177616064-ef1385e9bc03?auto=format&fit=crop&w=800&q=80",
    features: ["Chimpanzee tracking in Kibale", "Mountain gorilla trekking in Bwindi", "Golden monkey tracking in Mgahinga", "Red-tailed monkey habituation", "Crater lakes canoe rides", "Bigodi Wetland Walk"],
    pricing: [
      { name: "Standard", price: "$3,800", features: ["3-star lodges", "Shared transport", "Group permits"] },
      { name: "Premium", price: "$6,200", features: ["4-star lodges", "Private transport", "All permits"] },
      { name: "Luxury", price: "$9,000", features: ["5-star lodges", "Private guide", "All inclusive"] },
    ],
    waMessage: "Hi, I'm interested in the Uganda Primates Circuit (10 Days from $3,800). Can you send more details?",
  },
  {
    icon: "🥁", sub: "Kampala & Rural Uganda", title: "Cultural Uganda Experience", duration: "5 Days", basePrice: "$1,800",
    desc: "Immerse yourself in the kingdoms, traditions, and vibrant cultures of Uganda — from Buganda to the Batwa.",
    locations: "Kampala & Rural Uganda", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    features: ["Buganda Kingdom palace tour", "Batwa pygmy community visit", "Traditional drum-making workshop", "Ugandan cuisine cooking class", "Kasubi royal tombs", "Owino market tour"],
    pricing: [
      { name: "Standard", price: "$1,800", features: ["Community guesthouse", "Group experience", "All meals"] },
      { name: "Premium", price: "$2,800", features: ["Boutique hotel", "Small groups", "Private guide"] },
      { name: "VIP", price: "$4,200", features: ["Luxury hotel", "Exclusive access", "Personal concierge"] },
    ],
    waMessage: "Hi, I'm interested in the Cultural Uganda Experience (5 Days from $1,800). Can you send more details?",
  },
];

function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 100}>
      <Link href="#" className="no-underline block h-full" onClick={(e) => e.preventDefault()}>
        <div className="group relative bg-white border border-gray-200 overflow-hidden hover:border-[var(--color-brand)] hover:shadow-xl transition-all duration-500 h-full">
          {/* Gold sweep */}
          <div className={`absolute inset-0 transition-transform duration-500 -z-0 ${open ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"}`} style={{ background: "var(--color-brand)" }} />
          {/* Number watermark */}
          <span className="absolute -bottom-3 -right-2 font-[family-name:var(--font-bebas)] leading-none select-none text-gray-100 group-hover:text-white/10 transition-colors z-0" style={{ fontSize: "90px" }}>{String(index + 1).padStart(2, "0")}</span>

          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <Image src={pkg.image} alt={pkg.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute top-3 left-3">
              <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 border border-[var(--color-brand)] text-[var(--color-brand)] bg-white">{pkg.duration}</span>
            </div>
            <div className="absolute top-3 right-3">
              <span className="font-[family-name:var(--font-bebas)] text-2xl px-3 py-1 bg-gray-900 text-[var(--color-brand)]">{pkg.basePrice}</span>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-8">
            <div className="w-14 h-14 border-2 border-gray-200 group-hover:border-gray-900 flex items-center justify-center mb-6 text-2xl transition-colors duration-300">{pkg.icon}</div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-gray-700 mb-1 transition-colors">{pkg.sub}</p>
            <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-gray-900 mb-2 leading-tight">{pkg.title}</h3>
            <div className="w-8 h-0.5 mb-4 group-hover:bg-gray-900 transition-colors duration-300" style={{ background: "var(--color-brand)" }} />
            <p className="text-sm text-gray-500 group-hover:text-gray-700 leading-relaxed mb-6 transition-colors">{pkg.desc}</p>

            {/* Features preview */}
            <ul className="space-y-1.5 mb-6">
              {pkg.features.slice(0, 3).map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-700 transition-colors">
                  <span className="w-3 h-px bg-[var(--color-brand)] group-hover:bg-gray-900 transition-colors shrink-0" />{f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setOpen(!open)}
              className="w-full py-3 border border-gray-200 group-hover:border-gray-900 text-xs font-bold tracking-[0.15em] uppercase text-gray-500 group-hover:text-gray-900 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 cursor-pointer">
              {open ? "Hide Details" : "View Details & Pricing"} <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>↓</span>
            </button>
          </div>

          {/* Expanded */}
          {open && (
            <div className="relative z-10 px-8 pb-8 border-t border-gray-100">
              {/* All features */}
              <div className="pt-6 mb-6">
                <h4 className="font-[family-name:var(--font-bebas)] text-lg tracking-wide text-gray-900 mb-4">What&apos;s Included</h4>
                <div className="grid grid-cols-1 gap-2">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-center gap-4 border border-gray-200 px-4 py-3 hover:border-[var(--color-brand)] transition-colors group/feat">
                      <div className="w-4 h-4 border flex items-center justify-center shrink-0" style={{ borderColor: "var(--color-brand)" }}>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2 4-4" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span className="text-xs text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div>
                <h4 className="font-[family-name:var(--font-bebas)] text-lg tracking-wide text-gray-900 mb-4">Choose Your Experience</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {pkg.pricing.map((tier) => (
                    <div key={tier.name} className="border border-gray-200 hover:border-[var(--color-brand)] transition-colors overflow-hidden">
                      <div className="bg-gray-900 px-4 py-3">
                        <p className="text-[10px] font-bold tracking-widest uppercase text-white/50">{tier.name}</p>
                        <p className="font-[family-name:var(--font-bebas)] text-2xl" style={{ color: "var(--color-brand)" }}>{tier.price}</p>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-1.5 mb-4">
                          {tier.features.map((f) => (
                            <li key={f} className="text-xs text-gray-500 flex items-center gap-2">
                              <span className="w-3 h-px shrink-0" style={{ background: "var(--color-brand)" }} />{f}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={`https://wa.me/256751621506?text=${encodeURIComponent(`Hi, I'm interested in the *${pkg.title}* — *${tier.name}* package (${tier.price}). Can you provide more information?`)}`}
                          target="_blank" rel="noopener noreferrer"
                          className="btn-gold w-full text-center block text-[10px]">
                          💬 WhatsApp
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Link>
    </AnimatedSection>
  );
}

export function Services() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {packages.map((pkg, index) => (
        <PackageCard key={pkg.title} pkg={pkg} index={index} />
      ))}
    </div>
  );
}
