import React from 'react'
export const colorcode = {
  primary: "#2563EB", // Vibrant Blue (Main CTA, Buttons)
  secondary: "#F97316", // Warm Orange (Highlights, Discount badges)
  accent: "#10B981", // Fresh Green (Success, Add to cart, Offers)
  background: "#F9FAFB", // Light Gray/White background
  surface: "#FFFFFF", // Card & Section background
  text: "#111827", // Dark Gray (Main text)
  muted: "#6B7280", // Muted Gray (Secondary text)
  border: "#E5E7EB", // Light Gray (Card borders, lines)
  danger: "#EF4444", // Red (Remove, Error)
  warning: "#FACC15", // Yellow (Low stock, Alerts)
};

function T() {
  return (
    <div>
      <div className="bg-[var(--background)] min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center p-4 shadow-md bg-white">
          <h1 className="text-2xl font-bold text-[var(--primary)]">ShopEase</h1>
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 w-1/2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
          <div className="flex gap-4 text-[var(--text)]">
            <span>❤️</span>
            <span>🛒</span>
            <span>👤</span>
          </div>
        </header>

        {/* Hero Banner */}
        <section className="bg-[var(--primary)] text-white text-center py-16">
          <h2 className="text-4xl font-bold">Biggest Sale of the Year 🎉</h2>
          <p className="mt-2">Up to 70% OFF on Electronics</p>
          <button className="mt-4 px-6 py-3 bg-[var(--secondary)] rounded-xl font-semibold shadow-lg">
            Shop Now
          </button>
        </section>

        {/* Product Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div className="bg-white shadow-md rounded-2xl p-4">
            <img src="/product.jpg" className="rounded-xl" />
            <h3 className="mt-2 text-lg font-semibold">Wireless Headphones</h3>
            <p className="text-[var(--accent)] font-bold">₹1,999</p>
            <button className="mt-3 w-full bg-[var(--accent)] text-white py-2 rounded-xl">
              Add to Cart
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default T
