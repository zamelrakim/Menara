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
            <div className="flex flex-col gap-y-3 bg-white p-3 rounded">
                <h3>Delete Post</h3>
                <p>Are you sure you would like to delete this Post?</p>
                <div className="flex justify-end gap-x-2">
                    <button 
                        className=""
                        onClick={deletePost}
                    >Delete Post</button>
                    <button 
                        className=""
                        onClick={() => { dispatch({ type: 'hideModal' }) }}
                    >Cancel</button>
                </div>
            </div>
        </Modal>
    )
}

export default ConfirmPostDeletion