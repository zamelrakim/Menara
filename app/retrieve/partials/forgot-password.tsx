'use client'

import { useState } from "react"
import InfoWrapper from "../../components/css/info-wrap";
import { signIn } from "next-auth/react";

const ForgotPassword = ({ csrfToken }: { csrfToken: any }) => {
    type ForgotPasswordType = {
        email: string
    }

    const [info, setInfo] = useState<ForgotPasswordType>({ email: '' })

    const submitForgotPassword = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const { email } = info
        signIn('email', { email })
    }

    return (
        <InfoWrapper>
            <p className="w-full text-center">Forgot Password</p>
            <form 
                onSubmit={submitForgotPassword}
                className="flex flex-col p-2"
            >
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <label htmlFor="email" className="text-white py-2">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={info.email}
                    onChange={(e) => setInfo({...info, email: e.target.value})}
                />
                <input type="submit" value="Send Email" className="text-white py-2" />
            </form>
        </InfoWrapper>
    )
}

export default ForgotPassword