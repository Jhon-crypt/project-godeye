import { NextResponse } from "next/server";
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { headers } from 'next/headers';
import { godeye, deleteFile } from "../../controllers/godeye-Controller";

const pump = promisify(pipeline);

export async function POST(req) {
    // Retrieve the headers from the incoming request
    const headersInstance = headers();

    // Extract the 'authorization' header from the request headers
    const authorization = headersInstance.get('authorization');

    // Split the 'authorization' header to separate the Bearer token
    const splited_authorization = authorization.split("Bearer ");

    // Retrieve the Bearer token from the split result
    const bearer_token = splited_authorization[1];

    // Check if the Bearer token matches the expected value from the environment variables
    if (bearer_token === process.env.GODEYE_KEY) {
        try {
            const formData = await req.formData();
            const file = formData.get('image');
            const user_prompt = formData.get('user_prompt');
            const filePath = `./public/${file.name}`;

            // Write file asynchronously using streams
            await pump(file.stream(), fs.createWriteStream(filePath));

            const mimeType = file.type;

            // Run the function with extracted parameters
            const result = await godeye(user_prompt, filePath, mimeType);

            // Delete the file after AI processing is completed
            await deleteFile(filePath);

            return NextResponse.json({ status: "success", data: file.size, result });
        } catch (e) {
            console.log(e);
            return NextResponse.json({ status: "fail", data: e });
        }
    }else{
        const error = "Not Authorized";

        // Return a JSON response containing the error message
        return NextResponse.json({ error });
    }
}
