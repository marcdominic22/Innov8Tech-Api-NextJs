import { decrypt } from "@/app/lib/data";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/ghl/sso:
 *   get:
 *     tags: [SSO]
 *     parameters:
 *       - name: x-sso-session-key
 *         in: header
 *         required: true
 *         description: The SSO session key for your app, as returned by the GHL main app.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Session Decryption using Key
 */


export const GET = async (req: Request) => {
    try {
        
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