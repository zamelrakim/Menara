'use client'

import React, { createContext, useReducer } from "react"

type MessageDispatchType = React.Dispatch<any> | null
type MessageContextType = { modal: Boolean } | null

export const MessageContext = createContext<MessageContextType>(null)
export const MessageDispatchContext = createContext<MessageDispatchType>(null)

export const MessageProvider = ({ children }: { children: React.ReactNode }) => {
    const [message, messageDispatch] = useReducer(messageReducer, messageState)

    return (
        <MessageContext.Provider value={message}>
            <MessageDispatchContext.Provider value={messageDispatch}>
                {children}
            </MessageDispatchContext.Provider>
        </MessageContext.Provider>
    )
}

const messageReducer = (message: any, action: any) => {
    switch (action.type) {
        case 'showModal': {
            return {
                ...message,
                modal: true
            }
        }
        case 'hideModal': {
            return {
                ...message,
                modal: false
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const messageState = {
    modal: false
}