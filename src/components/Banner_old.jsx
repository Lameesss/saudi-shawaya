"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { useState, useEffect } from "react";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const menuItems = [
    { id: 1, nameAr: "قهوة عربية", nameEn: "ARABIC COFFEE" },
    { id: 2, nameAr: "شاي كرك", nameEn: "KARAK TEA" },
    { id: 3, nameAr: "حلويات شرقية", nameEn: "EASTERN SWEETS" },
    { id: 4, nameAr: "شيشة فاخرة", nameEn: "PREMIUM SHISHA" },
    { id: 5, nameAr: "مأكولات تركية", nameEn: "TURKISH CUISINE" },
    { id: 6, nameAr: "تمر وقهوة", nameEn: "DATES & COFFEE" },
  ];

  const totalSlides = menuItems.length;

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section
      className="w-full py-12 lg:py-16 mt-8 lg:mt-12"
      style={{ backgroundColor: "#064c4c" }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-bold uppercase tracking-widest mb-8 lg:mb-12"
          style={{
            background:
              "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <span className="block text-lg mb-2" style={{ fontFamily: "serif" }}>
            نقدم لكم
          </span>
          <span className="block text-sm tracking-wider">WE SERVE</span>
        </motion.h2>

        {/* Brand Names - Desktop - Infinite Scroll */}
        <div className="hidden lg:block overflow-hidden relative">
          <motion.div
            animate={{ x: [0, -1400] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-8 xl:gap-12"
          >
            {/* First Set */}
            {/* ARABIC COFFEE */}
            <div className="flex-shrink-0">
              <div className="flex flex-col items-center text-center">
                <div
                  className="font-bold text-3xl mb-2"
                  style={{
                    fontFamily: "serif",
                    background:
                      "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  قهوة عربية
                </div>
                <div
                  className="font-black text-lg uppercase tracking-wider"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    background:
                      "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ARABIC COFFEE
                </div>
              </div>
            </div>

            {/* B!everages */}
            <div className="flex-shrink-0">
              <div
                className=" font-black text-5xl uppercase flex items-center"
                style={{
                  fontFamily: "Arial, sans-serif",
                  background:
                    "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <span className="text-6xl">B</span>
                <span className="text-4xl">!</span>
                <span className="text-3xl">everages</span>
              </div>
            </div>

            {/* EMC PREMIUM */}
            <div className="flex-shrink-0">
              <div
                className=" font-black text-4xl uppercase tracking-tight"
                style={{
                  fontFamily: "Arial, sans-serif",
                  background:
                    "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <span className="inline-block border-4 border-[#edb98a] px-2">
                  EMC{" "}
                </span>
                <span>PREMIUM</span>
              </div>
            </div>

            {/* CK BURGER */}
            <div className="flex-shrink-0">
              <div
                className=" font-black uppercase flex flex-col items-center leading-none"
                style={{
                  fontFamily: "Arial, sans-serif",
                  background:
                    "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <span className="text-7xl">C</span>
                <span className="text-6xl -mt-3">K</span>
                <span className="text-xs tracking-widest mt-1">BURGER</span>
              </div>
            </div>

            {/* MAC N CHEESE */}
            <div className="flex-shrink-0">
              <div
                className=" font-bold uppercase flex flex-col items-start leading-tight"
                style={{
                  fontFamily: "Arial, sans-serif",
                  background:
                    "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <div className="bg-white text-blue-800 px-3 py-1 text-lg font-black">
                  <span>MAC</span>
                </div>
                <div className="text-sm font-bold mt-1">
                  <span>N</span> <span className="text-xs">CHEESE</span>
                </div>
              </div>
            </div>

            {/* STARTERS */}
            <div className="flex-shrink-0">
              <div
                className=" font-black text-4xl uppercase"
                style={{
                  fontFamily: "Arial, sans-serif",
                  background:
                    "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                STARTERS
              </div>
            </div>

            {/* Duplicate Set for Seamless Loop */}
            {/* BEEF BUR */}
            <div className="flex-shrink-0">
              <div
                className=" font-black text-4xl uppercase"
                style={{
                  fontFamily: "Arial, sans-serif",
                  background:
                    "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                BEEF BUR
              </div>
            </div>

            {/* B!everages */}
            <div className="flex-shrink-0">
              <div
                className=" font-black text-5xl uppercase flex items-center"
                style={{
                  fontFamily: "Arial, sans-serif",
                  background:
                    "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <span className="text-6xl">B</span>
                <span className="text-4xl">!</span>
                <span className="text-3xl">everages</span>
              </div>
            </div>

            {/* EMC PREMIUM */}
            <div className="flex-shrink-0">
              <div
                className=" font-black text-4xl uppercase tracking-tight"
                style={{
                  fontFamily: "Arial, sans-serif",
                  background:
                    "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <span className="inline-block border-4 border-[#edb98a] px-2">
                  EMC{" "}
                </span>
                <span>PREMIUM</span>
              </div>
            </div>

            {/* CK BURGER */}
            <div className="flex-shrink-0">
              <div
                className=" font-black uppercase flex flex-col items-center leading-none"
                style={{
                  fontFamily: "Arial, sans-serif",
                  background:
                    "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <span className="text-7xl">C</span>
                <span className="text-6xl -mt-3">K</span>
                <span className="text-xs tracking-widest mt-1">BURGER</span>
              </div>
            </div>

            {/* MAC N CHEESE */}
            <div className="flex-shrink-0">
              <div
                className=" font-bold uppercase flex flex-col items-start leading-tight"
                style={{
                  fontFamily: "Arial, sans-serif",
                  background:
                    "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <div className="bg-white text-blue-800 px-3 py-1 text-lg font-black">
                  <span>MAC</span>
                </div>
                <div className="text-sm font-bold mt-1">
                  <span>N</span> <span className="text-xs">CHEESE</span>
                </div>
              </div>
            </div>

            {/* STARTERS */}
            <div className="flex-shrink-0">
              <div
                className=" font-black text-4xl uppercase"
                style={{
                  fontFamily: "Arial, sans-serif",
                  background:
                    "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                STARTERS
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand Names - Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative pt-4">
            {/* Carousel Container - Infinite scroll */}
            <div className="overflow-hidden relative">
              <motion.div
                animate={{ x: [0, -936] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-6"
              >
                {/* Page Six */}
                <div className="flex-shrink-0 w-[150px] flex items-center justify-center text-center">
                  <div
                    className=" font-black text-2xl uppercase"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      background:
                        "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    BEEF BUR
                  </div>
                </div>

                {/* E!NEWS */}
                <div className="flex-shrink-0 w-[150px] flex items-center justify-center text-center">
                  <div
                    className=" font-black uppercase flex items-center"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      background:
                        "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <span className="text-4xl">B</span>
                    <span className="text-2xl">!</span>
                    <span className="text-xl">everages</span>
                  </div>
                </div>

                {/* LA WEEKLY */}
                <div className="flex-shrink-0 w-[150px] flex items-center justify-center text-center">
                  <div
                    className=" font-black text-2xl uppercase tracking-tight"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      background:
                        "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <span className="inline-block border-2 border-[#edb98a] px-1">
                      EMC
                    </span>
                    <span>PREMIUM</span>
                  </div>
                </div>

                {/* US Weekly */}
                <div className="flex-shrink-0 w-[150px] flex items-center justify-center text-center">
                  <div
                    className=" font-black uppercase flex flex-col items-center leading-none"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      background:
                        "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <span className="text-4xl">C</span>
                    <span className="text-3xl -mt-2">K</span>
                    <span className="text-[8px] tracking-widest mt-1">
                      BURGER
                    </span>
                  </div>
                </div>

                {/* MAC N CHEESE */}
                <div className="flex-shrink-0 w-[150px] flex items-center justify-center text-center">
                  <div
                    className=" font-bold uppercase flex flex-col items-center leading-tight"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      background:
                        "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <div className="bg-white text-blue-800 px-2 py-0.5 text-sm font-black">
                      <span>MAC</span>
                    </div>
                    <div className="text-xs font-bold mt-1">
                      <span>N</span> <span className="text-[8px]">CHEESE</span>
                    </div>
                  </div>
                </div>

                {/* STARTERS */}
                <div className="flex-shrink-0 w-[150px] flex items-center justify-center text-center">
                  <div
                    className=" font-black text-2xl uppercase"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      background:
                        "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    STARTERS
                  </div>
                </div>

                {/* Duplicate items for seamless loop */}
                {/* BEEF BUR */}
                <div className="flex-shrink-0 w-[150px] flex items-center justify-center text-center">
                  <div
                    className=" font-black text-2xl uppercase"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      background:
                        "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    BEEF BUR
                  </div>
                </div>

                {/* B!everages */}
                <div className="flex-shrink-0 w-[150px] flex items-center justify-center text-center">
                  <div
                    className=" font-black uppercase flex items-center"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      background:
                        "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <span className="text-4xl">B</span>
                    <span className="text-2xl">!</span>
                    <span className="text-xl">everages</span>
                  </div>
                </div>

                {/* EMC PREMIUM */}
                <div className="flex-shrink-0 w-[150px] flex items-center justify-center text-center">
                  <div
                    className=" font-black text-2xl uppercase tracking-tight"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      background:
                        "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <span className="inline-block border-2 border-[#edb98a] px-1">
                      EMC
                    </span>
                    <span>PREMIUM</span>
                  </div>
                </div>

                {/* CK BURGER */}
                <div className="flex-shrink-0 w-[150px] flex items-center justify-center text-center">
                  <div
                    className=" font-black uppercase flex flex-col items-center leading-none"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      background:
                        "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <span className="text-4xl">C</span>
                    <span className="text-3xl -mt-2">K</span>
                    <span className="text-[8px] tracking-widest mt-1">
                      BURGER
                    </span>
                  </div>
                </div>

                {/* MAC N CHEESE */}
                <div className="flex-shrink-0 w-[150px] flex items-center justify-center text-center">
                  <div
                    className=" font-bold uppercase flex flex-col items-center leading-tight"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      background:
                        "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <div className="bg-white text-blue-800 px-2 py-0.5 text-sm font-black">
                      <span>MAC</span>
                    </div>
                    <div className="text-xs font-bold mt-1">
                      <span>N</span> <span className="text-[8px]">CHEESE</span>
                    </div>
                  </div>
                </div>

                {/* STARTERS */}
                <div className="flex-shrink-0 w-[150px] flex items-center justify-center text-center">
                  <div
                    className=" font-black text-2xl uppercase"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      background:
                        "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    STARTERS
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
