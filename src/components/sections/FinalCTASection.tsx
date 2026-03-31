"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { scaleIn } from "@/lib/animations";
import { FINAL_CTA } from "@/lib/content";

export function FinalCTASection() {
  return (
    <section data-section="final-cta" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(128,0,32,0.15)_0%,transparent_70%)]" />

      <Container>
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
            {FINAL_CTA.heading}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {FINAL_CTA.text}
          </p>
          <div className="mt-8">
            <Button href={FINAL_CTA.ctaHref} size="lg">
              {FINAL_CTA.cta} &rarr;
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
