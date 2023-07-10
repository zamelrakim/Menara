import { getCsrfToken } from "next-auth/react";
import LoginForm from "./partials/login";

const Login = async () => {
    const csrfToken = await getCsrfToken()

    return <LoginForm csrfToken={csrfToken} />
}

export default Login