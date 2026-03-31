"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { STORY } from "@/lib/content";

export function StorySection() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-text-secondary leading-relaxed"
          >
            {STORY.intro}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary leading-tight italic"
          >
            {STORY.question}
          </motion.p>

          <div className="mt-10 space-y-6">
            {STORY.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="font-heading text-lg sm:text-xl font-semibold text-text-primary leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
