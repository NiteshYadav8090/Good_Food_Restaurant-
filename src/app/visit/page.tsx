"use client";

import {
  useScrollReveal,
  useMagneticButtons,
  useLiveNow,
} from "@/components/ClientShell";

export default function VisitPage() {
  useScrollReveal();
  useMagneticButtons();
  useLiveNow();

  return (
    <>
      {/* ===== SECTION 1: VISIT HERO ===== */}
      <section
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
          padding: "8rem 1.5rem 4rem",
          textAlign: "center",
        }}
      >
        <div className="section-container">
          <div className="reveal">
            <span className="section-label">Visit Us</span>
            <h1 className="title-lg" style={{ marginBottom: "1rem" }}>
              Come Find Us
            </h1>
            <p className="lead-text" style={{ maxWidth: "500px", margin: "0 auto" }}>
              We&apos;re in the heart of Barra — easy to reach, impossible to forget.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: INFO CARDS ===== */}
      <section
        className="section-padding"
        style={{ position: "relative", zIndex: 2, paddingTop: "0" }}
      >
        <div className="section-container">
          <div className="grid-3 reveal-children">
            {/* Location Card */}
            <div className="info-card">
              <div className="icon">📍</div>
              <h3>Location</h3>
              <p>
                11, W-2, Juhi Kalan, Damodar Nagar
                <br />
                Kanpur, UP 208027
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--clr-text-muted)", marginTop: "0.5rem" }}>
                Near Barra Bypass Chauraha
              </p>
              <a
                href="https://maps.google.com/?q=11+W2+Juhi+Kalan+Damodar+Nagar+Kanpur+208027"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions →
              </a>
            </div>

            {/* Call Card */}
            <div className="info-card">
              <div className="icon">📞</div>
              <h3>Call Us</h3>
              <p style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--clr-cream)" }}>
                077558 66055
              </p>
              <p style={{ fontSize: "0.8rem" }}>
                For reservations, bulk orders, and party bookings
              </p>
              <a href="tel:07755866055">
                Call Now →
              </a>
            </div>

            {/* Hours Card */}
            <div className="info-card">
              <div className="icon">🕐</div>
              <h3>Hours</h3>
              <p style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--clr-cream)" }}>
                Open Daily
              </p>
              <p>Closes at 12 AM (Midnight)</p>
              <div className="live-now" data-live-check style={{ marginTop: "0.75rem" }}>
                <span className="pulsing-dot"></span>
                Live Now
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: GOOGLE MAP ===== */}
      <section
        className="section-padding"
        style={{ position: "relative", zIndex: 2, paddingTop: "0" }}
      >
        <div className="section-container">
          <div className="reveal">
            <div className="map-container">
              <iframe
                title="Good Food Restaurant Kanpur Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.0!2d80.33!3d26.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI3JzM2LjAiTiA4MMKwMTknNDguMCJF!5e0!3m2!1sen!2sin!4v1"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ width: "100%", height: "100%", minHeight: "300px", border: "none" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: INSTAGRAM FEED ===== */}
      <section
        className="section-padding"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="section-container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Social</span>
            <h2 className="title-lg">See What&apos;s Happening</h2>
          </div>

          <div
            className="reveal-children insta-grid"
            style={{ marginBottom: "2rem" }}
          >
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
                <div className="insta-overlay">❤ {item.likes}</div>
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
              Follow @goodfoodkanpur on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: DELIVERY INFO ===== */}
      <section
        className="section-padding"
        style={{ position: "relative", zIndex: 2, paddingTop: "0" }}
      >
        <div className="section-container">
          <div className="banner-cta reveal" style={{ textAlign: "center" }}>
            <span className="section-label">Delivery</span>
            <h2 className="heading-md" style={{ marginBottom: "1rem" }}>
              Can&apos;t Make It In? <br />
              We&apos;ll Come to You.
            </h2>
            <p className="lead-text" style={{ marginBottom: "0.5rem" }}>
              No-contact delivery available · Drive-through also open
            </p>
            <div style={{ marginTop: "2rem" }}>
              <a href="tel:07755866055" className="btn-primary">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "0.5rem" }} />
    </>
  );
}
