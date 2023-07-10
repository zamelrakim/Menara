import { NextRequest, NextResponse } from "next/server"
import { authorizeUser } from "../../models/users"

type UserAuthParams = {
    email: string,
    password: string
}

export const POST = async (req: NextRequest, context: UserAuthParams) => {
    const data = await req.json()
    const { email, password } = data.body

    const user = await authorizeUser({ email, password })
    return user
}