'use client';

import { useState } from 'react';
import AnimatedTitle from "@/components/AnimatedTitle";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch('https://formspree.io/f/xvgeyzql', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <div className="min-h-screen pt-32 px-4 max-w-7xl mx-auto pb-20">

      {/* Header */}
      <div className="text-center mb-16">
        <AnimatedTitle title="GET IN TOUCH" className="text-5xl md:text-7xl font-display font-bold uppercase text-white mb-4" />
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Have questions? Ready to start your transformation? We are here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

        {/* LEFT SIDE: About Us & Info */}
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Iron Clad?</h3>
            <p className="text-neutral-400 leading-relaxed">
              We are not just a gym; we are a community of individuals dedicated to pushing limits. 
              With state-of-the-art equipment, world-class trainers, and an atmosphere that breathes motivation, 
              Iron Clad is where your fitness journey truly begins.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-brand shrink-0"><i className="ri-map-pin-fill text-xl"></i></div>
              <div>
                <h4 className="font-bold text-white text-lg">Visit Us</h4>
                <p className="text-neutral-400">1024 Fitness Blvd, Downtown NY</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-brand shrink-0"><i className="ri-mail-fill text-xl"></i></div>
              <div>
                <h4 className="font-bold text-white text-lg">Email Us</h4>
                <p className="text-neutral-400">kkumar04600@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-brand shrink-0"><i className="ri-phone-fill text-xl"></i></div>
              <div>
                <h4 className="font-bold text-white text-lg">Call Us</h4>
                <p className="text-neutral-400">+919318308433</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <div className="bg-card p-8 md:p-10 rounded-3xl border border-neutral-800 shadow-2xl">
          {submitted ? (
            <div className="text-center py-20 flex flex-col items-center justify-center h-full">
              <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mb-6">
                <i className="ri-check-line text-5xl text-brand"></i>
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-2">MESSAGE SENT</h2>
              <p className="text-neutral-400">We will get back to you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-brand underline hover:text-white">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input name="firstName" placeholder="First Name" required className="bg-neutral-900 border border-neutral-700 p-4 rounded-xl text-white outline-none focus:border-brand transition-colors" />
                <input name="lastName" placeholder="Last Name" required className="bg-neutral-900 border border-neutral-700 p-4 rounded-xl text-white outline-none focus:border-brand transition-colors" />
              </div>

              <input type="email" name="email" placeholder="Email Address" required className="w-full bg-neutral-900 border border-neutral-700 p-4 rounded-xl text-white outline-none focus:border-brand transition-colors" />

              {/* NEW SUBJECT DROPDOWN */}
              <div className="relative">
                <select 
                    name="subject" 
                    required 
                    className="w-full bg-neutral-900 border border-neutral-700 p-4 rounded-xl text-white outline-none focus:border-brand transition-colors appearance-none cursor-pointer"
                >
                    <option value="General Inquiry" className="bg-neutral-900">General Inquiry</option>
                    <option value="Membership" className="bg-neutral-900">Join Membership</option>
                    <option value="Personal Training" className="bg-neutral-900">Personal Training</option>
                    <option value="Trainer Application" className="bg-neutral-900">Trainer Application (Job)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                    <i className="ri-arrow-down-s-line"></i>
                </div>
              </div>

              <textarea name="message" placeholder="How can we help you?" rows={5} required className="w-full bg-neutral-900 border border-neutral-700 p-4 rounded-xl text-white outline-none focus:border-brand transition-colors"></textarea>

              <button type="submit" disabled={loading} className="w-full bg-brand text-black font-bold py-4 rounded-xl hover:bg-white transition-colors text-lg disabled:opacity-60 flex justify-center items-center gap-2">
                {loading ? (
                  <>Sending <i className="ri-loader-4-line animate-spin"></i></>
                ) : (
                  <>SEND MESSAGE <i className="ri-send-plane-fill"></i></>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
