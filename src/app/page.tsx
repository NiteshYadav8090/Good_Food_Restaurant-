"use client";

import { useEffect } from "react";
import {
  useScrollReveal,
  useCounterAnimation,
  useMagneticButtons,
  useTiltCards,
  useLiveNow,
} from "@/components/ClientShell";

export default function HomePage() {
  useScrollReveal();
  useCounterAnimation();
  useMagneticButtons();
  useTiltCards();
  useLiveNow();

  return (
    <>
      {/* ===== SECTION 2: HERO ===== */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
          padding: "8rem 1.5rem 2rem",
        }}
      >
        <div className="section-container" style={{ width: "100%" }}>
          {/* FOMO Badge */}
          <div className="reveal" style={{ marginBottom: "1.5rem" }}>
            <div className="fomo-badge" data-live-check>
              <span className="pulsing-dot"></span>
              Open Now · Closes 12 AM
            </div>
          </div>

          {/* Hero Headline */}
          <h1 className="display-hero" style={{ marginBottom: "1.5rem" }}>
            <span className="word-reveal"><span>Barra&apos;s</span></span>{' '}
            <span className="word-reveal" style={{ animationDelay: "0.15s" }}><span>Favourite</span></span>{' '}
            <span className="word-reveal" style={{ animationDelay: "0.3s" }}><span>Table.</span></span>
          </h1>

          {/* Sub-headline */}
          <p
            className="lead-text reveal"
            style={{ maxWidth: "540px", marginBottom: "2.5rem" }}
          >
            North Indian &middot; Chinese &middot; Pizza &middot; Pasta &middot; Burgers &middot; Mocktails
          </p>

          {/* CTAs */}
          <div
            className="reveal"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            <a href="/menu" className="btn-primary">
              View Our Menu
            </a>
            <a href="tel:07755866055" className="btn-ghost">
              Call to Reserve
            </a>
          </div>
        </div>

        {/* Bottom Stat Bar */}
        <div
          className="hero-stat-bar reveal"
          style={{ marginTop: "auto", width: "100%" }}
        >
          <div className="hero-stat-item">
            <span>⭐</span>
            <span>
              <span className="stat-value">
                <span data-counter data-target="48" data-suffix="" data-duration="1500">0</span>★
              </span>{' '}
              (<span data-counter data-target="7254" data-suffix="+" data-duration="2000">0</span> Reviews)
            </span>
          </div>
          <div className="hero-stat-item">
            <span>₹</span>
            <span>
              <span className="stat-value">200–400</span> Per Person
            </span>
          </div>
          <div className="hero-stat-item">
            <span>🕛</span>
            <span>
              <span className="stat-value">Open Till Midnight</span>
            </span>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: MARQUEE TICKER ===== */}
      <section style={{ position: "relative", zIndex: 2 }}>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            <span>North Indian ★</span>
            <span>Pizza ★</span>
            <span>Burgers ★</span>
            <span>Pasta ★</span>
            <span>Chinese ★</span>
            <span>Mocktails ★</span>
            <span>Cold Coffee ★</span>
            <span>Desserts ★</span>
            <span>Combo Offers ★</span>
            <span>Dine-In ★</span>
            <span>Delivery ★</span>
            <span>North Indian ★</span>
            <span>Pizza ★</span>
            <span>Burgers ★</span>
            <span>Pasta ★</span>
            <span>Chinese ★</span>
            <span>Mocktails ★</span>
            <span>Cold Coffee ★</span>
            <span>Desserts ★</span>
            <span>Combo Offers ★</span>
            <span>Dine-In ★</span>
            <span>Delivery ★</span>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: WHY PEOPLE LOVE US (SOCIAL PROOF) ===== */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Social Proof</span>
            <h2 className="title-lg">
              Over <span data-counter data-target="7000" data-suffix="+" data-duration="2000">0</span> Families Trust Our Table
            </h2>
          </div>

          <div className="grid-3 reveal-children">
            {/* Review 1 */}
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                &ldquo;Food was amazing — everyone praised it. Hosted a party for 60 people and
                staff managed everything perfectly.&rdquo;
              </p>
              <div className="author">— Mridul Shukla, Local Guide</div>
            </div>

            {/* Review 2 */}
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                &ldquo;Awesome service, great food quality, and staff behaviour is very good.&rdquo;
              </p>
              <div className="author">— Shivkar Mishra, Local Guide</div>
            </div>

            {/* Review 3 */}
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                &ldquo;Staff behaviour so good. Comfort zone. Food: 5/5.&rdquo;
              </p>
              <div className="author">— Badsha Khan, Local Guide</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: MENU HIGHLIGHTS ===== */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Menu Preview</span>
            <h2 className="title-lg">Something For Everyone</h2>
          </div>

          <div className="horizontal-scroll reveal-children" style={{ paddingBottom: "1rem" }}>
            {/* Dish cards */}
            <div className="featured-dish tilt-card">
              <div className="dish-icon">🌶️</div>
              <span className="pill-tag" style={{ marginBottom: "0.75rem" }}>Popular</span>
              <h4>Honey Chilli Potato</h4>
              <span className="dish-arrow">→</span>
            </div>

            <div className="featured-dish tilt-card">
              <div className="dish-icon">🍕</div>
              <span className="pill-tag" style={{ marginBottom: "0.75rem" }}>Signature</span>
              <h4>Pizza</h4>
              <span className="dish-arrow">→</span>
            </div>

            <div className="featured-dish tilt-card">
              <div className="dish-icon">🥟</div>
              <span className="pill-tag" style={{ marginBottom: "0.75rem" }}>Combo</span>
              <h4>Chinese Platter</h4>
              <span className="dish-arrow">→</span>
            </div>

            <div className="featured-dish tilt-card">
              <div className="dish-icon">☕</div>
              <span className="pill-tag" style={{ marginBottom: "0.75rem" }}>Refreshing</span>
              <h4>Cold Coffee</h4>
              <span className="dish-arrow">→</span>
            </div>
          </div>

          <div className="reveal" style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="/menu" className="btn-primary">
              See Full Menu →
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: PARTY & EVENTS BOOKING ===== */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-container">
          <div className="banner-cta reveal">
            <span className="section-label">Events</span>
            <h2 className="title-lg" style={{ marginBottom: "1rem" }}>
              Planning Something Special?
            </h2>
            <p
              className="lead-text"
              style={{ maxWidth: "600px", margin: "0 auto 2rem" }}
            >
              From birthdays to corporate gatherings — we&apos;ve hosted parties for 60+
              guests with seamless arrangements.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              <span className="pill-tag">🎉 Group Bookings Available</span>
              <span className="pill-tag">📞 Direct Call Booking</span>
            </div>
            <a href="tel:07755866055" className="btn-primary">
              Call Us to Book
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: INSTAGRAM FEED ===== */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Social</span>
            <h2 className="title-lg">Follow Our Story</h2>
            <p className="lead-text" style={{ marginTop: "0.5rem" }}>
              @goodfoodkanpur
            </p>
          </div>

          <div className="reveal-children insta-grid" style={{ marginBottom: "2rem" }}>
            {[
              { emoji: "🍕", likes: "2,847" },
              { emoji: "🌶️", likes: "1,934" },
              { emoji: "🥤", likes: "3,201" },
              { emoji: "🍝", likes: "1,712" },
              { emoji: "🍔", likes: "2,568" },
              { emoji: "🍰", likes: "1,889" },
            ].map((item, i) => (
              <div className="insta-item" key={i}>
                <div className="insta-placeholder">{item.emoji}</div>
                <div className="insta-overlay">
                  ❤ {item.likes}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: "center" }}>
            <a
              href="https://instagram.com/goodfoodkanpur"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ===== Spacer for footer ===== */}
      <div style={{ height: "0.5rem" }} />
    </>
  );
}
