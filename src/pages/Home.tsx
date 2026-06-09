import { useEffect } from "react";
import { Link } from "../components/Router";
import {
  useScrollReveal,
  useCounterAnimation,
  useMagneticButtons,
  useTiltCards,
  useLiveNow,
  useAutoSlider,
} from "../components/ClientShell";

const heroImages = [
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=85&w=1920",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=85&w=1920",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=85&w=1920",
];

const featuredDishes = [
  {
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=85&w=400&h=400&fit=crop",
    title: "Honey Chilli Potato",
    tag: "Popular",
    emoji: "🌶️",
    price: "₹180",
  },
  {
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=85&w=400&h=400&fit=crop",
    title: "Wood-Fired Pizza",
    tag: "Signature",
    emoji: "🍕",
    price: "₹299",
  },
  {
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=85&w=400&h=400&fit=crop",
    title: "Chinese Platter",
    tag: "Combo",
    emoji: "🥟",
    price: "₹249",
  },
  {
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cold Coffee",
    tag: "Refreshing",
    emoji: "☕",
    price: "₹120",
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=85&w=400&h=400&fit=crop",
    title: "Crispy Burger",
    tag: "Best Seller",
    emoji: "🍔",
    price: "₹199",
  },
  {
    img: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=400&h=400&fit=crop",
    title: "White Sauce Pasta",
    tag: "Creamy",
    emoji: "🍝",
    price: "₹229",
  },
];

const instaImages = [
  { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=85&w=400&h=400&fit=crop", likes: "2,847" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=85&w=400&h=400&fit=crop", likes: "1,934" },
  { src: "https://images.unsplash.com/photo-1567769541695-3598ee6ea57b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D", likes: "3,201" },
  { src: "https://images.unsplash.com/photo-1617641540576-7802b374fe38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8", likes: "1,712" },
  { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=85&w=400&h=400&fit=crop", likes: "2,568" },
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=85&w=400&h=400&fit=crop", likes: "1,889" },
];

export default function HomePage() {
  useScrollReveal();
  useCounterAnimation();
  useMagneticButtons();
  useTiltCards();
  useLiveNow();
  const sliderRef = useAutoSlider(3000);

  return (
    <>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="hero-section">
        {/* Background Image Slideshow */}
        <div className="hero-bg-slideshow">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className="hero-bg-slide"
              style={{
                backgroundImage: `url(${img})`,
                animationDelay: `${i * 5}s`,
                opacity: i === 0 ? 1 : 0,
              }}
            />
          ))}
          <div className="hero-bg-overlay" />
        </div>

        <div className="section-container" style={{ width: "100%", position: "relative", zIndex: 2 }}>
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
            <Link to="/menu" className="btn-primary">
              View Our Menu
            </Link>
            <a href="tel:07755866055" className="btn-ghost">
              Call to Reserve
            </a>
          </div>
        </div>

        {/* Bottom Stat Bar */}
        <div
          className="hero-stat-bar reveal"
          style={{ marginTop: "auto", width: "100%", position: "relative", zIndex: 2 }}
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

      {/* ===== SECTION 2: MARQUEE TICKER ===== */}
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

      {/* ===== SECTION 3: WHY PEOPLE LOVE US (SOCIAL PROOF) ===== */}
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

      {/* ===== SECTION 4: MENU HIGHLIGHTS - AUTO SLIDER ===== */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Menu Preview</span>
            <h2 className="title-lg">Something For Everyone</h2>
          </div>

          <div className="auto-slider-wrapper reveal" ref={sliderRef}>
            {featuredDishes.map((dish, i) => (
              <div className="auto-slide-card tilt-card" key={i}>
                <div className="auto-slide-img-wrapper">
                  <img src={dish.img} alt={dish.title} loading="lazy" className="auto-slide-img" />
                  <span className="auto-slide-tag">{dish.tag}</span>
                  <span className="auto-slide-emoji">{dish.emoji}</span>
                </div>
                <div className="auto-slide-info">
                  <h4 className="auto-slide-title">{dish.title}</h4>
                  <span className="auto-slide-price">{dish.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/menu" className="btn-primary">
              See Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: PARTY & EVENTS BOOKING ===== */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-container">
          <div className="events-cta-card reveal">
            <div className="events-cta-bg" style={{backgroundImage: "url(https://images.unsplash.com/photo-1519741497674-611481863552?q=85&w=1200&h=600&fit=crop)"}} />
            <div className="events-cta-overlay" />
            <div className="events-cta-content">
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
        </div>
      </section>

      {/* ===== SECTION 6: INSTAGRAM FEED ===== */}
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
            {instaImages.map((item, i) => (
              <div className="insta-item" key={i}>
                <img
                  src={item.src}
                  alt="Food"
                  loading="lazy"
                  className="insta-real-img"
                />
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
