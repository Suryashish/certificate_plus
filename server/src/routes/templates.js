import { Router } from "express";
import { readFileSync } from "node:fs";

const router = Router();

// For now templates live in a JSON file.
// TODO: move to a real database (see README roadmap).
const templates = JSON.parse(
  readFileSync(new URL("../data/templates.json", import.meta.url), "utf-8")
);

// GET /api/templates — list all templates
router.get("/", (req, res) => {
  res.json(templates);
});

// GET /api/templates/:id — get one template
router.get("/:id", (req, res) => {
  const template = templates.find((t) => t.id === req.params.id);

  if (!template) {
    return res.status(404).json({ error: "Template not found" });
  }

  res.json(template);
});

export default router;
