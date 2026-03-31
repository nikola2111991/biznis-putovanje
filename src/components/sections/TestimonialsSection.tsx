"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { TESTIMONIALS } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start"
          >
            <SectionLabel>REZULTATI</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
              Šta kažu žene iz programa
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Stvarne priče žena koje su prošle Biznis Putovanje.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3 space-y-6"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                variants={slideInRight}
                className="rounded-2xl border border-[var(--border-subtle)] bg-bg-secondary p-6 lg:p-8"
              >
                <p className="text-lg text-text-primary leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-secondary">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                    <p className="text-xs text-text-tertiary">{t.context}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
