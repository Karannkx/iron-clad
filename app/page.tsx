"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "@/components/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  const heroImgRef = useRef(null);

  useGSAP(() => {
    gsap.to(heroImgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true }
    });
    gsap.from(".bento-item", {
      scrollTrigger: { trigger: "#bento", start: "top 85%" },
      y: 100, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out"
    });
  }, { scope: container });

  const galleryImages = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470",
    "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469"
  ];

  // Fixed User Images for Testimonials
  const userImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
  ];

  return (
    <main ref={container} className="min-h-screen overflow-hidden bg-dark text-white">

      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div ref={heroImgRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470" alt="Hero" fill className="object-cover opacity-50" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/80"></div>
        <div className="relative z-10 text-center px-4 w-full max-w-5xl flex flex-col items-center">
          <h2 className="text-brand font-bold tracking-[0.3em] mb-4 text-sm md:text-xl animate-pulse">WELCOME TO THE FUTURE</h2>
          <div className="mb-8">
             <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase italic leading-[0.9] text-white">
                REDEFINE <br /> <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px white" }}>STRENGTH</span>
             </h1>
          </div>
          <Link href="/membership">
            <button className="group relative px-8 py-4 bg-brand text-black font-display font-bold text-xl skew-x-[-10deg] hover:skew-x-0 transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(209,240,0,0.4)]">
              <span className="relative z-10 flex items-center gap-2">START TRAINING <i className="ri-arrow-right-up-line"></i></span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>
          </Link>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-brand py-4 overflow-hidden rotate-1 scale-105 border-y-4 border-black relative z-20">
        <div className="whitespace-nowrap flex gap-8 animate-marquee text-black font-display font-bold text-2xl md:text-4xl">
            <span>NO PAIN NO GAIN</span> • <span>PUSH YOUR LIMITS</span> • <span>BE UNSTOPPABLE</span> • <span>IRON CLAD</span> • 
            <span>NO PAIN NO GAIN</span> • <span>PUSH YOUR LIMITS</span> • <span>BE UNSTOPPABLE</span> • <span>IRON CLAD</span> •
        </div>
      </div>

      {/* BENTO GRID */}
      <section id="bento" className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="mb-12">
            <AnimatedTitle title="OUR FACILITIES" className="text-4xl md:text-6xl font-display font-bold mb-2 text-white" />
            <p className="text-neutral-400 max-w-xl">World class equipment designed for elite performance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-4">
            <div className="bento-item col-span-1 md:col-span-2 row-span-2 relative group rounded-3xl overflow-hidden bg-card border border-neutral-800">
                <Image src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470" alt="Weights" fill className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-0 p-8 bg-gradient-to-t from-black/90 to-transparent w-full">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white">FREE WEIGHTS</h3>
                    <p className="text-brand mt-2 font-bold">OLYMPIC STANDARD</p>
                </div>
            </div>
            <div className="bento-item col-span-1 row-span-2 bg-card border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between group hover:border-brand transition-colors relative overflow-hidden">
                <div className="z-10">
                    <i className="ri-heart-pulse-fill text-5xl text-brand mb-4 block"></i>
                    <h3 className="text-2xl font-display font-bold text-white">CARDIO THEATER</h3>
                </div>
                <Image src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1374" alt="Cardio" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>
            <div className="bento-item col-span-1 bg-brand rounded-3xl p-6 flex flex-col justify-center text-black relative overflow-hidden group">
                <i className="ri-time-line absolute -right-6 -bottom-6 text-9xl opacity-20 group-hover:rotate-12 transition-transform text-black"></i>
                <h3 className="font-display font-bold text-4xl z-10 text-black">OPEN 24/7</h3>
                <p className="font-bold z-10 text-black">NO EXCUSES</p>
            </div>
            <div className="bento-item col-span-1 rounded-3xl overflow-hidden relative group">
                 <Image src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469" alt="Detail" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="bento-item col-span-1 md:col-span-2 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex items-center justify-between relative overflow-hidden group">
                <div className="z-10">
                    <h3 className="text-2xl font-display font-bold text-white">DOWNTOWN STUDIO</h3>
                    <p className="text-neutral-400 text-sm mt-1"><i className="ri-map-pin-line text-brand"></i> 1024 Fitness Blvd, NY</p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 opacity-40 mask-image-gradient">
                    <Image src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375" alt="Gym" fill className="object-cover" />
                </div>
            </div>
            <div className="bento-item col-span-1 bg-neutral-900 rounded-3xl relative overflow-hidden group border border-neutral-800">
                <Image src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470" alt="Classes" fill className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-bold text-2xl border-2 border-brand px-6 py-2 -rotate-12 bg-black/60 backdrop-blur-md group-hover:rotate-0 transition-transform text-white">CLASSES</span>
                </div>
            </div>
            <div className="bento-item col-span-1 bg-white text-black rounded-3xl p-6 flex flex-col items-center justify-center hover:bg-brand transition-colors duration-300">
                <span className="text-6xl font-display font-bold">15+</span>
                <span className="text-sm font-bold uppercase tracking-widest mt-2">Expert Trainers</span>
            </div>
        </div>
      </section>

      {/* TESTIMONIALS (FIXED IMAGES) */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-display font-bold text-white text-center mb-12">SUCCESS STORIES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {userImages.map((src, i) => (
                    <div key={i} className="bg-black p-8 rounded-2xl border border-neutral-800">
                        <div className="flex text-brand mb-4"><i className="ri-double-quotes-l text-4xl"></i></div>
                        <p className="text-neutral-400 mb-6">"Iron Clad changed my life. The trainers are top notch and the atmosphere is unmatched. I've never felt stronger."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-neutral-800 rounded-full overflow-hidden relative">
                                <Image src={src} alt="User" fill className="object-cover" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Member Name</h4>
                                <p className="text-neutral-500 text-sm">Lost 20lbs</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-white text-center mb-12">FREQUENTLY ASKED</h2>
        <div className="space-y-4">
            <details className="bg-card border border-neutral-800 rounded-xl p-6 group">
                <summary className="font-bold text-white cursor-pointer list-none flex justify-between items-center">
                    What are your opening hours? <span className="group-open:rotate-180 transition-transform"><i className="ri-arrow-down-s-line"></i></span>
                </summary>
                <p className="text-neutral-400 mt-4">We are open 24 hours a day, 7 days a week, 365 days a year.</p>
            </details>
            <details className="bg-card border border-neutral-800 rounded-xl p-6 group">
                <summary className="font-bold text-white cursor-pointer list-none flex justify-between items-center">
                    Do you offer personal training? <span className="group-open:rotate-180 transition-transform"><i className="ri-arrow-down-s-line"></i></span>
                </summary>
                <p className="text-neutral-400 mt-4">Yes! We have over 15 certified personal trainers available for 1-on-1 sessions.</p>
            </details>
            <details className="bg-card border border-neutral-800 rounded-xl p-6 group">
                <summary className="font-bold text-white cursor-pointer list-none flex justify-between items-center">
                    Can I freeze my membership? <span className="group-open:rotate-180 transition-transform"><i className="ri-arrow-down-s-line"></i></span>
                </summary>
                <p className="text-neutral-400 mt-4">Yes, you can freeze your membership for up to 3 months per year for a small fee.</p>
            </details>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-10 overflow-hidden bg-black">
         <div className="flex gap-4 animate-marquee min-w-full">
            {[...galleryImages, ...galleryImages].map((src, i) => (
                <div key={i} className="relative w-[300px] h-[200px] md:w-[400px] md:h-[300px] flex-shrink-0 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-neutral-800">
                    <Image src={src} alt="Gallery" fill className="object-cover" />
                </div>
            ))}
         </div>
      </section>

    </main>
  );
}