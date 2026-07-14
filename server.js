const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dns=require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])
dotenv.config();

const connectDB = require("./config/db");
const courseRoutes = require("./routes/courseRoutes");
const app = express();
app.use(express.json());
app.use(cors());
connectDB();
app.use("/course", courseRoutes);
app.get("/", (req, res) => {
    res.send("Course Tracker Backend Running...");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});
