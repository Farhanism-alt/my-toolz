"use client";

import dynamic from 'next/dynamic';
import { CheckCircle2, Shield, Zap, HelpCircle, ArrowRight, FileText, Scissors, Layers, Share2, Download, Briefcase, Layout } from "lucide-react";

const SplitDOCX = dynamic(() => import('@/components/tools/SplitDOCX'), {
    ssr: false,
});

export default function SplitDOCXPage() {
    return (
        <div className="bg-white">
            <SplitDOCX />

            {/* SEO Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {/* Why Split Word Documents? */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 text-center">Why Split Word Documents?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Scissors className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Extract Specific Sections</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Need only one chapter or a specific appendix? Easily extract just the pages you need from a large DOCX file.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Share2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Easier Sharing</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Large Word documents can be hard to email. Split them into smaller, more manageable parts for faster sharing.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Organizational Efficiency</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Break down massive reports into individual topics or sections to keep your project files structured and tidy.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Fast & Simple</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    No complex software needed. Split your DOCX files in seconds right in your web browser for free.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="bg-zinc-50 rounded-[3rem] p-8 md:p-16 border border-zinc-100">
                        <h2 className="text-3xl font-black text-zinc-950 mb-8 text-center">Intelligent DOCX Splitting</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                                        <FileText className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Preserve Formatting</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">We keep all your styles, fonts, and images intact in every split file.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                                        <Layers className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Batch Splitting</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Split a large document into individual pages or custom ranges with ease.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                                        <Shield className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Private Processing</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Your files stay on your device. We use local browser tech for 100% privacy.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl">
                                <h4 className="font-black mb-6 text-center">Splitting Options</h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Split Mode</span>
                                        <span className="text-zinc-950">By Range / Every Page</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Output Format</span>
                                        <span className="text-zinc-950">DOCX</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold">
                                        <span className="text-zinc-600">Max File Size</span>
                                        <span className="text-zinc-950">25 MB</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-emerald-600" />
                            FAQs for Split DOCX
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { q: "Will I lose formatting when I split?", a: "No, the output files are exact clones of the selected pages, preserving all styles and images." },
                                { q: "Is there a page limit for splitting?", a: "We support documents up to 500 pages for smooth in-browser splitting." },
                                { q: "Is this tool free to use?", a: "Yes, you can split as many DOCX files as you need without any cost." },
                                { q: "Can I split by section or chapter?", a: "You can specify custom page ranges to extract exactly the sections you want." },
                                { q: "Are my documents secure?", a: "Yes. All processing happens locally in your browser; your files are never uploaded." },
                                { q: "What is the maximum file size?", a: "We recommend files under 25MB for the best performance." },
                                { q: "Does it work on Microsoft Word alternative files?", a: "It works with any standard .docx file, including those from Google Docs or LibreOffice." },
                                { q: "How do I get my split files?", a: "Once the process is complete, you can download all parts in a single ZIP archive." }
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
                            <h2 className="text-4xl font-black leading-tight">Securely Track Your Split Documents</h2>
                            <p className="text-xl font-bold opacity-90">
                                After splitting your files, use SendNow to track exactly when your colleagues or clients open them.
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
                                Open notifications • User engagement stats • Password encryption
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
