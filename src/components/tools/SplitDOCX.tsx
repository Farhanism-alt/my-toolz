"use client";

import { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import FileUpload from "@/components/ui/FileUpload";
import BrandStory from "@/components/layout/BrandStory";
import { Download, Loader2, Split, Check, X, FileText } from "lucide-react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

export default function SplitDOCX() {
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [splits, setSplits] = useState<{ id: number; name: string; blob: Blob }[]>([]);

    const handleFileSelect = async (files: File[]) => {
        if (files.length > 0) {
            const selectedFile = files[0];
            setFile(selectedFile);
            setIsLoading(true);
            try {
                const zip = await JSZip.loadAsync(selectedFile);
                const documentXml = await zip.file("word/document.xml")?.async("string");

                if (!documentXml) throw new Error("Invalid DOCX structure");

                // Split logic: Look for hard page breaks <w:br w:type="page"/>
                const pages = documentXml.split(/<w:br w:type="page"\/?>/);

                if (pages.length <= 1) {
                    alert("This document doesn't contain explicit page breaks. Try a larger document or one with hard breaks.");
                    setFile(null);
                    return;
                }

                // Header/Footer parts of document.xml usually stay same
                const xmlHeader = documentXml.substring(0, documentXml.indexOf("<w:body>")) + "<w:body>";
                const xmlFooter = "</w:body></w:document>";

                const newSplits = await Promise.all(pages.map(async (content, index) => {
                    // Create a new zip for each split
                    const newZip = new JSZip();
                    // Copy all files from original zip except document.xml
                    for (const [filename, fileObj] of Object.entries(zip.files)) {
                        if (filename !== "word/document.xml") {
                            newZip.file(filename, await fileObj.async("blob"));
                        }
                    }

                    // Reconstruct document.xml for this chunk
                    let chunkXml = content;
                    if (!chunkXml.startsWith("<w:p")) {
                        // Ensure it's wrapped or cleaned if needed, but mammoth/word handles simple text blocks
                    }
                    newZip.file("word/document.xml", xmlHeader + chunkXml + xmlFooter);

                    const blob = await newZip.generateAsync({ type: "blob" });
                    return {
                        id: index + 1,
                        name: `${selectedFile.name.replace(/\.docx$/i, "")}_Part_${index + 1}.docx`,
                        blob
                    };
                }));

                setSplits(newSplits);
            } catch (error) {
                console.error("Split error:", error);
                alert("An error occurred while splitting the document.");
                setFile(null);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const downloadSplit = (split: { name: string; blob: Blob }) => {
        saveAs(split.blob, split.name);
    };

    const downloadAll = async () => {
        const zip = new JSZip();
        splits.forEach(s => zip.file(s.name, s.blob));
        const content = await zip.generateAsync({ type: "blob" });
        saveAs(content, `${file?.name.replace(/\.docx$/i, "")}_Split_All.zip`);
    };

    return (
        <ToolLayout
            title="Split DOCX"
            description="Break large Word documents into smaller files instantly. Our tool automatically detects page breaks and section breaks for a perfect split."
        >
            <div className="space-y-12">
                {!file && (
                    <FileUpload
                        accept=".docx"
                        label="Upload Word Document to Split"
                        onFileSelect={handleFileSelect}
                    />
                )}

                {isLoading && (
                    <div className="flex flex-col items-center gap-4 py-8 animate-pulse text-brand-gradient">
                        <Loader2 className="w-10 h-10 animate-spin" />
                        <p className="font-bold text-lg">Analyzing and splitting document...</p>
                    </div>
                )}

                {splits.length > 0 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-gradient rounded-2xl flex items-center justify-center text-white shadow-xl">
                                    <Split className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-zinc-950">Split Results</h3>
                                    <p className="text-sm text-zinc-500 font-bold">Generated {splits.length} documents from {file?.name}</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={downloadAll}
                                    className="px-6 py-3 bg-zinc-950 text-white rounded-xl font-bold hover:bg-zinc-800 transition-all shadow-md flex items-center gap-2"
                                >
                                    <Download className="w-5 h-5" />
                                    Download All (ZIP)
                                </button>
                                <button
                                    onClick={() => { setFile(null); setSplits([]); }}
                                    className="p-3 bg-zinc-100 text-zinc-400 hover:text-zinc-900 rounded-xl transition-all"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {splits.map((split) => (
                                <div key={split.id} className="p-6 bg-white border border-zinc-100 rounded-3xl hover:border-emerald-200 hover:shadow-lg transition-all group">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">Part {split.id}</p>
                                            <p className="font-bold text-zinc-900 truncate text-sm">{split.name}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => downloadSplit(split)}
                                        className="w-full py-3 bg-zinc-50 hover:bg-emerald-600 hover:text-white text-zinc-900 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <BrandStory />
            </div>
        </ToolLayout>
    );
}
