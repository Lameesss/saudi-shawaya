"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

export default function MenuPage() {
  const premiumGradient = "var(--premium-gradient)";
  const menuItems = [
    {
      id: 1,
      name: "SAUDI ALFHAM",
      image: "/images/dish6.png",
      link: "/product/espresso",
    },
    {
      id: 2,
      name: "SAUDI SHAWAYA",
      image: "/images/dish1.png",
      link: "/product/cappuccino",
    },
    {
      id: 3,
      name: "SPANISH SALAD",
      image: "/images/dish4.png",
      link: "/product/latte",
    },
    {
      id: 4,
      name: "HONEY-CHILLY WINGS",
      image: "/images/dish3.png",
      link: "/product/americano",
    },
    {
      id: 5,
      name: "MASALA SHAWAYA",
      image: "/images/dish5.png",
      link: "/product/macchiato",
    },
    {
      id: 6,
      name: "SHAWAYA",
      image: "/images/dish9.png",
      link: "/product/mocha",
    },
  ];

  return (
    <main className="min-h-screen pt-20" style={{ backgroundColor: 'var(--bg-color)' }}>
      {/* Page Header */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold uppercase tracking-[0.2em] mb-4"
            style={{
              background: premiumGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
            }}
          >
            MENU
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl lg:text-3xl font-light"
            style={{
              fontFamily: 'serif',
              background: premiumGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.9
            }}
          >
            القائمة
          </motion.p>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="w-full pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Product Image */}
                <div className="relative w-full h-[350px] mb-8 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain drop-shadow-xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.div>
                </div>

                {/* Product Name */}
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--heading-color)' }}>
                  {item.name}
                </h3>

                {/* Order Now Link */}
                <Link
                  href={item.link}
                  className="inline-block text-xs font-bold uppercase tracking-wider transition-all duration-300"
                  style={{ color: 'var(--heading-color)' }}
                  onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  ORDER NOW
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
