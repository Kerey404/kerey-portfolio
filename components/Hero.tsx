"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Signature background: layered grid + drifting violet/blue glow */}
      <div className="pointer-events-none absolute inset-0 bg-glow-radial" />
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-violet/25 blur-[110px]"
        animate={{ x: [0, 40, -30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-accent-blue/20 blur-[100px]"
        animate={{ x: [0, -30, 30, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="section-label mb-6 rounded-full border border-surface-border bg-surface px-4 py-1.5"
        >
          Hi, I&apos;m {profile.shortName}
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 bg-gradient-to-r from-accent-violet via-accent-blue to-accent-cyan bg-clip-text font-display text-xl font-medium text-transparent sm:text-2xl"
        >
          {profile.role} <span className="text-ink-faint">|</span> {profile.focus}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-xl text-balance font-body text-ink-muted">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={profile.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-6 py-3 font-medium text-white shadow-glow-violet transition-transform hover:scale-105"
          >
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            Contact Me
          </a>
          <a
            href={profile.cvUrl}
            download
            className="flex items-center gap-2 rounded-full border border-surface-border bg-surface px-6 py-3 font-medium text-ink transition-colors hover:border-accent-violet/60 hover:text-white"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-ink-faint"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
