"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HERO } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* 4-kraka zvezdica izmedju PUTO i VANJE u naslovu */
function Sparkle() {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="inline-block h-[0.42em] w-[0.42em] align-middle mx-[0.06em] -translate-y-[0.18em]"
      fill="currentColor"
    >
      <path d="M50 0 C54 30 70 46 100 50 C70 54 54 70 50 100 C46 70 30 54 0 50 C30 46 46 30 50 0 Z" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-baby-yellow">
      {/* Full-bleed pozadinska fotografija.
          Ubaci fajl u /public/images/hero-milica.jpg (isti kadar sa balkona). */}
      <Image
        src="/images/hero-milica.jpg"
        alt="Milica Pavić"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Suptilan preliv za citljivost belog teksta i dugmeta */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/30" />

      {/* Naslovni blok preko slike */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white">
        <div className="w-full max-w-6xl">
          <motion.p
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-heading italic text-2xl sm:text-3xl md:text-4xl md:translate-x-[6%]"
          >
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            custom={0.65}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-title uppercase leading-[0.92] tracking-tight mt-1 text-[10.5vw] md:mt-0 md:-mt-[0.12em] md:text-[clamp(4rem,8.2vw,8.5rem)] md:whitespace-nowrap"
          >
            Biznis{" "}
            <span className="whitespace-nowrap">
              Puto
              <Sparkle />
              vanje
            </span>
          </motion.h1>

          <motion.p
            custom={0.85}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-heading italic text-2xl sm:text-3xl md:text-4xl mt-1 md:-mt-[0.1em] md:-translate-x-[6%]"
          >
            {HERO.tagline}
          </motion.p>

          <motion.div
            custom={1.05}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 sm:mt-10 flex justify-center"
          >
            <Link
              href="#o-meni"
              className="bg-accent-primary px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#600018]"
            >
              {HERO.cta}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
