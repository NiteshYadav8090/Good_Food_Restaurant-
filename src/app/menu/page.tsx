"use client";

import { useEffect } from "react";
import {
  useScrollReveal,
  useMagneticButtons,
  useTiltCards,
  useTabs,
} from "@/components/ClientShell";

export default function MenuPage() {
  useScrollReveal();
  useMagneticButtons();
  useTiltCards();
  useTabs();

  useEffect(() => {
    // Activate first tab by default
    const firstTab = document.querySelector('[data-tabs] [data-tab]');
    const firstContent = document.querySelector('[data-tabs] [data-tab-content]');
    if (firstTab) firstTab.classList.add('active');
    if (firstContent) firstContent.classList.add('active');
  }, []);

  const vegItems = [
    "Honey Chilli Potato",
    "Paneer Butter Masala",
    "Dal Makhani",
    "Veg Fried Rice",
    "Veg Manchurian",
    "Veg Spring Rolls",
    "Margherita Pizza",
    "White Sauce Pasta",
    "Veg Burger",
    "Handi Paneer",
    "Veg Chowmein",
    "French Fries",
    "Garlic Bread",
    "Pav Bhaji",
    "Chole Bhature",
  ];

  const nonVegItems = [
    "Chicken Butter Masala",
    "Chicken Biryani",
    "Chicken Fried Rice",
    "Egg Fried Rice",
    "Chicken Manchurian",
    "Chicken Spring Rolls",
    "Chicken Burger",
    "Chicken Chowmein",
    "Chicken Pizza",
    "Mutton Rogan Josh",
  ];

  const beverageItems = [
    "Cold Coffee",
    "Chocolate Shake",
    "Strawberry Mocktail",
    "Blue Lagoon Mocktail",
    "Mango Shake",
    "Oreo Shake",
    "Lemon Soda",
    "Fresh Lime Water",
    "Virgin Mojito",
    "Masala Chai",
  ];

  return (
    <>
      {/* ===== SECTION 1: MENU HERO ===== */}
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
            <span className="section-label">Our Menu</span>
            <h1 className="title-lg" style={{ marginBottom: "1rem" }}>
              Our Menu
            </h1>
            <p className="lead-text" style={{ maxWidth: "500px", margin: "0 auto" }}>
              Fresh ingredients. Bold flavours. Every single day.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: CATEGORY TABS + MENU ITEMS ===== */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2, paddingTop: "0" }}>
        <div className="section-container" data-tabs>
          {/* Tab Navigation */}
          <div
            className="category-tabs reveal"
            style={{ marginBottom: "2.5rem", justifyContent: "center" }}
          >
            <button className="category-tab" data-tab="food" type="button">
              🍽 Food
            </button>
            <button className="category-tab" data-tab="beverages" type="button">
              🥤 Beverages
            </button>
          </div>

          {/* FOOD TAB CONTENT */}
          <div data-tab-content="food">
            {/* Vegetarian */}
            <div className="reveal" style={{ marginBottom: "2.5rem" }}>
              <h3 className="sub-section-title">
                <span style={{ color: "#22c55e", fontSize: "1.2rem" }}>●</span> Vegetarian
              </h3>
              <div className="menu-items-grid">
                {vegItems.map((item, i) => (
                  <div className="menu-card tilt-card" key={i}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span className="color-dot green"></span>
                      <div>
                        <div style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "var(--clr-cream)" }}>
                          {item}
                        </div>
                        <span className="caption-text" style={{ color: "var(--clr-text-muted)" }}>
                          Vegetarian
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Vegetarian */}
            <div className="reveal">
              <h3 className="sub-section-title">
                <span style={{ color: "#ef4444", fontSize: "1.2rem" }}>●</span> Non-Vegetarian
              </h3>
              <div className="menu-items-grid">
                {nonVegItems.map((item, i) => (
                  <div className="menu-card tilt-card" key={i}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span className="color-dot red"></span>
                      <div>
                        <div style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "var(--clr-cream)" }}>
                          {item}
                        </div>
                        <span className="caption-text" style={{ color: "var(--clr-text-muted)" }}>
                          Non-Vegetarian
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BEVERAGES TAB CONTENT */}
          <div data-tab-content="beverages">
            <div className="reveal">
              <h3 className="sub-section-title">
                <span style={{ color: "#3b82f6", fontSize: "1.2rem" }}>●</span> Beverages
              </h3>
              <div className="menu-items-grid">
                {beverageItems.map((item, i) => (
                  <div className="menu-card tilt-card" key={i}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span className="color-dot blue"></span>
                      <div>
                        <div style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "var(--clr-cream)" }}>
                          {item}
                        </div>
                        <span className="caption-text" style={{ color: "var(--clr-text-muted)" }}>
                          Beverage
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: CTA BANNER ===== */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2, paddingTop: "0" }}>
        <div className="section-container">
          <div className="banner-cta reveal" style={{ textAlign: "center" }}>
            <h2 className="heading-md" style={{ marginBottom: "1rem" }}>
              Can&apos;t Decide?
            </h2>
            <p className="lead-text" style={{ maxWidth: "500px", margin: "0 auto 2rem" }}>
              Call Us &amp; We&apos;ll Suggest Your Perfect Meal.
            </p>
            <a href="tel:07755866055" className="btn-primary">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <div style={{ height: "0.5rem" }} />
    </>
  );
}
