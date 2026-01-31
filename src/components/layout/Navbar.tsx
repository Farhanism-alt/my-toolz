import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="SendNow Logo" width={120} height={40} className="object-contain" />
            </Link>
          </div>
          <div className="hidden sm:flex items-center space-x-8">
            <Link href="/#tools" className="text-zinc-600 hover:text-zinc-900 font-medium transition-colors">Tools</Link>
            <a href="https://sendnow.live" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-zinc-800 transition-all active:scale-95">
              Go to SendNow.live
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
