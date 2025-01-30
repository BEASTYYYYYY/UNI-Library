import ImageKit from "imagekit";
import config from "@/lib/config";
import { NextResponse } from "next/server";

const {
    env: {
        imagekit: { publicKey, privateKey, urlEndpoint },
    },
} = config;

const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });

export async function GET() {
    const response = NextResponse.json(imagekit.getAuthenticationParameters());

    // Set CORS headers
    response.headers.set("Access-Control-Allow-Origin", "https://uni-library-seven.vercel.app"); // Allow only your frontend
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return response;
}

// Handle OPTIONS preflight requests
export async function OPTIONS() {
    const response = new NextResponse(null, { status: 204 }); // No content response
    response.headers.set("Access-Control-Allow-Origin", "https://uni-library-juvc92osv-beastyyyyyys-projects.vercel.app");
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return response;
}
