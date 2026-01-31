"use client";

import { useState, useRef, useEffect } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import FileUpload from "@/components/ui/FileUpload";
import BrandStory from "@/components/layout/BrandStory";
import { extractTextFromPPTX } from "@/lib/pptx";
import { chatWithAI } from "@/app/actions-chat";
import { Send, Loader2, User, Bot, Sparkles, X, Presentation } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function ChatWithPPTX() {
    const [file, setFile] = useState<File | null>(null);
    const [pptxText, setPptxText] = useState<string>("");
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
            setIsExtracting(true);
            setMessages([]);
            try {
                const text = await extractTextFromPPTX(selectedFile);
                setPptxText(text);
                setMessages([{ role: 'assistant', content: "I've analyzed your PowerPoint presentation. I can help you summarize the slides, explain complex topics, or find specific details. What's on your mind?" }]);
            } catch (error: any) {
                console.error("Extraction error:", error);
                alert("Failed to analyze PPTX. Please ensure it's a valid PowerPoint file.");
                setFile(null);
            } finally {
                setIsExtracting(false);
            }
        } else {
            setFile(null);
            setPptxText("");
            setMessages([]);
        }
    };

    const handleSend = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!input.trim() || !pptxText || isLoading) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await chatWithAI(pptxText, [...messages, userMessage], 'PPT');
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
            title="Chat with PPTX"
            description="Transform your presentations into interactive conversations. Upload a .pptx file and let AI help you master your content instantly."
        >
            <div className="space-y-12">
                {!file && (
                    <FileUpload
                        accept=".pptx"
                        label="Select PowerPoint to Chat With"
                        onFileSelect={handleFileSelect}
                    />
                )}

                {isExtracting && (
                    <div className="flex flex-col items-center gap-4 py-8 animate-pulse">
                        <Loader2 className="w-10 h-10 animate-spin text-brand-gradient" />
                        <p className="text-zinc-700 font-bold text-lg">Parsing slides...</p>
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
                                        <h3 className="font-black text-zinc-950 text-sm">AI PPTX Assistant</h3>
                                        <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Powered by SendNow AI</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => { setFile(null); setMessages([]); }}
                                    className="p-2 hover:bg-zinc-100 rounded-xl transition-colors text-zinc-400 hover:text-black"
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
                                                <div className={`p-4 rounded-2xl text-[15px] shadow-sm font-medium ${msg.role === 'user' ? 'bg-zinc-950 text-white rounded-tr-none' : 'bg-white border border-zinc-100 text-zinc-900 rounded-tl-none'}`}>
                                                    <ReactMarkdown
                                                        components={{
                                                            p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
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
                                                <span className="font-bold">Analyzing slides...</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <form onSubmit={handleSend} className="p-4 sm:p-6 bg-white border-t border-zinc-100 shadow-sm">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask about this presentation..."
                                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-5 pl-6 pr-16 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500/30 transition-all font-bold text-zinc-900 placeholder:text-zinc-500"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!input.trim() || isLoading || !pptxText}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-950 text-white rounded-xl flex items-center justify-center hover:bg-zinc-800 disabled:bg-zinc-200 transition-all shadow-md"
                                    >
                                        <Send className="w-6 h-6" />
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right: PPTX Content Preview */}
                        <div className="bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden flex flex-col shadow-xl">
                            <div className="bg-zinc-50 border-b border-zinc-200 p-4 px-8 flex items-center justify-between">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <Presentation className="w-4 h-4 text-emerald-600" />
                                    <span className="text-sm font-bold text-zinc-700 truncate">{file.name}</span>
                                </div>
                                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] whitespace-nowrap ml-4">Slide Text</span>
                            </div>
                            <div className="flex-grow overflow-auto p-12 bg-white whitespace-pre-wrap font-medium text-zinc-800 leading-loose">
                                {pptxText}
                            </div>
                        </div>
                    </div>
                )}

                <BrandStory />
            </div>
        </ToolLayout>
    );
}
