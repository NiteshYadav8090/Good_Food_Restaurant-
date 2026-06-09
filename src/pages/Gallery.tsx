import { useState, useCallback, useEffect, useRef } from "react";
import {
  useScrollReveal,
  useMagneticButtons,
} from "../components/ClientShell";

const foodImages = [
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=85&w=800&h=800&fit=crop",
    title: "Wood-Fired Pizza",
    category: "Pizza",
    emoji: "🍕",
    description: "Our signature wood-fired pizzas with fresh toppings",
  },
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=85&w=800&h=800&fit=crop",
    title: "Crispy Burgers",
    category: "Burgers",
    emoji: "🍔",
    description: "Juicy, hand-crafted burgers with secret sauce",
  },
  {
    src: "https://i.pinimg.com/1200x/ca/3a/af/ca3aafbcd6029d52bb3cbc6442f24434.jpg",
    title: "Indulgent Pastas",
    category: "Pasta",
    emoji: "🍝",
    description: "Creamy Italian pastas made fresh daily",
  },
  {
    src: "https://i.pinimg.com/736x/af/c9/6b/afc96b705be359fec3286b1fbd0b3ce7.jpg",
    title: "North Indian Thali",
    category: "Indian",
    emoji: "🍛",
    description: "Authentic North Indian flavours in every bite",
  },
  {
    src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=85&w=800&h=800&fit=crop",
    title: "Chinese Favorites",
    category: "Chinese",
    emoji: "🥡",
    description: "Wok-tossed Chinese classics you'll love",
  },
  {
    src: "https://i.pinimg.com/1200x/07/e3/cb/07e3cbb60afac722b6667badd5dc7537.jpg ",
    title: "Cold Coffee & Mocktails",
    category: "Beverages",
    emoji: "☕",
    description: "Refreshing drinks to beat the heat",
  },
  {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=85&w=800&h=800&fit=crop",
    title: "Decadent Desserts",
    category: "Desserts",
    emoji: "🍰",
    description: "Sweet endings that make every meal memorable",
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=85&w=800&h=800&fit=crop",
    title: "Warm Ambiance",
    category: "Ambiance",
    emoji: "✨",
    description: "Cozy, welcoming atmosphere for every occasion",
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=85&w=800&h=800&fit=crop",
    title: "Fresh Salads",
    category: "Salads",
    emoji: "🥗",
    description: "Crisp, healthy salads packed with flavour",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=85&w=800&h=800&fit=crop",
    title: "Crispy Starters",
    category: "Starters",
    emoji: "🌶️",
    description: "Perfect starters to begin your meal",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=85&w=800&h=800&fit=crop",
    title: "Party Platters",
    category: "Parties",
    emoji: "🎉",
    description: "Generous platters for group celebrations",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=85&w=800&h=800&fit=crop",
    title: "Midnight Dining",
    category: "Late Night",
    emoji: "🌙",
    description: "Open till midnight — we're always here",
  },
];

export default function GalleryPage() {
  useScrollReveal();
  useMagneticButtons();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  // Auto-focus lightbox when opened, and clean up body overflow on unmount
  useEffect(() => {
    if (lightboxOpen && lightboxRef.current) {
      lightboxRef.current.focus();
    }
  }, [lightboxOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % foodImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + foodImages.length) % foodImages.length);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    },
    [closeLightbox, goNext, goPrev]
  );

  return (
    <>
      {/* ===== SECTION 1: GALLERY HERO ===== */}
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
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: "url(https://images.unsplash.com/photo-1544148103-0773bf10d330?q=85&w=1920)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3) blur(2px)",
            transform: "scale(1.05)",
          }}
        />
        <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="reveal">
            <span className="section-label">Gallery</span>
            <h1 className="title-lg" style={{ marginBottom: "1rem" }}>
              A Visual Feast
            </h1>
            <p className="lead-text" style={{ maxWidth: "500px", margin: "0 auto" }}>
              Every dish tells a story. Browse our gallery and taste the experience.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: IMAGE GALLERY GRID ===== */}
      <section
        className="section-padding"
        style={{ position: "relative", zIndex: 2, paddingTop: "0" }}
      >
        <div className="section-container">
          {/* Filter chips */}
          <div className="reveal" style={{ marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem", textAlign: "center" }}>
              Click any image to view full size
            </p>
          </div>

          <div className="real-gallery-grid reveal-children">
            {foodImages.map((item, i) => (
              <div
                className="real-gallery-item"
                key={i}
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openLightbox(i);
                }}
              >
                <div className="real-gallery-img-wrapper">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="real-gallery-img"
                  />
                  <div className="real-gallery-overlay">
                    <span className="real-gallery-emoji">{item.emoji}</span>
                    <h3 className="real-gallery-img-title">{item.title}</h3>
                    <p className="real-gallery-img-desc">{item.description}</p>
                    <span className="real-gallery-category-tag">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: VISIT CTA ===== */}
      <section
        className="section-padding"
        style={{ position: "relative", zIndex: 2, paddingTop: "0" }}
      >
        <div className="section-container">
          <div className="banner-cta reveal" style={{ textAlign: "center" }}>
            <span className="section-label" style={{ color: "var(--clr-ember)" }}>
              Hungry Yet?
            </span>
            <h2 className="heading-md" style={{ marginBottom: "1rem" }}>
              Come Taste the Good Food!
            </h2>
            <p className="lead-text" style={{ maxWidth: "500px", margin: "0 auto 2rem" }}>
              Every dish tells a story. Come write yours with us.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              <a href="tel:07755866055" className="btn-primary">
                Order Now
              </a>
              <a
                href="https://maps.google.com/?q=11+W2+Juhi+Kalan+Damodar+Nagar+Kanpur+208027"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "0.5rem" }} />

      {/* ===== LIGHTBOX MODAL ===== */}
      {lightboxOpen && (        <div
            ref={lightboxRef}
            className="lightbox-backdrop"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            role="dialog"
            aria-label="Image viewer"
        >
          {/* Close button */}
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            type="button"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Previous button */}
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            type="button"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={foodImages[lightboxIndex].src.replace("w=800", "w=1600")}
              alt={foodImages[lightboxIndex].title}
              className="lightbox-image"
            />
            <div className="lightbox-info">
              <span className="lightbox-emoji">{foodImages[lightboxIndex].emoji}</span>
              <span className="lightbox-title">{foodImages[lightboxIndex].title}</span>
              <span className="lightbox-counter">
                {lightboxIndex + 1} / {foodImages.length}
              </span>
            </div>
          </div>

          {/* Next button */}
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            type="button"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
