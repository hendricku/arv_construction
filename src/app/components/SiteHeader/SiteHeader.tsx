"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { company } from "../../data/company";
import type { SiteHeaderProps } from "./interface";
import { HeaderInner, HeaderShell } from "./elements";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader({ inverted = false }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <HeaderShell className={`${scrolled ? "is-scrolled" : ""} ${inverted ? "is-inverted" : ""}`}>
      <HeaderInner>
        <Link href="/" className="brand-lockup" aria-label="ARV Construction home">
          <span className="brand-mark"><Image src="/arvlogo.png" alt="" fill sizes="44px" /></span>
          <span className="brand-copy">
            <strong>ARV Construction</strong>
            <small>Design and Build</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return <Link key={link.href} href={link.href} className={active ? "active" : ""}>{link.label}</Link>;
          })}
        </nav>

        <div className="header-actions">
          <Link href="/request-quote" className="button button-small button-primary header-quote">Request a quote</Link>
          <button className="menu-trigger" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
            <span />
            <span />
          </button>
        </div>
      </HeaderInner>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu-overlay"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="menu-panel"
              initial={reduceMotion ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="menu-panel-top">
                <span>ARV / Navigation</span>
                <button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu">Close</button>
              </div>
              <nav className="mobile-nav" aria-label="Mobile navigation">
                {links.map((link, index) => <Link key={link.href} href={link.href}>{link.label}<span>0{index}</span></Link>)}
                <Link href="/request-quote">Request a Quote <span>05</span></Link>
              </nav>
              <div className="menu-contact">
                <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
                <a href={`mailto:${company.email}`}>{company.email}</a>
                <a href={company.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
              </div>
            </motion.div>
            <button className="menu-scrim" aria-label="Close menu" onClick={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </HeaderShell>
  );
}
