"use client";

import { useState, useRef, useEffect } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import FileUpload from "@/components/ui/FileUpload";
import BrandStory from "@/components/layout/BrandStory";
import { extractTextFromPDF } from "@/lib/pdf";
import { chatWithAI } from "@/app/actions-chat";
import { Send, Loader2, User, Bot, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function ChatWithPDF() {
    const [file, setFile] = useState<File | null>(null);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [pdfText, setPdfText] = useState<string>("");
    const [isExtracting, setIsExtracting] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleFileSelect = async (files: File[]) => {
        if (files.length > 0) {
            const selectedFile = files[0];
            setFile(selectedFile);
            setPdfUrl(URL.createObjectURL(selectedFile));
            setIsExtracting(true);
            setMessages([]);
            try {
                const text = await extractTextFromPDF(selectedFile);
                setPdfText(text);
                setMessages([{ role: 'assistant', content: "Hello! I've analyzed your PDF. What would you like to know about it?" }]);
            } catch (error: any) {
                console.error("Extraction error:", error);
                alert(error.message || "Failed to extract text from PDF. Please try a different file.");
            } finally {
                setIsExtracting(false);
            }
        } else {
            setFile(null);
            setPdfUrl(null);
            setPdfText("");
            setMessages([]);
        }
    };

    const handleSend = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!input.trim() || !pdfText || isLoading) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await chatWithAI(pdfText, [...messages, userMessage], 'PDF');
            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error while processing your request." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ToolLayout
            title="Chat with PDF"
            description="Experience the future of document analysis. Upload any PDF and ask questions, summarize content, or extract specific data instantly using AI."
        >
            <div className="space-y-12">
                {!file && (
                    <FileUpload
                        accept=".pdf"
                        label="Select PDF to Chat With"
                        onFileSelect={handleFileSelect}
                    />
                )}

                {isExtracting && (
                    <div className="flex flex-col items-center gap-4 py-8 animate-pulse">
                        <Loader2 className="w-10 h-10 animate-spin text-brand-gradient" />
                        <p className="text-zinc-700 font-bold text-lg">Analyzing document content...</p>
                    </div>
                )}

                {file && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-[750px] min-h-[600px] animate-in fade-in zoom-in-95 duration-500">
                        {/* Left: Chat Panel */}
                        <div className="bg-zinc-50 border border-zinc-100 rounded-[2.5rem] overflow-hidden flex flex-col h-full shadow-inner relative">
                            <div className="bg-white border-b border-zinc-100 p-4 sm:p-6 flex items-center justify-between shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-brand-gradient rounded-xl flex items-center justify-center shadow-lg">
                                        <Sparkles className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-zinc-950">AI Document Assistant</h3>
                                        <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Powered by SendNow AI</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => { setFile(null); setPdfUrl(null); setMessages([]); }}
                                    className="p-2 hover:bg-zinc-100 rounded-xl transition-colors text-zinc-400 hover:text-black"
                                    title="Close and upload new file"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div ref={scrollRef} className="flex-grow overflow-auto p-4 sm:p-6 space-y-6 scroll-smooth bg-zinc-50/30">
                                <AnimatePresence initial={false}>
                                    {messages.map((msg, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`flex gap-3 max-w-[90%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-zinc-950 text-white' : 'bg-brand-gradient text-white'}`}>
                                                    {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                                                </div>
                                                <div className={`p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm font-medium ${msg.role === 'user' ? 'bg-zinc-950 text-white rounded-tr-none' : 'bg-white border border-zinc-100 text-zinc-900 rounded-tl-none'}`}>
                                                    <ReactMarkdown
                                                        components={{
                                                            p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                                            ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
                                                            ol: ({ children }) => <ol className="list-decimal ml-4 mb-2">{children}</ol>,
                                                            li: ({ children }) => <li className="mb-1">{children}</li>,
                                                            h1: ({ children }) => <h1 className="text-lg font-black mb-2">{children}</h1>,
                                                            h2: ({ children }) => <h2 className="text-md font-black mb-2">{children}</h2>,
                                                            h3: ({ children }) => <h3 className="text-sm font-black mb-2">{children}</h3>,
                                                            strong: ({ children }) => <strong className="font-black text-black">{children}</strong>,
                                                        }}
                                                    >
                                                        {msg.content}
                                                    </ReactMarkdown>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="flex gap-3 max-w-[80%]">
                                            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-brand-gradient text-white shadow-sm">
                                                <Bot className="w-5 h-5" />
                                            </div>
                                            <div className="p-4 bg-white border border-zinc-100 text-zinc-900 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-3">
                                                <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                                                <span className="font-bold">Thinking...</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <form onSubmit={handleSend} className="p-4 sm:p-6 bg-white border-t border-zinc-100 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)]">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask specialized questions about this document..."
                                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-5 pl-6 pr-16 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500/30 transition-all font-bold text-zinc-900 placeholder:text-zinc-500"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!input.trim() || isLoading || !pdfText}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:bg-zinc-800 disabled:bg-zinc-200 transition-all active:scale-95 shadow-md"
                                    >
                                        <Send className="w-6 h-6" />
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right: PDF Preview */}
                        <div className="bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden flex flex-col shadow-xl">
                            <div className="bg-zinc-50 border-b border-zinc-200 p-4 px-8 flex items-center justify-between">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-sm font-bold text-zinc-700 truncate">{file.name}</span>
                                </div>
                                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] whitespace-nowrap ml-4">Live Preview</span>
                            </div>
                            <iframe
                                src={pdfUrl || ""}
                                className="w-full h-full border-none bg-zinc-100"
                                title="PDF Document Preview"
                            />
                        </div>
                    </div>
                )}

                <BrandStory />
            </div>
        </ToolLayout>
    );
}
