import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { API_URL } from "@/utils/fetcher";
import type { NextAuthOptions } from "next-auth";

const providers = [
  CredentialsProvider({
    name: "credentials",
    credentials: {
      email: {
        label: "Email",
        type: "text",
        placeholder: "Enter your email",
      },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials, req) {
      try {
        const res = await fetch(`${API_URL}/users/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return {
            ...user,
            // name: `${user.user.firstName}`,
          };
        }
      } catch (e) {
        return e;
      }

      // Return null if user data could not be retrieved
      return null;
    },
  }),
];

export const authOptions: NextAuthOptions = {
  providers,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user) {
        return true;
      }
      return false;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        session.user.id = token.id;
        session.user.token = token.token;
      }
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.user.id;
        token.name = user.user.firstName;
        token.token = user.token;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/login",
    // error: "/auth/login", // Error code passed in query string as ?error=
    // signOut: "/auth/signout",
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

// export default async function auth(req: any, res: any) {
// return await NextAuth(req, res, authOptions);
// }

export default NextAuth(authOptions);
