import { NextRequest, NextResponse } from "next/server"
import { addPost, getPosts } from "../models/posts"
import { revalidatePath } from "next/cache"

export const GET = async (request: NextRequest) => {
    try {
        const posts = await getPosts()
        return NextResponse.json(posts)
    } catch (error) {
        console.error(error);
    }
}

export const POST = async (request: NextRequest) => {
    try {
        const newPost = await request.json()
        const post = await addPost(newPost)
        revalidatePath('/messages')
        return NextResponse.json(post)
    } catch (error) {
        console.error(error);
        return NextResponse.error()
    }
}