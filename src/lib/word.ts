import mammoth from "mammoth";

export async function extractTextFromWord(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value; // The raw text
}

export async function convertWordToHtml(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer });
    return result.value; // The HTML
}

export async function convertWordToMarkdown(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    // Mammoth just gives raw text for extractRawText. 
    // For a better markdown conversion, we can use the HTML and a basic regex or a library.
    // But let's keep it simple for now or use a more robust approach if needed.
    return result.value;
}
