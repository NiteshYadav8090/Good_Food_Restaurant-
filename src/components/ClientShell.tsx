import { useEffect, useState, useCallback, useRef } from "react";
import { useLocation, Link } from "./Router";

export function NavShell() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = useCallback((path: string) => pathname === path, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/visit", label: "Visit Us" },
  ];

  return (
    <>
      <header className={`nav-header ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <span className="logo-main">GOOD FOOD</span>
            <span className="logo-sub">Restaurant</span>
          </Link>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={isActive(link.href) ? "active" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="tel:07755866055" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.75rem", minHeight: "40px" }}>
              <i className="ri-phone-line"></i> Reserve
            </a>
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link key={link.href} to={link.href}>
            {link.label}
          </Link>
        ))}
        <a
          href="tel:07755866055"
          className="btn-primary"
          style={{ marginTop: "1rem" }}
        >
          <i className="ri-phone-line"></i> Reserve Table
        </a>
      </div>
    </>
  );
}

export function FooterShell() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div>
            <span className="logo-main">GOOD FOOD</span>
            <br />
            <span className="logo-sub">Restaurant</span>
          </div>
          <p>
            Barra&apos;s Favourite Table. Multi-cuisine dining in Kanpur —
            North Indian, Chinese, Pizza, Pasta, Burgers &amp; Mocktails.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/visit">Visit Us</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>11, W-2, Juhi Kalan, Damodar Nagar, Kanpur, UP 208027</p>
          <a href="tel:07755866055">077558 66055</a>
          <p>Open &middot; Closes 12 AM (Midnight)</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2025 Good Food Restaurant &middot; Kanpur</span>
        <span className="lgbtq-badge">
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            style={{ verticalAlign: "middle" }}
          >
            <rect width="18" height="12" rx="1" fill="url(#rainbow)" />
            <defs>
              <linearGradient id="rainbow" x1="0" y1="0" x2="18" y2="0">
                <stop offset="0%" stopColor="#FF0000" />
                <stop offset="16%" stopColor="#FF8C00" />
                <stop offset="33%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#008000" />
                <stop offset="66%" stopColor="#0000FF" />
                <stop offset="83%" stopColor="#4B0082" />
                <stop offset="100%" stopColor="#8B00FF" />
              </linearGradient>
            </defs>
          </svg>
          LGBTQ+ Friendly
        </span>
      </div>
    </footer>
  );
}

/* ===== SCROLL REVEAL HOOK ===== */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("reveal-children")) {
              entry.target.classList.add("revealed");
            } else {
              entry.target.classList.add("visible");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(
      ".reveal, .reveal-children, .reveal-stagger"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/* ===== COUNTER ANIMATION HOOK ===== */
export function useCounterAnimation() {
  useEffect(() => {
    const counters = document.querySelectorAll("[data-counter]");
    if (counters.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.target || "0", 10);
            const suffix = el.dataset.suffix || "";
            const duration = parseInt(el.dataset.duration || "2000", 10);
            const start = performance.now();

            function update(now: number) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(eased * target);
              el.textContent = current.toLocaleString() + suffix;
              if (progress < 1) requestAnimationFrame(update);
            }

            requestAnimationFrame(update);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    counters.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ===== MAGNETIC BUTTON ===== */
export function useMagneticButtons() {
  useEffect(() => {
    const buttons = document.querySelectorAll(
      ".btn-primary, .btn-ghost"
    );

    const handleMouseMove = (e: MouseEvent, btn: HTMLElement) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    };

    const handleMouseLeave = (btn: HTMLElement) => {
      btn.style.transform = "";
    };

    buttons.forEach((btn) => {
      btn.addEventListener("mousemove", (e) =>
        handleMouseMove(e as MouseEvent, btn as HTMLElement)
      );
      btn.addEventListener("mouseleave", () =>
        handleMouseLeave(btn as HTMLElement)
      );
    });

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("mousemove", (e) =>
          handleMouseMove(e as MouseEvent, btn as HTMLElement)
        );
        btn.removeEventListener("mouseleave", () =>
          handleMouseLeave(btn as HTMLElement)
        );
      });
    };
  }, []);
}

/* ===== 3D TILT EFFECT ===== */
export function useTiltCards() {
  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card, .featured-dish, .menu-card");

    const handleMouseMove = (e: MouseEvent, card: HTMLElement) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    };

    const handleMouseLeave = (card: HTMLElement) => {
      card.style.transform = "";
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) =>
        handleMouseMove(e as MouseEvent, card as HTMLElement)
      );
      card.addEventListener("mouseleave", () =>
        handleMouseLeave(card as HTMLElement)
      );
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", (e) =>
          handleMouseMove(e as MouseEvent, card as HTMLElement)
        );
        card.removeEventListener("mouseleave", () =>
          handleMouseLeave(card as HTMLElement)
        );
      });
    };
  }, []);
}

/* ===== TAB SYSTEM ===== */
export function useTabs() {
  useEffect(() => {
    const tabGroups = document.querySelectorAll("[data-tabs]");

    tabGroups.forEach((group) => {
      const tabs = group.querySelectorAll("[data-tab]");
      const contents = group.querySelectorAll("[data-tab-content]");

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const target = (tab as HTMLElement).dataset.tab;

          tabs.forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");

          contents.forEach((c) => {
            c.classList.toggle(
              "active",
              (c as HTMLElement).dataset.tabContent === target
            );
          });
        });
      });
    });
  }, []);
}

/* ===== CUSTOM CURSOR TRACKER ===== */
export function useCustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    cursor.style.cssText = `
      position: fixed;
      width: 32px;
      height: 32px;
      border: 2px solid #22c55e;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: width 0.2s ease, height 0.2s ease, background 0.2s ease;
      mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);

    const dot = document.createElement("div");
    dot.className = "custom-cursor-dot";
    dot.style.cssText = `
      position: fixed;
      width: 6px;
      height: 6px;
      background: #22c55e;
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      transform: translate(-50%, -50%);
      transition: all 0.08s ease;
      box-shadow: 0 0 10px #22c55e, 0 0 20px #22c55e;
    `;
    document.body.appendChild(dot);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    };

    function animate() {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";
      requestAnimationFrame(animate);
    }

    const handleMouseEnterInteractive = (e: MouseEvent) => {
      const target = (e.target as HTMLElement);
      if (target.closest("a, button, .btn-primary, .btn-ghost, .real-gallery-item, .featured-dish")) {
        cursor.style.width = "48px";
        cursor.style.height = "48px";
        cursor.style.background = "rgba(34, 197, 94, 0.1)";
        cursor.style.borderColor = "#22c55e";
      }
    };

    const handleMouseLeaveInteractive = () => {
      cursor.style.width = "32px";
      cursor.style.height = "32px";
      cursor.style.background = "transparent";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnterInteractive);
    document.addEventListener("mouseout", handleMouseLeaveInteractive);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnterInteractive);
      document.removeEventListener("mouseout", handleMouseLeaveInteractive);
      cursor.remove();
      dot.remove();
    };
  }, []);
}

/* ===== AUTO SLIDER HOOK ===== */
export function useAutoSlider(slideInterval = 3000) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const scrollAmount = container.clientWidth;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, slideInterval);

    return () => clearInterval(interval);
  }, [slideInterval]);

  return containerRef;
}

/* ===== ACTIVE SECTION TRACKER (Scroll-based) ===== */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const activeRef = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section-id]');
      let currentSection: string | null = null;
      let maxScore = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(windowHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const totalHeight = Math.max(rect.height, 1);
        const visibilityRatio = visibleHeight / totalHeight;

        const centerDist = Math.abs(
          rect.top + rect.height / 2 - windowHeight / 2
        );
        const centerScore = Math.max(0, 1 - centerDist / (windowHeight / 2));

        const score = visibilityRatio * 0.5 + centerScore * 0.5;

        if (score > maxScore) {
          maxScore = score;
          currentSection = section.getAttribute('data-section-id');
        }
      });

      // Only update state if active section actually changed & visibility is meaningful
      if (currentSection && maxScore > 0.05 && currentSection !== activeRef.current) {
        activeRef.current = currentSection;
        setActiveSection(currentSection);
      } else if (!currentSection && maxScore <= 0.05 && activeRef.current !== null) {
        activeRef.current = null;
        setActiveSection(null);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
}

/* ===== LIVE NOW CHECK ===== */
export function useLiveNow() {
  useEffect(() => {
    const checkLive = () => {
      const now = new Date();
      const hour = now.getHours();
      const isOpen = hour >= 8 || hour < 0;

      document.querySelectorAll("[data-live-check]").forEach((el) => {
        (el as HTMLElement).style.display = isOpen ? "inline-flex" : "none";
      });
    };

    checkLive();
    const interval = setInterval(checkLive, 60000);
    return () => clearInterval(interval);
  }, []);
}
