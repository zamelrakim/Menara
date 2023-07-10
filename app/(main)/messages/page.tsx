// import db from "@/app/api/db"
import Link from "next/link";
import { getPosts } from "../../api/models/posts";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import MessageCard from "../../components/message-card";

type PostType = {
    id: number,
    title: string,
    author: {
        id: number,
        name: string
    }
}

const Messages = async () => {
    const posts = await getPosts()
    const session = await getServerSession(authOptions)

    return (
        <div>
            <div className="flex">
                <Link href={ session ? '/messages/new' : `/api/auth/signin`} className="px-2 py-1 ml-1 mb-1 rounded bg-black text-white">New Message</Link>
            </div>
            <ul className="flex flex-wrap">
                {posts && posts.map((post: PostType) => <MessageCard message={post} key={post.id} />)}
            </ul>
        </div>
    )
}

export default Messages