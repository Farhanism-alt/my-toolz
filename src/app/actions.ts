"use server";

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function processOCR(base64Image: string): Promise<string> {
    if (!process.env.OPENAI_API_KEY) {
        throw new Error("OpenAI API Key is missing. Please add it to your .env.local file.");
    }

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: "Please extract all the text from this image. Return only the extracted text without any commentary."
                        },
                        {
                            type: "image_url",
                            image_url: {
                                url: base64Image,
                            },
                        },
                    ],
                },
            ],
        });

        return response.choices[0]?.message?.content || "";
    } catch (error: any) {
        console.error("OpenAI OCR Error:", error);
        throw new Error(error.message || "Failed to process image with OCR.");
    }
}
