import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

// Your own logic for dealing with plaintext password strings; be careful!
// import { saltAndHashPassword } from "@/utils/password"
type Credentials = {
    email: string,
    password: string,
}
const getUserFrom1c = async (email: any, pass: string) => {
    const user = await fetch(`http://localhost/DemoARAutomation20/odata/standard.odata/Catalog_Партнеры_КонтактнаяИнформация?$format=json&$filter=Тип eq 'АдресЭлектроннойПочты' and АдресЭП eq '${email}'`,
        {
            headers: {
                Authorization: 'Basic QWRtaW46'
            }
        })
        .then(res => {
            console.log('res',res)
            return res.json()
        })
        .catch(error => console.log(error))
    console.log('user', user)
    if (user) return user
    return false
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null

                // logic to salt and hash password
                const pwHash = '123'

                // logic to verify if the user exists
                user = await getUserFrom1c(credentials.email, pwHash)

                if (!user) {
                    // No user found, so this is their first attempt to login
                    // meaning this is also the place you could do registration
                    throw new Error("User not found.")
                }

                // return user object with their profile data
                return user
            },
        }),
    ],
})