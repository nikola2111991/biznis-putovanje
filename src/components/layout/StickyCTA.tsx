"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollY < viewportHeight * 0.5) {
        setVisible(false);
        return;
      }

      const ctaSections = document.querySelectorAll("#cena, [data-section='final-cta']");
      let ctaInView = false;
      ctaSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) {
          ctaInView = true;
        }
      });

      setVisible(!ctaInView);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40"
        >
          <div className="border-t border-[var(--border-subtle)] bg-bg-primary/95 backdrop-blur-xl px-4 py-3">
            <div className="lg:hidden">
              <Link
                href="#cena"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(128,0,32,0.2)] transition-all hover:bg-accent-primary/80"
              >
                Rezerviši mesto &rarr;
              </Link>
            </div>
            <div className="hidden lg:flex justify-center">
              <Link
                href="#cena"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-primary px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(128,0,32,0.2)] transition-all hover:bg-accent-primary/80 hover:shadow-[0_0_30px_rgba(128,0,32,0.3)]"
              >
                Rezerviši mesto &rarr;
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
