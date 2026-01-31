"use client";

import dynamic from "next/dynamic";
import { CheckCircle2, FileText, Shield, Zap, Info, HelpCircle, ArrowRight, MessageSquare, Search, BookOpen, Briefcase, GraduationCap, Laptop } from "lucide-react";

const ChatWithPDFComp = dynamic(() => import("@/components/tools/ChatWithPDF"), { ssr: false });

export default function ChatWithPDFPage() {
    return (
        <div className="bg-white">
            <ChatWithPDFComp />

            {/* SEO Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {/* Why Use Our PDF Chat Tool */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 text-center">Why Use Our PDF Chat Tool</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Talk to Your Documents</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Stop scrolling through pages. Just ask: "What are the main conclusions?" or "Summarize page 5" and get instant answers.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Extract Key Information Fast</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Research papers? Contracts? Reports? Ask specific questions and pull out exactly what you need in seconds.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">No Reading Required</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Upload meeting notes, ask "What are my action items?" and get a clean list. Perfect for busy professionals.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Completely Free</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    No hidden costs. No "5 questions per month" limits. Chat with as many PDFs as you want.
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
                                    <GraduationCap className="w-6 h-6 text-emerald-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-emerald-400">For Students</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Summarize research papers before citing them</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Ask study guide questions from textbooks</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract key points from lecture slides</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Briefcase className="w-6 h-6 text-blue-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-blue-400">For Pros</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Review contracts without reading every clause</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract data from financial reports</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Summarize meeting minutes quickly</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Search className="w-6 h-6 text-purple-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-purple-400">Researchers</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Analyze academic papers efficiently</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract methodology from studies</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Generate literature review summaries</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Laptop className="w-6 h-6 text-orange-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-orange-400">For Business</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Review proposals and RFPs quickly</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract pricing from vendor docs</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Summarize competitor reports</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How It Works - Technical Details */}
                    <section className="bg-zinc-50 rounded-[3rem] p-8 md:p-16 border border-zinc-100">
                        <h2 className="text-3xl font-black text-zinc-950 mb-8">How It Works - Technical Details</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <p className="text-lg text-zinc-700 font-bold leading-relaxed">
                                    Our AI reads your entire PDF and understands the context. When you ask a question, it searches the document, finds relevant sections, and gives you accurate answers in plain English.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                                            <Zap className="w-4 h-4 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-black">Understands Context</h4>
                                            <p className="text-sm text-zinc-600 font-bold">Goes beyond keywords to understand meaning.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                                            <BookOpen className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-black">Handles Complexity</h4>
                                            <p className="text-sm text-zinc-600 font-bold">Processed tables, footnotes, and multi-column text.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl">
                                <h4 className="font-black mb-6 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-emerald-600" />
                                    Privacy Guarantee
                                </h4>
                                <p className="text-sm text-zinc-600 font-bold leading-relaxed mb-6">
                                    Your PDFs are processed securely and deleted after your session ends. We never store your documents or use them for training.
                                </p>
                                <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                                    AES-256 Encryption • Instant Deletion • SSL Protected
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-emerald-600" />
                            Frequently Asked Questions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { q: "How large can my PDF be?", a: "Up to 50MB. Most documents are under 10MB, so you're covered." },
                                { q: "Does it work with scanned PDFs?", a: "Yes. Our OCR technology reads text from scanned images automatically." },
                                { q: "Can I chat with multiple PDFs at once?", a: "Currently one at a time. Upload a new PDF to start a fresh conversation." },
                                { q: "Is my data secure?", a: "Absolutely. Files are encrypted during upload, processed securely, and deleted immediately after your session." },
                                { q: "How accurate are the answers?", a: "Very accurate for factual content. AI understands the document content directly." },
                                { q: "Can it summarize really long documents?", a: "Yes. We handle PDFs up to 500 pages. Longer documents may take a bit more time to process." },
                                { q: "Does it understand tables and charts?", a: "It reads text from tables. Charts and images are described if they contain text via OCR." },
                                { q: "Can I download the conversation?", a: "Not yet, but you can copy/paste answers. Feature coming soon." }
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
                            <h2 className="text-4xl font-black leading-tight">Ready to Track Who Reads Your PDFs?</h2>
                            <p className="text-xl font-bold opacity-90">
                                Chatting with PDFs is useful. Knowing who opened your PDF, which pages they read, and when to follow up is powerful.
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
                                ✓ No credit card required • ✓ Free for 3 links
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
