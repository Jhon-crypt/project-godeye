import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pump = promisify(pipeline);

// Instantiate GoogleGenerativeAI object outside the handler function
const genAI = new GoogleGenerativeAI(process.env.gemini_api_key);

export async function POST(req, res) {
    try {
        const formData = await req.formData();
        const file = formData.get('image');
        const user_prompt = formData.get('user_prompt');
        const filePath = `./public/${file.name}`;

        // Write file asynchronously using streams
        await pump(file.stream(), fs.createWriteStream(filePath));

        const mimeType = file.type;

        // Run the function with extracted parameters
        const result = await run(user_prompt, filePath, mimeType);

        // Delete the file after AI processing is completed
        await deleteFile(filePath);

        return NextResponse.json({ status: "success", data: file.size, result });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ status: "fail", data: e });
    }
}

async function run(user_prompt, imagePath, mimeType) {
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

async function deleteFile(filePath) {
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

