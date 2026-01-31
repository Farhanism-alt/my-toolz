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
  MousePointerClick,
  Sparkles,
  FileCode,
  FileBox,
  MonitorPlay,
  Presentation,
  Check,
  X,
  Plus,
  ArrowRight,
  ShieldCheck,
  Shield,
  Lock,
  Zap,
  Users,
  Briefcase,
  GraduationCap,
  Scale,
  BarChart3,
  Globe2,
  Star,
  Clock,
  Infinity as InfinityIcon
} from "lucide-react";

const tools = [
  // AI-Powered Tools
  {
    title: "Chat with PDF",
    description: "Upload a PDF and have a conversation with it. Extract key insights, get summaries, or ask specific questions—AI reads every page so you don't have to.",
    href: "/chat-with-pdf",
    icon: FileText,
    color: "bg-brand-gradient",
    isAI: true,
    aiBadgeText: "AI FOR PDF",
    category: "AI",
    primaryCTA: "Try AI Chat Free →",
    trackingCTA: "Learn more about tracking →",
  },
  {
    title: "Chat with Word",
    description: "Upload any .docx file and ask questions in plain English. Perfect for quickly extracting information from long reports, contracts, or manuals.",
    href: "/chat-with-word",
    icon: FileBox,
    color: "bg-brand-gradient",
    isAI: true,
    aiBadgeText: "AI FOR WORD",
    category: "AI",
    primaryCTA: "Use Free Tool →",
    trackingCTA: "Learn more about tracking →",
  },
  {
    title: "Chat with Presentations",
    description: "Analyze PowerPoint presentations with AI. Ask about specific slides, extract key points, or get a complete summary of any deck.",
    href: "/chat-with-pptx",
    icon: Presentation,
    color: "bg-brand-gradient",
    isAI: true,
    aiBadgeText: "AI FOR PRESENTATIONS",
    category: "AI",
    primaryCTA: "Use Free Tool →",
    trackingCTA: "Learn more about tracking →",
  },
  {
    title: "Chat with Video",
    description: "Upload video files and let AI transcribe and analyze them. Ask questions, extract quotes, or generate summaries from any video content.",
    href: "/chat-with-video",
    icon: MonitorPlay,
    color: "bg-brand-gradient",
    isAI: true,
    aiBadgeText: "AI FOR VIDEO",
    category: "AI",
    primaryCTA: "Use Free Tool →",
    trackingCTA: "Learn more about tracking →",
  },
  // Conversion Tools
  {
    title: "PDF to Text",
    description: "Pull all readable text from PDF documents in seconds. Perfect for copying content into other apps or processing in bulk.",
    href: "/pdf-to-text",
    icon: FileText,
    color: "bg-blue-500",
    category: "Conversion",
    primaryCTA: "Convert Now →",
    trackingCTA: "Track Your PDF →",
  },
  {
    title: "OCR PDF to Text",
    description: "Turn scanned PDFs and images into searchable, editable text. Our OCR technology recognizes text in 100+ languages with 99% accuracy.",
    href: "/ocr-pdf-to-text",
    icon: ScanText,
    color: "bg-purple-500",
    category: "Conversion",
    primaryCTA: "Convert Now →",
    trackingCTA: "Track Your PDF →",
  },
  {
    title: "PDF to PNG",
    description: "Convert each PDF page into a crystal-clear PNG image. Ideal for presentations, social media, or web use.",
    href: "/pdf-to-png",
    icon: FileImage,
    color: "bg-pink-500",
    category: "Conversion",
    primaryCTA: "Convert Now →",
    trackingCTA: "Track Your PDF →",
  },
  {
    title: "PNG to PDF",
    description: "Combine multiple PNG images into a single PDF document. Maintain original quality while creating shareable, printable files.",
    href: "/png-to-pdf",
    icon: ImageIcon,
    color: "bg-orange-500",
    category: "Conversion",
    primaryCTA: "Convert Now →",
    trackingCTA: "Track Your PDF →",
  },
  {
    title: "PDF to JPG",
    description: "Export PDF pages as JPG images. Choose your resolution and quality settings for the perfect output.",
    href: "/pdf-to-jpg",
    icon: FileImage,
    color: "bg-emerald-500",
    category: "Conversion",
    primaryCTA: "Convert Now →",
    trackingCTA: "Track Your PDF →",
  },
  {
    title: "JPG to PDF",
    description: "Convert JPG images to PDF format. Combine multiple images or convert single files—no quality loss.",
    href: "/jpg-to-pdf",
    icon: ImageIcon,
    color: "bg-amber-500",
    category: "Conversion",
    primaryCTA: "Convert Now →",
    trackingCTA: "Track Your PDF →",
  },
  {
    title: "Word to Markdown",
    description: "Convert Word documents to clean Markdown format. Perfect for documentation, README files, or content management systems.",
    href: "/word-to-markdown",
    icon: FileCode,
    color: "bg-blue-600",
    category: "Conversion",
    primaryCTA: "Convert Now →",
    trackingCTA: "Track Your Word Doc →",
  },
  // Document Management Tools
  {
    title: "Split DOCX",
    description: "Split large Word documents into separate files by page range or section. Keep formatting intact while creating manageable file sizes.",
    href: "/split-docx",
    icon: Split,
    color: "bg-emerald-600",
    category: "Management",
    primaryCTA: "Split Now →",
    trackingCTA: "Track Your Word Doc →",
  },
  {
    title: "Split PDF",
    description: "Break PDFs into individual pages or custom ranges. Extract just the pages you need without downloading the entire document.",
    href: "/split-pdf",
    icon: Split,
    color: "bg-indigo-500",
    category: "Management",
    primaryCTA: "Split Now →",
    trackingCTA: "Track Your PDF →",
  },
];

export default function Home() {
  const aiTools = tools.filter(t => t.category === "AI");
  const conversionTools = tools.filter(t => t.category === "Conversion");
  const managementTools = tools.filter(t => t.category === "Management");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] pt-20 pb-20 sm:pt-24 sm:pb-28 bg-zinc-900 border-b border-zinc-100/10">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center pt-16">
            <h1 className="text-5xl sm:text-7xl font-serif text-white tracking-tight mb-8 drop-shadow-2xl">
              Every Document Tool You Need
            </h1>
            <p className="text-xl sm:text-2xl font-serif text-zinc-100 max-w-4xl mx-auto mb-14 leading-relaxed drop-shadow-xl italic">
              From AI Assistant to Everyday workflows. Free Forever.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#tools" className="btn-cta bg-white text-black hover:bg-zinc-100 shadow-2xl scale-105">
                Explore the tools
              </a>
              <a href="https://www.sendnow.live" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-emerald-400 font-semibold transition-colors group drop-shadow-md">
                Looking for document tracking?
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Moved here */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em]">Trusted by Teams at These Companies</h2>
          </div>

          <div className="relative w-full overflow-hidden">
            {/* Left gradient overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            {/* Right gradient overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="marquee-container">
              <div className="marquee-content flex items-center gap-20 py-4 px-10">
                {[
                  "https://framerusercontent.com/images/GqSEdGrdx37owMZSEEsbX07iyOI.svg?width=68&height=24",
                  "https://framerusercontent.com/images/nCnW6ImWhJDVVjzHjzeZRLBXk.png?width=506&height=121",
                  "https://framerusercontent.com/images/kHiIMv1iAswDAYatzzYuPIIM.png?width=478&height=126",
                  "https://ik.imagekit.io/aakixgpoo/image%20(11).png",
                  "https://ik.imagekit.io/aakixgpoo/image%20(12).png",
                  "https://framerusercontent.com/images/hBS4Dg3cbNi3CSjJTFfXxpmtrGk.png?scale-down-to=512&width=720&height=193",
                  "https://framerusercontent.com/images/yfp1ioM9S2PneRsmheqcoovqg.png?width=319&height=99",
                  "https://framerusercontent.com/images/FVL4iFGJRiG9YuNP6EuYeEz1g0.png?scale-down-to=512&width=8509&height=1969"
                ].map((src, i) => (
                  <img key={i} src={src} alt="Company Logo" className="h-10 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                ))}
                {/* Duplicated for seamless loop */}
                {[
                  "https://framerusercontent.com/images/GqSEdGrdx37owMZSEEsbX07iyOI.svg?width=68&height=24",
                  "https://framerusercontent.com/images/nCnW6ImWhJDVVjzHjzeZRLBXk.png?width=506&height=121",
                  "https://framerusercontent.com/images/kHiIMv1iAswDAYatzzYuPIIM.png?width=478&height=126",
                  "https://ik.imagekit.io/aakixgpoo/image%20(11).png",
                  "https://ik.imagekit.io/aakixgpoo/image%20(12).png",
                  "https://framerusercontent.com/images/hBS4Dg3cbNi3CSjJTFfXxpmtrGk.png?scale-down-to=512&width=720&height=193",
                  "https://framerusercontent.com/images/yfp1ioM9S2PneRsmheqcoovqg.png?width=319&height=99",
                  "https://framerusercontent.com/images/FVL4iFGJRiG9YuNP6EuYeEz1g0.png?scale-down-to=512&width=8509&height=1969"
                ].map((src, i) => (
                  <img key={`dup-${i}`} src={src} alt="Company Logo" className="h-10 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-24 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900">AI-Powered Tools</h2>
            </div>
            <p className="text-zinc-500 mb-10 ml-14">Lead with Differentiation</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {aiTools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900">Conversion Tools</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {conversionTools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900">Document Management Tools</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {managementTools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why SendNow Section */}
      <section id="why-sendnow" className="py-24 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 font-serif">Why 50,000+ People Choose SendNow Over ILovePDF and SmallPDF</h2>
            <p className="text-zinc-500 text-lg max-w-3xl mx-auto italic">
              We built SendNow because we were tired of the same frustrations you have: email gates, tiny file limits, watermarks, and surprise paywalls.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mb-24 overflow-x-auto">
            <h3 className="text-2xl font-bold text-zinc-900 mb-8 text-center">How SendNow Compares to Other PDF Tools</h3>
            <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100">
              <thead>
                <tr className="bg-zinc-50">
                  <th className="p-6 text-left font-bold text-zinc-900">Feature</th>
                  <th className="p-6 text-center font-bold text-emerald-600 bg-emerald-50/50">SendNow</th>
                  <th className="p-6 text-center font-bold text-zinc-500">ILovePDF</th>
                  <th className="p-6 text-center font-bold text-zinc-500">SmallPDF</th>
                  <th className="p-6 text-center font-bold text-zinc-500">Adobe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="p-6 font-medium text-zinc-700">Email required?</td>
                  <td className="p-6 text-center text-emerald-600 font-bold">No ✓</td>
                  <td className="p-6 text-center text-zinc-500">Yes</td>
                  <td className="p-6 text-center text-zinc-500">Yes</td>
                  <td className="p-6 text-center text-zinc-500">Yes</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-zinc-700">Sign-up required?</td>
                  <td className="p-6 text-center text-emerald-600 font-bold">No ✓</td>
                  <td className="p-6 text-center text-zinc-500">Yes</td>
                  <td className="p-6 text-center text-zinc-500">Yes</td>
                  <td className="p-6 text-center text-zinc-500">Yes</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-zinc-700">Max file size</td>
                  <td className="p-6 text-center text-emerald-600 font-bold">500MB ✓</td>
                  <td className="p-6 text-center text-zinc-500">50MB</td>
                  <td className="p-6 text-center text-zinc-500">100MB</td>
                  <td className="p-6 text-center text-zinc-500">100MB</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-zinc-700">Files per hour</td>
                  <td className="p-6 text-center text-emerald-600 font-bold">Unlimited ✓</td>
                  <td className="p-6 text-center text-zinc-500">5</td>
                  <td className="p-6 text-center text-zinc-500">2</td>
                  <td className="p-6 text-center text-zinc-500">2</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-zinc-700">Watermarks?</td>
                  <td className="p-6 text-center text-emerald-600 font-bold">No ✓</td>
                  <td className="p-6 text-center text-zinc-500">Yes (free)</td>
                  <td className="p-6 text-center text-zinc-500">Yes (free)</td>
                  <td className="p-6 text-center text-zinc-500">Yes</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-zinc-700">Document tracking</td>
                  <td className="p-6 text-center text-emerald-600 font-bold">Yes ✓</td>
                  <td className="p-6 text-center text-zinc-500">No</td>
                  <td className="p-6 text-center text-zinc-500">No</td>
                  <td className="p-6 text-center text-zinc-500">No</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-zinc-700">AI document chat</td>
                  <td className="p-6 text-center text-emerald-600 font-bold">Yes ✓</td>
                  <td className="p-6 text-center text-zinc-500">No</td>
                  <td className="p-6 text-center text-zinc-500">No</td>
                  <td className="p-6 text-center text-zinc-500">No</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-zinc-700">Price</td>
                  <td className="p-6 text-center text-emerald-600 font-bold">Free</td>
                  <td className="p-6 text-center text-zinc-500">$4/mo</td>
                  <td className="p-6 text-center text-zinc-500">$9/mo</td>
                  <td className="p-6 text-center text-zinc-500">$15/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-zinc-400" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-4">Start Instantly—No Email, No Account</h4>
              <p className="text-zinc-600 leading-relaxed">
                Other tools make you create an account before you can do anything. We don't. Upload your file, convert it, download it. Done. Your privacy is protected because we never ask for your email in the first place.
              </p>
            </div>
            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                <InfinityIcon className="w-6 h-6 text-zinc-400" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-4">500MB Files? No Problem.</h4>
              <p className="text-zinc-600 leading-relaxed">
                While ILovePDF caps you at 50MB and SmallPDF at 100MB, SendNow handles files up to 500MB. Convert that massive presentation or merge hundreds of pages—without compression errors or timeouts.
              </p>
            </div>
            <div className="p-8 bg-black text-white rounded-[2.5rem] ring-4 ring-zinc-900/10 shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 shadow-sm flex items-center justify-center mb-6">
                <MousePointerClick className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-serif italic">Know When Your Files Get Opened</h4>
              <p className="text-zinc-400 leading-relaxed mb-6">
                This is something no other free PDF tool offers. After converting or merging your document, optionally enable tracking to see exactly when recipients open your file.
              </p>
              <a href="https://www.sendnow.live" className="text-emerald-400 font-bold hover:underline flex items-center gap-2">
                Learn about document tracking <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-zinc-400" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-4">Don't Read—Just Ask</h4>
              <p className="text-zinc-600 leading-relaxed">
                Upload any PDF, Word doc, or PowerPoint and have a conversation with it. Ask "What are the key terms in this contract?" or "Summarize this 200-page report."
              </p>
            </div>
            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 lg:col-span-2">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-zinc-400" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-4">Enterprise-Grade Security</h4>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Your documents are protected by AES-256 encryption—the same security used by banks and governments. Files are automatically deleted from our servers after 2 hours.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "AES-256", icon: <Lock className="w-3 h-3" /> },
                  { name: "GDPR", icon: <ShieldCheck className="w-3 h-3" /> },
                  { name: "SOC 2", icon: <Shield className="w-3 h-3" /> },
                  { name: "Auto-Delete", icon: <Clock className="w-3 h-3" /> }
                ].map(tag => (
                  <span key={tag.name} className="px-4 py-1.5 bg-white border border-zinc-200 rounded-full text-xs font-bold text-zinc-500 shadow-sm flex items-center gap-2">
                    {tag.icon}
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6 font-serif">Built for How You Actually Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Sales Teams",
                icon: <Users className="w-8 h-8 text-zinc-600" />,
                bg: "bg-zinc-100",
                body: "Send proposals and know the exact moment your prospect opens them. See which pages they spend the most time on—then follow up at the perfect time."
              },
              {
                title: "Freelancers & Agencies",
                icon: <Briefcase className="w-8 h-8 text-zinc-600" />,
                bg: "bg-zinc-100",
                body: "Convert client files to any format, merge project assets, and track when deliverables are reviewed—without paying $65/month for DocSend."
              },
              {
                title: "Students & Researchers",
                icon: <GraduationCap className="w-8 h-8 text-zinc-600" />,
                bg: "bg-zinc-100",
                body: "Chat with research papers to extract key findings fast. Convert lecture slides to searchable text. Merge multiple sources into a single document."
              },
              {
                title: "Legal & HR Teams",
                icon: <Scale className="w-8 h-8 text-zinc-600" />,
                bg: "bg-zinc-100",
                body: "Convert contracts to editable formats, merge case files, and use AI to quickly locate specific clauses in lengthy legal documents."
              }
            ].map((useCase) => (
              <div key={useCase.title} className="p-10 bg-white rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 rounded-2xl ${useCase.bg} flex items-center justify-center mb-6`}>
                  {useCase.icon}
                </div>
                <h4 className="text-2xl font-bold text-zinc-900 mb-4 font-serif">{useCase.title}</h4>
                <p className="text-zinc-600 leading-relaxed">{useCase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-zinc-900 mb-16 text-center font-serif">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              { q: "Is SendNow really free?", a: "Yes. All conversion tools, AI document chat, and basic document tracking are 100% free with no sign-up required. We make money from optional premium features like advanced analytics, team collaboration, and white-label branding—but you'll never hit a paywall for basic tools." },
              { q: "Do I need to create an account?", a: "No. Unlike ILovePDF, SmallPDF, and Adobe, you can use all SendNow tools instantly without entering your email or creating an account. Just upload, convert, and download." },
              { q: "What's the maximum file size?", a: "SendNow supports files up to 500MB—that's 5-10x larger than most competitors. ILovePDF limits you to 50MB, SmallPDF to 100MB. We handle the big files others can't." },
              { q: "How many files can I convert?", a: "Unlimited. There are no hourly or daily limits on SendNow. While ILovePDF limits you to 5 files per hour and SmallPDF to 2, you can convert as many files as you need on SendNow." },
              { q: "Are my files secure?", a: "Absolutely. All uploads are encrypted with AES-256 encryption (bank-level security). Files are automatically deleted from our servers after 2 hours. We're GDPR compliant and never access, sell, or share your documents." },
              { q: "What is document tracking?", a: "Document tracking lets you see exactly when someone opens your file, which pages they view, and how long they spend reading. It's perfect for sales proposals, contracts, and client deliverables. No other free PDF tool offers this feature." },
              { q: "How does AI document chat work?", a: "Upload any PDF, Word doc, or PowerPoint file and ask questions in plain English. Our AI reads the entire document and provides accurate answers with citations to specific pages." },
              { q: "What file formats do you support?", a: "SendNow supports PDF, DOCX, DOC, PPTX, PPT, XLSX, XLS, JPG, PNG, TXT, and MD files. You can convert between most common document and image formats." },
              { q: "Do you add watermarks to converted files?", a: "No. All conversions are watermark-free, even on the free tier. Some competitors add 'Converted by [Tool Name]' watermarks to free conversions—we never do." },
              { q: "How is SendNow different from ILovePDF or SmallPDF?", a: "Three main differences: (1) No email or sign-up required—ever, (2) Document tracking to see when files are opened, and (3) AI-powered chat to ask questions about your documents. Plus larger file limits (500MB vs 50-100MB) and unlimited conversions." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-zinc-100 pb-8">
                <h4 className="text-xl font-bold text-zinc-900 mb-4 font-serif">{faq.q}</h4>
                <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Statistics Section */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {[
              { label: "Documents processed monthly", value: "500,000+", icon: <BarChart3 className="w-5 h-5" /> },
              { label: "Average rating", value: "4.8/5", icon: <Star className="w-5 h-5" /> },
              { label: "Used in countries", value: "150+", icon: <Globe2 className="w-5 h-5" /> },
              { label: "Average conversion time", value: "< 3s", icon: <Clock className="w-5 h-5" /> }
            ].map((stat) => (
              <div key={stat.label} className="text-center p-10 bg-white rounded-3xl border border-zinc-100 shadow-sm group hover:border-black transition-colors">
                <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center mx-auto mb-6 text-zinc-400 group-hover:text-black transition-colors">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-zinc-950 mb-2 font-serif">{stat.value}</div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>


          <div className="w-full overflow-hidden shadow-2xl border border-zinc-100">
            <iframe
              src="https://widget.senja.io/widget/ca6ced20-d92e-452e-a0a4-3b2274fb60c7"
              className="w-full h-[650px] border-none"
              title="Senja Testimonials"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-950 rounded-[5rem] p-12 sm:p-24 relative overflow-hidden text-center shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-7xl font-serif text-white mb-10 tracking-tight leading-tight">
                Ready to Work Smarter<br />with Documents?
              </h2>
              <p className="text-zinc-400 text-2xl mb-14 max-w-2xl mx-auto leading-relaxed font-serif italic">
                Join thousands of professionals who've switched to SendNow for faster, smarter document workflows.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <a href="#tools" className="inline-flex items-center justify-center bg-white text-black px-12 py-6 rounded-2xl font-bold text-xl hover:bg-zinc-100 transition-all active:scale-95 shadow-xl">
                  Try Free Tools Now →
                </a>
                <a href="https://www.sendnow.live" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-zinc-900 text-white px-12 py-6 rounded-2xl font-bold text-xl border border-zinc-800 hover:bg-zinc-800 transition-all">
                  Learn About Document Tracking
                </a>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
          </div>
        </div>
      </section>

      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
        }
        .marquee-content {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
