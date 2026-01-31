"use client";

import dynamic from "next/dynamic";
import { CheckCircle2, Shield, Zap, HelpCircle, ArrowRight, Image as ImageIcon, FileText, Search, BookOpen, Briefcase, Layout, MousePointer2, Plus, FileImage } from "lucide-react";

const ImageToPDF = dynamic(() => import("@/components/tools/ImageToPDF"), { ssr: false });

export default function JPGToPDFPage() {
    return (
        <div className="bg-white">
            <ImageToPDF tool="jpg" />

            {/* SEO Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {/* Why Convert JPG to PDF? */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 text-center">Why Convert JPG to PDF?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Plus className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Combine Multiple Photos</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Turn several JPG photos or scans into a single, professional PDF document in seconds.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <FileImage className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Optimized for Sharing</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    PDF is the best format for sharing multiple images. It ensures they stay in order and open everywhere.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Secure Local Processing</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Your photos are processed entirely in your browser. Complete privacy for your personal images.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Instant Results</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    No waiting for server uploads. Convert your images to PDF instantly with our optimized engine.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="bg-zinc-50 rounded-[3rem] p-8 md:p-16 border border-zinc-100">
                        <h2 className="text-3xl font-black text-zinc-950 mb-8 text-center">Fast Photo to PDF</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                                        <Plus className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Easy Image Ordering</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Select images in the order you want them to appear in your PDF.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                                        <Layout className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Auto-Scaling</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Automatically adjusts photo sizes to fit neatly onto PDF pages.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                                        <Shield className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Data Privacy</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Your files never leave your device. We use local browser technology.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl">
                                <h4 className="font-black mb-6 text-center">JPG to PDF Specs</h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Max Per Image</span>
                                        <span className="text-zinc-950">20 MB</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Max Total Images</span>
                                        <span className="text-zinc-950">50 Photos</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold">
                                        <span className="text-zinc-600">Supported Formats</span>
                                        <span className="text-zinc-950">JPG, JPEG</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-emerald-600" />
                            FAQs for JPG to PDF
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { q: "Can I combine multiple JPGs?", a: "Yes, you can upload up to 50 JPG files and we'll merge them into a single PDF." },
                                { q: "Is there a limit on photos?", a: "Currently, we support up to 50 photos at a time to ensure fast browser performance." },
                                { q: "Is this service free?", a: "Absolutely. Our JPG to PDF converter is 100% free with no hidden costs." },
                                { q: "How do I reorder pages?", a: "Images appear in the order you select them. Select one by one for exact ordering." },
                                { q: "Are my photos secure?", a: "Yes. Processing occurs locally on your machine. We never see or store your images." },
                                { q: "What's the max image size?", a: "We recommend individual JPGs be under 20MB for the best experience." },
                                { q: "Does it work on mobile phones?", a: "Yes, you can easily convert photos to PDF on iPhone, Android, or tablet browsers." },
                                { q: "Can I convert other formats?", a: "Use our PNG to PDF tool for .png files specifically." }
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
                            <h2 className="text-4xl font-black leading-tight">Create PDFs and Track Their Impact</h2>
                            <p className="text-xl font-bold opacity-90">
                                Once you've merged your photos into a PDF, use SendNow to see who's viewing it and for how long.
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
                                Open notifications • User location mapping • Password protection
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
