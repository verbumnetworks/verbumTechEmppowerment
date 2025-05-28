
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "teacher@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (email === "teacher@gmail.com" && password === process.env.PASSWORD) {
          return {
            id: "33", 
            email: "teacher@gmail.com",
            name: "Onye Ije",
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt", // ✅ No DB needed
    maxAge: 30 * 24 * 60 * 60
  },
  secret: process.env.NEXTAUTH_SECRET,
jwt:{
      maxAge: 30 * 24 * 60 * 60
},
cookies:{
  sessionToken:{
    name:"__Session",
    options: {
      httpOnly: true,
      sameSite:"lax",
      path:'/',
      secure: false
    }
  }
}
};

export default authOptions;
