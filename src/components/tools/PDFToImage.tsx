"use client";

import { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import FileUpload from "@/components/ui/FileUpload";
import { pdfToImages } from "@/lib/pdf";
import { Download, Loader2, ImageIcon, Grid } from "lucide-react";
import Image from "next/image";

export default function PDFToImagePage({ tool }: { tool: 'png' | 'jpg' }) {
    const [file, setFile] = useState<File | null>(null);
    const [images, setImages] = useState<string[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleFileSelect = (files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
        } else {
            setFile(null);
            setImages([]);
        }
    };

    const processPDF = async () => {
        if (!file) return;
        setIsProcessing(true);
        try {
            const convertedImages = await pdfToImages(file, tool === 'png' ? 'png' : 'jpeg');
            setImages(convertedImages);
        } catch (error) {
            console.error("Error processing PDF:", error);
            alert("Failed to convert PDF. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    const downloadAll = () => {
        images.forEach((img, index) => {
            const link = document.createElement('a');
            link.href = img;
            link.download = `page-${index + 1}.${tool}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };

    return (
        <ToolLayout
            title={`PDF to ${tool.toUpperCase()}`}
            description={`Convert each page of your PDF into separate high-quality ${tool.toUpperCase()} images. Perfect for presentations, social media, or easy sharing.`}
        >
            <div className="space-y-12">
                <FileUpload
                    accept=".pdf"
                    label="Select PDF File"
                    onFileSelect={handleFileSelect}
                />

                {file && images.length === 0 && (
                    <div className="flex justify-center">
                        <button
                            onClick={processPDF}
                            disabled={isProcessing}
                            className="btn-cta bg-black text-white hover:bg-zinc-800 disabled:bg-zinc-400 flex items-center gap-2"
                        >
                            {isProcessing ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Converting...
                                </>
                            ) : (
                                `Convert to ${tool.toUpperCase()}`
                            )}
                        </button>
                    </div>
                )}

                {images.length > 0 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-zinc-900">{images.length} Pages Converted</h3>
                            <button
                                onClick={downloadAll}
                                className="btn-cta bg-black text-white py-3 px-6 text-sm"
                            >
                                Download All Images
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {images.map((img, index) => (
                                <div key={index} className="group relative bg-zinc-50 border border-zinc-100 rounded-3xl overflow-hidden aspect-[1/1.4]">
                                    <Image
                                        src={img}
                                        alt={`Page ${index + 1}`}
                                        fill
                                        className="object-contain p-4"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                                        <a
                                            href={img}
                                            download={`page-${index + 1}.${tool}`}
                                            className="opacity-0 group-hover:opacity-100 bg-white text-black p-3 rounded-2xl shadow-lg transition-all transform translate-y-2 group-hover:translate-y-0"
                                        >
                                            <Download className="w-5 h-5" />
                                        </a>
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-zinc-500">
                                        Page {index + 1}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </ToolLayout>
    );
}
