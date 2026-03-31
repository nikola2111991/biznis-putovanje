"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { FOR_WHO } from "@/lib/content";

export function ForWhoSection() {
  return (
    <section className="py-24 lg:py-32 bg-bg-secondary">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <SectionLabel>ZA KOGA</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
              {FOR_WHO.heading}
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-success/20 bg-bg-primary p-6 lg:p-8"
            >
              <h3 className="font-heading text-xl font-bold text-success mb-6">
                {FOR_WHO.yes.title}
              </h3>
              <ul className="space-y-4">
                {FOR_WHO.yes.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 text-success">&#10003;</span>
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-danger/20 bg-bg-primary p-6 lg:p-8"
            >
              <h3 className="font-heading text-xl font-bold text-danger mb-6">
                {FOR_WHO.no.title}
              </h3>
              <ul className="space-y-4">
                {FOR_WHO.no.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 text-danger">&#10007;</span>
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
