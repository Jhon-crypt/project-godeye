import { NextResponse } from "next/server";
import { headers } from 'next/headers';
import { saveGodScan } from "../../controllers/saveGodscan-controller";


export async function POST(req, res) {

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



        const formData = await req.formData();

        const data = {
            user_id: formData.get('user_id'),
            godScan_id: formData.get('godScan_id'),
            godScan_image_link: formData.get('godScan_image_link'),
            godScan_response: formData.get('godScan_response')
        }

        const createGodScan = await saveGodScan(data.user_id, data.godScan_id, data.godScan_image_link, data.godScan_response);

        return NextResponse.json({ createGodScan });



    } else {

        const error = "Not Authorized";

        // Return a JSON response containing the error message
        return NextResponse.json({ error });

    }

}

