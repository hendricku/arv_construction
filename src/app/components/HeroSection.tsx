"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

// Variants for staggered animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // A smoother ease
  },
};

const dividerVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "8rem", // 128px
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1 }
  }
}

export default function HeroSection() {
  return (
    <section className="relative h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/arvcovertwo.png"
        alt="Modern architectural design"
        fill
        className="object-cover object-center pointer-events-none select-none"
        priority
        quality={100}
      />
      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-10"></div>
      
      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center max-w-5xl w-full mx-auto text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          className="text-emerald-300 font-semibold uppercase tracking-widest text-sm mb-4"
          variants={itemVariants}
        >
          Building Excellence in San Fernando, La Union
        </motion.span>
        
        <motion.h1 
          className="text-white font-black tracking-tighter mb-4 drop-shadow-lg text-5xl md:text-8xl"
          variants={itemVariants}
        >
          Design & Build
        </motion.h1>

        {/* Animated Divider */}
        <motion.div 
          className="h-1 bg-emerald-500 rounded-full mb-6"
          variants={dividerVariants}
        ></motion.div>
        
        <motion.p 
          className="text-gray-200 text-lg md:text-xl font-medium mb-10 max-w-2xl"
          variants={itemVariants}
        >
          From concept to completion, we transform your vision into reality with precision, quality, and passion.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          variants={itemVariants}
        >
          <Link href="/contacts">
            <button className="flex items-center justify-center gap-2 bg-emerald-500 text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-transform hover:bg-emerald-600 hover:scale-105 ease-in-out">
              Contact Us
              <HiArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <Link href="/properties">
            <button className="bg-white/10 border border-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3.5 rounded-full shadow transition hover:bg-white/20">
              Our Projects
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}