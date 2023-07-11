'use client'

import React from "react"
import Link from "next/link"
import { useSession, signIn, signOut } from 'next-auth/react'

const Header = () => {
    const { data: session } = useSession()

    return (
        <div className="flex justify-between rounded bg-black text-white m-3 py-2 shrink-0">
            <ul className="flex flex-row px-1">
                <li className="px-1">
                    <Link href="/" className="font-bold text-emerald-600">MENARA</Link>
                </li>
                <li className="px-1">
                    <Link href='/messages'>Messages</Link>
                </li>
            </ul>
            <ul className="flex flex-row px-1">
                {session ? 
                    <React.Fragment>
                        <li className="px-1">
                            <Link href={`/profile/${session.user.id}`}>{session.user.name} |</Link>
                        </li>
                        <li className="px-1" onClick={() => signOut()}>Logout</li>
                    </React.Fragment>
                    :
                    <li className="px-1" onClick={() => signIn()}>Login</li>
                }
            </ul>
        </div>
    )
}

export default Header