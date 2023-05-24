import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUserByEmail } from "../../../../../services/userServices";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const email: any = credentials?.email;
        const password: any = credentials?.password;

        const isExist = await findUserByEmail(email);

        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (isExist) {
          return user;
        } else {
          return null;
        }

        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user;
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null;

        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
