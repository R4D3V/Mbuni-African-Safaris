import Link from "next/link";
import Image from "next/image";

const destinationLinks = [
  { href: "/destinations/bwindi", label: "Bwindi Impenetrable Forest" },
  { href: "/destinations/queen-elizabeth", label: "Queen Elizabeth NP" },
  { href: "/destinations/murchison-falls", label: "Murchison Falls" },
  { href: "/destinations/kibale", label: "Kibale Forest" },
  { href: "/destinations/lake-bunyonyi", label: "Lake Bunyonyi" },
  { href: "/destinations/kidepo", label: "Kidepo Valley" },
];
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Safari Packages" },
  { href: "/destinations", label: "Destinations" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Gold CTA strip */}
      <div className="bg-[var(--color-brand)] px-6 md:px-16 lg:px-24 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900">
          Uganda&apos;s Most Trusted Safari Operator
        </span>
        <Link href="/contact" className="btn-white py-2.5 px-6 text-[10px]">
          Plan Your Safari →
        </Link>
      </div>

      <div className="px-6 md:px-16 lg:px-24 pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="no-underline inline-block mb-6">
            <Image
              src="/tempImageXWqb72.png"
              alt="Mbuni African Safaris"
              width={130}
              height={52}
              className="h-12 w-auto"
            />
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Uganda&apos;s premier safari operator. Authentic, sustainable, and
            unforgettable adventures across the Pearl of Africa.
          </p>
          <div className="flex gap-3">
            {[
              { href: "https://wa.me/256751621506", label: "W" },
              { href: "mailto:info@mbuniafricansafaris.com", label: "E" },
              { href: "tel:+256200992240", label: "C" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gray-200 flex items-center justify-center text-[10px] font-bold tracking-widest text-gray-400 hover:border-[var(--color-brand)] hover:text-white hover:bg-[var(--color-brand)] transition-all duration-300 no-underline uppercase"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Destinations */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-5 h-px bg-[var(--color-brand)]" />
            <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand)]">
              Destinations
            </h4>
          </div>
          <ul className="list-none p-0 m-0 space-y-3">
            {destinationLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-gray-500 hover:text-gray-900 hover:pl-2 transition-all duration-300 no-underline flex items-center gap-2 group"
                >
                  <span className="block w-0 group-hover:w-3 h-px bg-[var(--color-brand)] transition-all duration-300" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-5 h-px bg-[var(--color-brand)]" />
            <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand)]">
              Navigation
            </h4>
          </div>
          <ul className="list-none p-0 m-0 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-gray-500 hover:text-gray-900 hover:pl-2 transition-all duration-300 no-underline flex items-center gap-2 group"
                >
                  <span className="block w-0 group-hover:w-3 h-px bg-[var(--color-brand)] transition-all duration-300" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-5 h-px bg-[var(--color-brand)]" />
            <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand)]">
              Contact Us
            </h4>
          </div>
          <div className="space-y-5">
            {[
              {
                label: "Office",
                value: "Plot 1/3 Nkurumah Road, Nakasero, Kampala, Uganda",
                href: "#",
              },
              {
                label: "Phone",
                value: "+256 200 992240",
                href: "tel:+256200992240",
              },
              {
                label: "Email",
                value: "info@mbuniafricansafaris.com",
                href: "mailto:info@mbuniafricansafaris.com",
              },
              {
                label: "WhatsApp",
                value: "Chat with our team",
                href: "https://wa.me/256751621506",
              },
            ].map((c) => (
              <div key={c.label}>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">
                  {c.label}
                </p>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition-colors no-underline break-all"
                >
                  {c.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-6 md:mx-16 lg:mx-24 h-px bg-gray-200" />
      <div className="px-6 md:px-16 lg:px-24 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Mbuni African Safaris. All rights
          reserved.
        </p>
        <p className="text-xs text-gray-400">Kampala, Uganda 🇺🇬</p>
      </div>
    </footer>
  );
}
