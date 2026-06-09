import { useEffect } from "react";
import { Link } from "../components/Router";
import {
  useScrollReveal,
  useMagneticButtons,
  useTiltCards,
  useTabs,
  useActiveSection,
} from "../components/ClientShell";

const vegItems = [
  { name: "Honey Chilli Potato", price: "₹180", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=85&w=400&h=300&fit=crop", emoji: "🌶️" },
  { name: "Paneer Butter Masala", price: "₹220", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=85&w=400&h=300&fit=crop", emoji: "🧀" },
  { name: "Dal Makhani", price: "₹180", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=85&w=400&h=300&fit=crop", emoji: "🫘" },
  { name: "Veg Fried Rice", price: "₹160", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=85&w=400&h=300&fit=crop", emoji: "🍚" },
  { name: "Veg Manchurian", price: "₹170", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=85&w=400&h=300&fit=crop", emoji: "🥬" },
  { name: "Veg Spring Rolls", price: "₹150", img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=85&w=400&h=300&fit=crop", emoji: "🥟" },
  { name: "Margherita Pizza", price: "₹299", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=85&w=400&h=300&fit=crop", emoji: "🍕" },
  { name: "White Sauce Pasta", price: "₹229", img: "https://images.unsplash.com/photo-1621658428135-43491f25368a?q=80&w=400&h=300&fit=crop", emoji: "🍝" },
  { name: "Veg Burger", price: "₹149", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=85&w=400&h=300&fit=crop", emoji: "🍔" },
  { name: "Handi Paneer", price: "₹250", img: "https://images.unsplash.com/photo-1599487488170-d11e9c20a6e3?q=80&w=400&h=300&fit=crop", emoji: "🍛" },
  { name: "Veg Chowmein", price: "₹140", img: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=85&w=400&h=300&fit=crop", emoji: "🍜" },
  { name: "French Fries", price: "₹120", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=85&w=400&h=300&fit=crop", emoji: "🍟" },
  { name: "Garlic Bread", price: "₹130", img: "https://images.unsplash.com/photo-1633933359648-9366df2e7bc4?q=80&w=400&h=300&fit=crop", emoji: "🍞" },
  { name: "Pav Bhaji", price: "₹160", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=85&w=400&h=300&fit=crop", emoji: "🥘" },
  { name: "Chole Bhature", price: "₹170", img: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=85&w=400&h=300&fit=crop", emoji: "🧆" },
];

const nonVegItems = [
  { name: "Chicken Butter Masala", price: "₹280", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=85&w=400&h=300&fit=crop", emoji: "🍗" },
  { name: "Chicken Biryani", price: "₹260", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=85&w=400&h=300&fit=crop", emoji: "🍛" },
  { name: "Chicken Fried Rice", price: "₹190", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=85&w=400&h=300&fit=crop", emoji: "🍚" },
  { name: "Egg Fried Rice", price: "₹170", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=85&w=400&h=300&fit=crop", emoji: "🥚" },
  { name: "Chicken Manchurian", price: "₹200", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=85&w=400&h=300&fit=crop", emoji: "🥡" },
  { name: "Chicken Spring Rolls", price: "₹180", img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=85&w=400&h=300&fit=crop", emoji: "🥟" },
  { name: "Chicken Burger", price: "₹179", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=85&w=400&h=300&fit=crop", emoji: "🍔" },
  { name: "Chicken Chowmein", price: "₹170", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=85&w=400&h=300&fit=crop", emoji: "🍜" },
  { name: "Chicken Pizza", price: "₹349", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=85&w=400&h=300&fit=crop", emoji: "🍕" },
  { name: "Mutton Rogan Josh", price: "₹320", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=85&w=400&h=300&fit=crop", emoji: "🍖" },
];

const beverageItems = [
  { name: "Cold Coffee", price: "₹120", img: "https://images.unsplash.com/photo-1517701160467-bf01cc61986d?q=80&w=400&h=300&fit=crop", emoji: "☕" },
  { name: "Chocolate Shake", price: "₹150", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=85&w=400&h=300&fit=crop", emoji: "🍫" },
  { name: "Strawberry Mocktail", price: "₹140", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=85&w=400&h=300&fit=crop", emoji: "🍓" },
  { name: "Blue Lagoon Mocktail", price: "₹140", img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=85&w=400&h=300&fit=crop", emoji: "💙" },
  { name: "Mango Shake", price: "₹150", img: "https://images.unsplash.com/photo-1590306161942-02c347575306?q=80&w=400&h=300&fit=crop", emoji: "🥭" },
  { name: "Oreo Shake", price: "₹160", img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=85&w=400&h=300&fit=crop", emoji: "🍪" },
  { name: "Lemon Soda", price: "₹90", img: "https://images.unsplash.com/photo-1523362628745-0c100150b504?q=85&w=400&h=300&fit=crop", emoji: "🍋" },
  { name: "Fresh Lime Water", price: "₹70", img: "https://images.unsplash.com/photo-1523315801375-9279dc6e81b6?q=80&w=400&h=300&fit=crop", emoji: "🥤" },
  { name: "Virgin Mojito", price: "₹150", img: "https://images.unsplash.com/photo-1551751299-1b51cab2694c?q=85&w=400&h=300&fit=crop", emoji: "🌿" },
  { name: "Masala Chai", price: "₹50", img: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=85&w=400&h=300&fit=crop", emoji: "🫖" },
];

export default function MenuPage() {
  useScrollReveal();
  useMagneticButtons();
  useTiltCards();
  useTabs();
  const activeSection = useActiveSection();

  useEffect(() => {
    const firstTab = document.querySelector('[data-tabs] [data-tab]');
    const firstContent = document.querySelector('[data-tabs] [data-tab-content]');
    if (firstTab) firstTab.classList.add('active');
    if (firstContent) firstContent.classList.add('active');
  }, []);

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
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: "url(https://images.unsplash.com/photo-1495521821757-a1eab67a7384?q=85&w=1920)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3) blur(2px)",
            transform: "scale(1.05)",
          }}
        />
        <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
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
            <div className="reveal" style={{ marginBottom: "2.5rem" }} data-section-id="veg">
              <h3 className="sub-section-title">
                <span
                  className={`section-dot ${activeSection === "veg" ? "active" : ""}`}
                  style={{ background: "#22c55e", color: "#22c55e" }}
                />
                Vegetarian
              </h3>
              <div className="menu-sections-grid">
                {vegItems.map((item, i) => (
                  <div className="menu-section-card tilt-card" key={i}>
                    <div className="menu-section-img-wrapper">
                      <img src={item.img} alt={item.name} loading="lazy" className="menu-section-img" />
                      <span className="menu-section-emoji">{item.emoji}</span>
                    </div>
                    <div className="menu-section-info">
                      <div className="menu-section-name">{item.name}</div>
                      <div className="menu-section-meta">
                        <span className="color-dot green"></span>
                        <span className="caption-text">Vegetarian</span>
                      </div>
                    </div>
                    <div className="menu-section-price">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Vegetarian */}
            <div className="reveal" data-section-id="nonveg">
              <h3 className="sub-section-title">
                <span
                  className={`section-dot ${activeSection === "nonveg" ? "active" : ""}`}
                  style={{ background: "#ef4444", color: "#ef4444" }}
                />
                Non-Vegetarian
              </h3>
              <div className="menu-sections-grid">
                {nonVegItems.map((item, i) => (
                  <div className="menu-section-card tilt-card" key={i}>
                    <div className="menu-section-img-wrapper">
                      <img src={item.img} alt={item.name} loading="lazy" className="menu-section-img" />
                      <span className="menu-section-emoji">{item.emoji}</span>
                    </div>
                    <div className="menu-section-info">
                      <div className="menu-section-name">{item.name}</div>
                      <div className="menu-section-meta">
                        <span className="color-dot red"></span>
                        <span className="caption-text">Non-Vegetarian</span>
                      </div>
                    </div>
                    <div className="menu-section-price">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BEVERAGES TAB CONTENT */}
          <div data-tab-content="beverages">
            <div className="reveal" data-section-id="beverages">
              <h3 className="sub-section-title">
                <span
                  className={`section-dot ${activeSection === "beverages" ? "active" : ""}`}
                  style={{ background: "#3b82f6", color: "#3b82f6" }}
                />
                Beverages
              </h3>
              <div className="menu-sections-grid">
                {beverageItems.map((item, i) => (
                  <div className="menu-section-card tilt-card" key={i}>
                    <div className="menu-section-img-wrapper">
                      <img src={item.img} alt={item.name} loading="lazy" className="menu-section-img" />
                      <span className="menu-section-emoji">{item.emoji}</span>
                    </div>
                    <div className="menu-section-info">
                      <div className="menu-section-name">{item.name}</div>
                      <div className="menu-section-meta">
                        <span className="color-dot blue"></span>
                        <span className="caption-text">Beverage</span>
                      </div>
                    </div>
                    <div className="menu-section-price">{item.price}</div>
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
