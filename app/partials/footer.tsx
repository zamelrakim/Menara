'use client'

import Link from "next/link"

const Footer = () => {
    return (
    <div className="flex flex-col items-center bg-black text-white h-1/4 p-2 rounded-t shrink-0 pb-20">
        <div className="flex flex-col mr-4">
            <Link href='/'><h3 className="font-bold text-3xl text-emerald-600">MENARA</h3></Link>
        </div>
        <ul className="flex flex-col">
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
    </div>
    )
}

export default Footer