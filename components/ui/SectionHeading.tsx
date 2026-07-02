"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  index: string; // e.g. "02"
  label: string; // eyebrow, e.g. "About"
  title: string; // big heading
};

export default function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 flex items-end gap-4"
    >
      <span className="font-mono text-sm text-ink-faint">{index}</span>
      <div>
        <p className="section-label mb-2">{label}</p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
    </motion.div>
  );
}
