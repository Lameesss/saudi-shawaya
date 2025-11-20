"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/utils/animations";

export default function Social() {
  const premiumGradient = "var(--premium-gradient)";
  const premiumColor = "#fcb712";
  const brandBlue = "#003cc5";
  const contentBlue = "#00339A";

  const gradientBorderStyle = {
    background: premiumGradient,
  };

  const socialImages = [
    { id: 1, src: "/images/social/111.jpg", alt: "صورة اجتماعية 1" },
    { id: 2, src: "/images/social/116.jpg", alt: "صورة اجتماعية 2" },
    { id: 3, src: "/images/social/114.jpg", alt: "صورة اجتماعية 3" },
    { id: 4, src: "/images/social/113.jpg", alt: "صورة اجتماعية 4" },
    { id: 5, src: "/images/social/112.jpg", alt: "صورة اجتماعية 5" },
    { id: 6, src: "/images/social/115.jpg", alt: "صورة اجتماعية 6" },
    { id: 7, src: "/images/social/117.jpg", alt: "صورة اجتماعية 7" },
    { id: 8, src: "/images/social/118.jpg", alt: "صورة اجتماعية 8" },
  ];

  return (
    <section className="w-full py-8 lg:py-16" style={{ backgroundColor: brandBlue }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-2">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Images Grid - First on mobile, Right on desktop (2 cols x 4 rows on mobile, 4 cols x 2 rows on desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="order-1 lg:order-2 lg:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-0"
          >
            {socialImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative aspect-square p-2"
              >
                {/* Golden Gradient Border */}
                <div className="relative rounded-2xl p-1 shadow-lg h-full" style={gradientBorderStyle}>
                  <div className="relative w-full h-full rounded-xl overflow-hidden" style={{ backgroundColor: brandBlue }}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 12.5vw"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Text Area with Golden Gradient Background - Second on mobile, Left on desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="order-2 lg:order-1 flex items-center justify-center py-12 lg:py-0"
          >
            <div 
              className="relative w-72 sm:w-80 lg:w-[360px] aspect-square rounded-full flex items-center justify-center text-center px-10 shadow-2xl"
              style={{ 
                backgroundColor: contentBlue,
                color: "#ffffff",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.35)"
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-48 sm:w-56 lg:w-60 relative"
              >
                <Image
                  src="/images/logo.png"
                  alt="Saudi Shawaya Logo"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain mx-auto"
                  priority={false}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
