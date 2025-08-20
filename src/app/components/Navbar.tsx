"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={
          `sticky top-0 z-50 w-full transition-all duration-300 px-4 sm:px-10 py-4 sm:py-6 flex items-center justify-between ` +
          (scrolled
            ? "bg-white/80 shadow-lg backdrop-blur-md rounded-b-2xl"
            : "bg-transparent")
        }
        style={{
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        {/* Background image */}
        <Image
          src="/arvcover.jpg"
          alt="Navbar Background"
          fill
          className="object-cover object-center absolute inset-0 z-0 opacity-60 blur-sm pointer-events-none select-none"
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-10 backdrop-blur-sm pointer-events-none" />
        {/* Navbar content */}
        <Link href="/" className="flex items-center gap-3 z-20 relative cursor-pointer">
          <Image src="/arvlogo.png" alt="Arvconstruction Logo" width={40} height={40} />
          <span className={`text-2xl font-semibold hidden md:inline ${scrolled ? "text-gray-900" : "text-white"}`}>ARV CONSTRUCTION</span>
        </Link>
        <div className="flex items-center gap-8 z-20 relative">
          <div className={`flex items-center gap-2 text-lg hidden lg:flex ${scrolled ? "text-gray-900" : "text-white"}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 0 0 7.48 19h9.04a2 2 0 0 0 1.83-1.3L21 13M7 13V6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v7" /></svg>
            <span className="border-r border-gray-300 pr-4 mr-4">+639270442529</span>
          </div>
          <button
            className={
              `flex items-center gap-2 font-medium px-6 py-2 rounded-full shadow transition ` +
              (scrolled
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-white text-gray-900 hover:bg-gray-100")
            }
            onClick={() => setSidebarOpen(true)}
          >
            <svg className={`w-6 h-6 ${scrolled ? "text-white" : "text-gray-900"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" /></svg>
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </nav>

      {/* Sidebar slider - MOVED OUTSIDE of <nav> */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setSidebarOpen(false)} />
          {/* Sidebar */}
          <aside className="relative bg-gray-900 text-white w-80 max-w-full h-full shadow-xl flex flex-col p-8 animate-slide-in-right">
            {/* Close button */}
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 text-2xl shadow hover:bg-gray-200 transition"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <nav className="flex flex-col gap-8 mt-20">
              <Link href="/" className="text-3xl font-semibold hover:text-emerald-400 transition" onClick={() => setSidebarOpen(false)}>Home</Link>
              <Link href="/properties" className="text-3xl font-semibold hover:text-emerald-400 transition" onClick={() => setSidebarOpen(false)}>Properties</Link>
              <Link href="/#testimonials" className="text-3xl font-semibold hover:text-emerald-400 transition" onClick={() => setSidebarOpen(false)}>Our Services</Link>
              <Link href="/contacts" className="text-3xl font-semibold hover:text-emerald-400 transition" onClick={() => setSidebarOpen(false)}>Contact</Link>
              <Link href="/#faqs" className="text-3xl font-semibold hover:text-emerald-400 transition" onClick={() => setSidebarOpen(false)}>FAQs</Link>
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <span className="text-gray-400 text-sm">Socials</span>
              <a href="https://www.facebook.com/profile.php?id=61557362060115" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition text-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                Facebook
              </a>
            </div>
          </aside>
        </div>
      )}

      {/* The style tag is also moved out to be a sibling */}
      <style jsx global>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}</style>
    </>
  );
}