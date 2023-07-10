import { getPost } from "@/app/api/models/posts"
import MessageForm from "@/app/components/message-form"

const EditMessage = async ({ params: { id } }: { params: { id: string } }) => {
    const post = await getPost(id)

    return <MessageForm post={post} isNew={false} />
}

export default EditMessage