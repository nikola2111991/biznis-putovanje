"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { FAQ_ITEMS } from "@/lib/content";

export function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-bg-secondary">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <SectionLabel>ČESTA PITANJA</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
              Pitanja koja svi postavljaju
            </h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            {FAQ_ITEMS.map((faq) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
