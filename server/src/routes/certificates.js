import { Router } from "express";

const router = Router();

// POST /api/certificates/generate
// Body: { templateId: "classic", rows: [{ name: "Jane", date: "..." }, ...] }
//
// This is a placeholder. It only validates the input and tells you
// what WOULD be generated. Turning this into real PDF/PNG output is
// one of the open tasks in the README roadmap.
router.post("/generate", (req, res) => {
  const { templateId, rows } = req.body || {};

  if (!templateId) {
    return res.status(400).json({ error: "templateId is required" });
  }

  if (!Array.isArray(rows) || rows.length === 0) {
    return res.status(400).json({ error: "rows must be a non-empty array" });
  }

  res.status(501).json({
    message: "Certificate generation is not implemented yet. Want to build it? Check the README roadmap!",
    templateId,
    count: rows.length,
  });
});

export default router;
