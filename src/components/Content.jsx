"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

export default function Content() {
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

      <div className="relative max-w-5xl mx-auto px-8 lg:px-12 text-center">
        {/* Premium Arabic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-lg lg:text-xl font-light mb-4"
          style={{
            background: premiumGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "serif",
          }}
        >
          بيت الشوايا السعودي
        </motion.p>

        {/* Mobile Heading - 3 Lines */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:hidden text-4xl sm:text-5xl font-bold uppercase leading-[1.1] tracking-[0.2em] text-center mb-6"
          style={{
            background: premiumGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          HOUSE OF
          <br />
          SAUDI SHAWAYA
          <br />
          FLAME
        </motion.h1>

        {/* Desktop Heading - 3 Lines */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block text-5xl xl:text-6xl font-bold uppercase leading-[1.1] tracking-[0.2em] text-center mb-6"
          style={{
            background: premiumGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          HOUSE OF
          <br />
          SAUDI SHAWAYA
          <br />
          FLAME
        </motion.h1>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-24 h-0.5 mx-auto mb-8 origin-center"
          style={{ backgroundColor: premiumColor }}
        />

        {/* Premium Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base lg:text-xl leading-relaxed mb-12 max-w-4xl mx-auto text-white"
        >
          Saudi Shawaya lives for flame, spice, and the slow-roasted craft of
          shawaya. Every bird is marinated overnight, kissed by charcoal, and
          plated with saffron rice, tangy dips, and crisp salads—a tribute to
          coastal street food served with premium ingredients and blue-and-gold
          hospitality.
        </motion.p>

        {/* Premium Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/product"
            className="group relative inline-block px-12 py-4 text-sm font-bold uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden"
            style={{
              border: "2px solid rgba(252, 183, 18, 0.4)",
              color: "#fcb712",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#fcb712";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(252, 183, 18, 0.4)";
            }}
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              EXPLORE OUR MENU
            </span>
            <div
              className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              style={{
                background:
                  "var(--premium-gradient)",
              }}
            />
          </Link>
        </motion.div>

        {/* Premium Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 pt-8 border-t border-opacity-20"
          style={{ borderColor: "#fcb712" }}
        >
          <p
            className="text-lg lg:text-xl font-light italic"
            style={{
              background:
                "var(--premium-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
        >
          "From the first crackle of charcoal to the last morsel of shawaya, we
          serve fire, flavor, and family."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

