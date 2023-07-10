import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignupForm from "./partials/signup-form";
import { redirect } from 'next/navigation'

const Signup = async () => {
    const session = await getServerSession(authOptions)

    if (session) {
        redirect('/')
    } else {
        return <SignupForm />
    }
}

export default Signup