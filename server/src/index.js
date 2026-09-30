import express from "express";
import cors from "cors";
import templatesRouter from "./routes/templates.js";
import certificatesRouter from "./routes/certificates.js";

// Load variables from server/.env if it exists (built into Node 20.12+)
try {
  process.loadEnvFile();
} catch {
  // No .env file — that's fine, we use defaults below
}

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "5mb" }));

// Health check — handy to confirm the server is running
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Certificate Builder API is running" });
});

// Routes
app.use("/api/templates", templatesRouter);
app.use("/api/certificates", certificatesRouter);

// 404 for unknown API routes
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.originalUrl} not found` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
