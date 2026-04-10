"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { STORY } from "@/lib/content";

// Indices of paragraphs to render as pull quotes (large, italic, accent)
const PULL_QUOTE_INDICES = [0, 5, 9];

export function StorySection() {
  return (
    <section className="py-24 lg:py-40">
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

          {/* Big italic question, pull quote style */}
          <motion.blockquote
            variants={fadeUp}
            className="mt-10 border-l-4 border-burgundy pl-6 sm:pl-8"
          >
            <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary leading-snug italic">
              {STORY.question}
            </p>
          </motion.blockquote>

          <div className="mt-16 space-y-8">
            {STORY.paragraphs.map((paragraph, i) => {
              const isPullQuote = PULL_QUOTE_INDICES.includes(i);

              if (isPullQuote) {
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="my-12 sm:my-16 py-8 border-y border-[var(--border-subtle)]"
                  >
                    <p className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-text-primary leading-snug text-center italic">
                      {paragraph}
                    </p>
                  </motion.div>
                );
              }

              return (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-base sm:text-lg text-text-secondary leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
