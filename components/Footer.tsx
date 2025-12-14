import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        {/* Column 1: Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-3xl font-display font-bold italic text-white mb-4">
            IRON <span className="text-brand">CLAD</span>
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Forging elite bodies and unbreakable minds since 2010. Join the revolution of strength.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/karannkx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-brand hover:text-black transition-colors cursor-pointer"
            >
              <i className="ri-instagram-line"></i>
            </a>

            <a
              href="https://twitter.com/karannkx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-brand hover:text-black transition-colors cursor-pointer"
            >
              <i className="ri-twitter-x-line"></i>
            </a>

            <a
              href="https://www.youtube.com/@karannkx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-brand hover:text-black transition-colors cursor-pointer"
            >
              <i className="ri-youtube-fill"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Explore</h4>
          <ul className="space-y-3 text-neutral-400 text-sm">
            <li>
              <Link href="/" className="hover:text-brand transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/facilities" className="hover:text-brand transition-colors">
                Facilities
              </Link>
            </li>
            <li>
              <Link href="/trainers" className="hover:text-brand transition-colors">
                Trainers
              </Link>
            </li>
            <li>
              <Link href="/membership" className="hover:text-brand transition-colors">
                Membership
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Support</h4>
          <ul className="space-y-3 text-neutral-400 text-sm">
            <li>
              <Link href="/contact" className="hover:text-brand transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">
            Newsletter
          </h4>
          <p className="text-neutral-500 text-sm mb-4">
            Get the latest workout tips and updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="bg-neutral-900 text-white px-4 py-3 rounded-l-lg outline-none w-full border border-neutral-800 focus:border-brand"
            />
            <button className="bg-brand text-black px-4 py-3 rounded-r-lg font-bold hover:bg-white transition-colors">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-neutral-600 text-xs">
          &copy; 2025 Iron Clad Gym. All rights reserved.
        </p>
        <p className="text-neutral-700 font-display font-bold text-6xl md:text-9xl opacity-10 select-none pointer-events-none">
          IRONCLAD
        </p>
      </div>
    </footer>
  );
}
