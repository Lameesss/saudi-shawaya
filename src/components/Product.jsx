"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

export default function Product() {
  const premiumGradient = "var(--premium-gradient)";
  const premiumColor = "#fcb712";
  const brandBlue = "#003cc5";
  const products = [
    {
      id: 1,
      name: "SAUDI SHAWAYA",
      image: "/images/dish1.png",
      link: "/product/espresso",
    },
    {
      id: 2,
      name: "HONEY CHILLY WINGS",
      image: "/images/dish3.png",
      link: "/product/cappuccino",
    },
    {
      id: 3,
      name: "SPANISH SALAD",
      image: "/images/dish4.png",
      link: "/product/latte",
    },
  ];

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: brandBlue }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
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
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-xl"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
              </div>

              {/* Product Name */}
              <h3
                className="text-sm font-bold uppercase tracking-wider mb-4"
                style={{
                  background: premiumGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {product.name}
              </h3>

              {/* Shop Now Link */}
              <Link
                href={"/product"}
                className="inline-block text-xs font-bold uppercase tracking-wider transition-all duration-300"
                style={{ color: premiumColor }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                ORDER NOW
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
