"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#d97706] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image
            src="/images/logo.jpg"
            alt="Lamour Logo"
            width={42}
            height={42}
            className="rounded-full object-cover"
          />
          <span className="text-lg font-semibold tracking-[0.18em] sm:text-xl">
            LAMOUR
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition ${
                  active ? "text-white" : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-white transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/reservations"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#d97706] transition hover:bg-neutral-100"
          >
            Reserve
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full p-2 transition hover:bg-white/10 md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              className="absolute left-0 right-0 top-full z-50 origin-top rounded-b-3xl bg-[#d97706] px-6 pb-8 pt-2 shadow-2xl md:hidden"
              initial={{ opacity: 0, y: -16, scaleY: 0.96 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -12, scaleY: 0.96 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <nav className="flex flex-col gap-2 pt-3">
                {navLinks.map((link, index) => {
                  const active = isActive(link.href);

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ delay: index * 0.04, duration: 0.18 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`block rounded-2xl px-4 py-3 text-lg font-medium transition ${
                          active
                            ? "bg-white/15 text-white"
                            : "text-white/90 hover:bg-white/10"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ delay: 0.18, duration: 0.2 }}
                className="mt-5"
              >
                <Link
                  href="/reservations"
                  onClick={closeMenu}
                  className="block rounded-full bg-white px-5 py-3 text-center text-base font-semibold text-[#d97706] transition hover:bg-neutral-100"
                >
                  Reserve
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}