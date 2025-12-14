"use server";

import { signIn, signOut } from "@/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function userSignIn(
  email: string,
  password: string
): Promise<{
  error?: string;
  ok: boolean;
  url?: string;
}> {
  try {
    console.log("Attempting to sign in:", { email });

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log("SignIn response type:", typeof response, "value:", response);

    // NextAuth can return different formats:
    // 1. Object with { error, ok, status, url } - NextAuth v5
    // 2. URL string - indicates successful sign-in (NextAuth wants to redirect)
    // 3. null/undefined - on error

    // If response is a string (URL), it means sign-in was successful
    // NextAuth returns a URL when redirect: false but sign-in succeeds
    if (typeof response === "string") {
      console.log("SignIn successful (URL response):", response);
      return {
        ok: true,
        url: response,
      };
    }

    // If response is an object
    if (response && typeof response === "object") {
      // Check for error property
      if ("error" in response && response.error) {
        const errorMsg =
          typeof response.error === "string"
            ? response.error
            : "Invalid email or password";
        console.error("SignIn error:", errorMsg);
        return {
          error: errorMsg,
          ok: false,
        };
      }

      // Check for ok property (NextAuth v5 format)
      if ("ok" in response) {
        return response as { error?: string; ok: boolean; url?: string };
      }

      // If object has status property, check it
      if ("status" in response) {
        const status = (response as { status?: number | string; url?: string })
          .status;
        if (status === 200 || status === "success") {
          return {
            ok: true,
            url: (response as { url?: string }).url,
          };
        }
      }
    }

    // If response is null/undefined, it's an error
    if (!response || response === null) {
      console.warn("SignIn returned null/undefined");
      return {
        error: "Invalid email or password",
        ok: false,
      };
    }

    // Fallback: if we got here and it's not null, assume success
    console.warn(
      "Unexpected signIn response format, assuming success:",
      response
    );
    return {
      ok: true,
      url: typeof response === "string" ? response : undefined,
    };
  } catch (err) {
    console.error("Error during credential login:", err);
    const errorMessage =
      err instanceof Error
        ? err.message
        : "An unexpected error occurred. Please try again.";
    return {
      error: errorMessage,
      ok: false,
    };
  }
}

export async function userSignOut(): Promise<void> {
  try {
    await signOut({ redirectTo: "/sign-in" });
  } catch (err) {
    console.error("Error during user sign-out:", err);
  }
}

export async function userSignUp(formData: FormData): Promise<{
  error?: string;
  ok: boolean;
  url?: string;
  message?: string;
}> {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  const name = formData.get("name") as string | null;

  // Validation
  if (!email || !password || !name) {
    return {
      error: "Name, email, and password are required",
      ok: false,
    };
  }

  try {
    // Call customer signup API
    const response = await fetch(`${API_URL}/api/customers/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    let data;
    try {
      data = await response.json();
    } catch {
      // If response is not JSON, return a generic error
      console.error("Failed to parse JSON response:", response.status);
      return {
        error: `Server error (${response.status}). Please try again.`,
        ok: false,
      };
    }

    // Backend returns { success: false, message: "..." } for errors
    if (!response.ok || !data.success) {
      const errorMessage =
        data.message ||
        data.error ||
        (Array.isArray(data.errors) ? data.errors.join(", ") : null) ||
        "Failed to create account. Please try again.";

      console.error("Signup error:", {
        status: response.status,
        data,
        errorMessage,
      });

      return {
        error: errorMessage,
        ok: false,
      };
    }

    // Signup successful - return success (don't auto sign-in, let user sign in manually)
    console.log("Customer account created successfully:", data.data.email);

    return {
      ok: true,
      message: data.message || "Account created successfully! Please sign in.",
    };
  } catch (err) {
    console.error("Error during user sign-up:", err);

    // Check for connection errors
    const errorCause =
      err instanceof Error && "cause" in err ? err.cause : null;
    const isConnectionError =
      err instanceof Error &&
      (err.message.includes("fetch failed") ||
        err.message.includes("ECONNREFUSED") ||
        err.message.includes("NetworkError") ||
        (errorCause &&
          typeof errorCause === "object" &&
          "code" in errorCause &&
          errorCause.code === "ECONNREFUSED"));

    let errorMessage: string;
    if (isConnectionError) {
      errorMessage = `Unable to connect to the server. Please make sure the backend server is running at ${API_URL}`;
    } else if (err instanceof Error) {
      errorMessage = err.message;
    } else {
      errorMessage = "A network error occurred. Please try again later.";
    }

    return {
      error: errorMessage,
      ok: false,
    };
  }
}
