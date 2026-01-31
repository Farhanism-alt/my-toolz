import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-zinc-50 border-t border-zinc-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <Image src="/logo.png" alt="SendNow Logo" width={140} height={50} className="mb-6 object-contain" />
                        <p className="text-zinc-500 max-w-sm mb-6">
                            Streamline your workflow with free PDF tools for conversion, extraction, merging, and more. Simplify PDF management and boost productivity today!
                        </p>
                        <div className="flex space-x-4">
                            {/* Social icons could go here */}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-zinc-900 mb-4">Tools</h3>
                        <ul className="space-y-2 text-zinc-500">
                            <li><Link href="/pdf-to-text" className="hover:text-black transition-colors">PDF to Text</Link></li>
                            <li><Link href="/ocr-pdf-to-text" className="hover:text-black transition-colors">OCR PDF to Text</Link></li>
                            <li><Link href="/pdf-to-png" className="hover:text-black transition-colors">PDF to PNG</Link></li>
                            <li><Link href="/split-pdf" className="hover:text-black transition-colors">Split PDF</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-zinc-900 mb-4">Company</h3>
                        <ul className="space-y-2 text-zinc-500">
                            <li><a href="https://sendnow.live" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Visit SendNow.live</a></li>
                            <li><a href="https://sendnow.live/contact" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400">
                    <p>© {new Date().getFullYear()} SendNow.live. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-zinc-600">Privacy Policy</a>
                        <a href="#" className="hover:text-zinc-600">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
