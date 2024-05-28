import { NextOptions } from "@/app/lib/NextAuth";
import NextAuth from "next-auth"

const handler = NextAuth(NextOptions);

export { handler as GET, handler as POST }