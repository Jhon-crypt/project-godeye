import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';

// Instantiate GoogleGenerativeAI object outside the handler function
const genAI = new GoogleGenerativeAI(process.env.gemini_api_key);

export async function godeye(user_prompt, imagePath, mimeType) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const prompt = `${user_prompt}`;
    const imageParts = [fileToGenerativePart(imagePath, mimeType)];

    const result = await model.generateContentStream([prompt, ...imageParts]);

    let text = '';
    for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        console.log(chunkText);
        text += chunkText;
    }

    return { status: 'Uploaded Image Successfully', gemini_pro_vision_response: text };
}

function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: fs.readFileSync(path).toString("base64"), // Read file synchronously and encode as base64
            mimeType: mimeType
        },
    };
}

export async function deleteFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

