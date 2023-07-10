'use client'

import { useState } from "react"
import InfoWrapper from "../../components/css/info-wrap"
import { signIn } from "next-auth/react"

type SignupType = {
    name: string,
    email: string,
    password: string
}

const SignupForm = () => {
    const [signupInfo, setSignupInfo] = useState<SignupType>({
        name: '',
        email: '',
        password: ''
    })

    const submitSignup = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(signupInfo),
            headers: { 'Content-Type': 'application/json' }
        }).then((res) => {
            const { email, password } = signupInfo
            signIn('credentials', { email, password, callbackUrl: '/' })
        })
    }

    return (
        <InfoWrapper>
            <form 
                onSubmit={submitSignup}
                className="flex flex-col p-2"
            >
                <label 
                    htmlFor="name" 
                    className="text-white py-2"
                >Name</label>
                <input 
                    type="text" 
                    name='name'
                    value={signupInfo.name}
                    onChange={(e) => setSignupInfo({...signupInfo, name: e.target.value})}
                    className="py-0.5 px-1"
                />
                <label 
                    htmlFor="email" 
                    className="text-white py-2"
                >Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={signupInfo.email}
                    onChange={(e) => setSignupInfo({...signupInfo, email: e.target.value})}
                    className="py-0.5 px-1"
                />
                <label 
                    htmlFor="password" 
                    className="text-white py-2"
                >Password</label>
                <input 
                    type="password" 
                    name="password" 
                    value={signupInfo.password}
                    onChange={(e) => setSignupInfo({...signupInfo, password: e.target.value})}
                    className="py-0.5 px-1"
                />
                <input 
                    type="submit" 
                    value="Sign Up" 
                    className="text-white py-2" 
                />
            </form>
        </InfoWrapper>
    )
}

export default SignupForm