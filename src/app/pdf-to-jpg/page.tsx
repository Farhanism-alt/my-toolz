"use client";

import dynamic from "next/dynamic";
import { CheckCircle2, Shield, Zap, HelpCircle, ArrowRight, Image as ImageIcon, Download, Search, BookOpen, Briefcase, FileType, MousePointer2 } from "lucide-react";

const PDFToImage = dynamic(() => import("@/components/tools/PDFToImage"), { ssr: false });

export default function PDFToJPGPage() {
    return (
        <div className="bg-white">
            <PDFToImage tool="jpg" />

            {/* SEO Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {/* Why Convert PDF to JPG? */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 text-center">Why Convert PDF to JPG?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <FileType className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Smaller File Sizes</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    JPG compression significantly reduces file size, making it much easier to email or upload large document pages.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <ImageIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Universal Compatibility</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    JPGs open on every device, app, and platform. Guaranteed visibility for your document images anywhere.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <MousePointer2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Perfect for Social Media</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Post PDF pages directly to Instagram, X (Twitter), or LinkedIn as optimized image files.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Lightning Fast Conversion</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Our optimized engine processes document pages into JPGs in milliseconds, saving you valuable time.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="bg-zinc-50 rounded-[3rem] p-8 md:p-16 border border-zinc-100">
                        <h2 className="text-3xl font-black text-zinc-950 mb-8 text-center">Optimized JPG Conversion</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                                        <Zap className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Smart Compression</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Balance quality and file size automatically for the best results possible.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                                        <Download className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Easy Downloads</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Download all images in a single ZIP file or pick only the pages you need.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                                        <Shield className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Secure In-Browser</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Your files never leave your computer. Privacy is our top priority.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl">
                                <h4 className="font-black mb-6">JPG Optimized Specs</h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Max File Size</span>
                                        <span className="text-zinc-950">50MB</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Output Quality</span>
                                        <span className="text-zinc-950">90% (High Quality)</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold">
                                        <span className="text-zinc-600">Speed</span>
                                        <span className="text-zinc-950">~0.5 sec/page</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-emerald-600" />
                            FAQs for PDF to JPG
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { q: "Will my images be clear?", a: "Yes, we use a 90% quality factor to ensure text and graphics look great while reducing file size." },
                                { q: "How many pages can I convert?", a: "There is no page limit, though very large documents (100+ pages) may take longer." },
                                { q: "Is this tool free to use?", a: "Yes, our PDF to JPG converter is 100% free with no hidden fees or watermarks." },
                                { q: "Does the layout change?", a: "No. The JPG is an exact visual snapshot of your PDF page, preserving all elements." },
                                { q: "Can I convert protected PDFs?", a: "You'll need to remove the password protection first before uploading." },
                                { q: "What happens to my data?", a: "Conversion happens locally in your browser. We never upload or store your files." },
                                { q: "Do you support batch uploads?", a: "Currently, you can upload one PDF at a time and convert all its pages." },
                                { q: "How do I get my JPGs?", a: "After conversion, a ZIP file containing all your images will be ready for download." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                                    <h4 className="font-black text-zinc-950 mb-3">Q: {item.q}</h4>
                                    <p className="text-zinc-700 font-bold text-sm leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-brand-gradient rounded-[3rem] p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                            <h2 className="text-4xl font-black leading-tight">Track Your Shared PDFs with Ease</h2>
                            <p className="text-xl font-bold opacity-90">
                                Converting to JPG is great for social, but when you need to share the original PDF, use SendNow tracking.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://www.sendnow.live"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
                                >
                                    Get Started with Free Tracking <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                            <p className="text-sm font-black uppercase tracking-widest opacity-70">
                                Know who opens your files • Track viewing duration • Protect with passwords
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
