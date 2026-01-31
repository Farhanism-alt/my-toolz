import * as pdfjsLib from 'pdfjs-dist';
import { PDFDocument } from 'pdf-lib';

// Set worker source for pdfjs-dist
if (typeof window !== 'undefined') {
    const version = pdfjsLib.version;
    // Using unpkg with explicit version and .mjs for newer pdfjs-dist versions
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.mjs`;
}

export async function extractTextFromPDF(file: File): Promise<string> {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        const pdf = await loadingTask.promise;
        let fullText = "";

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();

            // Text content items can be of different types, usually text items have 'str'
            const pageText = content.items
                .map((item: any) => item.str || "")
                .join(" ");

            fullText += pageText + "\n\n";
        }

        if (!fullText.trim()) {
            throw new Error("No text content found in PDF. It might be a scanned document or image-based PDF.");
        }

        return fullText;
    } catch (error: any) {
        console.error("Error in extractTextFromPDF:", error);
        throw new Error(error.message || "Failed to parse PDF document.");
    }
}

export async function pdfToImages(file: File, format: 'png' | 'jpeg' = 'png'): Promise<string[]> {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    const images: string[] = [];

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2.0 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) continue;

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport } as any).promise;
        images.push(canvas.toDataURL(`image/${format}`));
    }

    return images;
}

export async function imagesToPdf(files: File[]): Promise<Uint8Array> {
    const pdfDoc = await PDFDocument.create();

    for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        let image;

        if (file.type === 'image/png') {
            image = await pdfDoc.embedPng(arrayBuffer);
        } else {
            image = await pdfDoc.embedJpg(arrayBuffer);
        }

        const { width, height } = image.scale(1);
        const page = pdfDoc.addPage([width, height]);
        page.drawImage(image, {
            x: 0,
            y: 0,
            width,
            height,
        });
    }

    return await pdfDoc.save();
}

export async function splitPdf(file: File, pages: number[]): Promise<Uint8Array> {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const newPdfDoc = await PDFDocument.create();

    // Pages are 0-indexed in pdf-lib
    const copiedPages = await newPdfDoc.copyPages(pdfDoc, pages.map(p => p - 1));
    copiedPages.forEach(page => newPdfDoc.addPage(page));

    return await newPdfDoc.save();
}
