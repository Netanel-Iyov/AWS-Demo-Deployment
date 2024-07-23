const express = require("express");
const app = express();
const cors = require("cors");

const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

const corsOptions = {
  origin: [
    "http://18.203.100.180",
    "http://aws-deployment-demo.niyov.com",
    "http://127.0.0.1:5500",
    "http://18.203.100.180",
  ],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

let counter = 10;

// Sample GET route with parameters
app.get("/counter", (req, res) => {
  res.json({ counter: counter });
});

// Sample POST route
app.post("/counter/increase", (req, res) => {
  counter += 1;
  res.json({ counter: counter });
});

// Sample POST route
app.post("/counter/decrease", (req, res) => {
  counter -= 1;
  res.json({ counter: counter });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
