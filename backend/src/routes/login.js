import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;

  // Simple validation
  if (!username || !password) {
    return res.json({ success: false, message: "All fields are required" });
  }

  // Check user from database
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.json({ success: false, message: "Server error" });
    }

    if (results.length > 0) {
      res.json({ success: true, message: "Login successful!" });
    } else {
      res.json({ success: false, message: "Invalid username or password" });
    }
  });
});

export default router;
