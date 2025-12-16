import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Ensure AUTH_SECRET is set
if (!process.env.AUTH_SECRET) {
  console.warn(
    "AUTH_SECRET is not set. Sessions may not work correctly. Please set AUTH_SECRET in your environment variables."
  );
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET || "website-secret-change-in-production",
  trustHost: true,
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === "production" 
        ? `__Secure-website-authjs.session-token`
        : `website-authjs.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    callbackUrl: {
      name: process.env.NODE_ENV === "production"
        ? `__Secure-website-authjs.callback-url`
        : `website-authjs.callback-url`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    csrfToken: {
      name: process.env.NODE_ENV === "production"
        ? `__Host-website-authjs.csrf-token`
        : `website-authjs.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    pkceCodeVerifier: {
      name: process.env.NODE_ENV === "production"
        ? `__Secure-website-authjs.pkce.code_verifier`
        : `website-authjs.pkce.code_verifier`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 15, // 15 minutes
      },
    },
    state: {
      name: process.env.NODE_ENV === "production"
        ? `__Secure-website-authjs.state`
        : `website-authjs.state`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 15, // 15 minutes
      },
    },
  },
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
          // Ensure all required fields are present and properly mapped
          const customerData = data.data;
          return {
            id: customerData._id || customerData.id,
            _id: customerData._id || customerData.id,
            name: customerData.name,
            email: customerData.email,
            role: customerData.role || "customer",
            provider: customerData.provider || "credentials",
            avatar: customerData.avatar,
            isEmailVerified: customerData.isEmailVerified || false,
            accessToken: data.accessToken,
          };
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
          console.log("JWT callback - user sign in, setting token with user data");
          return {
            ...token,
            id: user.id || user._id,
            _id: user._id || user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            provider: user.provider,
            avatar: user.avatar,
            isEmailVerified: user.isEmailVerified,
            accessToken: user.accessToken || token.accessToken,
          };
        }

        // If token has an error (like expired or corrupted), clear it
        if (token?.error) {
          console.log("JWT callback - token has error, clearing accessToken");
          return {
            ...token,
            accessToken: null,
          };
        }

        // On subsequent requests, preserve the existing accessToken
        console.log("JWT callback - preserving existing token");
        return token;
      } catch (error) {
        console.error("JWT callback error:", error);
        // Return a clean token on error to prevent JWTSessionError
        return {
          ...token,
          accessToken: null,
          error: "TokenError",
        };
      }
    },
    async session({ session, token }) {
      try {
        // Debug logging
        // console.log("Session callback - token state:", { 
        //   hasToken: !!token, 
        //   hasAccessToken: !!token?.accessToken, 
        //   hasError: !!token?.error,
        //   hasId: !!token?.id,
        //   hasEmail: !!token?.email,
        //   tokenKeys: token ? Object.keys(token) : []
        // });

        // If token has an error or no valid data, return empty session
        if (token?.error || !token?.accessToken) {
          console.log("Session callback - returning empty session (error or no accessToken)");
          return {
            ...session,
            user: undefined,
            accessToken: undefined,
          };
        }

        if (token && token.accessToken) {
          // Set accessToken on session (not session.user)
          session.accessToken = token.accessToken as string | undefined;

          // Only set user data if all required fields are present
          if (token.id && token.email) {
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
            console.log("Session callback - session created successfully");
          } else {
            // If required fields are missing, return empty session
            console.log("Session callback - missing required fields (id or email)");
            return {
              ...session,
              user: undefined,
              accessToken: undefined,
            };
          }
        } else {
          console.log("Session callback - no token or accessToken");
          return {
            ...session,
            user: undefined,
            accessToken: undefined,
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
