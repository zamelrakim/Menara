import db from "../db";

type Post = {
    id?: string,
    title: string,
    content: string,
    author?: {
        id: string,
        name: string
    }
}

export const getPosts = async () => {
    try {
        const posts = await db.post.findMany({ 
            select: {
                id: true,
                title: true,
                author: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            },
            take: -9 
        })
        return posts
    } catch (error) {
        console.error(error);
    }
}

export const getPost = async (id: string) => {
    try {
        const post = await db.post.findUnique({
            where: { id },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })
        return post
    } catch (error) {
        console.error(error);
    }
}

export const addPost = async (post: Post) => {
    try {
        const newPost = await db.post.create({
            data: post
        })

        const postAuthor = await db.user.findUnique({
            where: { id: newPost.authorId },
            select: {
                id: true,
                name: true
            }
        })

        newPost.author = postAuthor

        return newPost
    } catch (error) {
        console.log(error); 
    }
}

export const updatePost = async (post: Post) => {
    try {
        const {title, content} = post
        const updatedPost = await db.post.update({
            where: { id: post.id },
            data: {
                title,
                content
            }
        })
        return updatedPost
    } catch (error) {
        console.error(error);
    }
}

export const deletePost = async (id: string) => {
    try {
        const deletedPost = await db.post.delete({
            where: { id }
        })
        return deletedPost
    } catch (error) {
        console.error(error);
    }
}