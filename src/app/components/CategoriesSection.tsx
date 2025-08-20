"use client";
import Image from "next/image";
// Import the 'Variants' type from framer-motion
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import categories from "../data/categories";
import { HiArrowRight } from "react-icons/hi";

// Add the `: Variants` type annotation here
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

// And also add it here
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function CategoriesSection() {
  return (
    <section className="w-full max-w-6xl mx-auto mt-20 px-4">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* ======== LEFT COLUMN: TEXT CONTENT ======== */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <motion.span
            className="text-emerald-500 font-semibold text-sm flex items-center gap-2 justify-center lg:justify-start mb-3"
            variants={itemVariants}
          >
            <span className="w-4 h-4 bg-emerald-500 rounded-full"></span>
            Our Expertise
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4"
            variants={itemVariants}
          >
            Build Your Vision,
            <br />
            We Handle the Rest.
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8"
            variants={itemVariants}
          >
            From residential homes to commercial structures, we deliver
            unmatched quality and expert service for every project.
          </motion.p>
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={itemVariants}
          >
            <Link href="/properties">
              <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg">
                View Our Work
                <HiArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* ======== RIGHT COLUMN: IMAGE GALLERY ======== */}
        <div className="w-full h-full">
          <motion.div
            className="grid grid-cols-2 grid-rows-2 gap-4 h-[450px] md:h-[500px]"
            variants={containerVariants}
          >
            {/* Main Large Image */}
            <motion.div
              className="col-span-2 row-span-1 rounded-2xl overflow-hidden group relative cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <Link href={`/categories/${categories[0].slug}`}>
                <Image
                  src={categories[0].img}
                  alt={categories[0].title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl drop-shadow-md">{categories[0].title}</h3>
                  <p className="text-sm text-gray-200 drop-shadow-md">{categories[0].desc}</p>
                </div>
              </Link>
            </motion.div>

            {/* Two Smaller Images */}
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <Link href={`/categories/${categories[i].slug}`}>
                  <Image
                    src={categories[i].img}
                    alt={categories[i].title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                   <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="font-semibold text-md drop-shadow-md">{categories[i].title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}