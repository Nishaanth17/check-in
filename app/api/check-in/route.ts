import { NextRequest, NextResponse } from "next/server";

export interface CheckInSubmission {
  id: string;
  mood: string;
  needs: string[];
  message: string;
  submittedAt: string;
}

const submissions: CheckInSubmission[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { mood, needs, message } = body;

    const submission: CheckInSubmission = {
      id: crypto.randomUUID(),
      mood: mood || "Not selected",
      needs: Array.isArray(needs) ? needs : [],
      message: message || "",
      submittedAt: new Date().toISOString(),
    };

    submissions.push(submission);

    return NextResponse.json({
      success: true,
      id: submission.id,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json(submissions.reverse());
}
