'use client'

import Modal from "@/app/components/modal"
import { useContext } from "react"
import { MessageContext } from "../partials/message-provider"
import { MessageDispatchContext } from "../partials/message-provider"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

type MessageContextType = {
    modal: Boolean
} | null

const ConfirmPostDeletion = ({ params: { id } }: { params: { id: string } }) => {
    const messageInfo = useContext<MessageContextType>(MessageContext)
    const dispatch = useContext(MessageDispatchContext)!
    const session = useSession()
    const router = useRouter()

    const deletePost = (e: React.SyntheticEvent) => {
        e.preventDefault()

        if (session) {
            fetch(`/api/posts/${id}`, {
                method: 'DELETE',
            }).then(res => {
                if (res.ok) {
                    router.push('/messages')
                }
            })
        }
    }

    if (!messageInfo?.modal) {
        return null
    }

    return (
        <Modal>
            <div className="flex flex-col gap-y-3 bg-zinc-900 p-4 rounded mx-2">
                <h3 className="font-bold text-xl text-emerald-600">Delete Post</h3>
                <p className="py-2 text-lg text-white">Are you sure you would like to delete this post?</p>
                <div className="flex justify-end gap-x-2">
                    <button 
                        className="text-white bg-red-700 rounded py-1 px-2 mt-1 text-lg"
                        onClick={deletePost}
                    >Delete Post</button>
                    <button 
                        className="text-white bg-black rounded py-1 px-2 mt-1 text-lg"
                        onClick={() => { dispatch({ type: 'hideModal' }) }}
                    >Cancel</button>
                </div>
            </div>
        </Modal>
    )
}

export default ConfirmPostDeletion