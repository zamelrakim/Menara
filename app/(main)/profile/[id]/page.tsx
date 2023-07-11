import { getUser } from "@/app/api/models/users"
import MessageCard from "@/app/components/message-card"

type MessageType = {
    id: number,
    title: string,
}

const Profile = async ({ params: { id } }: { params: { id: string } }) => {
    const user = await getUser(id)

    return (
        <div>
            <h2 className="font-semibold text-4xl text-emerald-600 px-2">{user.name}</h2>
            <ul className="flex flex-wrap p-2">
                {user.posts && user.posts.map((post: MessageType) => <MessageCard message={post} key={post.id} />)}
            </ul>
        </div>
    )
}

export default Profile