"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading index="04" label="Education & Achievements" title="Образование и достижения" />

      <div className="grid gap-4 sm:grid-cols-3">
        {education.map((entry, i) => (
          <motion.div
            key={entry.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="glass-card glow-border p-6 transition-shadow duration-300 hover:shadow-glow-blue"
          >
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface text-accent-blue">
              <GraduationCap className="h-4 w-4" />
            </div>
            <h3 className="font-display text-base font-semibold text-ink">{entry.title}</h3>
            <p className="mt-1 text-sm text-ink-muted">{entry.place}</p>
            {entry.note && (
              <p className="mt-3 font-mono text-xs uppercase tracking-wide text-accent-cyan">
                {entry.note}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
