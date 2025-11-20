"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageContent() {
  const premiumGradient = "var(--premium-gradient)";
  const premiumColor = "#fcb712";
  const brandBlue = "#003cc5";

  const gradientTextStyle = {
    background: premiumGradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const gradientBorderStyle = {
    background: premiumGradient,
  };

  return (
    <section
      className="w-full py-16 lg:py-20"
      style={{ backgroundColor: brandBlue }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16 max-w-5xl mx-auto"
        >
          {/* Main Heading with Gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold uppercase leading-[1.1] tracking-[0.2em] mb-4"
            style={{
              ...gradientTextStyle,
              textShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
            }}
          >
            HOUSE OF
            <br />
            <span className="font-light italic normal-case tracking-normal">
              Saudi Shawaya Stories
            </span>
          </motion.h2>

          {/* Subtitle with Animated White Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-3 mb-6"
          >
            {/* Desktop Layout - Text and Line Side by Side */}
            <div className="hidden sm:flex items-center space-x-4">
              <p
                className="text-lg lg:text-xl font-light whitespace-nowrap"
                style={{
                  background: premiumGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "serif",
                }}
              >
                حيث يلتقي التراث بالرفاهية العصرية
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
              <p
                className="text-lg font-light mb-3"
                style={{
                  background: premiumGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "serif",
                }}
              >
                حيث يلتقي التراث بالرفاهية العصرية
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

          {/* 3-Line Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base lg:text-xl leading-relaxed max-w-4xl text-white"
          >
            Saudi Shawaya is a gallery of flame, color, and aroma. Our walls
            carry bold murals, the kitchens glow with open fire, and every plate
            leaves the pass stacked with charcoal-roasted shawaya, fragrant rice,
            and tangy relishes.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-base lg:text-xl leading-relaxed max-w-4xl text-white mt-4"
          >
            The imagery you see here captures our story—from neon blues of the
            storefront to the carved arches framing each shawaya counter. It is
            a reminder that we roast with heritage, plate with style, and welcome
            every guest like family.
          </motion.p>
        </motion.div>

        {/* Images Section - Matching Reference Layout */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Top Large Image - Responsive Sizing */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {/* Golden Gradient Border */}
            <div
              className="relative rounded-[2rem] p-1 shadow-2xl w-full max-w-5xl"
              style={gradientBorderStyle}
            >
              <div
                className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-[1.75rem] overflow-hidden"
                style={{ backgroundColor: brandBlue }}
              >
                <Image
                  src="/images/044.jpg"
                  alt="Saudi Shawaya exterior storefront"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1000px"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom Two Images - Different Aspect Ratios */}
          <div className="grid grid-cols-5 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 lg:gap-10 max-w-5xl mx-auto">
            {/* Bottom Left Image - Square/Portrait Shape */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="relative col-span-2 md:col-span-5"
            >
              {/* Golden Gradient Border */}
              <div
                className="relative rounded-[1.5rem] md:rounded-[2rem] p-1 shadow-2xl"
                style={gradientBorderStyle}
              >
                <div
                  className="relative w-full h-[180px] sm:h-[220px] md:h-[320px] lg:h-[420px] rounded-[1.25rem] md:rounded-[1.75rem] overflow-hidden"
                  style={{ backgroundColor: brandBlue }}
                >
                  <Image
                  src="/images/022.jpg"
                  alt="Saudi Shawaya plating and packaging"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 40vw, (max-width: 768px) 40vw, 35vw"
                  />
                </div>
              </div>
            </motion.div>

            {/* Bottom Right Image - Landscape/Rectangular Shape */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative col-span-3 md:col-span-7"
            >
              {/* Golden Gradient Border */}
              <div
                className="relative rounded-[1.5rem] md:rounded-[2rem] p-1 shadow-2xl"
                style={gradientBorderStyle}
              >
                <div
                  className="relative w-full h-[180px] sm:h-[220px] md:h-[320px] lg:h-[420px] rounded-[1.25rem] md:rounded-[1.75rem] overflow-hidden"
                  style={{ backgroundColor: brandBlue }}
                >
                  <Image
                  src="/images/ours2.jpg"
                  alt="Saudi Shawaya charcoal-roasted spread"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 60vw, (max-width: 768px) 60vw, 65vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}