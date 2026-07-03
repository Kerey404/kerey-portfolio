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
                <p className="font-mono text-xs mt-0.5 tracking-wide text-ink-faint">
                  {entry.role}
                </p>
              </div>
            </motion.div>

            {/* Timeline: точка и линия в одной flex-колонке — всегда выровнены */}
            <div>
              {entry.stages.map((stage, i) => {
                const isLast = i === entry.stages.length - 1;
                return (
                  <motion.div
                    key={stage.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                    className="flex gap-4"
                  >
                    {/* колонка с точкой и линией */}
                    <div className="flex w-3 flex-col items-center">
                      <span className="h-3 w-3 shrink-0 rounded-full bg-accent-violet shadow-glow-sm" />
                      {!isLast && (
                        <span className="mt-1 w-px flex-1 bg-gradient-to-b from-accent-violet via-accent-blue to-transparent" />
                      )}
                    </div>

                    {/* контент */}
                    <div className={isLast ? "pb-0" : "pb-8"}>
                      <p className="font-mono text-xs uppercase tracking-wide text-accent-violet">
                        {stage.label}
                      </p>
                      <p className="mt-2 text-ink-muted">{stage.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}