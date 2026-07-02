"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading index="03" label="Projects" title="Избранные проекты" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const isLarge = i === 0 || i === 3;

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className={`glass-card glow-border group flex flex-col justify-between p-6 transition-shadow duration-300 hover:shadow-glow-violet ${
                isLarge ? "md:col-span-2 lg:col-span-2" : "col-span-1"
              }`}
            >
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-xl font-semibold text-ink">{project.title}</h3>
                  {/* Оставили только эту иконку GitHub, она минималистичная и кликабельная */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-surface-border text-ink-muted transition-colors group-hover:border-accent-violet/60 group-hover:text-ink"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-surface-border bg-base/40 px-3 py-1 font-mono text-xs text-ink-faint"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}