"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedTitle({ title, className }: { title: string, className?: string }) {
  const container = useRef(null);

  useGSAP(() => {
    const chars = container.current.querySelectorAll(".char");
    gsap.fromTo(chars, 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: container });

  return (
    <div ref={container} className={`overflow-hidden ${className}`}>
      {title.split("").map((char, i) => (
        <span key={i} className="char inline-block" style={{ whiteSpace: "pre" }}>{char}</span>
      ))}
    </div>
  );
}