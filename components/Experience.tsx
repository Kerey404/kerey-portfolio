"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading index="02" label="Опыт работы" title="Experience" />

      <div className="space-y-16">
        {experience.map((entry) => (
          <div key={entry.company} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-surface text-accent-violet">
                <Briefcase className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">{entry.company}</h3>
                {/* Убрали {entry.period}, оставили только роль */}
                <p className="font-mono text-xs mt-0.5 tracking-wide text-ink-faint">
                  {entry.role}
                </p>
              </div>
            </motion.div>

            {/* Neon vertical line */}
            <div className="relative ml-5 space-y-8 border-l border-surface-border pl-8">
              <span
                aria-hidden
                className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-accent-violet via-accent-blue to-transparent shadow-glow-sm"
              />
              {entry.stages.map((stage, i) => (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-accent-violet shadow-glow-sm" />
                  <p className="font-mono text-xs uppercase tracking-wide text-accent-violet">
                    {stage.label}
                  </p>
                  <p className="mt-2 text-ink-muted">{stage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}