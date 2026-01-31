"use client";

import dynamic from "next/dynamic";
import { CheckCircle2, FileText, Shield, Zap, HelpCircle, ArrowRight, Copy, Download, Search, BookOpen, Briefcase, PenTool, GraduationCap, Laptop } from "lucide-react";

const PDFToText = dynamic(() => import("@/components/tools/PDFToText"), { ssr: false });

export default function PDFToTextPage() {
    return (
        <div className="bg-white">
            <PDFToText />

            {/* SEO Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {/* Why Convert PDF to Text? */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 text-center">Why Convert PDF to Text?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Copy className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Copy Text That Won't Select</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Scanned PDFs or protected files? Extract all text as copyable plain text instantly without any restrictions.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <PenTool className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Clean Text for Editing</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Pull text from PDFs to paste into Word, Google Docs, or emails without annoying formatting issues.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Archive Text Content</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Convert old PDF reports into searchable text files for better organization and long-term content retrieval.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Repurpose Content</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Extract text from PDFs to reuse in blog posts, social media updates, or new project presentations.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Common Use Cases */}
                    <section className="bg-zinc-950 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gradient opacity-10 blur-[100px] -mr-48 -mt-48" />
                        <h2 className="text-3xl font-black mb-16 text-center relative z-10">Common Use Cases</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <PenTool className="w-6 h-6 text-emerald-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-emerald-400">For Writers</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract quotes from PDF books</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Copy research for articles</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Repurpose PDF content for blogs</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <GraduationCap className="w-6 h-6 text-blue-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-blue-400">For Students</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract text from textbook PDFs</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Copy assignment instructions</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Create study notes from slides</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Briefcase className="w-6 h-6 text-purple-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-purple-400">For Business</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract data from invoices</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Copy contract text for review</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Archive PDF reports as text</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Laptop className="w-6 h-6 text-orange-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-orange-400">Data Entry</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Pull data from PDF forms</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Copy tables from PDF reports</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Batch convert documents</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Features */}
                    <section className="bg-zinc-50 rounded-[3rem] p-8 md:p-16 border border-zinc-100">
                        <h2 className="text-3xl font-black text-zinc-950 mb-8 text-center">Powerful Features</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                                        <Zap className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Fast Extraction</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Most PDFs extract in under 5 seconds. Large files may take 10-15 seconds.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                                        <BookOpen className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Preserves Structure</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Paragraphs, line breaks, and basic formatting are maintained intelligently.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                                        <Shield className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Safe & Secure</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Files are processed securely and deleted immediately after extraction.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl">
                                <h4 className="font-black mb-6">Extraction Stats</h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Max File Size</span>
                                        <span className="text-zinc-950">50MB</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Max Pages</span>
                                        <span className="text-zinc-950">500 Pages</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold">
                                        <span className="text-zinc-600">Speed</span>
                                        <span className="text-zinc-950">~100 pgs/sec</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-emerald-600" />
                            FAQs for PDF to Text
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { q: "Does it work with scanned PDFs?", a: "For scanned PDFs, use our OCR PDF to Text tool instead. This tool works best for digital PDFs." },
                                { q: "Are tables preserved?", a: "Basic table structure is maintained with spacing. Complex tables may need reformatting." },
                                { q: "How large can PDFs be?", a: "Up to 50MB or 500 pages. Most PDFs extract very quickly." },
                                { q: "Does it extract text from images?", a: "No. Only actual text is extracted. For images, use OCR PDF to Text." },
                                { q: "Is formatting preserved?", a: "Basic structure yes. Advanced formatting (fonts, colors) no." },
                                { q: "Can I extract specific pages?", a: "Use Split PDF first to isolate pages, then extract text." },
                                { q: "Is my PDF secure?", a: "Files are processed securely and deleted immediately after extraction." },
                                { q: "What if my PDF is protected?", a: "Remove the password first, then upload. We don't crack passwords." }
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
                            <h2 className="text-4xl font-black leading-tight">Track Your PDFs After Converting</h2>
                            <p className="text-xl font-bold opacity-90">
                                Once you've extracted the text you need, send the original PDF with tracking to see who reads it.
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
                                See when clients open your PDFs • Track page-by-page reading behavior
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
