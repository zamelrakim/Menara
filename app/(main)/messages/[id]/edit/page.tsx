import { getPost } from "@/app/api/models/posts"
import MessageForm from "@/app/components/message-form"
import { redirect } from "next/navigation";

const EditMessage = async ({ params: { id } }: { params: { id: string } }) => {
    const post = await getPost(id)

    if (!post) {
        redirect('/messages')
    }

    return <MessageForm post={post} isNew={false} />
}

export default EditMessage