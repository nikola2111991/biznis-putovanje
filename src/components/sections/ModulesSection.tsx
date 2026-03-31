"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { MODULES } from "@/lib/content";

const colorMap = {
  yellow: {
    border: "border-l-baby-yellow",
    number: "text-baby-yellow",
    bullet: "text-baby-yellow",
  },
  burgundy: {
    border: "border-l-burgundy",
    number: "text-burgundy",
    bullet: "text-burgundy",
  },
  brown: {
    border: "border-l-brown-medium",
    number: "text-brown-medium",
    bullet: "text-brown-medium",
  },
};

export function ModulesSection() {
  return (
    <section id="program" className="py-24 lg:py-32 bg-bg-secondary">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <SectionLabel>PROGRAM</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
              Tri modula. Tri meseca. Jedna transformacija.
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {MODULES.map((module) => {
              const colors = colorMap[module.color];
              return (
                <motion.div
                  key={module.number}
                  variants={fadeUp}
                  className={`rounded-2xl border-l-4 ${colors.border} bg-bg-primary p-6 lg:p-8`}
                >
                  <span className={`font-heading text-5xl font-bold ${colors.number} opacity-40`}>
                    {module.number}
                  </span>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-text-primary">
                    {module.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-tertiary italic">
                    {module.subtitle}
                  </p>
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    {module.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {module.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className={`mt-0.5 ${colors.bullet}`}>&#10003;</span>
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
