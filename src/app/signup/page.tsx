"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Demo only: show a success message and move to login.
    alert("Demo mode: account creation is mocked. Use user@savenest.com / 123456 to sign in.");
    router.push("/login");
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        <h1 className="text-2xl font-bold font-poppins text-[#1F299C] mb-2">
          Create your Savenest account
        </h1>
        <p className="text-sm font-nunito text-[#101010] mb-6 opacity-80">
          We’ll enable real registration when your backend/DB is connected.
        </p>

        <label className="block text-sm font-poppins mb-1">Full name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#0466C8]"
          placeholder="Nesty Saver"
        />

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
          className="w-full bg-[#0466C8] text-white font-poppins font-semibold py-3 rounded-lg hover:bg-[#1F299C] transition"
        >
          Sign Up
        </button>

        <p className="text-sm text-center mt-4 font-nunito">
          Already have an account?{" "}
          <a href="/login" className="text-[#0466C8] hover:underline">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}
