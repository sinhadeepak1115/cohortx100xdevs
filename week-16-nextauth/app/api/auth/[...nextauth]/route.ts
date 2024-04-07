import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "email",
          type: "text",
          placeholder: "email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
        otp: {
          label: "OTP",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials: any) {
        return {
          id: "user1",
          name: "Deepak Kr Sinha",
          email: credentials.username,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token, user }) => {
      console.log(token);
      return token;
    },
  },
});

export { handler as GET, handler as POST };
