import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import { useStore } from "../store/useStore";
import { mockProducts } from "../utils/mockData";

const Index = () => {
  const { theme } = useStore();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-[#ffffff] dark:bg-[#374D45] transition-colors duration-300">
      <Navbar />
      <Hero />

      {/* Products Section */}
      <section id="products-section">
        <ProductGrid products={mockProducts} title="Our Collection" />
      </section>

      {/* About Section */}
      <section id="about-section" className="py-20 bg-[#ffffff] dark:bg-[#BFC8B1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#374D45] dark:text-white mb-6">
              Why Choose TEOCUTURE?
            </h2>
            <p className="text-xl text-[#555] dark:text-[#374D45] max-w-3xl mx-auto">
              Teocouture is a fashion brand that specializes in couture tailoring and premium ready-to-wear garments that celebrate individuality, elegance, and culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🇳🇬",
                title: "Authentic Nigerian",
                description: "Genuine traditional designs crafted by skilled local artisans with years of experience",
              },
              {
                icon: "✨",
                title: "Premium Quality",
                description: "High-quality fabrics sourced locally, ensuring durability and comfort in every piece",
              },
              {
                icon: "🚚",
                title: "Fast Delivery",
                description: "Quick and reliable shipping across Nigeria with careful packaging and tracking",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 bg-[#F3F4F3] dark:bg-[#E8BFC4] rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-[#374D45] dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#555] dark:text-[#374D45] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#374D45] dark:bg-[#374D45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-[#E8BFC4] mb-8 max-w-2xl mx-auto">
              Be the first to know about new collections, exclusive offers, and cultural events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-[#374D45] focus:outline-none focus:ring-2 focus:ring-[#E8BFC4]"
              />
              <button className="bg-white text-[#374D45] px-8 py-3 rounded-lg font-semibold hover:bg-[#f1f1f1] transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <Cart />
    </div>
  );
};

export default Index;
