'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const MainFeatures = () => {
    const { status } = useSession()
    const router = useRouter()

    const startBtn = () => {
        if (status === 'authenticated') {
            router.push('/messages')
        } else {
            router.push('/login')
        }
    }

    return (
        <div className="flex flex-col px-2 py-4">
            <h3 className="text-center w-full font-semibold text-3xl">Make A Sound</h3>
            <h4 className="w-full text-center">Post a Message that you would like to put out into the World</h4>
            <button onClick={startBtn} className="text-center bg-black text-white mx-auto p-2 rounded-md my-2">Get Started</button>
        </div>
    )
}

export default MainFeatures