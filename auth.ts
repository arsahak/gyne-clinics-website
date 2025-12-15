import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { auth, signIn, signOut, handlers } = NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Return null for missing credentials (NextAuth v5 best practice)
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
          console.error("API URL is not defined in environment variables.");
          // Return null for configuration errors to prevent CallbackRouteError
          return null;
        }

        try {
          // Add timeout for fetch request (15 seconds)
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 15000);

          const response = await fetch(`${apiUrl}/api/customers/signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            signal: controller.signal,
          });

          clearTimeout(timeoutId);

          // Return null for authentication failures (NextAuth v5 best practice)
          // This prevents CallbackRouteError
          if (!response.ok) {
            let errorMessage = "Invalid email or password.";
            try {
              const errorData = await response.json();
              errorMessage = errorData.message || errorMessage;
              console.error("Signin failed:", errorMessage);
            } catch {
              // If response is not JSON, use default message
              console.error("Signin failed: Invalid response format");
            }
            return null;
          }

          const data = await response.json();
          if (!data.success || !data.data || !data.accessToken) {
            console.error(
              "Incomplete user data received from server:",
              data.message || "Missing required fields"
            );
            return null;
          }

          // Return user object on success
          return { ...data.data, accessToken: data.accessToken };
        } catch (error) {
          // Return null for network/connection errors to prevent CallbackRouteError
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      try {
        if (user) {
          // Preserve accessToken explicitly when user signs in
          return {
            ...token,
            ...user,
            accessToken: user.accessToken || token.accessToken,
          };
        }
        // On subsequent requests, preserve the existing accessToken
        return token;
      } catch (error) {
        console.error("JWT callback error:", error);
        return token;
      }
    },
    async session({ session, token }) {
      try {
        if (token) {
          // Set accessToken on session (not session.user)
          session.accessToken = token.accessToken as string | undefined;

          // Set user data from token
          session.user = {
            id: token.id as string,
            _id: token._id as string,
            name: token.name as string,
            email: token.email as string,
            role: token.role as string,
            provider: token.provider as string,
            avatar: token.avatar as string | undefined,
            isEmailVerified: token.isEmailVerified as boolean,
            image: token.avatar as string | undefined,
            emailVerified: token.isEmailVerified ? new Date() : null,
          };
        }
        return session;
      } catch (error) {
        // If there's a decryption error (JWTSessionError), return empty session
        // This will force the user to sign in again with the new AUTH_SECRET
        console.error("Session callback error:", error);
        return {
          ...session,
          user: undefined,
          accessToken: undefined,
        };
      }
    },
  },
});
