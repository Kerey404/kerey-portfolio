"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass-card flex w-full max-w-3xl items-center justify-between px-5 py-3">
        {/* Изменили логотип на kerey.dev */}
        <a href="#top" className="font-display text-base font-bold tracking-wide text-ink">
          kerey<span className="text-accent-violet">.dev</span>
        </a>
        
        <ul className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-4 py-1.5 text-sm font-medium text-white shadow-glow-sm transition-transform hover:scale-105"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}