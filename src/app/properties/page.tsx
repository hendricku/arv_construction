"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import categories from "../data/categories"; 
import Link from "next/link";
import { motion, Variants } from "framer-motion";
// Icons are no longer needed here if you don't update your data, but can be kept for future use
// import { FaBed, FaBath } from "react-icons/fa";
// import { BsArrowsFullscreen } from "react-icons/bs";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function PropertiesPage() {
  return (
    <div className="w-full min-h-screen bg-white bg-grid flex flex-col items-center">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* ======== PAGE HEADER ======== */}
        <motion.div 
          className="text-center mt-16 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="text-emerald-500 font-semibold text-sm flex items-center justify-center gap-2 mb-3">
            <span className="w-4 h-4 bg-emerald-500 rounded-full"></span>
            Properties
          </div>
          <h1 className="text-4xl font-bold mb-3 text-gray-900">
            Discover Inspiring Designed Homes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience elegance and comfort with our exclusive properties, designed for sophisticated living.
          </p>
        </motion.div>

        {/* ======== PROPERTIES GRID ======== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-16"
        >
          {categories.map((cat) => (
            <motion.div key={cat.slug} variants={itemVariants}>
              {/* FIX: Removed the redundant 'block' class */}
              <Link 
                href={`/categories/${cat.slug}`} 
                className="group bg-white rounded-2xl shadow hover:shadow-xl flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative w-full h-52 overflow-hidden">
                  <Image 
                    src={cat.img} 
                    alt={cat.title} 
                    fill 
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{cat.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{cat.address}</p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    {/* FIX: Reverted to your original data structure (d.title and d.desc) */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-700">
                      {cat.details?.map((d, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="font-semibold">{d.title}:</span>
                          <span>{d.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}