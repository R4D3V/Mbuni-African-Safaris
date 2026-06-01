"use client";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";

const destinations = [
  {
    name: "Bwindi Impenetrable Forest",
    slug: "bwindi",
    image:
      "https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?auto=format&fit=crop&w=800&q=80",
    description: "Mountain Gorilla Capital of the World",
    highlight:
      "Trek ancient forest to encounter over half the world's remaining mountain gorillas",
    tag: "UNESCO Heritage",
  },
  {
    name: "Queen Elizabeth National Park",
    slug: "queen-elizabeth",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    description: "Uganda's Most Diverse Park",
    highlight:
      "Legendary tree-climbing lions, hippo-filled channels, and Kazinga Channel boat safaris",
    tag: "Big Five",
  },
  {
    name: "Murchison Falls National Park",
    slug: "murchison-falls",
    image:
      "https://images.unsplash.com/photo-1534177616064-ef1385e9bc03?auto=format&fit=crop&w=800&q=80",
    description: "Home to Africa's Most Powerful Waterfall",
    highlight:
      "Where the Nile forces itself through a 7-metre gorge in the world's most spectacular falls",
    tag: "Adventure",
  },
  {
    name: "Kibale Forest National Park",
    slug: "kibale",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    description: "Primate Capital of the World",
    highlight:
      "Home to 1,500 chimpanzees — track primates through Africa's most beautiful forest",
    tag: "Primates",
  },
  {
    name: "Lake Bunyonyi",
    slug: "lake-bunyonyi",
    image:
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80",
    description: "Africa's Deepest Lake",
    highlight:
      "29 islands dotting crystal-clear waters, surrounded by terraced hills and Batwa culture",
    tag: "Relaxation",
  },
  {
    name: "Kidepo Valley National Park",
    slug: "kidepo",
    image:
      "https://images.unsplash.com/photo-1611602132416-da2045990f76?auto=format&fit=crop&w=800&q=80",
    description: "Uganda's Hidden Wilderness Gem",
    highlight:
      "The most remote park in Uganda — untouched savannah teeming with cheetahs and ostriches",
    tag: "Off the Beaten Path",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <div
        className="page-hero relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://cloudfront.safaribookings.com/lib/uganda/1000x625/Lake_Mburo_National_Park_040.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 bg-slate-950/50 pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="hidden md:block font-[family-name:var(--font-bebas)] absolute right-0 top-0 leading-none select-none pointer-events-none text-black/[0.04]"
          style={{ fontSize: "130px" }}
        >
          DESTINATIONS
        </span>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-4">
          <Link
            href="/"
            className="no-underline"
            // style={{ color: "var(--color-brand)" }}
          >
            Home
          </Link>{" "}
          / Destinations
        </p>
        <h1
          className="font-[family-name:var(--font-bebas)] tracking-wide text-white"
          style={{ fontSize: "clamp(48px,8vw,80px)" }}
        >
          Our Destinations
        </h1>
        <p className="text-white mt-3 max-w-lg">
          Explore Uganda&apos;s most extraordinary wildlife and scenic
          destinations — the Pearl of Africa has it all.
        </p>
      </div>

      <section className="bg-white page-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <AnimatedSection key={dest.slug} delay={i * 100}>
              <Link
                href={`/destinations/${dest.slug}`}
                className="no-underline block h-full"
              >
                <div className="group relative bg-white border border-gray-200 overflow-hidden hover:border-[var(--color-brand)] hover:shadow-xl transition-all duration-500 cursor-pointer h-full">
                  {/* Gold sweep */}
                  <div
                    className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-0"
                    style={{ background: "var(--color-brand)" }}
                  />
                  {/* Number watermark */}
                  <span
                    className="absolute -bottom-3 -right-2 font-[family-name:var(--font-bebas)] leading-none select-none text-gray-100 group-hover:text-white/10 transition-colors z-0"
                    style={{ fontSize: "90px" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 border border-[var(--color-brand)] text-[var(--color-brand)] bg-white group-hover:border-gray-900 group-hover:text-gray-900 transition-colors z-10">
                        {dest.tag}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 p-8">
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-gray-700 mb-1 transition-colors flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {dest.description}
                    </p>
                    <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-gray-900 mb-2 leading-tight">
                      {dest.name}
                    </h3>
                    <div
                      className="w-8 h-0.5 mb-4 group-hover:bg-gray-900 transition-colors duration-300"
                      style={{ background: "var(--color-brand)" }}
                    />
                    <p className="text-sm text-gray-500 group-hover:text-gray-700 leading-relaxed mb-5 transition-colors">
                      {dest.highlight}
                    </p>
                    <div className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-brand)] group-hover:text-gray-900 transition-colors flex items-center gap-2">
                      Explore <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gray-900 px-6 md:px-16 lg:px-24 py-20">
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-[0.07]"
          style={{ background: "var(--color-brand)" }}
        />
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <span
              className="block text-[11px] font-bold tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--color-brand)" }}
            >
              Not Sure Where to Go?
            </span>
            <h2
              className="font-[family-name:var(--font-bebas)] text-white tracking-wide leading-none"
              style={{ fontSize: "clamp(36px,5vw,56px)" }}
            >
              We&apos;ll Help You Choose
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact" className="btn-gold text-center">
              Talk to an Expert
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
      </section>
    </>
  );
}
