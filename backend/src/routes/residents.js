import express from "express";
const router = express.Router();

// ✅ Simple test route
router.get("/", (req, res) => {
  res.json({ message: "Residents route connected successfully!" });
});

export default router;
