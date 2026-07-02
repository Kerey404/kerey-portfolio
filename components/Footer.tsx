"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Phone, Send } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="relative mx-auto max-w-4xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-card flex flex-col items-center gap-8 px-8 py-14 text-center"
      >
        <p className="section-label">Let&apos;s build something</p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Готов обсудить проект
        </h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
          >
            <Phone className="h-4 w-4" />
            {profile.phone}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-surface text-ink-muted transition-colors hover:border-accent-violet/60 hover:text-ink"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-surface text-ink-muted transition-colors hover:border-accent-violet/60 hover:text-ink"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-surface text-ink-muted transition-colors hover:border-accent-violet/60 hover:text-ink"
          >
            <Send className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-surface text-ink-muted transition-colors hover:border-accent-violet/60 hover:text-ink"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

      <p className="mt-10 text-center font-mono text-xs text-ink-faint">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Framer Motion.
      </p>
    </footer>
  );
}
