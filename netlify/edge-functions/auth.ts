import type { Context } from "https://edge.netlify.com";

// HTTP Basic Auth gate for the entire site.
// Credentials come from Netlify environment variables:
//   SITE_USER  - the username (e.g., "ian")
//   SITE_PASS  - the password (something long and random)
// Set these in Netlify dashboard: Site settings -> Environment variables.

export default async (request: Request, context: Context) => {
  const user = Deno.env.get("SITE_USER");
  const pass = Deno.env.get("SITE_PASS");

  // If env vars aren't set yet, fail closed.
  if (!user || !pass) {
    return new Response("Site auth not configured. Set SITE_USER and SITE_PASS in Netlify env vars.", {
      status: 503,
      headers: { "Content-Type": "text/plain" },
    });
  }

  const authHeader = request.headers.get("authorization") ?? "";
  const expected = "Basic " + btoa(`${user}:${pass}`);

  if (authHeader === expected) {
    return context.next();
  }

  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="D4 Playbook", charset="UTF-8"',
      "Content-Type": "text/plain",
    },
  });
};

export const config = { path: "/*" };
