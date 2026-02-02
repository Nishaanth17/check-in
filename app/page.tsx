import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-br from-[#f1f8e9] via-[#e8f5e9] to-[#c8e6c9] p-8">
      <h1 className="text-3xl font-semibold text-[#4a3c39]">
        Checking in on you ✨
      </h1>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/check-in.html"
          className="rounded-full bg-[#e8a4b8] px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-[#d4859a] hover:shadow-xl"
        >
          Open check-in page →
        </Link>
        <Link
          href="/check-ins"
          className="rounded-full border-2 border-[#e8a4b8] px-8 py-4 text-lg font-medium text-[#4a3c39] transition-all hover:scale-105 hover:bg-[#e8a4b8]/20"
        >
          View submissions
        </Link>
      </div>
    </div>
  );
}
