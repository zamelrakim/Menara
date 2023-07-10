import React from "react"
import { MessageProvider } from "./partials/message-provider"

const MessageLayout = ({ children, deleteModal }: { 
    children: React.ReactNode,
    deleteModal: React.ReactNode 
}) => {
    return (
            <MessageProvider>
                {children}
                {deleteModal}
            </MessageProvider>
    )
}

export default MessageLayout