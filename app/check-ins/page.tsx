"use client";

import { useEffect, useState } from "react";

interface Submission {
  id: string;
  mood: string;
  needs: string[];
  message: string;
  submittedAt: string;
}

export default function CheckInsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/check-in")
      .then((res) => res.json())
      .then((data) => {
        setSubmissions(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#f1f8e9] via-[#e8f5e9] to-[#c8e6c9]">
        <p className="text-lg text-[#4a3c39]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1f8e9] via-[#e8f5e9] to-[#c8e6c9] p-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 font-serif text-3xl font-semibold text-[#4a3c39]">
          Check-in submissions ✨
        </h1>

        {submissions.length === 0 ? (
          <div className="rounded-2xl bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm">
            <p className="text-[#7d6b68]">No submissions yet.</p>
            <p className="mt-2 text-sm text-[#7d6b68]">
              Submissions will appear here when someone fills the check-in form.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((sub) => (
              <div
                key={sub.id}
                className="rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-sm"
              >
                <p className="mb-3 text-xs uppercase tracking-wider text-[#d4859a]">
                  {new Date(sub.submittedAt).toLocaleString()}
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-[#7d6b68]">
                      How they&apos;re doing:
                    </span>{" "}
                    <span className="text-[#4a3c39]">{sub.mood}</span>
                  </div>
                  {sub.needs.length > 0 && (
                    <div>
                      <span className="text-sm font-medium text-[#7d6b68]">
                        What they need:
                      </span>{" "}
                      <span className="text-[#4a3c39]">
                        {sub.needs.join(", ")}
                      </span>
                    </div>
                  )}
                  {sub.message && (
                    <div>
                      <span className="text-sm font-medium text-[#7d6b68]">
                        Message:
                      </span>
                      <p className="mt-1 rounded-xl bg-[#e8f5e9]/50 p-3 text-[#4a3c39]">
                        {sub.message}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
