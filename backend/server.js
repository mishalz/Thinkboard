require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

//middleware to handle cors
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//Middleware to parse the json body
app.use(express.json());

//Routes

//Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
