"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TRANSITION } from "@/lib/content";

export function TransitionSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(128,0,32,0.08)_0%,transparent_60%)]" />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 py-24 lg:py-32"
      >
        {/* Top decorative element */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-burgundy/40" />
          <div className="h-2 w-2 rotate-45 border border-burgundy/40" />
          <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-burgundy/40" />
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight">
          {TRANSITION.text}
        </h2>

        {TRANSITION.subtitle && (
          <p className="mt-8 text-lg sm:text-xl text-text-secondary italic max-w-2xl mx-auto leading-relaxed font-heading">
            {TRANSITION.subtitle}
          </p>
        )}

        {/* Bottom decorative element */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-burgundy/40" />
          <div className="h-2 w-2 rotate-45 border border-burgundy/40" />
          <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-burgundy/40" />
        </div>
      </motion.div>
    </section>
  );
}
