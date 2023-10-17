import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { firestore } from "@/lib/firebase";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  adapter: FirestoreAdapter(firestore),
  //   callbacks: {
  //     async signIn({ user, account, profile, email, credentials }) {
  //       return true;
  //     },
  //     async session({ session, token, user }) {
  //       session.user._id = user.id;
  //       return session;
  //     },
  //   },
};
