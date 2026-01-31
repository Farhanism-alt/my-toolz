"use client";

import dynamic from 'next/dynamic';
import { CheckCircle2, FileVideo, Shield, Zap, HelpCircle, ArrowRight, Video, Search, BookOpen, Briefcase, Laptop, Users, MessageSquare } from "lucide-react";

const ChatWithVideo = dynamic(() => import('@/components/tools/ChatWithVideo'), {
    ssr: false,
});

export default function ChatWithVideoPage() {
    return (
        <div className="bg-white">
            <ChatWithVideo />

            {/* SEO Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {/* Why Chat with Videos? */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 text-center">Why Chat with Videos?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <FileVideo className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Get Transcripts Instantly</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Upload a meeting recording or webinar and get a full text transcript in minutes—no manual transcription needed.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Summarize Long Videos</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Got a 2-hour conference talk? Ask "Summarize this in 5 bullet points" and get the highlights instantly.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Find Specific Moments</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Ask "When did they discuss pricing?" and get the exact timestamp—skip directly to what matters.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Video className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Review Without Watching</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Upload training videos or customer calls and extract insights without watching the entire thing.
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
                                    <Laptop className="w-6 h-6 text-emerald-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-emerald-400">Content Creators</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Transcribe YouTube for blog posts</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract quotes for social media</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Find specific moments to clip</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Search className="w-6 h-6 text-blue-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-blue-400">Researchers</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Transcribe interview recordings</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract key insights from groups</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Find topics in long recordings</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Briefcase className="w-6 h-6 text-purple-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-purple-400">Sales & CS</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Review sales call recordings</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract objections and responses</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Analyze customer feedback videos</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Users className="w-6 h-6 text-orange-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-orange-400">Students</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Transcribe lecture recordings</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract key concepts from lessons</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Create study notes from videos</li>
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
                                    Our AI transcribes your video using advanced speech-to-text technology, then analyzes the content visually and auditorily. You can ask questions, request summaries, or find specific topics.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                                            <MessageSquare className="w-4 h-4 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-black">Auto Transcription</h4>
                                            <p className="text-sm text-zinc-600 font-bold">Automatic speech transcription with high accuracy.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                                            <Shield className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-black">Timestamp References</h4>
                                            <p className="text-sm text-zinc-600 font-bold">Every answer includes references to video moments.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl">
                                <h4 className="font-black mb-6 flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-emerald-600" />
                                    Processing Time
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">5-minute video</span>
                                        <span className="text-zinc-950">~2 minutes</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">30-minute video</span>
                                        <span className="text-zinc-950">~5-7 minutes</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold">
                                        <span className="text-zinc-600">60-minute video</span>
                                        <span className="text-zinc-950">~10-15 minutes</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-emerald-600" />
                            FAQs for Video Chat
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { q: "What video formats work?", a: ".mp4, .mov, .avi, .mkv, .webm - most formats supported." },
                                { q: "How large can videos be?", a: "Up to 500MB or 2 hours in length, whichever comes first." },
                                { q: "Does it work with YouTube?", a: "Paste the YouTube URL directly—no need to download first." },
                                { q: "How accurate are transcripts?", a: "Very accurate for clear audio. Accents processed efficiently." },
                                { q: "Can it identify speakers?", a: "Basic speaker identification works for clear audio." },
                                { q: "What languages work?", a: "English, Spanish, French, German, and 20+ others." },
                                { q: "Can I download the transcript?", a: "Yes. Copy the transcript or download as .txt file." },
                                { q: "Does it work with Zoom?", a: "Yes! Upload your .mp4 Zoom recording and get instant transcripts." }
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
                            <h2 className="text-4xl font-black leading-tight">Track Video Engagement After Upload</h2>
                            <p className="text-xl font-bold opacity-90">
                                Once you've reviewed your video, see who actually watches it and where they drop off.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://www.sendnow.live"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
                                >
                                    Start Tracking Videos Free <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                            <p className="text-sm font-black uppercase tracking-widest opacity-70">
                                See real-time viewer data • Watch duration tracking • Dropout alerts
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
