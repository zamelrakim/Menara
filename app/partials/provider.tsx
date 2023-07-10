'use client'

import { SessionProvider } from "next-auth/react"

type SessionProps = {
    [session: string]: any
}

const Provider = ({children}: {children: React.ReactNode}) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default Provider