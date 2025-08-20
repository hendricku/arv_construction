"use client";
import React, { useState } from "react";
// Import the 'Variants' type from framer-motion
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What services does your design and build company offer?",
    answer:
      "We provide end-to-end solutions including architectural design, engineering, project management, and construction for residential, commercial, and institutional projects.",
  },
  {
    question: "How does the design and build process work?",
    answer:
      "Our process starts with a consultation to understand your needs, followed by design development, budgeting, permitting, and then construction. We manage every step to ensure a seamless experience.",
  },
  {
    question: "Can I make changes to the design during construction?",
    answer:
      "Yes, we encourage client collaboration. Minor changes can often be accommodated, and we’ll always communicate any impact on the timeline or budget beforehand.",
  },
  {
    question: "What is the typical timeline for a project?",
    answer:
      "Timelines vary greatly depending on the project's scope, complexity, and permitting requirements. After our initial consultation and design phase, we provide a detailed project schedule.",
  },
];

const images = [
  "/arvcover.jpg",
  "/NewRegional1.jpg",
  "/ResidentialCare2.jpg",
  "/court2.jpg",
];

// Add the `: Variants` type annotation here
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

// And also add it here
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0); // Default first item to be open

  return (
    <section id="faqs" className="w-full bg-gray-50/70 py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
      >
        {/* Left: Asymmetrical Images grid */}
        <motion.div className="grid grid-cols-2 gap-4 h-full" variants={itemVariants}>
          <div className="grid gap-4">
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src={images[0]} alt="FAQ visual 1" width={400} height={300} className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src={images[2]} alt="FAQ visual 3" width={400} height={300} className="h-full w-full object-cover" />
            </motion.div>
          </div>
          <div className="grid gap-4 mt-8">
             <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src={images[1]} alt="FAQ visual 2" width={400} height={300} className="h-full w-full object-cover" />
            </motion.div>
             <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src={images[3]} alt="FAQ visual 4" width={400} height={300} className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Right: FAQ content */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-4 bg-emerald-500 rounded-full"></span>
            <span className="font-semibold text-emerald-600">FAQs</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl">
            We know that building or renovating can be overwhelming. Here are some common questions to help guide you through our process.
          </p>
          <div className="flex flex-col border-t border-gray-200">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 py-2">
                <button
                  className="w-full flex justify-between items-center py-5 text-lg font-medium text-left text-gray-800 hover:text-emerald-600 focus:outline-none transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className={`${open === i ? "text-emerald-600" : ""}`}>{faq.question}</span>
                  {/* Plus/Minus Icon */}
                  <div className="w-6 h-6 flex-shrink-0 relative">
                    <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0.5 w-4 bg-current transition-transform duration-300 ${open === i ? "rotate-90" : "rotate-0"}`}></span>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0.5 w-4 bg-current rotate-90"></span>
                  </div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <p className="pt-2 pb-5 pr-6 text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}