"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const premiumGradient = "var(--premium-gradient)";
  const premiumColor = "#fcb712";

  return (
    <main className="pt-16" style={{ backgroundColor: 'var(--bg-color)' }}>
      {/* Hero Section with elegant design */}
      <section className="text-white py-24 lg:py-36 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-color)' }}>
        {/* Subtle radial gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-yellow-500/5 via-transparent to-transparent opacity-30" />
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-8"
          >
            {/* Top decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-px mx-auto"
              style={{
                background: `linear-gradient(to right, transparent, ${premiumColor}, transparent)`
              }}
            />

            <div className="space-y-4">
              <p 
                className="text-[10px] tracking-[0.5em] uppercase font-light"
                style={{ 
                  color: premiumColor,
                  fontFamily: 'serif'
                }}
              >
                connect with saudi shawaya
              </p>
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light uppercase tracking-wide"
                style={{
                  background: premiumGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Get In Touch
              </h1>
            </div>

            <p className="text-base lg:text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
              Visit our flagship grill in Madiwala, Bangalore for fire-roasted shawaya, refreshing mocktails, and true Saudi hospitality from lunch to late night.
            </p>

            {/* Bottom decorative element */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-3 pt-4"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent" style={{ background: `linear-gradient(to right, transparent, ${premiumColor})` }} />
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: premiumColor }} />
              <div className="w-12 h-px bg-gradient-to-l from-transparent" style={{ background: `linear-gradient(to left, transparent, ${premiumColor})` }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            
            {/* Contact Information - Sophisticated card design */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="space-y-10">
                <div>
                  <p 
                    className="text-[10px] tracking-[0.4em] uppercase font-light mb-4"
                    style={{ 
                      color: premiumColor,
                      fontFamily: 'serif'
                    }}
                  >
                    contact details
                  </p>
                  <h2 
                    className="text-3xl lg:text-4xl font-light uppercase tracking-wide"
                    style={{
                      background: premiumGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Contact <span>Bangalore</span>
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {/* Address Card */}
                  <div className="group relative">
                    <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-yellow-500 via-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to bottom, ${premiumColor}, rgba(252, 183, 18, 0.5), transparent)` }} />
                    <div className="pl-6 space-y-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 border flex items-center justify-center" style={{ borderColor: "rgba(252, 183, 18, 0.3)" }}>
                          <svg className="w-4 h-4" style={{ color: premiumColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xs tracking-[0.3em] uppercase font-light" style={{ color: premiumColor }}>Location</h3>
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed font-light">
                        Saudi Shawaya Bangalore<br />
                        12th Main, BTM LAYOUT 2nd Stage<br />
                        Madiwala, Bengaluru 560008<br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="group relative">
                    <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-yellow-500 via-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to bottom, ${premiumColor}, rgba(252, 183, 18, 0.5), transparent)` }} />
                    <div className="pl-6 space-y-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 border flex items-center justify-center" style={{ borderColor: "rgba(252, 183, 18, 0.3)" }}>
                          <svg className="w-4 h-4" style={{ color: premiumColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <h3 className="text-xs tracking-[0.3em] uppercase font-light" style={{ color: premiumColor }}>Phone</h3>
                      </div>
                      <p className="text-sm text-white/80 font-light">+91 804 123 7788</p>
                      <p className="text-sm text-white/80 font-light">+91 9108 555 222 (WhatsApp)</p>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="group relative">
                    <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-yellow-500 via-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to bottom, ${premiumColor}, rgba(252, 183, 18, 0.5), transparent)` }} />
                    <div className="pl-6 space-y-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 border flex items-center justify-center" style={{ borderColor: "rgba(252, 183, 18, 0.3)" }}>
                          <svg className="w-4 h-4" style={{ color: premiumColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xs tracking-[0.3em] uppercase font-light" style={{ color: premiumColor }}>Email</h3>
                      </div>
                      <p className="text-sm text-white/80 font-light">hello@saudishawaya.in</p>
                      <p className="text-sm text-white/80 font-light">events@saudishawaya.in</p>
                    </div>
                  </div>

                  {/* Working Hours Card */}
                  <div className="group relative">
                    <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-yellow-500 via-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to bottom, ${premiumColor}, rgba(252, 183, 18, 0.5), transparent)` }} />
                    <div className="pl-6 space-y-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 border flex items-center justify-center" style={{ borderColor: "rgba(252, 183, 18, 0.3)" }}>
                          <svg className="w-4 h-4" style={{ color: premiumColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xs tracking-[0.3em] uppercase font-light" style={{ color: premiumColor }}>Hours</h3>
                      </div>
                      <p className="text-sm text-white/80 font-light">Monday - Thursday: 12:00 PM - 11:00 PM</p>
                      <p className="text-sm text-white/80 font-light">Friday - Sunday: 12:00 PM - 12:30 AM</p>
                      <p className="text-sm text-white/80 font-light">Brunch Weekends: 11:00 AM - 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Modern glass morphism design */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative backdrop-blur-sm bg-white/[0.02] border border-white/10 p-8 lg:p-10">
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r" style={{ borderColor: "rgba(252, 183, 18, 0.2)" }} />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l" style={{ borderColor: "rgba(252, 183, 18, 0.2)" }} />

                <div className="space-y-8">
                  <div>
                    <p 
                      className="text-[10px] tracking-[0.4em] uppercase font-light mb-4"
                    style={{ 
                      color: premiumColor,
                      fontFamily: 'serif'
                    }}
                  >
                    send a note
                  </p>
                    <h2 
                      className="text-3xl lg:text-4xl font-light uppercase tracking-wide"
                    style={{
                      background: premiumGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    >
                      Send <span>Message</span>
                    </h2>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-[10px] tracking-[0.3em] uppercase font-light mb-3" style={{ color: "rgba(252, 183, 18, 0.7)" }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-0 py-3 bg-transparent border-b text-white text-sm font-light placeholder:text-white/30 focus:outline-none transition-colors duration-500"
                        style={{ 
                          borderBottomColor: "rgba(255, 255, 255, 0.2)",
                        }}
                        onFocus={(e) => e.target.style.borderBottomColor = premiumColor}
                        onBlur={(e) => e.target.style.borderBottomColor = "rgba(255, 255, 255, 0.2)"}
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="email" className="block text-[10px] tracking-[0.3em] uppercase font-light mb-3" style={{ color: "rgba(252, 183, 18, 0.7)" }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-0 py-3 bg-transparent border-b text-white text-sm font-light placeholder:text-white/30 focus:outline-none transition-colors duration-500"
                        style={{ 
                          borderBottomColor: "rgba(255, 255, 255, 0.2)",
                        }}
                        onFocus={(e) => e.target.style.borderBottomColor = premiumColor}
                        onBlur={(e) => e.target.style.borderBottomColor = "rgba(255, 255, 255, 0.2)"}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="phone" className="block text-[10px] tracking-[0.3em] uppercase font-light mb-3" style={{ color: "rgba(252, 183, 18, 0.7)" }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-0 py-3 bg-transparent border-b text-white text-sm font-light placeholder:text-white/30 focus:outline-none transition-colors duration-500"
                        style={{ 
                          borderBottomColor: "rgba(255, 255, 255, 0.2)",
                        }}
                        onFocus={(e) => e.target.style.borderBottomColor = premiumColor}
                        onBlur={(e) => e.target.style.borderBottomColor = "rgba(255, 255, 255, 0.2)"}
                        placeholder="+971 XXX XXX XXXX"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="subject" className="block text-[10px] tracking-[0.3em] uppercase font-light mb-3" style={{ color: "rgba(252, 183, 18, 0.7)" }}>
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-0 py-3 bg-transparent border-b text-white text-sm font-light placeholder:text-white/30 focus:outline-none transition-colors duration-500"
                        style={{ 
                          borderBottomColor: "rgba(255, 255, 255, 0.2)",
                        }}
                        onFocus={(e) => e.target.style.borderBottomColor = premiumColor}
                        onBlur={(e) => e.target.style.borderBottomColor = "rgba(255, 255, 255, 0.2)"}
                        placeholder="Private dining, catering, collaborations..."
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-[10px] tracking-[0.3em] uppercase font-light mb-3" style={{ color: "rgba(252, 183, 18, 0.7)" }}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-0 py-3 bg-transparent border-b text-white text-sm font-light placeholder:text-white/30 focus:outline-none transition-colors duration-500 resize-none"
                        style={{ 
                          borderBottomColor: "rgba(255, 255, 255, 0.2)",
                        }}
                        onFocus={(e) => e.target.style.borderBottomColor = premiumColor}
                        onBlur={(e) => e.target.style.borderBottomColor = "rgba(255, 255, 255, 0.2)"}
                        placeholder="Share your thoughts or event details..."
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="group relative w-full border py-4 font-light text-xs tracking-[0.3em] uppercase transition-all duration-500 overflow-hidden"
                        style={{ 
                          borderColor: "rgba(252, 183, 18, 0.3)",
                          color: premiumColor
                        }}
                        onMouseEnter={(e) => e.target.style.borderColor = premiumColor}
                        onMouseLeave={(e) => e.target.style.borderColor = "rgba(252, 183, 18, 0.3)"}
                      >
                        <span className="relative z-10 group-hover:text-black transition-colors duration-500">Send Message</span>
                        <div 
                          className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                          style={{
                            background: premiumGradient,
                          }}
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Elegant placeholder */}
      <section className="relative h-96 border-t border-white/10 overflow-hidden" style={{ backgroundColor: 'var(--bg-color)' }}>
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r" style={{ borderColor: premiumColor }} />
            ))}
          </div>
        </div>

        <div className="relative w-full h-full flex flex-col items-center justify-center text-white space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <div className="w-16 h-16 mx-auto border flex items-center justify-center" style={{ borderColor: "rgba(252, 183, 18, 0.3)" }}>
              <svg className="w-8 h-8" style={{ color: premiumColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-xs tracking-[0.3em] uppercase font-light" style={{ color: premiumColor }}>
              Visit Our Bangalore Location
            </p>
            <p className="text-sm text-white/60 font-light">
              Madiwala, Bengaluru
            </p>
          </motion.div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t border-l" style={{ borderColor: "rgba(252, 183, 18, 0.1)" }} />
          <div className="absolute top-0 right-0 w-32 h-32 border-t border-r" style={{ borderColor: "rgba(252, 183, 18, 0.1)" }} />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l" style={{ borderColor: "rgba(252, 183, 18, 0.1)" }} />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r" style={{ borderColor: "rgba(252, 183, 18, 0.1)" }} />
        </div>
      </section>
    </main>
  );
}
