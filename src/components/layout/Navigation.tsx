"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, SITE_AUTHOR } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg-primary/85 backdrop-blur-xl shadow-[0_1px_0_rgba(36,24,17,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-5 pt-5 sm:px-8 sm:pt-6">
        <nav
          aria-label="Glavna navigacija"
          className="flex items-center justify-between pb-3"
        >
          <Link
            href="/"
            className={cn(
              "font-heading text-2xl sm:text-3xl tracking-wide transition-colors",
              scrolled ? "text-text-primary" : "text-white"
            )}
          >
            {SITE_AUTHOR}
          </Link>

          <div className="hidden items-center gap-8 lg:gap-12 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-heading text-lg sm:text-xl transition-colors hover:text-burgundy",
                  scrolled ? "text-text-secondary" : "text-white/90"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden cursor-pointer"
            aria-label="Navigacija"
            aria-expanded={mobileOpen}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  mobileOpen
                    ? i === 0
                      ? { rotate: 45, y: 6 }
                      : i === 1
                        ? { opacity: 0 }
                        : { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                className={cn(
                  "block h-0.5 w-6 transition-colors",
                  scrolled || mobileOpen ? "bg-text-primary" : "bg-white"
                )}
              />
            ))}
          </button>
        </nav>

        {/* Puna linija preko cele sirine ispod headera */}
        <div
          className={cn(
            "h-px w-full transition-colors",
            scrolled ? "bg-[var(--border-medium)]" : "bg-white/50"
          )}
        />
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-bg-primary/97 backdrop-blur-xl border-b border-[var(--border-subtle)] md:hidden"
          >
            <div className="flex flex-col gap-4 px-5 py-6 sm:px-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-xl text-text-secondary transition-colors hover:text-burgundy"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
