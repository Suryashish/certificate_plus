// All calls to the Express server go through here.
// Vite proxies "/api" to http://localhost:4000 during development.

async function request(path, options = {}) {
  const res = await fetch(`/api${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || data.message || `Request failed (${res.status})`);
  }

  return data;
}

export function getTemplates() {
  return request("/templates");
}

export function generateCertificates(templateId, rows) {
  return request("/certificates/generate", {
    method: "POST",
    body: JSON.stringify({ templateId, rows }),
  });
}
