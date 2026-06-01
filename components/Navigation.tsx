"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const leftLinks = [
  // { href: "/", label: "Home" },
  { href: "/services", label: "Safaris" },
  { href: "/destinations", label: "Destinations" },
];
const rightLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
const allLinks = [...leftLinks, ...rightLinks];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-[100] shadow-sm">
        <div className="px-6 md:px-16 lg:px-24 h-[68px] flex items-center justify-between">
          {/* Left links — desktop */}
          <ul className="hidden lg:flex gap-8 list-none m-0 p-0 flex-1 justify-end pr-10">
            {leftLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs font-bold tracking-widest uppercase no-underline transition-colors ${
                    isActive(link.href)
                      ? "text-[var(--color-brand)]"
                      : "text-gray-400 hover:text-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Logo — centered */}
          <Link
            href="/"
            className="no-underline flex items-center gap-3 shrink-0"
            aria-label="Mbuni African Safaris"
          >
            <Image
              src="/tempImagepvR8zg-removebg-preview.png"
              alt="Mbuni African Safaris"
              width={140}
              height={46}
              className="h-11 w-auto"
            />
          </Link>

          {/* Right links — desktop */}
          <ul className="hidden lg:flex gap-8 list-none m-0 p-0 flex-1 justify-start pl-10">
            {rightLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs font-bold tracking-widest uppercase no-underline transition-colors ${
                    isActive(link.href)
                      ? "text-[var(--color-brand)]"
                      : "text-gray-400 hover:text-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={toggle}
            className="lg:hidden flex flex-col justify-between w-7 h-5 bg-transparent border-none cursor-pointer p-0 z-[300]"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${open ? "translate-y-[9px] rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${open ? "-translate-y-[9px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[68px] bg-white z-[200] flex flex-col px-7 pt-6 pb-12 border-t-2 border-[var(--color-brand)] overflow-y-auto transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        {allLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-[family-name:var(--font-bebas)] text-3xl tracking-widest py-4 border-b border-gray-100 no-underline transition-colors ${
              isActive(link.href)
                ? "text-[var(--color-brand)]"
                : "text-gray-900 hover:text-[var(--color-brand)]"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
            Contact Us
          </p>
          <a
            href="tel:+256200992240"
            className="block text-sm text-gray-600 mb-2 hover:text-[var(--color-brand)] no-underline"
          >
            📞 +256 200 992240
          </a>
          <a
            href="mailto:info@mbuniafricansafaris.com"
            className="block text-sm text-gray-600 hover:text-[var(--color-brand)] no-underline"
          >
            ✉️ info@mbuniafricansafaris.com
          </a>
        </div>
      </div>
    </>
  );
}
