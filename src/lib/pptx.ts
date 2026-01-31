import JSZip from "jszip";

export async function extractTextFromPPTX(file: File): Promise<string> {
    const zip = await JSZip.loadAsync(file);
    const slideFiles = Object.keys(zip.files).filter(name => name.startsWith("ppt/slides/slide") && name.endsWith(".xml"));

    // Sort slides numerically
    slideFiles.sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || "0");
        const numB = parseInt(b.match(/\d+/)?.[0] || "0");
        return numA - numB;
    });

    let fullText = "";
    for (const slideFile of slideFiles) {
        const content = await zip.file(slideFile)?.async("string");
        if (content) {
            // Very basic XML tag stripping to get text content from slides
            const slideText = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
            fullText += `Slide ${slideFile.match(/\d+/)?.[0]}:\n${slideText}\n\n`;
        }
    }

    return fullText.trim();
}
