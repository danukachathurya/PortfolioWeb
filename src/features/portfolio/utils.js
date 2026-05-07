import { profile } from "./content";

export function scrollToSection(id) {
  if (typeof document === "undefined") {
    return;
  }

  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function buildMailTo({ subject, body, to = profile.email }) {
  const searchParams = new URLSearchParams();

  if (subject) {
    searchParams.set("subject", subject);
  }

  if (body) {
    searchParams.set("body", body);
  }

  const query = searchParams.toString();
  return query ? `mailto:${to}?${query}` : `mailto:${to}`;
}

export function buildResumeRequestHref() {
  return "https://drive.google.com/uc?export=download&id=1GAPLKU6YDHBF3fIEOlIHyC78kAo6W4NU";
}

export function buildContactMailBody({ name, email, message }) {
  return `Hi ${profile.shortName},

My name is ${name}.
Email: ${email}

${message}

Best regards,
${name}`;
}
