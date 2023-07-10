import React from "react";
import { getPost } from "@/app/api/models/posts";
import Link from "next/link";
import DeleteBtn from "./partials/delete-btn";

const Message = async ({ params: { id } }: { params: { id: string } }) => {
    const post = await getPost(id)
    
    return (
        <React.Fragment>
            <div className="flex justify-between px-2">
                <div>
                    <h2 className="font-semibold text-4xl">{post.title}</h2>
                    <h3 className="font-medium">
                        <span className="text-m">By </span>
                        <Link 
                            href={`/profile/${post.authorId}`}
                            className="text-xl"
                        >
                            {post.author.name}
                        </Link>
                    </h3>
                </div>
                <div className="flex gap-x-2">
                    <Link 
                        className="text-white bg-black rounded py-1 px-2 mt-1 self-start"
                        href={`/messages/${id}/edit`}
                    >Edit</Link>
                    <DeleteBtn postId={id} />
                </div>
            </div>
            <p className="text-2xl px-2 py-3 font-medium">{post.content}</p>
        </React.Fragment>
    )
}

export default Message