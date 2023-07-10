import NextAuth from "next-auth/next";
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "next-auth/adapters";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import { NextApiRequest, NextApiResponse } from "next";
import { Account, Profile, SessionStrategy, User } from "next-auth";
import { authorizeUser } from "../../models/users";
import { JWT } from "next-auth/jwt/types";

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
        Credentials({
            name: 'Menara',
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label:'password', type: 'password' }
            },
            async authorize(credentials, req) {
                try {
                    const user = await authorizeUser({ 
                        email: credentials?.email ?? '', 
                        password: credentials?.password ?? ''  })
                    
                    return user
                } catch (error) {
                    // log error
                    console.error(error);
                    
                    // Default returns null if User could not be retrieved
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt" as SessionStrategy,
    },
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user, account, profile }: { 
            token: JWT,
            user: User
            account: Account | null,
            profile?: Profile | undefined
        }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token, user }: {
            session:any, 
            token:any, 
            user:any
        }) {
            session.user.id = token.id
            return session
        }
    }
}

interface LoginReq extends NextApiRequest {
    loginType: string
}

// Pass in Options to NextAuth
const handler = async (req: LoginReq, res: NextApiResponse) => {
    return NextAuth(req, res, authOptions)
}

export { handler as GET, handler as POST }