"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { scaleIn } from "@/lib/animations";
import { TRANSITION } from "@/lib/content";

export function TransitionSection() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto h-px w-16 bg-accent-secondary" />

          <h2 className="mt-8 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            {TRANSITION.text}
          </h2>

          <p className="mt-6 text-lg text-text-secondary italic max-w-2xl mx-auto leading-relaxed">
            {TRANSITION.subtitle}
          </p>

          <div className="mx-auto mt-8 h-px w-16 bg-accent-secondary" />
        </motion.div>
      </Container>
    </section>
  );
}
