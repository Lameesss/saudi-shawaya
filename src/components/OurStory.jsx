"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  const premiumGradient = "var(--premium-gradient)";
  const premiumColor = "#fcb712";
  const brandBlue = "#003cc5";
  return (
    <section
      className="w-full py-16 lg:py-20"
      style={{ backgroundColor: brandBlue }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Title and Heading - Above Everything */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{
              background: premiumGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            OUR STORY
          </motion.h2>

          {/* Subtitle with White Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-3"
          >
            {/* Desktop Layout - Text and Line Side by Side */}
            <div className="hidden sm:flex items-center space-x-4">
              <p className="text-lg lg:text-xl font-light text-white">
                مقهى كأس العالم هنا لإسعاد براعم التذوق لديكم!
              </p>
              <motion.div
                className="flex-1 h-0.5 bg-white origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.8,
                  duration: 1.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              ></motion.div>
            </div>

            {/* Mobile Layout - Text Above, Line Below */}
            <div className="sm:hidden">
              <p className="text-lg font-light mb-3 text-white">
                مقهى كأس العالم هنا لإسعاد براعم التذوق لديكم!
              </p>
              <motion.div
                className="w-full h-0.5 bg-white origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.8,
                  duration: 1.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Layout - Image and Text Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* Golden Gradient Border */}
            <div
              className="relative rounded-[2rem] p-1 shadow-2xl"
              style={{
                background: premiumGradient,
              }}
            >
              <div className="relative rounded-[1.75rem] overflow-hidden bg-white">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/ours4.jpg"
                    alt="World Cup Cafe Interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            {/* Single Paragraph Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-white text-base lg:text-lg leading-relaxed">
                Saudi Shawaya is a homegrown kitchen built around one obsession:
                flame-roasted shawaya. Our chefs marinate every bird overnight,
                layer it with house masalas, and roast it slow over charcoal
                until the meat falls off the bone. Signature Saudi Shawaya,
                fiery masala shawaya, and rotating chef’s specials keep the menu
                bold while staying true to Arabian roots and Kerala soul.
              </p>
              <p className="text-white text-base lg:text-lg leading-relaxed mt-6">
                Step inside and you’re greeted by blue-and-gold interiors,
                sizzling shawaya counters, aromatic rice spreads, and dips that
                balance smoke with freshness. Families gather, friends share
                platters, and late-night foodies chase that perfect juicy bite.
                This is HOUSE OF SHAWAYA—a place where comfort food is plated
                with ceremony and every meal celebrates the craft of roasting.
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-6"
            >
              <div className="flex items-center space-x-2">
                <span className="text-2xl lg:text-3xl font-bold text-white">
                  تعال
                </span>
                <span
                  className="text-2xl lg:text-3xl font-bold"
                  style={{
                    background: premiumGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  تذوق
                </span>
                <span
                  className="text-2xl lg:text-3xl font-bold"
                  style={{
                    background: premiumGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  السحر!
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
