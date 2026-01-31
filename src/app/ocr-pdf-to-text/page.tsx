"use client";

import dynamic from "next/dynamic";
import { CheckCircle2, FileText, Shield, Zap, HelpCircle, ArrowRight, Laptop, Search, BookOpen, Briefcase, Camera, Scan, FileSearch, Scale } from "lucide-react";

const OCRPDFToText = dynamic(() => import("@/components/tools/OCRPDFToText"), { ssr: false });

export default function OCRPDFToTextPage() {
    return (
        <div className="bg-white">
            <OCRPDFToText />

            {/* SEO Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {/* Why Use OCR for PDF? */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 text-center">Why Use OCR for PDF?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Scan className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Digitize Scanned Documents</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Turn physical papers scanned into PDFs back into editable text. Perfect for digitizing old archives or paper forms.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <Camera className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Extract Text from Images</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Convert PDFs made of image snapshots or photos into structured text that you can search and copy.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <FileSearch className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Make Scans Searchable</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    Traditional scanners create images. OCR analyzes the characters so you can finally use Ctrl+F on your scans.
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-500">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4">Recover Uncopyable Text</h3>
                                <p className="text-zinc-700 font-bold leading-relaxed">
                                    If a PDF has "select disabled" or uses non-standard fonts, OCR reads the visual shapes to extract the text.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Common Use Cases */}
                    <section className="bg-zinc-950 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gradient opacity-10 blur-[100px] -mr-48 -mt-48" />
                        <h2 className="text-3xl font-black mb-16 text-center relative z-10">Common Use Cases</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Scale className="w-6 h-6 text-emerald-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-emerald-400">Legal Firms</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Digitizing paper contracts</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extracting text from evidence</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Searchable discovery docs</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Briefcase className="w-6 h-6 text-blue-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-blue-400">Healthcare</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Scanning medical records</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extracting patient data</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Archivists digitization</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Laptop className="w-6 h-6 text-purple-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-purple-400">Archivists</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Preserve historical documents</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Create digital text libraries</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Index old PDF publications</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Search className="w-6 h-6 text-orange-400" />
                                    <h3 className="text-lg font-black uppercase tracking-widest text-orange-400">Data Analysts</h3>
                                </div>
                                <ul className="space-y-4 text-zinc-400 font-bold text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Extract text from image tables</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Process legacy PDF invoices</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" /> Automate digitization tasks</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* OCR Tech */}
                    <section className="bg-zinc-50 rounded-[3rem] p-8 md:p-16 border border-zinc-100">
                        <h2 className="text-3xl font-black text-zinc-950 mb-8 text-center text-center">AI-Powered OCR Technology</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                                        <Scan className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">99% Accuracy</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Our advanced neural networks identify characters even in low-quality scans.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                                        <BookOpen className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Multi-Language Support</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Supports 50+ languages including English, Spanish, French, and German.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                                        <Shield className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black">Auto-Rotation</h4>
                                        <p className="text-sm text-zinc-600 font-bold leading-relaxed">Automatically detects and corrects page orientation for better extraction.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl">
                                <h4 className="font-black mb-6">OCR Specs</h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Max File Size</span>
                                        <span className="text-zinc-950">25MB</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold border-b border-zinc-100 pb-2">
                                        <span className="text-zinc-600">Max Pages</span>
                                        <span className="text-zinc-950">50 Pages</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm font-bold">
                                        <span className="text-zinc-600">Engine</span>
                                        <span className="text-zinc-950">Deep Learning OCR</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-3xl font-black text-zinc-950 mb-12 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-emerald-600" />
                            FAQs for OCR PDF to Text
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { q: "How does OCR differ from standard extraction?", a: "Standard extraction reads digital text layers. OCR analyzes pixels to identify shapes as characters, working for photos and scans." },
                                { q: "Can it read handwritten notes?", a: "It works best with printed text. Clear handwriting may work, but accuracy is lower." },
                                { q: "Does it preserve the layout?", a: "It extracts text in reading order. Columns and tables are approximated as text blocks." },
                                { q: "What languages are supported?", a: "50+ languages including English, Spanish, French, Chinese, and Arabic." },
                                { q: "How long does OCR take?", a: "OCR is intensive. Expect 3-5 seconds per page depending on complexity." },
                                { q: "Is there a page limit?", a: "Currently up to 50 pages per document for high-quality OCR." },
                                { q: "Can it read low-quality scans?", a: "Yes, though accuracy decreases with heavy blur or noise. Try to provide clear scans." },
                                { q: "Is my data privacy protected?", a: "Absolutely. Data is encrypted and deleted immediately after the OCR process." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                                    <h4 className="font-black text-zinc-950 mb-3">Q: {item.q}</h4>
                                    <p className="text-zinc-700 font-bold text-sm leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-brand-gradient rounded-[3rem] p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                            <h2 className="text-4xl font-black leading-tight">Securely Track Your Digitized PDFs</h2>
                            <p className="text-xl font-bold opacity-90">
                                Now that your documents are digital and searchable, track exactly who opens them with SendNow.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://www.sendnow.live"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
                                >
                                    Try Secure Document Tracking <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                            <p className="text-sm font-black uppercase tracking-widest opacity-70">
                                Password protect your PDFs • Set expiration dates • Get open alerts
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
