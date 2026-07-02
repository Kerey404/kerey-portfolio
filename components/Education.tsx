"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading
        index="04"
        label="Образование и достижения"
        title="Education & Achievements"
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {education.map((entry, i) => (
          <motion.div
            key={entry.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="min-h-52 glass-card glow-border p-6 transition-shadow duration-300 hover:shadow-glow-blue flex flex-col"
          >
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface section-label">
              <GraduationCap className="h-4 w-4" />
            </div>
            <h3 className="font-display text-base font-semibold text-ink">
              {entry.title}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">{entry.place}</p>

            {entry.note && (
              <p className="mt-auto font-mono text-xs tracking-wide section-label">
                {entry.note}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
