
"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, { y: "0%", duration: 0.6, ease: "power4.out" });
      gsap.fromTo(".mobile-link", { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, delay: 0.2, duration: 0.4 });
    } else {
      gsap.to(menuRef.current, { y: "-100%", duration: 0.6, ease: "power4.in" });
    }
  }, { scope: containerRef, dependencies: [menuOpen] });

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "FACILITIES", path: "/facilities" },
    { name: "TRAINERS", path: "/trainers" },
    { name: "MEMBERSHIP", path: "/membership" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div ref={containerRef} className="flex justify-center w-full">
      {/* 
         DESKTOP: Floating Pill Style (MacBook Dock)
         MOBILE: Fixed Top Full Width
      */}
      <nav 
        className={`
          fixed z-[100] transition-all duration-500 flex justify-between items-center
          md:top-6 md:rounded-full md:px-8 md:py-3 md:w-auto md:min-w-[600px] md:border md:border-white/10
          top-0 w-full px-6 py-4 border-b border-white/5 md:border-b-0
          ${scrolled ? "bg-black/80 backdrop-blur-xl shadow-2xl shadow-brand/5" : "bg-black/50 backdrop-blur-md md:bg-black/40"}
        `}
      >
        <Link href="/" className="text-2xl font-display font-bold italic tracking-tighter z-[101] relative text-white mix-blend-difference">
          IRON <span className="text-brand">CLAD</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400 mx-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className={`hover:text-brand transition-colors ${pathname === link.path ? "text-white" : ""}`}>
              {link.name}
            </Link>
          ))}
        </div>

        <Link href="/membership" className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-brand transition-all tracking-wide">
          JOIN NOW
        </Link>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden z-[101] text-white text-2xl relative">
          {menuOpen ? <i className="ri-close-line text-black"></i> : <i className="ri-menu-4-line"></i>}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div ref={menuRef} className="fixed inset-0 bg-brand z-[99] flex flex-col justify-center items-center -translate-y-full md:hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.path} onClick={() => setMenuOpen(false)} className="mobile-link text-5xl font-display font-bold text-black mb-6 hover:text-white uppercase italic tracking-tighter opacity-0">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}