"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { PAIN_POINTS } from "@/lib/content";

export function PainPointsSection() {
  return (
    <section className="py-24 lg:py-32 bg-bg-secondary">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl"
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary"
          >
            {PAIN_POINTS.heading}
          </motion.h2>

          <div className="mt-10 space-y-5">
            {PAIN_POINTS.items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="border-l-4 border-burgundy pl-4 sm:pl-6"
              >
                <p className="text-lg text-text-secondary leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 space-y-4">
            {PAIN_POINTS.subItems.map((item, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-text-tertiary leading-relaxed"
              >
                {item}
              </motion.p>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="mt-10 font-heading text-xl sm:text-2xl font-bold text-text-primary"
          >
            I onda rezultat: da nema rezultata koje želiš. Izgubljena si u sopstvenom biznisu i tražiš mapu.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
