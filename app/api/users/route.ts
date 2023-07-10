import { NextRequest, NextResponse } from "next/server"
import { addUser } from "../models/users"

type UserParams = {
    params: {
        id?: string,
        email: string,
        name: string
    }
}

export const POST = async (request: NextRequest, context: UserParams) => {
    try {
        const user = await request.json()

        const newUser = await addUser(user)
        return NextResponse.json(newUser)
    } catch (error) {
        console.error(error);
    }
}