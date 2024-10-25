import { addPosts, getPosts } from "@/app/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    try {
        console.log(process.env.NEXT_PUBLIC_SSO_KEY);
        const posts = getPosts();

        return NextResponse.json({ message: "OK", posts },{ status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Error", error },
            { status: 500 }
        );
    }
};

export const POST = async (req: Request, res: Response) => {
    const { title, desc } = await req.json();
    try {
        const posts = { title, desc, id: Date.now().toString() }
        addPosts(posts);
        
        return NextResponse.json({ message: "OK", posts },{ status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Error", error },
            { status: 500 }
        );
    }
};