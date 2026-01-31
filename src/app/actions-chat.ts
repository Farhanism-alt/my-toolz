"use server";

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function chatWithAI(
    content: string,
    messages: { role: 'user' | 'assistant', content: string }[],
    type: 'PDF' | 'DOCX' | 'PPT' | 'Video' = 'PDF',
    images?: string[] // Base64 encoded images
): Promise<string> {
    if (!process.env.OPENAI_API_KEY) {
        throw new Error("OpenAI API Key is missing. Please add it to your .env.local file.");
    }

    const systemPrompts = {
        PDF: "You are a helpful AI assistant. Use the provided PDF content to answer questions. Speak in very simple, clear, and honest words. Avoid jargon, em-dashes, and complex punctuation. Use basic markdown: titles for sections, bold for emphasis, and bullet points for lists. Be concise and direct.",
        DOCX: "You are a helpful AI assistant. Use the provided Word document content to answer questions. Speak in very simple, clear, and honest words. Avoid jargon, em-dashes, and complex punctuation. Use basic markdown: titles for sections, bold for emphasis, and bullet points for lists. Be concise and direct.",
        PPT: "You are a helpful AI assistant. Use the provided PowerPoint content to answer questions. Speak in very simple, clear, and honest words. Avoid jargon, em-dashes, and complex punctuation. Use basic markdown: titles for sections, bold for emphasis, and bullet points for lists. Be concise and direct.",
        Video: "You are a powerful AI Video Assistant. You are provided with sample frames and metadata. Analyze the visual content and answer questions in very simple, clear, and honest words. Avoid jargon, em-dashes, and complex punctuation. Use basic markdown: titles for sections, bold for emphasis, and bullet points for lists. Be concise and direct."
    };

    try {
        const userMessages = messages.map(msg => ({
            role: msg.role,
            content: msg.content
        }));

        const lastUserMessage = userMessages[userMessages.length - 1];
        const currentMessageContent: any[] = [
            {
                type: "text",
                text: `I am providing you with the content of a ${type} document. Please use this context to answer my question accurately.\n\nDOCUMENT CONTENT:\n${content}\n\nUSER QUESTION: ${lastUserMessage.content}`
            }
        ];

        if (images && images.length > 0) {
            images.forEach(img => {
                currentMessageContent.push({
                    type: "image_url",
                    image_url: { url: img.startsWith('data:') ? img : `data:image/jpeg;base64,${img}` }
                });
            });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: systemPrompts[type]
                },
                ...userMessages.slice(0, -1),
                {
                    role: "user",
                    content: currentMessageContent
                }
            ],
            max_tokens: 1000
        });

        return response.choices[0]?.message?.content || "";
    } catch (error: any) {
        console.error("OpenAI Chat Error:", error);
        throw new Error(error.message || `Failed to chat with ${type}.`);
    }
}
