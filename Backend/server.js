const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoute");
const bookRoutes = require("./routes/bookRoute");


// Load environment variables
dotenv.config();

// MongoDB connection
connectDB();

const app = express();

// ===== Middleware =====
app.use(cors());
app.use(express.json());

// ===== Test Route =====
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Server running with MongoDB Atlas"
  });
});

// ===== Routes (future use) =====
   app.use("/api/auth", authRoutes); 
   app.use("/api/books", bookRoutes);

// ===== Server Start =====
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server started on port ${PORT}`);
});
