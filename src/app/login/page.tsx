"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, // we’ll handle routing manually
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      // NextAuth will set ?error=CredentialsSignin automatically when redirecting.
      // Since redirect: false, we show a simple message inline:
      alert("Invalid credentials. Try user@savenest.com / 123456 (demo).");
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        <h1 className="text-2xl font-bold font-poppins text-[#1F299C] mb-2">
          Sign in to Savenest
        </h1>
        <p className="text-sm font-nunito text-[#101010] mb-6 opacity-80">
          Demo login: <span className="font-mono">user@savenest.com / 123456</span>
        </p>

        {error && (
          <p className="mb-4 text-sm text-red-600">
            Invalid credentials. Please try again.
          </p>
        )}

        <label className="block text-sm font-poppins mb-1">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#0466C8]"
          placeholder="you@example.com"
        />

        <label className="block text-sm font-poppins mb-1">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#0466C8]"
          placeholder="••••••••"
        />

        <button
          type="submit"
          className="w-full bg-[#FF9F1C] text-white font-poppins font-semibold py-3 rounded-lg hover:brightness-95 transition"
        >
          Sign In
        </button>

        <p className="text-sm text-center mt-4 font-nunito">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#0466C8] hover:underline">
            Create one
          </a>
        </p>
      </form>
    </div>
  );
}
