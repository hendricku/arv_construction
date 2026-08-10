"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const menuCloseRef = useRef<HTMLButtonElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    lastActiveElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    const focusCloseButton = window.setTimeout(() => menuCloseRef.current?.focus(), 0);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = menuPanelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusCloseButton);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      lastActiveElementRef.current?.focus();
    };
  }, [open]);

  const menuOverlay = (
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
            ref={menuPanelRef}
            id="site-navigation-panel"
            className="menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="menu-panel-top">
              <span>ARV / Navigation</span>
              <button ref={menuCloseRef} className="menu-close" onClick={closeMenu} aria-label="Close menu">Close</button>
            </div>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {links.map((link, index) => <Link key={link.href} href={link.href} onClick={closeMenu}>{link.label}<span>0{index}</span></Link>)}
              <Link href="/request-quote" onClick={closeMenu}>Request a Quote <span>05</span></Link>
            </nav>
            <div className="menu-contact">
              <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={company.facebook} target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </motion.div>
          <button className="menu-scrim" aria-label="Close menu" onClick={closeMenu} />
        </motion.div>
      )}
    </AnimatePresence>
  );

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
          <button className="menu-trigger" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} aria-haspopup="dialog" aria-controls={open ? "site-navigation-panel" : undefined}>
            <span />
            <span />
          </button>
        </div>
      </HeaderInner>

      {typeof document !== "undefined" ? createPortal(menuOverlay, document.body) : null}
    </HeaderShell>
  );
}