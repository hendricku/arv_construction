"use client";
import { motion, Variants } from "framer-motion";
// Importing a variety of icons from react-icons
import { 
  BsBuildings, 
  BsPencilSquare, 
  BsTools, 
  BsHouseGear 
} from "react-icons/bs";
import { 
  HiOutlineDocumentText, 
  HiOutlineClipboardCheck 
} from "react-icons/hi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa";

const services = [
  {
    icon: <BsPencilSquare />,
    title: "Structural & Architectural Consultation",
    description: "Expert advice and planning to lay the perfect foundation for your project.",
  },
  {
    icon: <IoColorPaletteOutline />,
    title: "Exterior & Interior Design w/ Rendering",
    description: "Visualize your project with detailed designs and realistic 3D renderings.",
  },
  {
    icon: <HiOutlineDocumentText />,
    title: "Full Set of Building Plans (Signed & Sealed)",
    description: "Official, ready-for-submission building plans, professionally signed and sealed.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Signed Bill of Materials",
    description: "A comprehensive and signed list of all materials required for your project.",
  },
  {
    icon: <BsHouseGear />,
    title: "As-Built Plans",
    description: "Creation of precise drawings that reflect the project as it has been constructed.",
  },
  {
    icon: <BsBuildings />,
    title: "Design and Build",
    description: "A seamless, end-to-end service taking your project from concept to completion.",
  },
  {
    icon: <BsTools />,
    title: "Repair and Renovation",
    description: "High-quality repair and renovation services to update or restore your property.",
  },
  {
    icon: <HiOutlineClipboardCheck />,
    title: "Permit & Occupancy Assistance",
    description: "We help you navigate the complexities of building permits and occupancy requirements.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};


export default function ServicesSection() {
  return (
    <section id="testimonials" className="w-full bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-emerald-400 font-semibold text-sm flex items-center justify-center gap-2 mb-3">
            <span className="w-4 h-4 bg-emerald-500 rounded-full"></span>
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">What We Offer</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            We provide a complete range of design and build services to bring your vision to life with quality and precision.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              className="bg-gray-800 p-6 rounded-xl flex flex-col items-center text-center h-full hover:bg-gray-700/50 hover:-translate-y-2 transition-all duration-300 shadow-lg"
              variants={itemVariants}
            >
              <div className="text-emerald-400 text-4xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}