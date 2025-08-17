// src/lib/auth.ts
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const demoUser = {
  id: "1",
  name: "Nesty Saver",
  email: "user@savenest.com",
  // ⚠️ Demo only — plain text for now. Replace with hashed password + DB later.
  password: "123456",
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@savenest.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // Very basic demo check
        if (
          credentials.email === demoUser.email &&
          credentials.password === demoUser.password
        ) {
          return { id: demoUser.id, name: demoUser.name, email: demoUser.email };
        }

        // No match
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // our custom login page
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.email = user.email as string;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
