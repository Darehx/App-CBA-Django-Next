import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "test" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: "1", fullname: "J Smith", email: "john@gmail.com" };
        return user;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
