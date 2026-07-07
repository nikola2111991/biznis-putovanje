"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { scaleIn } from "@/lib/animations";
import { FINAL_CTA } from "@/lib/content";

export function FinalCTASection() {
  return (
    <section
      data-section="final-cta"
      className="relative overflow-hidden bg-burgundy-deep py-28 lg:py-40 text-cream"
    >
      {/* Topli sjaj + suptilna tekstura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(176,128,58,0.18)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

      <Container>
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 mx-auto max-w-2xl text-center"
        >
          {/* Editorial ornament */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/80" />
            <span className="h-px w-10 bg-gold/60" />
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {FINAL_CTA.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-cream/80 leading-relaxed">
            {FINAL_CTA.text}
          </p>

          <div className="mt-10">
            <Link
              href={FINAL_CTA.ctaHref}
              className="inline-flex items-center gap-2 bg-cream px-9 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-burgundy-deep transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              {FINAL_CTA.cta}
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
