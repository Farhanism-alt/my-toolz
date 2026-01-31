"use client";

import { Check, MousePointerClick } from "lucide-react";
import MicrositeCarousel from "@/components/ui/MicrositeCarousel";

export default function BrandStory() {
    return (
        <div className="mt-24 pt-24 border-t border-zinc-100 space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-8">
                    <h2 className="text-4xl font-black text-zinc-950 tracking-tight leading-tight">
                        Sendnow.live: Document Tracking Made Simple
                    </h2>
                    <p className="text-zinc-800 text-lg font-medium leading-relaxed">
                        Sendnow is a document tracking platform that shows you exactly who opened your files, which pages they read, and when to follow up.
                    </p>

                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-xl font-black text-zinc-950 flex items-center gap-3">
                                <div className="w-8 h-8 bg-zinc-950 text-white rounded-lg flex items-center justify-center text-xs font-black">1</div>
                                Single File Tracking
                            </h3>
                            <p className="text-zinc-700 font-medium leading-relaxed">
                                Upload a PDF, presentation, or video. Get a trackable link. See real-time analytics on who&apos;s viewing, which pages they spend time on, and when they come back.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-black text-zinc-950 flex items-center gap-3">
                                <div className="w-8 h-8 bg-zinc-950 text-white rounded-lg flex items-center justify-center text-xs font-black">2</div>
                                Microsites (NEW)
                            </h3>
                            <p className="text-zinc-700 font-medium leading-relaxed">
                                Bundle multiple documents into one professional link. Perfect for sales proposals with case studies, fundraising packages, or client onboarding kits.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-[3rem] p-12 text-white flex flex-col justify-center gap-10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <MousePointerClick className="w-32 h-32 rotate-12" />
                    </div>
                    <div className="relative z-10 space-y-8">
                        <h3 className="text-3xl font-bold">Built Different</h3>
                        <div className="space-y-5">
                            {[
                                "No per-user pricing. Flat monthly rates.",
                                "70% cheaper than competitors.",
                                "AI Engagement Scoring & Intelligence.",
                                "Smart Lead Capture (Popups, profiles).",
                                "AES-256 Encryption & Security.",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-brand-gradient flex items-center justify-center shrink-0 mt-0.5 shadow-lg">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <p className="text-zinc-100 font-bold">{item}</p>
                                </div>
                            ))}
                        </div>
                        <a
                            href="https://sendnow.live"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 block w-full bg-white text-black text-center py-5 rounded-2xl font-black text-lg hover:bg-zinc-100 transition-all active:scale-[0.98]"
                        >
                            Start Tracking for Free
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: "Sales Teams", value: "Track proposals, time follow-ups, and map buying committees." },
                    { title: "Founders", value: "Identify serious investors by engagement depth and slide analytics." },
                    { title: "Marketers", value: "Measure genuine engagement versus downloads that go unread." },
                    { title: "Freelancers", value: "Know exactly when clients review your work and reduce ghosting." },
                ].map((item, i) => (
                    <div key={i} className="p-8 bg-zinc-50 rounded-[2rem] space-y-4 border border-zinc-100/50 hover:border-zinc-200 transition-colors">
                        <h4 className="font-black text-zinc-950 text-lg">{item.title}</h4>
                        <p className="text-sm text-zinc-800 leading-relaxed font-bold">{item.value}</p>
                    </div>
                ))}
            </div>

            {/* Microsite Visual Demo - Full Width Section */}
            <div className="py-16 px-4 bg-gradient-to-b from-zinc-50/50 to-white rounded-[3rem] border border-zinc-100/50">
                <h3 className="text-3xl sm:text-4xl font-black text-zinc-950 mb-12 text-center">
                    It's just 4 steps to create an Aesthetic Trackable Microsite:
                </h3>
                <MicrositeCarousel />
            </div>
        </div>
    );
}
