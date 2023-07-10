import { NextRequest, NextResponse } from "next/server"
import { deleteUser, getUser, updateUser } from "../../models/users"

type UserParams = {
    params: {
        id: string
    }
}

export const GET = async (request: NextRequest, context: UserParams) => {
    try {
        const { id } = context.params
        const user = await getUser(id)
        return NextResponse.json(user)
    } catch (error) {
        console.error(error);
    }
}

export const PUT = async (request: NextRequest, context: UserParams) => {
    try {
        const user = await request.json()
        const updatedUser = await updateUser(user)
        return updatedUser
    } catch (error) {
        console.error(error);
    }
}

export const DELETE = async (request: NextRequest, context: UserParams) => {
    try {
        const { id } = context.params
        const deletedUser = deleteUser(id)
        return deletedUser
    } catch (error) {
        console.error(error);
    }
}