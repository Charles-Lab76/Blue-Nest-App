import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold font-poppins text-[#1F299C]">
        Welcome, {session.user?.name}
      </h1>
      <p className="mt-2 font-nunito text-[#101010] opacity-80">
        You’re signed in as {session.user?.email}.
      </p>

      <form action="/api/auth/signout" method="post">
        <button
          type="submit"
          className="mt-6 bg-[#0466C8] text-white px-6 py-3 rounded-lg font-poppins hover:bg-[#1F299C] transition"
        >
          Sign out
        </button>
      </form>
    </div>
  );
}
