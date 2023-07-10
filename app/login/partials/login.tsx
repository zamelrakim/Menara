'use client'

import { useState } from "react"
import Link from "next/link"
import InfoWrapper from "@/app/components/css/info-wrap"
import { signIn } from "next-auth/react"

const LoginForm = ({ csrfToken }: { csrfToken: any }) => {
    type LoginType = { [key:string]: string } 
    const [loginInfo, setLoginInfo] = useState<LoginType>({ 
        email: "", 
        password: "" 
    })

    const updateLoginInfo = (e: React.SyntheticEvent) => {
        const target = e.target as typeof e.target & LoginType
        const { name, value } = target

        setLoginInfo({...loginInfo, [name]: value})
    }

    const submitLogin = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const { email, password } = loginInfo
        signIn('credentials', { email, password, callbackUrl: '/' })
    }

    return(
        <InfoWrapper>
            <form 
                onSubmit={submitLogin}
                className="flex flex-col p-2"
            >
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <label htmlFor="email" className="py-0.5 text-white">Email</label>
                <input
                    id='email' 
                    type="email" 
                    name="email"
                    value={loginInfo.email}
                    onChange={updateLoginInfo}
                    className="py-0.5 px-1 my-2"
                />
                <label htmlFor="password" className="py-0.5 text-white">Password</label>
                <input 
                    id='password'
                    type="password" 
                    name="password"
                    value={loginInfo.password}
                    onChange={updateLoginInfo}
                    className="py-0.5 px-1 my-2"
                />
                <input type="submit" value="Sign In" className="py-2 text-white" />
            </form>
            <p><Link href='/signup' className="text-white">Sign Up</Link></p>
            <p><Link href='/retrieve' className="text-white">Forgot Password</Link></p>
        </InfoWrapper>
    )
}

export default LoginForm