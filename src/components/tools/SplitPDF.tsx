"use client";

import { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import FileUpload from "@/components/ui/FileUpload";
import { splitPdf } from "@/lib/pdf";
import { Download, Loader2, Scissors, FileDigit } from "lucide-react";

export default function SplitPDFPage() {
    const [file, setFile] = useState<File | null>(null);
    const [pages, setPages] = useState<string>("");
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleFileSelect = (files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
        } else {
            setFile(null);
            setPdfUrl(null);
        }
    };

    const handleSplit = async () => {
        if (!file || !pages) return;

        // Parse pages: "1, 2, 5-8"
        const pageSelection: number[] = [];
        const parts = pages.split(',').map(p => p.trim());

        parts.forEach(part => {
            if (part.includes('-')) {
                const [start, end] = part.split('-').map(Number);
                for (let i = start; i <= end; i++) {
                    pageSelection.push(i);
                }
            } else {
                pageSelection.push(Number(part));
            }
        });

        const validPages = pageSelection.filter(p => !isNaN(p) && p > 0);
        if (validPages.length === 0) {
            alert("Please enter valid page numbers (e.g., 1, 2, 5-8)");
            return;
        }

        setIsProcessing(true);
        try {
            const pdfBytes = await splitPdf(file, validPages);
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
            setPdfUrl(URL.createObjectURL(blob));
        } catch (error) {
            console.error("Error splitting PDF:", error);
            alert("Failed to split PDF. Make sure page numbers are within range.");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <ToolLayout
            title="Split PDF"
            description="Extract specific pages from your PDF or split it into separate files. Easily customize your documents by selecting exactly what you need."
        >
            <div className="space-y-12">
                <FileUpload
                    accept=".pdf"
                    label="Select PDF to Split"
                    onFileSelect={handleFileSelect}
                />

                {file && !pdfUrl && (
                    <div className="space-y-8 animate-in fade-in zoom-in-95">
                        <div className="bg-zinc-50 border border-zinc-100 rounded-[2rem] p-8">
                            <label className="block text-sm font-bold text-zinc-900 mb-4 flex items-center gap-2">
                                <FileDigit className="w-5 h-5" />
                                Enter Page Numbers
                            </label>
                            <input
                                type="text"
                                value={pages}
                                onChange={(e) => setPages(e.target.value)}
                                placeholder="e.g., 1, 2, 5-8"
                                className="w-full bg-white border border-zinc-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                            />
                            <p className="mt-4 text-xs text-zinc-500">
                                Use commas for separate pages and dashes for ranges.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={handleSplit}
                                disabled={isProcessing || !pages}
                                className="btn-cta bg-black text-white hover:bg-zinc-800 disabled:bg-zinc-400 flex items-center gap-2"
                            >
                                {isProcessing ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Splitting PDF...
                                    </>
                                ) : (
                                    <>
                                        <Scissors className="w-5 h-5" />
                                        Split & Extract
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}

                {pdfUrl && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-zinc-50 border border-zinc-100 rounded-[2.5rem] p-12 flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-zinc-100">
                                <Scissors className="w-10 h-10 text-indigo-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 mb-2">Split PDF Ready!</h3>
                            <p className="text-zinc-500 mb-10 max-w-xs">Your extracted pages have been compiled into a new PDF document.</p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                <a
                                    href={pdfUrl}
                                    download={`split-${Date.now()}.pdf`}
                                    className="btn-cta bg-black text-white flex items-center justify-center gap-2"
                                >
                                    <Download className="w-5 h-5" />
                                    Download PDF
                                </a>
                                <button
                                    onClick={() => { setPdfUrl(null); setPages(""); }}
                                    className="px-8 py-4 rounded-2xl font-semibold border border-zinc-200 hover:bg-zinc-50 transition-colors"
                                >
                                    Extract More
                                </button>
                            </div>
                        </div>

                        <div className="border border-zinc-100 rounded-[2.5rem] overflow-hidden bg-zinc-100 h-[600px]">
                            <iframe src={pdfUrl} className="w-full h-full" />
                        </div>
                    </div>
                )}
            </div>
        </ToolLayout>
    );
}
