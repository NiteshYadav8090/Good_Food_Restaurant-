import {
  useScrollReveal,
  useMagneticButtons,
  useLiveNow,
} from "../components/ClientShell";

export default function VisitPage() {
  useScrollReveal();
  useMagneticButtons();
  useLiveNow();

  return (
    <>
      {/* ===== SECTION 1: VISIT HERO ===== */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
          padding: "8rem 1.5rem 4rem",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: "url(https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=85&w=1920)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.25) blur(2px)",
            transform: "scale(1.05)",
          }}
        />
        <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
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

      {/* ===== SECTION 2: IMAGE + INFO CARDS ===== */}
      <section
        className="section-padding"
        style={{ position: "relative", zIndex: 2, paddingTop: "0" }}
      >
        <div className="section-container">
          {/* Ambiance image strip */}
          <div className="reveal visit-ambiance-strip">
            {[
              "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=85&w=400&h=250&fit=crop",
              "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=85&w=400&h=250&fit=crop",
              "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=85&w=400&h=250&fit=crop",
              "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=85&w=400&h=250&fit=crop",
            ].map((img, i) => (
              <div className="visit-ambiance-img" key={i}>
                <img src={img} alt="Restaurant ambiance" loading="lazy" />
              </div>
            ))}
          </div>

          <div className="grid-3 reveal-children" style={{ marginTop: "2rem" }}>
            {/* Location Card */}
            <div className="info-card">
              <div className="icon"><i className="ri-map-pin-2-line"></i></div>
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
              <div className="icon"><i className="ri-phone-line"></i></div>
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
              <div className="icon"><i className="ri-time-line"></i></div>
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

      {/* ===== SECTION 4: FOOD IMAGE + INSTAGRAM ===== */}
      <section
        className="section-padding"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="section-container">
          {/* Food banner image */}
          <div className="reveal" style={{ marginBottom: "2.5rem", borderRadius: "1.25rem", overflow: "hidden", maxHeight: "300px" }}>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=85&w=1200&h=300&fit=crop"
              alt="Our delicious spread"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          <div className="reveal" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Social</span>
            <h2 className="title-lg">See What&apos;s Happening</h2>
          </div>

          <div
            className="reveal-children insta-grid"
            style={{ marginBottom: "2rem" }}
          >
            {[
              { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=85&w=400&h=400&fit=crop", likes: "2,847" },
              { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=85&w=400&h=400&fit=crop", likes: "1,934" },
              { src: "https://images.unsplash.com/photo-1517701160467-bf8f864831d5?q=85&w=400&h=400&fit=crop", likes: "3,201" },
              { src: "https://images.unsplash.com/photo-1473093226775-af9f3f500096?q=85&w=400&h=400&fit=crop", likes: "1,712" },
              { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=85&w=400&h=400&fit=crop", likes: "2,568" },
              { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=85&w=400&h=400&fit=crop", likes: "1,889" },
            ].map((item, i) => (
              <div className="insta-item" key={i}>
                <img src={item.src} alt="Food" loading="lazy" className="insta-real-img" />
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
