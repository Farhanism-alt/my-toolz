"use client";

import dynamic from 'next/dynamic';
import { CheckCircle2, FileText, Shield, Zap, HelpCircle, ArrowRight, MessageSquare, Search, BookOpen, Briefcase, Laptop, Presentation, Image as ImageIcon, PieChart } from "lucide-react";

const ChatWithPPTX = dynamic(() => import('@/components/tools/ChatWithPPTX'), {
    ssr: false,
});

export default function ChatWithPPTXPage() {
    return (
        <div className="bg-white">
            <ChatWithPPTX />

            {/* SEO Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {/* Why Chat with PowerPoint? */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 text-center">Why Chat with PowerPoint?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Presentation className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Review Decks in Minutes</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Got a 40-slide sales deck? Ask "What's the pricing structure?" instead of clicking through every slide.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Prepare for Presentations Faster</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Upload the deck before your meeting, ask "What are the key points?" and get briefed quickly.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Analyze Competitor Decks</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Review competitor presentations, investor pitches, or partner proposals without manual analysis.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <PieChart className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Extract Data Quickly</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Pull out specific numbers, quotes, or claims from presentations without hunting slide by slide.
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
                                    <Briefcase className="w-6 h-6 text-emerald-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-emerald-400">Sales Teams</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Review prospect decks before calls</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract pricing details instantly</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Summarize product pitch decks</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <PieChart className="w-6 h-6 text-blue-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-blue-400">Investors</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Screen pitch decks before meetings</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract financial projections</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Compare startup presentations</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Laptop className="w-6 h-6 text-purple-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-purple-400">Marketing</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Review campaign presentation drafts</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract messaging & positioning</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Analyze competitor marketing decks</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <BookOpen className="w-6 h-6 text-orange-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-orange-400">Educators</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Review lecture slides before class</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract key concepts from lessons</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Create study notes from PPT files</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="bg-zinc-50 rounded-[3rem] p-8 md:p-16 border border-zinc-100">
                        <h2 className="text-3xl font-black text-zinc-950 mb-8">How It Works</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <p className="text-lg text-zinc-700 font-bold leading-relaxed">
                                    Our AI reads every slide—titles, bullet points, speaker notes, and text boxes. When you ask a question, it searches across all content and gives you answers with slide references.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                                            <MessageSquare className="w-4 h-4 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-black">Analyzes Speaker Notes</h4>
                                            <p className="text-sm text-zinc-600 font-bold">Includes hidden slide details in the chat.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                                            <ImageIcon className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-black">OCR Text Extraction</h4>
                                            <p className="text-sm text-zinc-600 font-bold">Reads text even when it's part of an image.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl">
                                <h4 className="font-black mb-6">Capabilities</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-sm font-bold text-zinc-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Reads slide text and layout hierarchy
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-bold text-zinc-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Understands slide titles and importance
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-bold text-zinc-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Handles decks up to 200 slides
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-emerald-600" />
                            FAQs for PowerPoint Chat
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { q: "Does it work with Google Slides?", a: "Download your Google Slides as .pptx first, then upload it here." },
                                { q: "Can it analyze images and charts?", a: "It reads text from charts and diagrams. Visual-only content isn't analyzed." },
                                { q: "What about animations?", a: "Text content is extracted. Animations and transitions aren't considered." },
                                { q: "Does it read speaker notes?", a: "Yes! Speaker notes are included in the analysis by default." },
                                { q: "How long does processing take?", a: "Small decks: 10-15 seconds. Larger decks: 30-60 seconds." },
                                { q: "Can I ask about specific slides?", a: "Yes. Try 'What does slide 8 say?' or 'Summarize slides 10-15.'" },
                                { q: "What file formats work?", a: ".pptx and .ppt are both supported. Max size 30MB." },
                                { q: "Is this secure for confidential decks?", a: "Yes, files are encrypted and deleted after your session." }
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
                            <h2 className="text-4xl font-black leading-tight">Ready to Track Presentation Engagement?</h2>
                            <p className="text-xl font-bold opacity-90">
                                Analyzing your deck is step one. Knowing who viewed it and which slides they studied is step two.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://www.sendnow.live"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
                                >
                                    Start Tracking Presentations <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                            <p className="text-sm font-black uppercase tracking-widest opacity-70">
                                See real-time slide views • Track time spent per slide
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
