"use client";

import dynamic from "next/dynamic";
import { CheckCircle2, Shield, Zap, HelpCircle, ArrowRight, Image as ImageIcon, Download, Search, BookOpen, Briefcase, Layout, MousePointer2 } from "lucide-react";

const PDFToImage = dynamic(() => import("@/components/tools/PDFToImage"), { ssr: false });

export default function PDFToPNGPage() {
    return (
        <div className="bg-white">
            <PDFToImage tool="png" />

            {/* SEO Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {/* Why Convert PDF to PNG? */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 text-center">Why Convert PDF to PNG?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Layout className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Perfect for Presentations</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Embed PDF pages into PowerPoint or Keynote as high-quality images without losing clarity or layout.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <ImageIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Highest Image Quality</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    PNG is a lossless format, meaning your document text and graphics stay sharp and professional-looking.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <MousePointer2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Easy Web Sharing</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Share specific pages of a PDF on social media or websites where PDF viewing isn't natively supported.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Fast & Free</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Convert multiple pages in seconds. Our free tool handles everything locally in your browser for speed.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="bg-zinc-50 rounded-[3rem] p-8 md:p-16 border border-zinc-100">
                        <h2 className="text-3xl font-black text-zinc-950 mb-8 text-center">Fast & Secure Conversion</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                                        <ImageIcon className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Batch Processing</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Convert all pages of your PDF into separate PNG files at once.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                                        <Download className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Instant Download</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Get your images as a convenient ZIP file or download them individually.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                                        <Shield className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Private & Secure</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">No files are uploaded to our servers. Processing happens entirely on your device.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl">
                                <h4 className="font-black mb-6">PNG Quality Specs</h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Resolution</span>
                                        <span className="text-zinc-950">300 DPI (High Res)</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Format</span>
                                        <span className="text-zinc-950">Lossless PNG</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold">
                                        <span className="text-zinc-600">Speed</span>
                                        <span className="text-zinc-950">~1 sec/page</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-emerald-600" />
                            FAQs for PDF to PNG
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { q: "Is the conversion quality good?", a: "Yes, we use high-resolution rendering to ensure text remains crisp even in image format." },
                                { q: "Can I convert multiple pages?", a: "Absolutely. Our tool converts every page of your PDF into a separate PNG file." },
                                { q: "Do my files stay private?", a: "Yes. The conversion happens in your browser. We never see or store your documents." },
                                { q: "What is the file size limit?", a: "We support PDFs up to 50MB for smooth browser-based conversion." },
                                { q: "Does it work on mobile?", a: "Yes, you can convert PDFs to PNGs on any modern smartphone or tablet browser." },
                                { q: "Can I choose specific pages?", a: "Currently, we convert the entire document. You can download only the ones you need." },
                                { q: "Is PNG better than JPG for PDFs?", a: "Yes, PNG is lossless and handles text and charts better than JPG compression." },
                                { q: "How do I download the results?", a: "Once finished, you can download all images as a single ZIP file." }
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
                            <h2 className="text-4xl font-black leading-tight">Securely Track Your PDF Shares</h2>
                            <p className="text-xl font-bold opacity-90">
                                Don't just send and hope. Use SendNow to track exactly when and where your PDFs are opened.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://www.sendnow.live"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
                                >
                                    Start Tracking PDFs Free <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                            <p className="text-sm font-black uppercase tracking-widest opacity-70">
                                Instant open alerts • Viewer location tracking • Read-time analytics
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
