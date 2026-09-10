require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const schemeRoutes = require("./routes/schemeRoutes");
const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");
const complaintRoutes = require("./routes/complaintRoutes");

console.log("🔥 THIS IS MY SERVER.JS");
console.log("Dashboard Routes:", dashboardRoutes);
console.log("Scheme Routes:", schemeRoutes);

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/schemes", schemeRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/complaints", complaintRoutes);
app.get("/api/test", (req, res) => {
  res.json({ message: "Test Route Works" });
});
app.get("/", (req, res) => {
  res.send("VillageVaani Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});