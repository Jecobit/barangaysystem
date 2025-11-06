import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// ✅ Import routes (make sure this path exists)
import residentsRoutes from "./routes/residents.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve static uploads (optional)
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// ✅ Use route
app.use("/api/residents", residentsRoutes);

// ✅ Test root route
app.get("/", (req, res) => {
  res.send("Barangay Information System API is running ✅");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
