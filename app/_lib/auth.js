import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      // here you can do many other mechanisms to check the user but for now we just check if the user is logged in
      return !!auth?.user;
    },

    // This callback actually runs before the actual sign in process happens. That means we can perform all kinds of operations here that are accociated with the signin process. So, it's a bit like a middleware.
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },

    // This callback runs after the signin callback. And also each time the session is checked out. For example when we call the auth() function. The session here in the parameter is exactly the same as the session object that is returned by the auth() function.
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);

      session.user.guestId = guest.id;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
