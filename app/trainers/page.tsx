"use client";
import Image from "next/image";
import AnimatedTitle from "@/components/AnimatedTitle";
import Link from "next/link";

const trainers = [
  { name: "Alex Sterling", role: "Strength Coach", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1374" },
  // 👇 New Working Image for Sarah Connor
  { name: "Sarah Connor", role: "HIIT Specialist", img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1374" }, 
  { name: "Mike Tyson", role: "Boxing Coach", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1374" },
  { name: "Elena R.", role: "Yoga & Mobility", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470" },
  { name: "John Wick", role: "Tactical Fitness", img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469" },
  { name: "Lara Croft", role: "Endurance", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470" },
];

export default function Trainers() {
  return (
    <div className="min-h-screen pt-32 px-4 md:px-8 max-w-[1400px] mx-auto pb-20">
      <div className="text-center mb-16">
          <AnimatedTitle title="MEET THE ELITE" className="text-5xl md:text-8xl font-display font-bold uppercase mb-4 text-white" />
          <p className="text-neutral-400 text-sm md:text-xl max-w-2xl mx-auto">
            Our certified personal trainers are here to help you unlock your full potential.
          </p>
      </div>

      {/* Trainers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {trainers.map((trainer, i) => (
          <div key={i} className="group relative h-[450px] rounded-3xl overflow-hidden border border-neutral-800 cursor-pointer">
            <Image 
                src={trainer.img} 
                alt={trainer.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{trainer.name}</h3>
              <p className="text-brand font-bold tracking-widest text-xs md:text-sm uppercase mb-4">{trainer.role}</p>

              <Link href="/contact">
                <button className="w-full bg-white text-black py-3 rounded-xl font-bold text-sm hover:bg-brand transition-colors opacity-0 group-hover:opacity-100">
                    BOOK SESSION
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Training Philosophy Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">OUR PHILOSOPHY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-neutral-800 text-center">
                <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center text-brand mx-auto mb-6 text-2xl"><i className="ri-mental-health-line"></i></div>
                <h3 className="text-xl font-bold text-white mb-2">Mindset First</h3>
                <p className="text-neutral-400">We believe strength starts in the mind. Our trainers coach you to break mental barriers.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-neutral-800 text-center">
                <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center text-brand mx-auto mb-6 text-2xl"><i className="ri-flask-line"></i></div>
                <h3 className="text-xl font-bold text-white mb-2">Science Based</h3>
                <p className="text-neutral-400">No bro-science. Our programs are backed by biomechanics and nutritional science.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-neutral-800 text-center">
                <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center text-brand mx-auto mb-6 text-2xl"><i className="ri-group-line"></i></div>
                <h3 className="text-xl font-bold text-white mb-2">Community</h3>
                <p className="text-neutral-400">You never train alone. Join a tribe of like-minded individuals pushing for greatness.</p>
            </div>
        </div>
      </div>

      {/* Join Team CTA */}
      <div className="bg-brand rounded-3xl p-12 text-center relative overflow-hidden">
        <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-4">ARE YOU A TRAINER?</h2>
            <p className="text-black/80 max-w-xl mx-auto mb-8 font-medium">We are always looking for elite talent to join our roster. If you have the passion and the certification, we want to hear from you.</p>
            <Link href="/contact">
                <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">APPLY NOW</button>
            </Link>
        </div>
        <i className="ri-dumbbell-line absolute -right-10 -bottom-10 text-[15rem] opacity-10 text-black rotate-12"></i>
      </div>

    </div>
  );
}