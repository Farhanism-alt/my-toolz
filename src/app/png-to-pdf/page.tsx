"use client";

import dynamic from "next/dynamic";
import { CheckCircle2, Shield, Zap, HelpCircle, ArrowRight, Image as ImageIcon, FileText, Search, BookOpen, Briefcase, Layout, MousePointer2, Plus } from "lucide-react";

const ImageToPDF = dynamic(() => import("@/components/tools/ImageToPDF"), { ssr: false });

export default function PNGToPDFPage() {
    return (
        <div className="bg-white">
            <ImageToPDF tool="png" />

            {/* SEO Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {/* Why Convert PNG to PDF? */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 text-center">Why Convert PNG to PDF?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Plus className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Combine Multiple PNGs</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Turn several PNG images, screenshots, or scans into a single, professional PDF document in just one click.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Universal Format</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    PDF is the gold standard for sharing documents. Ensure your images look the same on any device or operating system.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Professional Presentation</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Sending images as a PDF looks more professional and prevents viewers from accidentally editing or deleting pages.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Secure & Fast</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Your images are processed locally. Fast conversion without ever uploading sensitive data to a server.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="bg-zinc-50 rounded-[3rem] p-8 md:p-16 border border-zinc-100">
                        <h2 className="text-3xl font-black text-zinc-950 mb-8 text-center">Seamless Image to PDF</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                                        <ImageIcon className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Auto-Sizing</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Images are automatically scaled to fit standard PDF page sizes if needed.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                                        <Layout className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Preserve Quality</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">We maintain the original resolution of your PNGs for the highest quality PDF output.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                                        <Shield className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Zero Uploads</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Everything happens in your browser. Complete privacy for your personal images.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl">
                                <h4 className="font-black mb-6 text-center">Conversion Capabilities</h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Max File Size</span>
                                        <span className="text-zinc-950">20MB / Image</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Max Images</span>
                                        <span className="text-zinc-950">50 at once</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold">
                                        <span className="text-zinc-600">PDF Format</span>
                                        <span className="text-zinc-950">Standard v1.7</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-emerald-600" />
                            FAQs for PNG to PDF
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { q: "How many PNGs can I convert?", a: "You can convert up to 50 images into a single PDF at one time." },
                                { q: "Will the PDF look like my images?", a: "Yes. The PDF will be an exact representation of your PNG images, page by page." },
                                { q: "Is this tool free?", a: "Yes, our PNG to PDF converter is free of charge with no watermarks." },
                                { q: "Can I reorder the images?", a: "Images are added to the PDF in the order you select them for upload." },
                                { q: "Is my privacy protected?", a: "Yes. Processing occurs locally in your browser so we never see your files." },
                                { q: "What is the maximum file size?", a: "We recommend individual images be under 20MB for optimal performance." },
                                { q: "Does it work on Mac and Windows?", a: "Yes, it works on any device with a modern web browser." },
                                { q: "Can I convert other image formats?", a: "Yes, use our JPG to PDF tool for .jpg and .jpeg files." }
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
                            <h2 className="text-4xl font-black leading-tight">Ready to Share and Track Your Doc?</h2>
                            <p className="text-xl font-bold opacity-90">
                                Once your PDF is ready, use SendNow to see exactly when and where people are reading it.
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
                                Real-time open alerts • Precise engagement data • Professional links
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
