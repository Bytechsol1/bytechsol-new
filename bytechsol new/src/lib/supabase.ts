function readServerEnv(name: string) {
  if (typeof process === "undefined" || !process.env) {
    return undefined;
  }

  return process.env[name];
}

const SUPABASE_URL =
  readServerEnv("VITE_SUPABASE_URL") ??
  "https://pkbsyhqejbfenlvnmzme.supabase.co";

const SUPABASE_ANON_KEY =
  readServerEnv("VITE_SUPABASE_ANON_KEY") ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrYnN5aHFlamJmZW5sdm5tem1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NDg1MDAsImV4cCI6MjA5MDEyNDUwMH0.H4Sg9joK0RtYGP54AwwMcTHWYvrKtuLrDkLoKkOpB20";

type ContactEnquiryInsert = {
  full_name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactEnquiryRow = ContactEnquiryInsert & {
  id: number;
  created_at: string;
};

type SupabaseErrorPayload = {
  code?: string;
  details?: string;
  hint?: string;
  message?: string;
};

export async function createContactEnquiry(payload: ContactEnquiryInsert) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/contact_enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const rawText = await response.text();
    let errorMessage = `Supabase insert failed (${response.status} ${response.statusText}).`;

    if (rawText) {
      try {
        const parsed = JSON.parse(rawText) as SupabaseErrorPayload;
        const parts = [parsed.code, parsed.message, parsed.details, parsed.hint]
          .filter(Boolean)
          .join(" | ");
        if (parts) {
          errorMessage = `${errorMessage} ${parts}`;
        }
      } catch {
        errorMessage = `${errorMessage} ${rawText}`;
      }
    }

    throw new Error(errorMessage);
  }

  const rows = (await response.json()) as ContactEnquiryRow[];

  if (!rows.length) {
    throw new Error("Supabase insert returned no row data.");
  }

  return rows[0];
}
