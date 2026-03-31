"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { HERO } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(128,0,32,0.12)_0%,transparent_70%)]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-24"
      >
        <motion.p
          variants={fadeUp}
          className="font-heading italic text-accent-secondary text-lg sm:text-xl"
        >
          {HERO.eyebrow}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-4 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-primary"
        >
          {HERO.title}
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-6 h-px w-16 bg-accent-secondary"
        />

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <Button href="#cena" size="lg">
            {HERO.cta} &rarr;
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
