const express = require("express");
const cors = require("cors"); //cross-origin requests

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.port || 5000;

require("dotenv").config(); //for environment variables to be called in node app

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
