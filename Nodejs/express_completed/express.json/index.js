const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
// Middleware to parse JSON bodies (e.g., from POST requests)
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static("public"));

// Example API route that accepts JSON
app.post("/api/message", (req, res) => {
  console.log("Received JSON:", req.body);
  res.json({ reply: "Thanks! I got your message: " + req.body.text });
});

// The server also automatically serves public/index.html at http://localhost:3000/
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
