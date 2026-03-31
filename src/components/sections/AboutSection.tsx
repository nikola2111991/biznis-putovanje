"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { ABOUT } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="o-milici" className="py-24 lg:py-32 bg-bg-secondary">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative aspect-[4/5] rounded-2xl border-2 border-dashed border-[var(--border-accent)] bg-bg-primary overflow-hidden flex items-center justify-center"
          >
            {ABOUT.image.endsWith(".svg") ? (
              <div className="text-center px-8">
                <p className="text-text-tertiary text-lg">Fotografija Milice</p>
                <p className="text-text-tertiary text-sm mt-2">
                  Dodaj sliku u public/images/ i ažuriraj ABOUT.image u content.ts
                </p>
              </div>
            ) : (
              <Image
                src={ABOUT.image}
                alt="Milica"
                fill
                className="object-cover"
              />
            )}
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <SectionLabel>MENTORICA</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
              {ABOUT.heading}
            </h2>
            <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
              {ABOUT.bio.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
