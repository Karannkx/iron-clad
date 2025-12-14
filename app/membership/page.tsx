"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedTitle from "@/components/AnimatedTitle";
import Link from "next/link";

export default function Membership() {
  useGSAP(() => {
    gsap.from(".price-card", { y: 50, opacity: 0, duration: 0.8, stagger: 0.2, delay: 0.2 });
  });

  const plans = [
    { name: "DAY PASS", price: "$15", period: "/day", features: ["Gym Access", "Locker Room", "Free WiFi"], highlight: false },
    { name: "MONTHLY PRO", price: "$49", period: "/mo", features: ["24/7 Access", "All Classes", "Sauna & Spa", "1 Free PT Session"], highlight: true },
    { name: "YEARLY", price: "$499", period: "/yr", features: ["All Pro Features", "Priority Support", "Free Merch Pack", "Nutrition Guide"], highlight: false },
  ];

  // Icons Components for Table
  const Check = () => <i className="ri-check-line text-brand text-xl font-bold"></i>;
  const Cross = () => <i className="ri-close-line text-neutral-700 text-xl"></i>;

  return (
    <div className="min-h-screen pt-32 px-4 max-w-7xl mx-auto pb-20">
      <div className="text-center mb-16">
        <AnimatedTitle title="JOIN THE CLUB" className="text-5xl md:text-7xl font-display font-bold uppercase text-white mb-4" />
        <p className="text-neutral-400 text-lg">Choose the plan that fits your goals.</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {plans.map((plan, i) => (
          <div key={i} className={`price-card relative p-8 rounded-3xl border flex flex-col ${plan.highlight ? "border-brand bg-neutral-900 scale-105 shadow-[0_0_30px_rgba(209,240,0,0.15)] z-10" : "border-neutral-800 bg-card"}`}>
            {plan.highlight && <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand text-black text-xs font-bold px-3 py-1 rounded-b-lg">MOST POPULAR</div>}
            <h3 className={`text-xl font-bold ${plan.highlight ? "text-white" : "text-neutral-400"}`}>{plan.name}</h3>
            <div className="my-6">
              <span className={`text-5xl font-display font-bold ${plan.highlight ? "text-brand" : "text-white"}`}>{plan.price}</span>
              <span className="text-neutral-500">{plan.period}</span>
            </div>
            <ul className="space-y-4 text-sm text-neutral-300 mb-8 flex-1">
              {plan.features.map((feat, j) => (
                <li key={j} className="flex items-center"><i className="ri-check-line text-brand mr-3 text-lg"></i> {feat}</li>
              ))}
            </ul>

            <Link href="/contact" className="w-full">
                <button className={`w-full py-4 rounded-xl font-bold transition-colors ${plan.highlight ? "bg-brand text-black hover:bg-white" : "border border-neutral-600 hover:bg-white hover:text-black text-white"}`}>
                CONTACT US
                </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Comparison Table (Updated with Icons) */}
      <div className="mb-20">
        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">COMPARE PLANS</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-neutral-800 text-neutral-400">
                <th className="p-4">Features</th>
                <th className="p-4 text-center">Day Pass</th>
                <th className="p-4 text-center text-brand">Monthly Pro</th>
                <th className="p-4 text-center">Yearly</th>
              </tr>
            </thead>
            <tbody className="text-white">
              <tr className="border-b border-neutral-800 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">Gym Access</td>
                <td className="p-4 text-center"><Check /></td>
                <td className="p-4 text-center"><Check /></td>
                <td className="p-4 text-center"><Check /></td>
              </tr>
              <tr className="border-b border-neutral-800 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">24/7 Entry</td>
                <td className="p-4 text-center"><Cross /></td>
                <td className="p-4 text-center"><Check /></td>
                <td className="p-4 text-center"><Check /></td>
              </tr>
              <tr className="border-b border-neutral-800 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">Group Classes</td>
                <td className="p-4 text-center"><Cross /></td>
                <td className="p-4 text-center"><Check /></td>
                <td className="p-4 text-center"><Check /></td>
              </tr>
              <tr className="border-b border-neutral-800 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">Sauna & Spa</td>
                <td className="p-4 text-center"><Cross /></td>
                <td className="p-4 text-center"><Check /></td>
                <td className="p-4 text-center"><Check /></td>
              </tr>
              <tr className="border-b border-neutral-800 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">Personal Trainer</td>
                <td className="p-4 text-center"><Cross /></td>
                <td className="p-4 text-center text-sm text-brand">1 Session</td>
                <td className="p-4 text-center text-sm text-brand">3 Sessions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}