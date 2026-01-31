"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import ToolCard from "@/components/ui/ToolCard";
import {
  FileText,
  ScanText,
  Image as ImageIcon,
  FileImage,
  Split,
  ArrowRightLeft,
  MousePointerClick,
  Sparkles,
  FileCode,
  FileBox,
  MonitorPlay,
  Presentation
} from "lucide-react";

const tools = [
  {
    title: "Chat with PDF",
    description: "Ask questions about your PDF content. Free AI chat—no tracking included.",
    href: "/chat-with-pdf",
    icon: FileText,
    color: "bg-brand-gradient",
    isAI: true,
    aiBadgeText: "Secure AI for PDF",
    category: "PDF",
    primaryCTA: "Use Free Tool →",
    trackingCTA: "Track Your PDF →",
  },
  {
    title: "Chat with Word",
    description: "Upload Word docs and ask questions. Get summaries instantly.",
    href: "/chat-with-word",
    icon: FileBox,
    color: "bg-brand-gradient",
    isAI: true,
    aiBadgeText: "AI for Word",
    category: "DOCX",
    primaryCTA: "Use Free Tool →",
    trackingCTA: "Track Your Word Doc →",
  },
  {
    title: "Chat with PPTX",
    description: "Analyze presentation slides. Extract insights and ask questions.",
    href: "/chat-with-pptx",
    icon: Presentation,
    color: "bg-brand-gradient",
    isAI: true,
    aiBadgeText: "AI for Presentations",
    category: "PPT",
    primaryCTA: "Use Free Tool →",
    trackingCTA: "Track Your Presentation →",
  },
  {
    title: "Chat with Video",
    description: "Get transcripts and summaries from video files. AI-powered answers.",
    href: "/chat-with-video",
    icon: MonitorPlay,
    color: "bg-brand-gradient",
    isAI: true,
    aiBadgeText: "AI for Video",
    category: "Video",
    primaryCTA: "Use Free Tool →",
    trackingCTA: "Track Your Video →",
  },
  {
    title: "PDF to Text",
    description: "Extract text from PDFs. Free, instant, no signup.",
    href: "/pdf-to-text",
    icon: FileText,
    color: "bg-blue-500",
    category: "PDF",
    primaryCTA: "Convert Now →",
    trackingCTA: "Track Your PDF →",
  },
  {
    title: "OCR PDF to Text",
    description: "Convert scanned PDFs to editable text. No watermarks.",
    href: "/ocr-pdf-to-text",
    icon: ScanText,
    color: "bg-purple-500",
    category: "PDF",
    primaryCTA: "Convert Now →",
    trackingCTA: "Track Your PDF →",
  },
  {
    title: "PDF to PNG",
    description: "Turn PDF pages into PNG images. Easy conversion.",
    href: "/pdf-to-png",
    icon: FileImage,
    color: "bg-pink-500",
    category: "PDF",
    primaryCTA: "Convert Now →",
    trackingCTA: "Track Your PDF →",
  },
  {
    title: "PNG to PDF",
    description: "Convert PNG images to PDF. Create and merge PDFs from your files.",
    href: "/png-to-pdf",
    icon: ImageIcon,
    color: "bg-orange-500",
    category: "PDF",
    primaryCTA: "Convert Now →",
    trackingCTA: "Track Your PDF →",
  },
  {
    title: "PDF to JPG",
    description: "Convert PDFs to JPG images. Perfect for sharing visuals.",
    href: "/pdf-to-jpg",
    icon: FileImage,
    color: "bg-emerald-500",
    category: "PDF",
    primaryCTA: "Convert Now →",
    trackingCTA: "Track Your PDF →",
  },
  {
    title: "JPG to PDF",
    description: "Create PDFs from JPG images. Combine multiple files.",
    href: "/jpg-to-pdf",
    icon: ImageIcon,
    color: "bg-amber-500",
    category: "PDF",
    primaryCTA: "Convert Now →",
    trackingCTA: "Track Your PDF →",
  },
  {
    title: "Split DOCX",
    description: "Break Word documents into smaller files by page or section.",
    href: "/split-docx",
    icon: Split,
    color: "bg-emerald-600",
    category: "DOCX",
    primaryCTA: "Split Now →",
    trackingCTA: "Track Your Word Doc →",
  },
  {
    title: "Word to Markdown",
    description: "Convert Word docs to Markdown. Clean formatting for developers.",
    href: "/word-to-markdown",
    icon: FileCode,
    color: "bg-blue-600",
    category: "DOCX",
    primaryCTA: "Convert Now →",
    trackingCTA: "Track Your Word Doc →",
  },
  {
    title: "Split PDF",
    description: "Break PDFs into smaller files. Select specific pages to extract.",
    href: "/split-pdf",
    icon: Split,
    color: "bg-indigo-500",
    category: "PDF",
    primaryCTA: "Split Now →",
    trackingCTA: "Track Your PDF →",
  },
];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "PDF", "DOCX", "PPT", "Video"];

  const filteredTools = useMemo(() => {
    if (filter === "All") return tools;
    return tools.filter(t => t.category === filter);
  }, [filter]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-black text-zinc-950 tracking-tight mb-8">
              Free Document & AI Assistant Tools
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed">
              Need to convert, split, or merge files before tracking them? Use these free tools. No signup required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#tools" className="btn-cta bg-black text-white hover:bg-zinc-800">
                Explore Tools
              </a>
              <a href="https://www.sendnow.live" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-600 hover:text-black font-semibold transition-colors group">
                Looking for document tracking?
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-24 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all ${filter === cat
                  ? 'bg-zinc-950 text-white shadow-xl scale-105'
                  : 'bg-white text-zinc-500 hover:text-zinc-950 border border-zinc-100'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.title} {...tool} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-[3rem] p-12 sm:p-20 relative overflow-hidden text-center">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to track who's reading<br />your files?
              </h2>
              <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
                These free tools help you prep documents. Want to see who opens them, which pages they read, and when to follow up?
              </p>
              <a href="https://www.sendnow.live" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-zinc-100 transition-all active:scale-95">
                Try document tracking free →
                <MousePointerClick className="ml-3 w-6 h-6" />
              </a>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
          </div>
        </div>
      </section>
    </div>
  );
}
