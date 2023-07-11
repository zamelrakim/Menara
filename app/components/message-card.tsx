'use client'

import Link from "next/link"

type MessageType = {
    id: number,
    title: string,
    author?: {
        id: number,
        name: string
    }
}

const MessageCard = ({ message }: { message: MessageType }) => {
    return (
        <li className=" w-1/3">
            <Link href={`/messages/${message.id}`}>
                <div className="rounded bg-black text-white h-32 p-2 m-1">
                    <h3 className="font-semibold text-emerald-600">{message.title}</h3>
                    {message.author && <h3>{message.author?.name}</h3>}
                </div>
            </Link>
        </li>
    )
}

export default MessageCard