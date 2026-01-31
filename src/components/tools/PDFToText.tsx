"use client";

import { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import FileUpload from "@/components/ui/FileUpload";
import { extractTextFromPDF } from "@/lib/pdf";
import { Copy, Download, Loader2, Check } from "lucide-react";

export default function PDFToText() {
    const [file, setFile] = useState<File | null>(null);
    const [text, setText] = useState<string>("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleFileSelect = (files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
        } else {
            setFile(null);
            setText("");
        }
    };

    const processPDF = async () => {
        if (!file) return;
        setIsProcessing(true);
        try {
            const extractedText = await extractTextFromPDF(file);
            setText(extractedText);
        } catch (error) {
            console.error("Error processing PDF:", error);
            alert("Failed to process PDF. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const downloadText = () => {
        const element = document.createElement("a");
        const fileBlob = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(fileBlob);
        element.download = "extracted-text.txt";
        document.body.appendChild(element);
        element.click();
    };

    return (
        <ToolLayout
            title="PDF to Text"
            description="Extract text from any PDF document instantly. Our tool uses advanced parsing to preserve the structure and content of your documents."
        >
            <div className="space-y-12">
                <FileUpload
                    accept=".pdf"
                    label="Select PDF File"
                    onFileSelect={handleFileSelect}
                />

                {file && !text && (
                    <div className="flex justify-center">
                        <button
                            onClick={processPDF}
                            disabled={isProcessing}
                            className="btn-cta bg-black text-white hover:bg-zinc-800 disabled:bg-zinc-400 flex items-center gap-2"
                        >
                            {isProcessing ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                "Extract Text"
                            )}
                        </button>
                    </div>
                )}

                {text && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-zinc-900">Extracted Text</h3>
                            <div className="flex gap-2">
                                <button
                                    onClick={copyToClipboard}
                                    className="p-3 bg-zinc-100 hover:bg-zinc-200 rounded-2xl transition-colors relative group"
                                >
                                    {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-zinc-600" />}
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {copied ? "Copied!" : "Copy to clipboard"}
                                    </span>
                                </button>
                                <button
                                    onClick={downloadText}
                                    className="p-3 bg-zinc-100 hover:bg-zinc-200 rounded-2xl transition-colors relative group"
                                >
                                    <Download className="w-5 h-5 text-zinc-600" />
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        Download .txt
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="w-full h-[400px] bg-zinc-50 border border-zinc-100 rounded-[2rem] p-8 overflow-auto font-mono text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap">
                            {text}
                        </div>
                    </div>
                )}
            </div>
        </ToolLayout>
    );
}
