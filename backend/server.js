const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to LOCAL MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentTasks")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Routes
app.use("/api/tasks", taskRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});