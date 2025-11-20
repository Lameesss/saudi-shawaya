"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Lock body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isOpen]);

  const premiumGradient = "var(--premium-gradient)";
  const premiumColor = "#fcb712";
  const navBackgroundGradient =
    "linear-gradient(135deg, rgba(0, 60, 197, 0.97) 0%, rgba(0, 60, 197, 0.99) 50%, rgba(0, 60, 197, 0.97) 100%)";

  const navItems = [
    {  nameEn: "Home", href: "/" },
    {  nameEn: "Menu", href: "/menu" },
    {  nameEn: "About", href: "/about" },
    {  nameEn: "Contact", href: "/contact" },
  ];

  //  const navItems = [
  //   { name: "الرئيسية", nameEn: "Home", href: "/" },
  //   { name: "القائمة", nameEn: "Menu", href: "/menu" },
  //   { name: "عنا", nameEn: "About", href: "/about" },
  //   { name: "تواصل", nameEn: "Contact", href: "/contact" },
  // ];

  const showBg = !isHomePage || isScrolled || isOpen;

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          background: showBg 
            ? navBackgroundGradient
            : "transparent",
          backdropFilter: showBg ? 'blur(25px) saturate(180%)' : 'none',
          borderBottom: showBg 
            ? '2px solid rgba(252, 183, 18, 0.4)' 
            : 'none',
          boxShadow: showBg 
            ? '0 10px 40px rgba(0, 0, 0, 0.15)' 
            : 'none'
        }}
      >
        {/* Premium Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        </div>

        <div className="relative w-full px-6 lg:px-8 overflow-hidden">
          <div className="flex items-center h-16 sm:h-18 lg:h-20">
            
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="relative h-16 sm:h-18 lg:h-24 w-auto"
                >
                  <Image
                    src="/images/logo.png"
                    alt="World Cup Cafe Logo"
                    width={240}
                    height={96}
                    className="h-full w-auto object-contain"
                    priority
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Premium Style - Centered */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex items-center space-x-8 xl:space-x-10 absolute left-1/2 transform -translate-x-1/2"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="group relative flex flex-col items-center py-3 px-4 transition-all duration-300"
                  >
                    {/* Arabic Text */}
                    <span 
                      className="text-base font-semibold mb-1 group-hover:scale-105 transition-all duration-300"
                      style={
                        pathname === item.href
                          ? {
                              background: premiumGradient,
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                              opacity: 1,
                            }
                          : {
                              color: "var(--text-color)",
                              opacity: 0.85,
                            }
                      }
                    >
                      {item.name}
                    </span>
                    
                    {/* English Text */}
                    <span 
                      className="text-xs font-bold uppercase tracking-wider group-hover:scale-105 transition-all duration-300"
                      style={
                        pathname === item.href
                          ? {
                              background: premiumGradient,
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                              opacity: 0.9,
                            }
                          : {
                              color: "var(--text-color)",
                              opacity: 0.6,
                            }
                      }
                    >
                      {item.nameEn}
                    </span>

                    {/* Active Indicator */}
                    <motion.div 
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 rounded-full"
                      style={{
                        width: pathname === item.href ? '100%' : '0%',
                        height: '3px',
                        background: premiumGradient
                      }}
                      animate={{
                        width: pathname === item.href ? '100%' : '0%'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side Actions */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-3 ml-auto"
            >
              {/* Premium Reservation Button - Desktop */}
              <div className="hidden lg:block">
                <Link
                  href="/contact"
                  className="group relative inline-flex flex-col items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-500 rounded-full overflow-hidden whitespace-nowrap"
                  style={{
                    background: premiumGradient,
                    color: 'var(--bg-color)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(252, 183, 18, 0.2)',
                    minWidth: '110px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-1px) scale(1.03)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
                    e.target.style.background = 'linear-gradient(135deg, #ffd970 0%, #fcb712 30%, #ffd970 70%, #fcb712 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                    e.target.style.background = premiumGradient;
                  }}
                >
                  {/* Arabic Text */}
                  {/* <span className="relative z-10 text-xs font-bold leading-tight">احجز طاولة</span> */}
                  {/* English Text */}
                  <span className="relative z-10 text-[10px] font-semibold opacity-85 mt-0.5 leading-tight tracking-wide">RESERVE</span>
                </Link>
              </div>

              {/* Premium Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-12 h-12 sm:w-14 sm:h-14 flex flex-col items-center justify-center transition-all duration-300 group flex-shrink-0"
                style={{
                  background: 'transparent',
                  border: 'none',
                  boxShadow: 'none'
                }}
              >
                {/* Hamburger Lines with Premium Animation */}
                <motion.div
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 sm:w-6 sm:h-0.5 rounded-full transition-all duration-300"
                  style={{ background: premiumGradient }}
                />
                <motion.div
                  animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                  className="w-5 h-0.5 sm:w-6 sm:h-0.5 rounded-full mt-1.5 transition-all duration-300"
                  style={{ background: premiumGradient }}
                />
                <motion.div
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 sm:w-6 sm:h-0.5 rounded-full mt-1.5 transition-all duration-300"
                  style={{ background: premiumGradient }}
                />
                
              </button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden fixed inset-0 z-40 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 60, 197, 0.98) 0%, rgba(0, 60, 197, 0.95) 100%)',
              backdropFilter: 'blur(25px) saturate(180%)',
              borderBottom: '2px solid rgba(252, 183, 18, 0.4)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
            }}
          >
            {/* Decorative Top Line */}
            <div 
              className="h-px"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(252, 183, 18, 0.8) 20%, rgba(255, 217, 112, 0.8) 50%, rgba(252, 183, 18, 0.8) 80%, transparent 100%)'
              }}
            />

            <div className="flex flex-col h-full pt-20 pb-8 px-6 justify-center">
              {/* Navigation Links */}
              <div className="space-y-2 mb-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between py-5 px-6 rounded-xl transition-all duration-300"
                    style={{
                      background: 'transparent',
                      border: '2px solid transparent'
                    }}
                  >
                    <div className="flex flex-col">
                      <span 
                        className="text-xl font-semibold group-hover:scale-105 transition-transform duration-300"
                        style={
                          pathname === item.href
                            ? {
                                background: premiumGradient,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }
                            : {
                                color: "var(--text-color)",
                              }
                        }
                      >
                        {item.name}
                      </span>
                      <span 
                        className="text-sm font-bold uppercase tracking-wider opacity-70 mt-1"
                        style={{ color: 'var(--text-color)' }}
                      >
                        {item.nameEn}
                      </span>
                    </div>
                    
                    {/* Arrow Icon */}
                    <svg 
                      className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" 
                      style={{ color: premiumColor }} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <defs>
                        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#fcb712" />
                          <stop offset="30%" stopColor="#ffd970" />
                          <stop offset="70%" stopColor="#e39b00" />
                          <stop offset="100%" stopColor="#fcb712" />
                        </linearGradient>
                      </defs>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="url(#arrowGradient)" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              {/* Mobile Reservation Button */}
              <div className="px-8">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group relative inline-flex flex-col items-center justify-center w-full py-4 px-6 rounded-2xl font-bold uppercase tracking-wider transition-all duration-500 overflow-hidden"
                  style={{
                    background: premiumGradient,
                    color: 'var(--bg-color)',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                    border: '2px solid rgba(252, 183, 18, 0.3)'
                  }}
                  onTouchStart={(e) => {
                    e.target.style.transform = 'scale(0.98)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5)';
                  }}
                  onTouchEnd={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
                  }}
                >
                  {/* Arabic Text */}
                  {/* <span className="relative z-10 text-lg font-bold leading-tight">احجز طاولة</span> */}
                  {/* English Text */}
                  <span className="relative z-10 text-sm font-semibold opacity-90 mt-1 leading-tight tracking-wide">RESERVE YOUR TABLE</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
