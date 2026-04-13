import express from "express";
const app = express();

// Your actual routes
app.get("/users", (req, res) => {
  res.json({ message: "List of users" });
});

app.get("/posts", (req, res) => {
  res.json({ message: "List of posts" });
});

//  500 Error handler (Server errors)
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    error: "Internal Server Error",
    message: err.message || "Something unexpected happened",
  });
});

// ❗ Catch-all handler for undefined routes (MUST be at the end)
app.use((req, res, next) => {
  res.status(404).json({
    error: "Not Found",
    message: `The endpoint '${req.method} ${req.originalUrl}' does not exist.`,
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
