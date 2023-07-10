import { NextRequest, NextResponse } from "next/server"
import { getPost, updatePost, deletePost } from "../../models/posts"
import { revalidatePath } from "next/cache"

type PostParams = {
    params: {
        id: string
    }
}

export const GET = async (request: NextRequest, context: PostParams) => {
    try {
        const { id } = context.params
        const post = await getPost(id)
        return NextResponse.json(post)
    } catch (error) {
        console.log(error);
    }
}

export const PUT = async (request: NextRequest, context: PostParams) => {
    try {
        const post = await request.json()
        const updatedPost = await updatePost(post)
        return NextResponse.json(updatedPost)
    } catch (error) {
        console.error(error);
    }
}

export const DELETE = async (request: NextRequest, context: PostParams) => {
    try {
        const postId = context.params.id
        const deletedPost = await deletePost(postId)
        revalidatePath('/messages')
        return NextResponse.json(deletedPost)
    } catch (error) {
        console.error(error);
    }
}