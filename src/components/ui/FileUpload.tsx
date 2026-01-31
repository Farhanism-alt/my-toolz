"use client";

import { useState, useRef } from "react";
import { Upload, X, File, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FileUploadProps {
    accept: string;
    label: string;
    onFileSelect: (files: File[]) => void;
    multiple?: boolean;
}

export default function FileUpload({ accept, label, onFileSelect, multiple = false }: FileUploadProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            handleFiles(files);
        }
    };

    const handleFiles = (files: File[]) => {
        const acceptList = accept.split(',').map(a => a.trim().toLowerCase());

        const validFiles = files.filter(file => {
            const extension = `.${file.name.split('.').pop()?.toLowerCase()}`;
            const mimeType = file.type.toLowerCase();

            return acceptList.some(pattern => {
                if (pattern.startsWith('.')) {
                    return pattern === extension;
                }
                if (pattern.endsWith('/*')) {
                    const baseType = pattern.split('/')[0];
                    return mimeType.startsWith(`${baseType}/`);
                }
                return pattern === mimeType;
            });
        });

        if (multiple) {
            const newFiles = [...selectedFiles, ...validFiles];
            setSelectedFiles(newFiles);
            onFileSelect(newFiles);
        } else {
            setSelectedFiles(validFiles.slice(0, 1));
            onFileSelect(validFiles.slice(0, 1));
        }
    };

    const removeFile = (index: number) => {
        const newFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(newFiles);
        onFileSelect(newFiles);
    };

    return (
        <div className="w-full">
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative group cursor-pointer border-2 border-dashed rounded-[2rem] p-12 transition-all duration-300 flex flex-col items-center justify-center text-center
          ${isDragging ? "border-black bg-zinc-50 scale-[1.01]" : "border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50/50"}`}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileInput}
                    accept={accept}
                    multiple={multiple}
                    className="hidden"
                />

                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-transform duration-300 ${isDragging ? "bg-brand-gradient text-white scale-110 shadow-xl" : "bg-zinc-100 text-zinc-600 group-hover:scale-105 group-hover:bg-zinc-200"}`}>
                    <Upload className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-black text-zinc-950 mb-2">{label}</h3>
                <p className="text-zinc-800 font-bold max-w-xs leading-relaxed">
                    Drag and drop your files here, or click to browse. Supported format: {accept.replace(/\./g, '').toUpperCase()}
                </p>
            </div>

            <AnimatePresence>
                {selectedFiles.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-8 space-y-3"
                    >
                        {selectedFiles.map((file, index) => (
                            <div key={`${file.name}-${index}`} className="flex items-center justify-between p-4 bg-zinc-50 border border-zinc-100 rounded-2xl">
                                <div className="flex items-center min-w-0">
                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-zinc-100 mr-4 shrink-0">
                                        <File className="w-5 h-5 text-zinc-400" />
                                    </div>
                                    <div className="truncate">
                                        <p className="text-sm font-semibold text-zinc-900 truncate">{file.name}</p>
                                        <p className="text-xs text-zinc-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                    </div>
                                </div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                                    className="p-2 hover:bg-zinc-200 rounded-xl transition-colors text-zinc-400 hover:text-zinc-600"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
