import { compare } from "bcryptjs";
import NextAuth, { CredentialsSignin } from "next-auth"
import CredentialProvider from "next-auth/providers/credentials";
import { connectDatabase } from "./libs/utils";
import User from "./model/userModel";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
 authorize: async (credentials) => {
  const email = credentials.email as string | undefined;
  const password = credentials.password as string | undefined;

  if (!email || !password) {
    throw new CredentialsSignin("Please Provide Email and Password");
  }

  await connectDatabase();

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return null; // User not found
  }

  if (!user.password) {
    throw new CredentialsSignin({ cause: "password", message: "Invalid Email or Password" });
  }

  const isMatch = await compare(password, user.password);

  if (!isMatch) {
    throw new CredentialsSignin({ cause: "password", message: "Invalid Email or Password" });
  }

  // Ensure the user object has a role property
  if (!user.role) {
    throw new CredentialsSignin("User role is missing");
  }

  return { id: user._id, name: user.name, email: user.email, role: user.role };
},

    }),
  ],
  pages: {
    signIn: "/signin",

  },
})