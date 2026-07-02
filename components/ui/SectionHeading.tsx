"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  index: string; // e.g. "02"
  label: string; // eyebrow, e.g. "About"
  title: string; // big heading
};

export default function SectionHeading({
  index,
  label,
  title,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mb-24 flex items-end gap-4"
    >
      <span className="absolute -left-32 font-mono text-lg text-ink-faint/25">
        {index}
      </span>
      <div className="w-full flex flex-col items-center justify-center">
        <p className="section-label mb-2">{label}</p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
    </motion.div>
  );
}
