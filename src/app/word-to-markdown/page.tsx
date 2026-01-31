"use client";

import dynamic from 'next/dynamic';
import { CheckCircle2, Shield, Zap, HelpCircle, ArrowRight, FileText, Code, FileCode, Search, BookOpen, Briefcase, Globe } from "lucide-react";

const WordToMarkdown = dynamic(() => import('@/components/tools/WordToMarkdown'), {
    ssr: false,
});

export default function WordToMarkdownPage() {
    return (
        <div className="bg-white">
            <WordToMarkdown />

            {/* SEO Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {/* Why Convert Word to Markdown? */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 text-center">Why Convert Word to Markdown?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Ready for the Web</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Markdown is the standard for web content. Convert your DOCX files into clean, web-ready text for blogs, docs, or GitHub.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Code className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Clean & Lightweight</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Word docs are bloated with hidden formatting. Markdown gives you pure, readable text that works in any code editor.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <FileCode className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Perfect for Developers</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Easily bridge the gap between non-technical writers using Word and developers who need Markdown for documentation.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Effortless Conversion</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Drop your file and get your Markdown instantly. We handle headings, lists, bold, italics, and more automatically.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="bg-zinc-50 rounded-[3rem] p-8 md:p-16 border border-zinc-100">
                        <h2 className="text-3xl font-black text-zinc-950 mb-8 text-center">Smart Word to Markdown</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                                        <FileText className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Deep Formatting Analysis</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Our engine accurately translates Word styles into their proper Markdown equivalents.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                                        <Code className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Direct Copy or Download</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Instantly copy the converted Markdown to your clipboard or download it as a .md file.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                                        <Shield className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Private & Local</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Conversion happens entirely in your browser. We never see your documents.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl">
                                <h4 className="font-black mb-6 text-center">Conversion Support</h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Headings</span>
                                        <span className="text-zinc-950">H1 through H6</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Lists</span>
                                        <span className="text-zinc-950">Ordered & Unordered</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold">
                                        <span className="text-zinc-600">Links & Images</span>
                                        <span className="text-zinc-950">Standard Syntax</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-emerald-600" />
                            FAQs for Word to Markdown
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { q: "Does it support images?", a: "We convert image references to Markdown syntax. Local images in Word aren't hosted, so you'll need to upload them separately." },
                                { q: "Is the Markdown clean?", a: "Yes, we focus on generating standard, clean Markdown without unnecessary HTML tags." },
                                { q: "Is this tool free?", a: "Absolutely. Our Word to Markdown converter is 100% free with no limits." },
                                { q: "Does it handle tables?", a: "Currently, we focus on text formatting. Complex tables may require some manual adjustment." },
                                { q: "Are my documents secure?", a: "Yes. Processing happens locally in your browser so we never upload your files." },
                                { q: "What's the max file size?", a: "We recommend Word files under 10MB for the fastest in-browser conversion." },
                                { q: "Does it work with .doc files?", a: "Currently, we only support the modern .docx format. Please save as .docx first." },
                                { q: "Can I use it on mobile?", a: "Yes, it works on any modern smartphone or tablet browser." }
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
                            <h2 className="text-4xl font-black leading-tight">Securely Track Your Converted Files</h2>
                            <p className="text-xl font-bold opacity-90">
                                After converting to Markdown, share your documents as secure PDFs with SendNow for deep engagement tracking.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://www.sendnow.live"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
                                >
                                    Try Secure Tracking Free <ArrowRight className="w-5 h-5" />
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
