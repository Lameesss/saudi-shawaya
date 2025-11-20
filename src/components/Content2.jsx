"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

export default function Content2() {
  const premiumGradient = "var(--premium-gradient)";
  const premiumColor = "#fcb712";
  const brandBlue = "#003cc5";
  return (
    <section
      className="w-full py-20 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: brandBlue }}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(252, 183, 18, 0.18) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
        {/* Two Column Layout - Desktop, Stack on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Large Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Arabic Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg lg:text-xl font-light mb-6"
              style={{
                background: premiumGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "serif",
              }}
            >
              الشوايا أسلوب حياة
            </motion.p>

            {/* Large Heading */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-8"
              style={{
                background: premiumGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
              }}
            >
              MORE
              <br />
              THAN
              <br />
              SHAWAYA
            </h1>

            {/* Decorative Elements */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.6 }}
              className="w-20 h-1 mb-6 origin-left"
              style={{ backgroundColor: premiumColor }}
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Description */}
            <p className="text-lg lg:text-xl leading-relaxed text-white">
              Saudi Shawaya began as a single charcoal pit, a family recipe, and
              a promise to serve shawaya that tastes like home. Today we still
              marinate in clay pots, roast over live fire, and plate each bird
              with saffron rice, creamy garlic relish, and pickled punch.
            </p>

            <p className="text-lg lg:text-xl leading-relaxed text-white">
              Our kitchens are loud with drum beats, the counters glow
              blue-and-gold, and the air smells of smoke, cardamom, and citrus.
              We are more than a meal; we are the energy of a Majlis table, the
              warmth of late-night gatherings, and the drama of shawaya carved
              in front of you.
            </p>

            {/* Premium Button */}
            <Link
              href="/contact"
              className="group relative inline-block px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden rounded-full"
              style={{
                border: "2px solid rgba(252, 183, 18, 0.6)",
                color: premiumColor,
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = premiumColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "rgba(252, 183, 18, 0.6)";
              }}
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                DISCOVER OUR STORY
              </span>
              <div
                className="absolute inset-0 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"
                style={{
                  background: premiumGradient,
                }}
              />
            </Link>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-8 border-t border-opacity-30"
              style={{ borderColor: premiumColor }}
            >
              <p
                className="text-xl lg:text-2xl font-light italic"
                style={{
                  background: premiumGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                "This is shawaya theatre—smoke, rhythm, and stories on a plate."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
