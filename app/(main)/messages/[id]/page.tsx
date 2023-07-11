import React, { useState } from "react";
import { getPost } from "@/app/api/models/posts";
import Link from "next/link";
import DeleteBtn from "./partials/delete-btn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Message = async ({ params: { id } }: { params: { id: string } }) => {
    const session = await getServerSession(authOptions)
    const post = await getPost(id)

    const isUserPost = (session && (post.authorId === session.user.id)) ? true : false

    if (!post) {
        redirect('/messages')
    }
    
    return (
        <React.Fragment>
            <div className="flex justify-between px-2">
                <div>
                    <h2 className="font-semibold text-4xl text-emerald-600">{post.title}</h2>
                    <h3 className="font-medium">
                        <span className="text-m text-white">By </span>
                        <Link 
                            href={`/profile/${post.authorId}`}
                            className="text-xl text-emerald-600"
                        >
                            {post.author.name}
                        </Link>
                    </h3>
                </div>
                { isUserPost &&
                    <div className="flex gap-x-2">
                        <Link 
                            className="text-white bg-black rounded py-1 px-2 mt-1 self-start"
                            href={`/messages/${id}/edit`}
                        >Edit</Link>
                        <DeleteBtn />
                    </div>
                }
            </div>
            <p className="text-2xl px-2 py-3 font-medium text-white">{post.content}</p>
        </React.Fragment>
    )
}

export default Message