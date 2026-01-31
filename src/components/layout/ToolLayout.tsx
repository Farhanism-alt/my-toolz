import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface ToolLayoutProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export default function ToolLayout({ title, description, children }: ToolLayoutProps) {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link href="/" className="inline-flex items-center text-sm font-bold text-zinc-800 hover:text-black mb-8 transition-colors group">
                <ChevronLeft className="mr-1 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to tools
            </Link>

            <div className="mb-12">
                <h1 className="text-4xl sm:text-5xl font-black text-zinc-950 mb-4 tracking-tight">{title}</h1>
                <p className="text-lg text-zinc-800 font-bold leading-relaxed max-w-2xl">{description}</p>
            </div>

            <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-4 sm:p-12 shadow-sm">
                {children}
            </div>

            {/* SEO Content Section */}
            <div className="mt-20 prose prose-zinc max-w-none">
                <h2 className="text-2xl font-black mb-6">How to use {title}</h2>
                <p className="text-zinc-800 font-bold mb-8 leading-relaxed">
                    Upload your files to our secure servers, and we'll process them instantly. Our tools are free to use and don't require any registration. We prioritize your privacy and delete all files after processing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 not-prose">
                    <div className="bg-zinc-50 rounded-3xl p-8">
                        <h3 className="font-black mb-4">Fast & Secure</h3>
                        <p className="text-zinc-800 font-bold text-sm">Your files are processed in seconds using state-of-the-art technology. We use SSL encryption to ensure your data stays safe.</p>
                    </div>
                    <div className="bg-zinc-50 rounded-3xl p-8">
                        <h3 className="font-black mb-4">No Sign-up Required</h3>
                        <p className="text-zinc-800 font-bold text-sm">Start using our PDF tools immediately without creating an account. We keep it simple and efficient.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
