'use client'

import Link from "next/link"

const InfoWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-black rounded-md w-auto color-white p-16">
                <h3 className="text-center font-semibold"><Link href='/' className="text-white font-bold text-3xl">MENARA</Link></h3>
                {children}
            </div>
        </div>
    )
}

export default InfoWrapper