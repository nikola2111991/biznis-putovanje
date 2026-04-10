"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HERO } from "@/lib/content";

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 + i * 0.04, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function HeroSection() {
  const titleLetters = HERO.title.split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(128,0,32,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(253,253,150,0.04)_0%,transparent_40%)]" />

      {/* Decorative lines */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-burgundy/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-l from-transparent via-burgundy/20 to-transparent hidden lg:block" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24">
        <motion.p
          custom={0.15}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-heading italic text-text-secondary text-base sm:text-lg tracking-widest uppercase"
        >
          {HERO.eyebrow}
        </motion.p>

        {/* Letter-by-letter title reveal */}
        <h1 className="mt-6 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
          {titleLetters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block bg-gradient-to-b from-white via-white to-text-secondary bg-clip-text text-transparent"
              style={letter === " " ? { width: "0.3em" } : undefined}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <motion.div
          custom={1.0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-8 flex items-center gap-4 justify-center"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-burgundy/50" />
          <div className="h-1.5 w-1.5 rounded-full bg-burgundy" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-burgundy/50" />
        </motion.div>

        <motion.p
          custom={1.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 font-heading text-xl sm:text-2xl md:text-3xl text-text-primary max-w-3xl mx-auto leading-snug italic"
        >
          {HERO.tagline}
        </motion.p>

        {HERO.subtitle && (
          <motion.p
            custom={1.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            {HERO.subtitle}
          </motion.p>
        )}

        <motion.div
          custom={1.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-12"
        >
          <Button href="#cena" size="lg">
            {HERO.cta} &rarr;
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-burgundy/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
