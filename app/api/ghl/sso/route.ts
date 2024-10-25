import { decrypt } from "@/app/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {
        // Set CORS headers
        const headers = new Headers({
            'Access-Control-Allow-Origin': '*', // Change '*' to a specific domain if needed
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'x-sso-session-key, Content-Type',
        });

        if (req.method === 'OPTIONS') {
            // Handle CORS preflight requests
            return new NextResponse(null, { status: 200, headers });
        }
        
        if (req.headers.get("x-sso-session-key")) {
            const ssoSessionKey = req.headers.get("x-sso-session-key") ?? '';
            const response = decrypt(ssoSessionKey);
            return NextResponse.json({ message: "OK", response },{ status: 200 });
        } else {
            return NextResponse.json({ message: "No Session Key", },{ status: 404 });
        }

    } catch (error) {
        return NextResponse.json(
            { message: "Error", error },
            { status: 500 }
        );
    }
};