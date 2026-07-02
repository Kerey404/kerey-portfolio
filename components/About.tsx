"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading index="01" label="Обо мне" title="About me" />

      {/* Сетка: на мобилках в один столбец, на десктопе — текст слева, фото справа */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 items-center text-left">
        <div className="md:col-span-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="relative group w-60 h-72 rounded-2xl overflow-hidden border border-surface-border bg-base-soft shadow-xl glow-border transition-all duration-300 hover:shadow-glow-violet"
          >
            {/* Убрали grayscale фильтры, добавили плавный зум (group-hover:scale-105) при наведении */}
            <img
              src="/profile.jpg"
              alt="Kerey"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            {/* Оставили только очень легкий градиент снизу, чтобы рамка карточки не сливалась с черной одеждой */}
            <div className="absolute inset-0 bg-gradient-to-t from-base/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Левая часть: Текст и теги технологий */}
        <div className="md:col-span-2 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg leading-relaxed text-ink-muted"
          >
            {about.text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex flex-wrap gap-2"
          >
            {about.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-surface-border bg-surface px-4 py-1.5 font-mono text-sm text-ink-muted transition-colors hover:border-accent-violet/50 hover:text-ink"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
