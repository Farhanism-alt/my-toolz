"use client";

import dynamic from "next/dynamic";
import { CheckCircle2, Shield, Zap, HelpCircle, ArrowRight, FileText, Scissors, Layers, Share2, Download, Briefcase, Layout } from "lucide-react";

const SplitPDF = dynamic(() => import("@/components/tools/SplitPDF"), { ssr: false });

export default function SplitPDFPage() {
    return (
        <div className="bg-white">
            <SplitPDF />

            {/* SEO Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {/* Why Split PDF Documents? */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 text-center">Why Split PDF Documents?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Scissors className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Extract Individual Pages</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Need only page 5 of a 100-page report? Quickly extract any specific page or range into a new, smaller PDF file.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Share2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Optimize for Email</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Break down multi-megabyte PDFs into smaller chunks to bypass email attachment limits and ensure delivery.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Organize Your Files</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Keep your project folders focused by splitting combined files into their original, separate document components.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Fast & Completely Free</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Split high-resolution PDFs in seconds with our optimized in-browser engine. No software installation required.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="bg-zinc-50 rounded-[3rem] p-8 md:p-16 border border-zinc-100">
                        <h2 className="text-3xl font-black text-zinc-950 mb-8 text-center">Seamless PDF Splitting</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                                        <FileText className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Direct Range Selection</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Specify exact page ranges (e.g., 1-5, 12, 20-30) to create multiple new PDFs at once.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                                        <Layers className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Split Every Page</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Instantly convert a multi-page PDF into dozens of single-page document files.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                                        <Shield className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Local Browser Processing</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Your files never leave your computer. We process everything locally for maximum security.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl">
                                <h4 className="font-black mb-6 text-center">Splitting Capabilities</h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Max Page Count</span>
                                        <span className="text-zinc-950">500 Pages</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Preserve Hyperlinks</span>
                                        <span className="text-zinc-950">Yes</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold">
                                        <span className="text-zinc-600">Processing Speed</span>
                                        <span className="text-zinc-950">~0.1 sec/page</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-emerald-600" />
                            FAQs for Split PDF
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { q: "Does splitting reduce quality?", a: "No, the extracted pages are identical to the original PDF with zero compression loss." },
                                { q: "Can I split password-protected PDFs?", a: "You'll need to remove the password protection first before our tool can process the pages." },
                                { q: "Is there a limit on file size?", a: "We support PDFs up to 50MB for smooth, fast in-browser splitting." },
                                { q: "Can I merge pages after splitting?", a: "Currently, this tool only splits. Use a PDF merger if you need to recombine them." },
                                { q: "Are my documents kept private?", a: "Yes. All splitting happens in your browser memory; your files are never uploaded to a server." },
                                { q: "How do I download the split parts?", a: "Once finished, you can download all pieces in a convenient ZIP file." },
                                { q: "Does it work on tablet and mobile?", a: "Yes, our Split PDF tool works on any modern web browser across all devices." },
                                { q: "Is there a limit on how many parts I can create?", a: "You can split a document into as many parts as there are pages." }
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
                            <h2 className="text-4xl font-black leading-tight">Split, Share, and Track Your Work</h2>
                            <p className="text-xl font-bold opacity-90">
                                Once you've split your large PDF, share the important parts with SendNow and see who's actually reading them.
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
