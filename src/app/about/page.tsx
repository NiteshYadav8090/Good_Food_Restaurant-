"use client";

import {
  useScrollReveal,
  useCounterAnimation,
  useMagneticButtons,
} from "@/components/ClientShell";

export default function AboutPage() {
  useScrollReveal();
  useCounterAnimation();
  useMagneticButtons();

  return (
    <>
      {/* ===== SECTION 1: ABOUT HERO ===== */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
          padding: "8rem 1.5rem 4rem",
        }}
      >
        <div className="section-container" style={{ width: "100%" }}>
          <div className="reveal">
            <span className="section-label">About Us</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", marginTop: "1.5rem" }} className="grid-2">
            <div>
              <h1 className="title-lg reveal" style={{ marginBottom: "1.5rem" }}>
                More Than a Restaurant. <br />A Local Tradition.
              </h1>
              <p className="lead-text reveal" style={{ maxWidth: "540px" }}>
                Serving Kanpur since our first day, Good Food Restaurant has become the
                go-to spot for families, friends, and food lovers across Barra.
              </p>
            </div>
            <div
              className="reveal"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  background: "rgba(18,14,10,0.7)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid var(--clr-smoke)",
                  borderRadius: "1.5rem",
                  padding: "2rem",
                  textAlign: "center",
                  width: "100%",
                  maxWidth: "320px",
                }}
              >
                <div style={{ fontSize: "3.5rem", fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--clr-gold)" }}>
                  <span data-counter data-target="48" data-suffix="" data-duration="1500">0</span>★
                </div>
                <div style={{ fontSize: "1rem", color: "var(--clr-cream)", fontFamily: "var(--font-body)", marginTop: "0.25rem" }}>
                  Google Rating
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--clr-text-secondary)", marginTop: "0.25rem" }}>
                  <span data-counter data-target="7254" data-suffix="+" data-duration="2000">0</span> Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: OUR STORY ===== */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-container">
          <div className="grid-2">
            {/* Left: Story */}
            <div className="reveal">
              <span className="section-label">Our Story</span>
              <h2 className="heading-md" style={{ marginBottom: "1.5rem" }}>
                A Taste of Home in the Heart of Barra
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p className="body-text">
                  Located at Barra Bypass Chauraha in Kanpur, Good Food Restaurant
                  has carved a special place in the hearts of locals. We began with a
                  simple mission — serve exceptional multi-cuisine food that doesn&apos;t
                  burn a hole in your pocket.
                </p>
                <p className="body-text">
                  Known for our budget-friendly combo offers, we&apos;ve proven that
                  affordability and taste can go hand in hand. From our signature
                  wood-fired Pizzas to our indulgent Chinese Platters and frosty Cold
                  Coffees — every dish is crafted with care.
                </p>
                <p className="body-text">
                  We pride ourselves on being a welcoming space for everyone. As an
                  LGBTQ+ Friendly establishment, we believe great food is a universal
                  language. Whether it&apos;s a late-night craving (we&apos;re open till
                  midnight!) or a family celebration, our doors are always open.
                </p>
                <p className="body-text">
                  We&apos;ve hosted parties for over 60 guests, managed corporate
                  gatherings, and celebrated countless birthdays — each one a testament
                  to our team&apos;s dedication and our food&apos;s magic.
                </p>
              </div>
            </div>

            {/* Right: Stats */}
            <div
              className="reveal"
              style={{
                background: "rgba(18,14,10,0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--clr-smoke)",
                borderRadius: "1.5rem",
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <div className="stat-item" style={{ textAlign: "left", display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ fontSize: "2.5rem", fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--clr-gold)", minWidth: "100px" }}>
                  <span data-counter data-target="48" data-suffix="★" data-duration="1500">0</span>
                </div>
                <div>
                  <div style={{ fontWeight: 500, color: "var(--clr-cream)" }}>Average Rating</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--clr-text-secondary)" }}>Google Reviews</div>
                </div>
              </div>

              <div className="stat-item" style={{ textAlign: "left", display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ fontSize: "2.5rem", fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--clr-gold)", minWidth: "100px" }}>
                  <span data-counter data-target="7254" data-suffix="+" data-duration="2000">0</span>
                </div>
                <div>
                  <div style={{ fontWeight: 500, color: "var(--clr-cream)" }}>Happy Reviews</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--clr-text-secondary)" }}>And counting</div>
                </div>
              </div>

              <div className="stat-item" style={{ textAlign: "left", display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ fontSize: "2.5rem", fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--clr-gold)", minWidth: "100px" }}>
                  60+
                </div>
                <div>
                  <div style={{ fontWeight: 500, color: "var(--clr-cream)" }}>Guests Per Party</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--clr-text-secondary)" }}>Maximum capacity</div>
                </div>
              </div>

              <div className="stat-item" style={{ textAlign: "left", display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ fontSize: "2.5rem", fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--clr-gold)", minWidth: "100px" }}>
                  ₹200–400
                </div>
                <div>
                  <div style={{ fontWeight: 500, color: "var(--clr-cream)" }}>Per Person</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--clr-text-secondary)" }}>Budget-friendly pricing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: OUR VALUES ===== */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Our Values</span>
            <h2 className="title-lg">What Makes Us Different</h2>
          </div>

          <div className="grid-3 reveal-children">
            <div className="value-card">
              <div className="icon">🍕</div>
              <h3>Multi-Cuisine Variety</h3>
              <p>From North Indian classics to Italian pizzas and Chinese platters</p>
            </div>

            <div className="value-card">
              <div className="icon">💰</div>
              <h3>Budget-Friendly Always</h3>
              <p>Premium taste, honest prices — every single time</p>
            </div>

            <div className="value-card">
              <div className="icon">🌙</div>
              <h3>Open Till Midnight</h3>
              <p>For every mood, at every hour — we&apos;re here</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CTA STRIP ===== */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2, paddingTop: "0" }}>
        <div className="section-container">
          <div className="banner-cta reveal" style={{ textAlign: "center" }}>
            <h2 className="heading-md" style={{ marginBottom: "1.5rem" }}>
              Come for the food. <br />Stay for the vibe.
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              <a href="/menu" className="btn-primary">
                View Menu
              </a>
              <a
                href="https://maps.google.com/?q=11+W2+Juhi+Kalan+Damodar+Nagar+Kanpur+208027"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "0.5rem" }} />
    </>
  );
}
