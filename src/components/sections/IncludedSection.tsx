"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { INCLUDED } from "@/lib/content";

export function IncludedSection() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <SectionLabel>ŠTA DOBIJAŠ</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
              {INCLUDED.heading}
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {INCLUDED.items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-xl border border-[var(--border-subtle)] bg-bg-secondary p-5"
              >
                <span className="mt-0.5 text-accent-primary text-lg">&#10003;</span>
                <div>
                  <p className="font-semibold text-text-primary">{item.title}</p>
                  <p className="mt-1 text-sm text-text-secondary">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
