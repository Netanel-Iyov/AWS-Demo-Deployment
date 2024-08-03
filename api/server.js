const express = require("express");
const app = express();
const cors = require("cors");

const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

const corsOptions = {
  origin: ["http://46.51.129.218"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

let counter = 0;

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
  console.log(`Server running at port: ${port}`);
});
