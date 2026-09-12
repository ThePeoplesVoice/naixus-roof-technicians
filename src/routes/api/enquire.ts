import { createFileRoute } from "@tanstack/react-router";
import { env } from "@/lib/env.server";
import { handleEnquirePost } from "@/lib/enquire-delivery";

export const Route = createFileRoute("/api/enquire")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown = {};
        try {
          body = await request.json();
        } catch {
          body = {};
        }

        const apiKey = env("RESEND_API_KEY");
        const result = await handleEnquirePost(body, {
          apiKey,
          to: env("ENQUIRE_TO"),
          send: async (message) => {
            const { Resend } = await import("resend");
            const resend = new Resend(apiKey);
            const { error } = await resend.emails.send(message);
            return { error: error ? { message: error.message } : null };
          },
        });

        return Response.json(result.json, { status: result.status });
      },
    },
  },
});
