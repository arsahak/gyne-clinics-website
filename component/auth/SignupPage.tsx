"use client";

import { userSignUp } from "@/app/actions/auth";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await userSignUp(formData);
      if (result?.ok) {
        // Navigate to sign-in page after successful signup
        router.push("/sign-in?registered=true");
        // Don't set loading to false here, let the navigation happen
        return;
      } else {
        setError(
          result?.error || "Failed to create account. Please try again."
        );
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 relative overflow-hidden px-4 py-12">
      {/* --- Background Ambient Glow --- */}
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
            Create Account
          </h1>
          <p className="text-gray-500 text-sm">
            Join GyneClinics to book appointments and manage your health
            journey.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignUp} className="space-y-6">
          {/* Full Name Input (New Field) */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-primary-900 block">
              Full Name
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-secondary-500 transition-colors">
                <User size={20} />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Jane Doe"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-primary-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary-500/50 focus:border-secondary-500 transition-all placeholder:text-gray-400"
                required
              />
            </div>
          </div>

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
            <label className="text-sm font-semibold text-primary-900">
              Password
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-secondary-500 transition-colors">
                <Lock size={20} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a strong password"
                className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg text-primary-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary-500/50 focus:border-secondary-500 transition-all placeholder:text-gray-400"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-primary-900 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Must be at least 6 characters.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Terms & Conditions Checkbox */}
          <div className="flex items-start">
            <input
              id="terms"
              type="checkbox"
              required
              className="w-4 h-4 mt-1 text-secondary-600 border-gray-300 rounded focus:ring-secondary-500 cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="ml-2 block text-sm text-gray-500 cursor-pointer"
            >
              I agree to the{" "}
              <Link
                href="/terms"
                className="text-secondary-600 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-secondary-600 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </label>
          </div>

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
                Create Account
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
            Already have an account?{" "}
            <Link
              // Assuming your sign-in route is /signin or /login
              href="/sign-in"
              className="text-secondary-600 font-bold hover:text-secondary-700 hover:underline transition-colors"
            >
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
