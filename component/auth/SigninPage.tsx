"use client";

import { userSignIn } from "@/app/actions/auth";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SigninPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if user was redirected after successful registration
    if (searchParams.get("registered") === "true") {
      setSuccess("Account created successfully! Please sign in to continue.");
      // Clear the query parameter from URL
      router.replace("/sign-in", { scroll: false });
    }
  }, [searchParams, router]);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null); // Clear success message when attempting to sign in

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      setError("Please enter both email and password");
      setIsLoading(false);
      return;
    }

    try {
      console.log("Signin attempt for:", email);
      const result = await userSignIn(email, password);
      console.log("Signin result:", result);

      if (result?.ok) {
        // Successful login - redirect to home
        router.push("/");
        router.refresh(); // Refresh to update session
      } else {
        // Show the actual error message from the backend
        const errorMsg = result?.error || "Login failed. Please try again.";
        console.error("Signin failed:", errorMsg);
        setError(errorMsg);
      }
    } catch (err) {
      console.error("Signin exception:", err);
      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 relative overflow-hidden px-4">
      {/* --- Background Ambient Glow (Subtle & Cool) --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px]" />

      {/* --- MAIN CARD --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-white border border-gray-100 shadow-xl rounded-xl p-8 md:p-12 relative z-10"
      >
        {/* Brand Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-primary-50 text-primary-600 rounded-full mb-4">
            <CheckCircle size={32} />
          </div>
          <h1 className="text-3xl font-serif font-bold text-primary-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm">
            Sign in to GyneClinics to manage your appointments.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignIn} className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-primary-900 block">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-secondary-500 transition-colors">
                <Mail size={20} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-primary-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary-500/50 focus:border-secondary-500 transition-all placeholder:text-gray-400"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-primary-900">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-medium text-secondary-600 hover:text-secondary-700 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-secondary-500 transition-colors">
                <Lock size={20} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg text-primary-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary-500/50 focus:border-secondary-500 transition-all placeholder:text-gray-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-primary-900 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 text-secondary-600 border-gray-300 rounded focus:ring-secondary-500 cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-500 cursor-pointer"
            >
              Remember me for 30 days
            </label>
          </div>

          {/* Success Message */}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
              {success}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-900 text-white py-3.5 rounded-lg font-bold text-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-900/20 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {isLoading ? (
              <Loader2 size={24} className="animate-spin" />
            ) : (
              <>
                Sign In
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center pt-6 border-t border-gray-100">
          <p className="text-gray-600 text-sm">
            Don&apos;t have an account yet?{" "}
            <Link
              href="/sign-up"
              className="text-secondary-600 font-bold hover:text-secondary-700 hover:underline transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SigninPage;
