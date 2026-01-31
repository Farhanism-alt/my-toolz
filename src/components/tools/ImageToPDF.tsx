"use client";

import { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import FileUpload from "@/components/ui/FileUpload";
import { imagesToPdf } from "@/lib/pdf";
import { Download, Loader2, FileType } from "lucide-react";

export default function ImageToPDF({ tool }: { tool: 'png' | 'jpg' }) {
    const [files, setFiles] = useState<File[]>([]);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleFileSelect = (newFiles: File[]) => {
        setFiles(newFiles);
        setPdfUrl(null);
    };

    const processImages = async () => {
        if (files.length === 0) return;
        setIsProcessing(true);
        try {
            const pdfBytes = await imagesToPdf(files);
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
            setPdfUrl(URL.createObjectURL(blob));
        } catch (error) {
            console.error("Error creating PDF:", error);
            alert("Failed to create PDF. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <ToolLayout
            title={`${tool.toUpperCase()} to PDF`}
            description={`Convert your ${tool.toUpperCase()} images into a high-quality PDF document. You can upload multiple images to create a single multi-page PDF.`}
        >
            <div className="space-y-12">
                <FileUpload
                    accept={tool === 'png' ? ".png" : ".jpg,.jpeg"}
                    label={`Select ${tool.toUpperCase()} Images`}
                    onFileSelect={handleFileSelect}
                    multiple={true}
                />

                {files.length > 0 && !pdfUrl && (
                    <div className="flex justify-center">
                        <button
                            onClick={processImages}
                            disabled={isProcessing}
                            className="btn-cta bg-black text-white hover:bg-zinc-800 disabled:bg-zinc-400 flex items-center gap-2"
                        >
                            {isProcessing ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Creating PDF...
                                </>
                            ) : (
                                `Convert ${files.length} images to PDF`
                            )}
                        </button>
                    </div>
                )}

                {pdfUrl && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-zinc-50 border border-zinc-100 rounded-[2.5rem] p-12 flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-zinc-100">
                                <FileType className="w-10 h-10 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 mb-2">PDF Ready!</h3>
                            <p className="text-zinc-500 mb-10 max-w-xs">Your images have been successfully converted into a multi-page PDF.</p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                <a
                                    href={pdfUrl}
                                    download={`converted-${Date.now()}.pdf`}
                                    className="btn-cta bg-black text-white flex items-center justify-center gap-2"
                                >
                                    <Download className="w-5 h-5" />
                                    Download PDF
                                </a>
                                <button
                                    onClick={() => { setFiles([]); setPdfUrl(null); }}
                                    className="px-8 py-4 rounded-2xl font-semibold border border-zinc-200 hover:bg-zinc-50 transition-colors"
                                >
                                    Start Over
                                </button>
                            </div>
                        </div>

                        {/* Preview Frame */}
                        <div className="border border-zinc-100 rounded-[2.5rem] overflow-hidden bg-zinc-100 h-[600px]">
                            <iframe src={pdfUrl} className="w-full h-full" />
                        </div>
                    </div>
                )}
            </div>
        </ToolLayout>
    );
}
