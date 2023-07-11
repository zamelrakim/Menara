'use client'

import React from "react"
import { useSession } from "next-auth/react"
import { useContext } from "react"
import { MessageDispatchContext } from "./message-provider"

const DeleteBtn = () => {
    const session = useSession()

    const dispatch = useContext(MessageDispatchContext)!

    const startModal = (e: React.SyntheticEvent) => {
        e.preventDefault()

        if (session) {
            dispatch({ type: 'showModal' })
        }
    }

    return (
        <button 
            className="text-white bg-black rounded py-1 px-2 mt-1 self-start"
            onClick={startModal}
        >Delete</button>)
}

export default DeleteBtn