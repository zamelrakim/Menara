'use client'

import React from "react"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

type PostType = { [key:string]: string }

const MessageForm = ({ post, isNew }: {
    post: PostType,
    isNew: Boolean
}) => {
    const [currPost, setCurrPost] = useState<PostType>(post)

    const formAct = isNew ? 'Post' : 'Update Post'

    const updateCurrPost = (e: React.SyntheticEvent) => {
        const target = e.target as typeof e.target & PostType
        const { name, value } = target
        setCurrPost({...currPost, [name]: value})
    }

    const { data: session } = useSession()
    const router = useRouter()

    const submitPost = (e: React.SyntheticEvent) => {
        if (session) {
            e.preventDefault()
            
            const postRoute = isNew ? '/api/posts' : `/api/posts/${post.id}`
            const postMethod = isNew ? 'POST' : 'PUT'
            
            fetch(postRoute, {
                method: postMethod,
                body: JSON.stringify(currPost),
                headers: {'Content-Type': 'application/json'}
            }).then(async (res) => {
                const post: PostType = await res.json()
                router.push(`/messages/${post.id}`)
            })
        } else {
            router.push('/login')
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={submitPost} className="flex flex-col">
                <input 
                    type="text" 
                    name="title"
                    value={currPost.title}
                    placeholder="Title"
                    onChange={updateCurrPost}
                    className="border-none py-0.5 px-1 m-2 outline-none"
                />
                <textarea 
                    name="content"
                    value={currPost.content}
                    onChange={updateCurrPost}
                    className="border border-solid border-black rounded py-0.5 px-1 m-2 h-40 outline-none resize-none"
                ></textarea>
                <input 
                    type="submit" 
                    value={formAct} 
                    className="py-2 font-semibold mx-2 rounded bg-black text-white"
                />
                <input 
                    type="button" 
                    value="Cancel"
                    className="py-2 font-semibold mx-2 mt-2 rounded bg-black text-white"
                    onClick={() => { router.back() }}
                />
            </form>
        </React.Fragment>
    )
}

export default MessageForm