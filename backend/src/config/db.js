import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",        // default XAMPP user
  password: "",        // leave blank unless you set one
  database: "barangaydatabase",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL (barangaydatabase)");
  }
});

export default db;
