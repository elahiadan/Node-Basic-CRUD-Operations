const express = require("express");
const connectToMongoDB = require("./connection");
const userRouter = require("./routes/user");
const createLog = require("./middlewares");

require("dotenv").config();
const app = express();
const PORT = 3000;
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("MONGO_URI is not defined in .env file");
}

// Connect to MongoDB
connectToMongoDB(mongoUri);

// Middleware to generate unique ID and log request details
app.use(express.urlencoded({ extended: false }));
app.use(createLog("log.txt"));

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
