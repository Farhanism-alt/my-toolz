import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ToolCardProps {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
    color: string;
    featured?: boolean;
    isAI?: boolean;
    aiBadgeText?: string;
    primaryCTA: string;
    trackingCTA: string;
}

export default function ToolCard({ title, description, href, icon: Icon, color, featured, isAI, aiBadgeText, primaryCTA, trackingCTA }: ToolCardProps) {
    return (
        <div
            className={`tool-card group p-8 bg-white border ${isAI ? 'border-emerald-200 ring-4 ring-emerald-50/50' : featured ? 'border-blue-200 ring-4 ring-blue-50/50' : 'border-zinc-100 shadow-sm'} rounded-[2.5rem] flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${featured || isAI ? 'scale-[1.02] shadow-xl relative overflow-hidden' : ''}`}
        >
            {isAI && (
                <div className="absolute top-0 right-0 bg-brand-gradient text-white text-[10px] uppercase tracking-widest font-black px-4 py-2 rounded-bl-2xl">
                    {aiBadgeText || "AI ASSISTANT"}
                </div>
            )}
            {featured && !isAI && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-indigo-600 text-white text-[10px] uppercase tracking-widest font-black px-4 py-2 rounded-bl-2xl">
                    Popular Tool
                </div>
            )}
            <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                <Icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">{title}</h3>
            <p className="text-zinc-500 text-base leading-relaxed flex-grow">
                {description}
            </p>
            <div className="mt-8 flex flex-col gap-3">
                <Link
                    href={href}
                    className="w-full px-6 py-3 bg-black text-white text-sm font-bold rounded-xl hover:bg-zinc-800 transition-all text-center flex items-center justify-center gap-2"
                >
                    {primaryCTA}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
                <a
                    href="https://www.sendnow.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-white text-zinc-700 text-sm font-bold rounded-xl border-2 border-zinc-200 hover:border-zinc-900 hover:text-black transition-all text-center flex items-center justify-center gap-2"
                >
                    {trackingCTA}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
