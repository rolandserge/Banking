"use server"

import { createAdminClient, createSessionClient } from "@/lib/server/appwrite"
import { parseStringify } from "@/lib/utils"
import { cookies } from "next/headers"
import { ID } from "node-appwrite"

export const signIn = async({ email, password } : signInProps) => {

    try {
        // Mutation / Database / Make fectch
        const { account } = await createAdminClient();
        const response = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", response.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        return parseStringify(response)
    } catch (error) {
        console.log(error)
    }
}

export const signUp = async(userData: SignUpParams) => {

    const { email, password, lastName, firstName } = userData
    try {
        // create user account
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password,
            `${firstName} ${lastName}`
        );

        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(newUserAccount)
    } catch (error) {
        console.log(error)
    }
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const user = await account.get();

      return parseStringify(user)
    } catch (error) {
      return null;
    }
}

export const logoutAccount = async() => {
    try {
        const { account } = await createSessionClient()

        cookies().delete("appwrite-session")

        const loggedOut = await account.deleteSession("current")

        return loggedOut

    } catch (error) {
        console.log(error)
    }
}