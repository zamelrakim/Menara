import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import MessageForm from "@/app/components/message-form"

const NewPostServer = async () => {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/login')
    } else {
        const post = { title: "", content: "", authorId: session.user.id }

        return <MessageForm post={post} isNew={true} />
    }
}

export default NewPostServer