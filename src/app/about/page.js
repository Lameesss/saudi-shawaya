"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Image from "next/image";
import Link from "next/link";
import OurStory from "@/components/OurStory";

export default function About() {
  const premiumGradient = "var(--premium-gradient)";
  const premiumColor = "#fcb712";

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
    <main className="pt-20" style={{ backgroundColor: 'var(--bg-color)' }}>
      {/* OurStory Component */}
      <OurStory />

      {/* Our Story */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-1"
            >
              {/* Section Header */}
              <div className="mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-lg lg:text-xl font-light mb-4"
                  style={{
                    ...gradientTextStyle,
                    fontFamily: 'serif',
                  }}
                >
                  Our Story
                </motion.p>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl lg:text-5xl font-bold uppercase leading-[1.1] tracking-[0.15em] mb-6"
                  style={{
                    ...gradientTextStyle,
                    textShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  BANGALORE HERITAGE
                </motion.h2>

                {/* Animated Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 1.0 }}
                  className="w-24 h-0.5 mb-8 origin-left"
                  style={{ backgroundColor: premiumColor }}
                />
              </div>

              {/* Story Content */}
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base lg:text-lg leading-relaxed text-white"
                >
                  Saudi Shawaya began as a family grill concept inspired by the charcoal shawaya houses of Riyadh and Jeddah. When we brought the brand to Bangalore, we reimagined those flavors for the city’s vibrant food scene while protecting every spice blend and roasting ritual that defines true Saudi street grilling.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-base lg:text-lg leading-relaxed text-white"
                >
                  Today our Indiranagar flagship is where sizzling rotisseries, slow-brewed Arabic coffee, and contemporary design live together. Each shawaya platter, falooda, or specialty drink celebrates Saudi hospitality through the lens of Bangalore’s creative energy.
                </motion.p>
              </div>
            </motion.div>

            {/* Image with Premium Border */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:order-2 relative"
            >
              {/* Golden Gradient Border */}
              <div className="relative rounded-[2rem] p-1 shadow-2xl" style={gradientBorderStyle}>
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-[1.75rem] overflow-hidden" style={{ backgroundColor: "var(--bg-color)" }}>
                  <Image
                    src="/images/ours11.jpg"
                    alt="Saudi Shawaya Bangalore Grill Experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg lg:text-xl font-light mb-4"
              style={{
                ...gradientTextStyle,
                fontFamily: 'serif',
              }}
            >
              Our Craft
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl lg:text-5xl font-bold uppercase leading-[1.1] tracking-[0.15em] mb-6"
              style={{
                ...gradientTextStyle,
                textShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
              }}
            >
              SIGNATURE EXPERIENCES
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-32 h-0.5 mx-auto mb-6 origin-center"
              style={{ backgroundColor: premiumColor }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg lg:text-xl leading-relaxed text-white"
            >
              Discover the authentic tastes and experiences that define our premium Arabic cafe
            </motion.p>
          </motion.div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Arabic Coffee */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative group h-full"
            >
              {/* Golden Gradient Border */}
              <div className="relative rounded-[2rem] p-1 shadow-2xl" style={gradientBorderStyle}>
                <div className="relative p-8 lg:p-10 rounded-[1.75rem] text-center flex flex-col h-full" style={{ backgroundColor: "var(--bg-color)" }}>
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto" style={gradientBorderStyle}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--bg-color)" }}>
                      <svg className="w-8 h-8" style={{ color: premiumColor }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2,21V19H20V21H2M20,8V5L18,5V3A1,1 0 0,0 17,2H7A1,1 0 0,0 6,3V5H4V8A4,4 0 0,0 8,12H16A4,4 0 0,0 20,8Z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Arabic Title */}
                  <h3 className="text-lg lg:text-xl font-bold mb-2" style={{ ...gradientTextStyle, fontFamily: 'serif' }}>
                    Saudi Shawaya Grill
                  </h3>

                  {/* English Title */}
                  <h4 className="text-xl lg:text-2xl font-bold uppercase tracking-wider mb-4" style={gradientTextStyle}>
                    CHARCOAL SHAWAYA
                  </h4>

                  {/* Description */}
                  <p className="text-white leading-relaxed mt-auto">
                    Fire-roasted whole birds marinated with Saudi spice rubs, crisped over charcoal, and plated with fragrant rice, tangy dips, and Bangalore-grown herbs for a fresh finish.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Premium Pastries */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group h-full"
            >
              {/* Golden Gradient Border */}
              <div className="relative rounded-[2rem] p-1 shadow-2xl" style={gradientBorderStyle}>
                <div className="relative p-8 lg:p-10 rounded-[1.75rem] text-center flex flex-col h-full" style={{ backgroundColor: "var(--bg-color)" }}>
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto" style={gradientBorderStyle}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--bg-color)" }}>
                      <svg className="w-8 h-8" style={{ color: premiumColor }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 3h8l-1.2 13.2A3.8 3.8 0 0 1 11 20h2a3.8 3.8 0 0 1-3.8-3.8L8 3Zm2 0V1h4v2h-4Zm6 5H8l.2 2h7.6l.2-2Zm-7.4 4 .2 2.2A1.8 1.8 0 0 0 10.8 18h2.4a1.8 1.8 0 0 0 1.8-1.8L15.2 12H8.6Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Arabic Title */}
                  <h3 className="text-lg lg:text-xl font-bold mb-2" style={{ ...gradientTextStyle, fontFamily: 'serif' }}>
                    Signature Coolers
                  </h3>

                  {/* English Title */}
                  <h4 className="text-xl lg:text-2xl font-bold uppercase tracking-wider mb-4" style={gradientTextStyle}>
                    <span className="block">SAUDI</span>
                    <span className="block">MOCKTAILS</span>
                  </h4>

                  {/* Description */}
                  <p className="text-white leading-relaxed mt-auto">
                    Refreshing mojitos, falooda-inspired specials, and tropical blends built for Bangalore’s evenings, all layered with house-made syrups and premium fruit purees.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Luxury Atmosphere */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group h-full"
            >
              {/* Golden Gradient Border */}
              <div className="relative rounded-[2rem] p-1 shadow-2xl" style={gradientBorderStyle}>
                <div className="relative p-8 lg:p-10 rounded-[1.75rem] text-center flex flex-col h-full" style={{ backgroundColor: "var(--bg-color)" }}>
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto" style={gradientBorderStyle}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--bg-color)" }}>
                      <svg className="w-8 h-8" style={{ color: premiumColor }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Arabic Title */}
                  <h3 className="text-lg lg:text-xl font-bold mb-2" style={{ ...gradientTextStyle, fontFamily: 'serif' }}>
                    Community Table
                  </h3>

                  {/* English Title */}
                  <h4 className="text-xl lg:text-2xl font-bold uppercase tracking-wider mb-4" style={gradientTextStyle}>
                    BANGALORE EXPERIENCE
                  </h4>

                  {/* Description */}
                  <p className="text-white leading-relaxed mt-auto">
                    A warm, multi-sensory space where Bangalore’s creative crowd gathers for weekend brunches, late-night shawaya cravings, or celebratory feasts anchored in Saudi hospitality.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Hero Quote */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl lg:text-2xl font-light italic mb-12 text-white"
              style={{ opacity: 0.9 }}
            >
              “Where Saudi shawaya heritage meets Bangalore creativity.”
            </motion.p>

            {/* Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                href="/menu"
                className="group relative inline-block px-12 py-4 text-sm font-bold uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden"
                style={{
                  border: "2px solid rgba(252, 183, 18, 0.4)",
                  color: premiumColor,
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = premiumColor;
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
                    background: premiumGradient,
                  }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
