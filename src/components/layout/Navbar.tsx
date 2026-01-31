import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-3 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Glassmorphism Pill Container */}
        <div
          className="flex justify-between items-center px-5 py-2 rounded-[99px] shadow-[0_0_15px_rgba(0,0,0,0.1)]"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.37)',
            backdropFilter: 'blur(44px)',
            WebkitBackdropFilter: 'blur(44px)'
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/logo.png" alt="SendNow Logo" width={100} height={33} className="object-contain" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="https://www.sendnow.live/blogs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-zinc-900 font-medium transition-colors text-sm"
            >
              Blogs
            </a>
            <a
              href="https://www.sendnow.live/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-zinc-900 font-medium transition-colors text-sm"
            >
              Pricing
            </a>
            <a
              href="https://www.sendnow.live/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-zinc-900 font-medium transition-colors text-sm"
            >
              About Us
            </a>
            <a
              href="https://free-tools.sendnow.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-zinc-900 font-medium transition-colors text-sm"
            >
              Free tools
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <a
              href="https://dashboard.sendnow.live/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block px-5 py-2 rounded-full font-medium text-sm text-zinc-700 hover:text-zinc-900 border border-zinc-300 hover:border-zinc-400 transition-all"
            >
              Login
            </a>
            <a
              href="https://calendly.com/sendnow-live/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full font-medium text-sm bg-black text-white hover:bg-zinc-800 transition-all active:scale-95"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
