"use client";

import { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import FileUpload from "@/components/ui/FileUpload";
import BrandStory from "@/components/layout/BrandStory";
import { convertWordToHtml } from "@/lib/word";
import { Copy, Download, FileCode, Check, Loader2, X } from "lucide-react";
import { saveAs } from "file-saver";

// Simple HTML to Markdown converter (basic)
function htmlToMarkdown(html: string): string {
    let md = html;
    md = md.replace(/<p>([\s\S]*?)<\/p>/gi, "$1\n\n");
    md = md.replace(/<strong>([\s\S]*?)<\/strong>/gi, "**$1**");
    md = md.replace(/<em>([\s\S]*?)<\/em>/gi, "_$1_");
    md = md.replace(/<h1>([\s\S]*?)<\/h1>/gi, "# $1\n\n");
    md = md.replace(/<h2>([\s\S]*?)<\/h2>/gi, "## $1\n\n");
    md = md.replace(/<h3>([\s\S]*?)<\/h3>/gi, "### $1\n\n");
    md = md.replace(/<ul>([\s\S]*?)<\/ul>/gi, "$1\n");
    md = md.replace(/<li>([\s\S]*?)<\/li>/gi, "* $1\n");
    md = md.replace(/<ol>([\s\S]*?)<\/ol>/gi, "$1\n");
    md = md.replace(/<br\s*\/?>/gi, "  \n");
    // Clean up remaining tags
    md = md.replace(/<[^>]+>/g, "");
    // Unescape entities
    md = md.replace(/&nbsp;/g, " ");
    md = md.replace(/&lt;/g, "<");
    md = md.replace(/&gt;/g, ">");
    md = md.replace(/&amp;/g, "&");
    return md.trim();
}

export default function WordToMarkdown() {
    const [file, setFile] = useState<File | null>(null);
    const [markdown, setMarkdown] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleFileSelect = async (files: File[]) => {
        if (files.length > 0) {
            const selectedFile = files[0];
            setFile(selectedFile);
            setIsLoading(true);
            try {
                const html = await convertWordToHtml(selectedFile);
                const md = htmlToMarkdown(html);
                setMarkdown(md);
            } catch (error) {
                console.error("Conversion error:", error);
                alert("Failed to convert Word document to Markdown.");
                setFile(null);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleCopy = () => {
        if (!markdown) return;
        navigator.clipboard.writeText(markdown);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        if (!markdown || !file) return;
        const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
        saveAs(blob, file.name.replace(/\.docx$/i, ".md"));
    };

    return (
        <ToolLayout
            title="Word to Markdown"
            description="Instantly convert Word documents (.docx) to clean, web-ready Markdown. Perfect for developers, bloggers, and tech writers."
        >
            <div className="space-y-12">
                {!file && (
                    <FileUpload
                        accept=".docx"
                        label="Upload Word Document"
                        onFileSelect={handleFileSelect}
                    />
                )}

                {isLoading && (
                    <div className="flex flex-col items-center gap-4 py-8 animate-pulse text-brand-gradient">
                        <Loader2 className="w-10 h-10 animate-spin" />
                        <p className="font-bold text-lg">Converting to Markdown...</p>
                    </div>
                )}

                {markdown && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-brand-gradient rounded-xl flex items-center justify-center text-white shadow-lg">
                                    <FileCode className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-black text-zinc-950 text-sm">Converted Markdown</h3>
                                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{file?.name}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-xl font-bold text-sm transition-all"
                                >
                                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                                    {copied ? "Copied!" : "Copy"}
                                </button>
                                <button
                                    onClick={handleDownload}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl font-bold text-sm transition-all shadow-md"
                                >
                                    <Download className="w-4 h-4" />
                                    Download .md
                                </button>
                                <button
                                    onClick={() => { setFile(null); setMarkdown(""); }}
                                    className="p-2.5 bg-zinc-100 hover:bg-red-50 text-zinc-400 hover:text-red-500 rounded-xl transition-all"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-brand-gradient opacity-[0.03] rounded-3xl -m-1" />
                            <textarea
                                value={markdown}
                                readOnly
                                className="w-full h-[500px] p-8 bg-white border border-zinc-100 rounded-[2rem] font-mono text-sm leading-relaxed focus:outline-none resize-none shadow-inner"
                            />
                        </div>
                    </div>
                )}

                <BrandStory />
            </div>
        </ToolLayout>
    );
}
