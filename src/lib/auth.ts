import type {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/prisma/client";
import {PrismaAdapter} from "@auth/prisma-adapter";
import type {Adapter} from "next-auth/adapters";
import {compare} from "bcrypt";

// @ts-ignore
export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    session: {
        strategy: "jwt",
    },
    theme: {
        colorScheme: "light",
        logo: '/logos/investofarm.jpg'
    },
    pages: {
        signIn: '/Login',
    },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: {label: "Password", type: "password"},
            },

            // @ts-ignore
            async authorize(credentials) {

                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email,
                    }
                })
                // no user found in the db
                if (!user) {
                    throw new Error(JSON.stringify({error: 'No Account Found, Register to Continue', status: 401}))
                }

                const isPasswordCorrect = await compare(credentials.password, user.password);

                // passowrd is incorrect
                if (!isPasswordCorrect) {
                    // console.log('password is incorrect')
                    throw new Error(JSON.stringify({error: 'Password is Incorrect'}))
                }

                return user;
            },
        }),

    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: ({session, token}) => {
            // @ts-ignore
            // session.user.id = token.id;
            // console.log('session callback', {session, token});
            return {
                ...session,
                id: token.id,
                user: {
                    ...session.user,
                    id: token.id,

                }
            }
        },
        jwt: ({token, user}) => {
            if (user) {
                console.log('jwt callback token is', {...token}, 'and user is: ', {...user});
                return {
                    ...token,
                    id: user.id,
                }

            }
            return token;
        }
    },
};
