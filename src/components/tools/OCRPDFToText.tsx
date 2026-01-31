"use client";

import { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import FileUpload from "@/components/ui/FileUpload";
import { pdfToImages } from "@/lib/pdf";
import { processOCR } from "@/app/actions";
import { Copy, Download, Loader2, Check, AlertCircle } from "lucide-react";

export default function OCRPDFToTextPage() {
    const [file, setFile] = useState<File | null>(null);
    const [text, setText] = useState<string>("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [currentStep, setCurrentStep] = useState<string>("");
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileSelect = (files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
        } else {
            setFile(null);
            setText("");
            setError(null);
        }
    };

    const handleOCR = async () => {
        if (!file) return;
        setIsProcessing(true);
        setError(null);
        setText("");

        try {
            setCurrentStep("Converting PDF pages to images...");
            const images = await pdfToImages(file);

            let fullExtractedText = "";
            for (let i = 0; i < images.length; i++) {
                setCurrentStep(`Processing page ${i + 1} of ${images.length}...`);
                const pageText = await processOCR(images[i]);
                fullExtractedText += pageText + "\n\n";
            }

            setText(fullExtractedText);
        } catch (err: any) {
            console.error("OCR Error:", err);
            setError(err.message || "Failed to process OCR. Make sure your OpenAI API key is correctly configured.");
        } finally {
            setIsProcessing(false);
            setCurrentStep("");
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
        element.download = "ocr-extracted-text.txt";
        document.body.appendChild(element);
        element.click();
    };

    return (
        <ToolLayout
            title="OCR PDF to Text"
            description="Extract text from scanned PDF documents and images within PDFs. Our AI-powered OCR technology accurately recognizes text even in low-quality scans."
        >
            <div className="space-y-12">
                <FileUpload
                    accept=".pdf"
                    label="Select Scanned PDF"
                    onFileSelect={handleFileSelect}
                />

                {file && !text && (
                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={handleOCR}
                            disabled={isProcessing}
                            className="btn-cta bg-black text-white hover:bg-zinc-800 disabled:bg-zinc-400 flex items-center gap-2"
                        >
                            {isProcessing ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    {currentStep || "Processing..."}
                                </>
                            ) : (
                                "Start AI OCR"
                            )}
                        </button>
                        {isProcessing && (
                            <p className="text-sm text-zinc-500 animate-pulse">{currentStep}</p>
                        )}
                    </div>
                )}

                {error && (
                    <div className="p-6 bg-red-50 border border-red-100 rounded-[2rem] flex items-start gap-4 text-red-600 animate-in fade-in zoom-in-95">
                        <AlertCircle className="w-6 h-6 shrink-0 mt-0.5" />
                        <div>
                            <p className="font-bold mb-1">OCR Processing Error</p>
                            <p className="text-sm opacity-90">{error}</p>
                            <p className="text-xs mt-4 opacity-70 italic">Note: This feature requires a valid OPENAI_API_KEY in the .env.local file.</p>
                        </div>
                    </div>
                )}

                {text && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-zinc-900">Extracted AI Text</h3>
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
