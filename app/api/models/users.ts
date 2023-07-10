import db from "../db";
const bcrypt = require('bcrypt')

type User = {
    id?: string,
    name?: string,
    email?: string,
    password?: string
}

export const addUser = async ({ name, email, password }: User) => {
    try {
        const passwordHash: string = await bcrypt.hash(password, 10)

        const newUser = await db.user.create({
            data: {
                name,
                email,
                passwordHash
            }
        })
        
        return newUser
    } catch (error) {
        console.error(error);
    }
}

export const getUser = async (id: string) => {
    try {
        const user = await db.user.findUnique({ 
            where: { id },
            select: {
                id: true,
                name: true,
                posts: true
            }
        })
        return user
    } catch (error) {
        console.error(error);
    }
}

export const updateUser = async (user: User) => {
    const { id, name, email } = user
    try {
        const updatedUser = await db.user.update({
            where: { id },
            data: {
                name,
                email
            }
        })
        return updatedUser
    } catch (error) {
        console.error(error);
    }
}

export const deleteUser = async (id: string) => {
    try {
        const deletedUser = await db.user.delete({ where: { id } })
        return deletedUser
    } catch (error) {
        console.error(error);
    }
}

export const authorizeUser = async ({ email, password }: User) => {
    try {
        const user = await db.user.findUnique({ where: { email } })
        
        if (!user) {
            throw new Error('User Not Found')
        }

        // Then, check Hashed Password
        const match = await bcrypt.compare(password, user.passwordHash)
        
        if (!match) {
            throw new Error('Incorrect Password')
        }

        return user
    } catch (error) {
        
    }
}