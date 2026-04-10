"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { PRICING } from "@/lib/content";

export function PricingSection() {
  return (
    <section id="cena" className="py-24 lg:py-32">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-lg"
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <SectionLabel>{PRICING.label}</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
              {PRICING.heading}
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-accent-primary/50 bg-bg-secondary p-8 lg:p-10 shadow-[0_0_60px_rgba(128,0,32,0.1)]"
          >
            <div className="text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-heading text-5xl sm:text-6xl font-bold text-accent-secondary">
                  €{PRICING.price}
                </span>
              </div>
              <p className="mt-2 text-text-secondary">{PRICING.period}</p>
            </div>

            <ul className="mt-8 space-y-3">
              {PRICING.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 text-accent-secondary">&#10003;</span>
                  <span className="text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-text-tertiary text-center">
              {PRICING.installments}
            </p>

            <Button href={PRICING.ctaHref} size="lg" className="mt-6 w-full">
              {PRICING.cta} &rarr;
            </Button>
          </motion.div>

          {/* VIP opcija - uklonjena */}
        </motion.div>
      </Container>
    </section>
  );
}
