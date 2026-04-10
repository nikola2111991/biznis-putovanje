"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { MODULES } from "@/lib/content";

const colorMap = {
  yellow: {
    dot: "bg-baby-yellow",
    line: "from-baby-yellow/40",
    number: "text-baby-yellow/30",
    bullet: "text-baby-yellow",
    accent: "text-baby-yellow",
  },
  burgundy: {
    dot: "bg-burgundy",
    line: "from-burgundy/40",
    number: "text-burgundy/30",
    bullet: "text-burgundy",
    accent: "text-burgundy",
  },
  brown: {
    dot: "bg-brown-medium",
    line: "from-brown-medium/40",
    number: "text-text-tertiary/30",
    bullet: "text-text-tertiary",
    accent: "text-text-tertiary",
  },
};

export function ModulesSection() {
  return (
    <section id="program" className="py-24 lg:py-40 bg-bg-secondary">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-burgundy font-mono">
              PROGRAM
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
              Tri modula. Tri meseca.
              <br />
              <span className="italic text-text-secondary">Jedna transformacija.</span>
            </h2>
          </motion.div>

          {/* Timeline layout */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical connecting line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-baby-yellow/30 via-burgundy/30 to-brown-medium/30" />

            <div className="space-y-16 sm:space-y-20">
              {MODULES.map((module, index) => {
                const colors = colorMap[module.color];
                const isLast = index === MODULES.length - 1;

                return (
                  <motion.div
                    key={module.number}
                    variants={fadeUp}
                    className="relative pl-12 sm:pl-16"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-2.5 sm:left-4.5 top-1 h-3 w-3 rounded-full ${colors.dot} ring-4 ring-bg-secondary`} />

                    {/* Module number */}
                    <span className={`font-heading text-7xl sm:text-8xl font-bold ${colors.number} select-none`}>
                      {module.number}
                    </span>

                    <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-text-primary">
                      {module.name}
                    </h3>

                    <p className={`mt-1 text-sm italic ${colors.accent}`}>
                      {module.subtitle}
                    </p>

                    <p className="mt-4 text-text-secondary leading-relaxed max-w-xl">
                      {module.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {module.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <span className={`mt-0.5 ${colors.bullet}`}>&#10003;</span>
                          <span className="text-text-secondary">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Section end line */}
                    {!isLast && (
                      <div className="mt-8 h-px w-full bg-[var(--border-subtle)]" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Dugme za platformu */}
          <motion.div variants={fadeUp} className="mt-16 text-center">
            <Button href="#" size="lg">
              Kako izgleda platforma i koje lekcije su unutra &rarr;
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
