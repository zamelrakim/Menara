import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ForgotPassword from "./partials/forgot-password"
import { getCsrfToken } from "next-auth/react"
import { redirect } from 'next/navigation'


const EmailSignIn = async () => {
    const csrfToken = await getCsrfToken()

    const session = await getServerSession(authOptions)

    if (session) {
        redirect('/')
    } else {
        return <ForgotPassword csrfToken={csrfToken} />
    }
}

export default EmailSignIn