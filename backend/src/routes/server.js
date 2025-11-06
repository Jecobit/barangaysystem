// server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// ✅ Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve uploaded images statically (optional)
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// ✅ Import Routes
import residentsRoutes from "./routes/residents.js";
// (Later you can add more, e.g. incidents, households, documents, login)

// ✅ Use Routes
app.use("/api/residents", residentsRoutes);

// ✅ Test Root Route
app.get("/", (req, res) => {
  res.send("Barangay Information System API is running ✅");
});

// ✅ Handle 404 (unknown routes)
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Internal server error" });
});

// ✅ Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
