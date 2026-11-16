"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import { ResumeButton } from "@/components/shared/ResumeButton";
import { getActiveSection } from "@/lib/active-section";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef<HTMLElement>(null);
  const { site } = portfolio;

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      const sections = site.navigation.flatMap(({ id }) => {
        const element = document.getElementById(id);
        return element ? [{ id, top: element.getBoundingClientRect().top }] : [];
      });
      const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 78;
      const atBottom =
        window.scrollY > 0 &&
        Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2;
      const active = getActiveSection(sections, headerHeight + 24, atBottom);
      if (active) setActiveSection(active);
    };
    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    // Account for layout shifts while fonts and images finish loading.
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      observer.disconnect();
    };
  }, [site.navigation]);

  return (
    <header className="topbar" ref={headerRef}>
      <div className="container-shell navbar-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          {site.brand}
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {site.navigation.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="nav-item"
              aria-current={activeSection === n.id ? "location" : undefined}
              aria-describedby={`nav-meaning-${n.id}`}
            >
              {n.label}
              <span id={`nav-meaning-${n.id}`} className="nav-tooltip" role="tooltip">
                {n.tooltip}
              </span>
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <ResumeButton className="desktop-resume" />
          <button
            type="button"
            className="menu-button btn btn-ghost"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {site.navigation.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-current={activeSection === n.id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              <span>{n.label}</span>
              <small>{n.tooltip}</small>
            </a>
          ))}
          <ResumeButton />
        </nav>
      )}
    </header>
  );
}
