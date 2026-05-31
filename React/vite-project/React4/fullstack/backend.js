const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/users", (req, res) => {
  let user = [{ name: "sam" }, { name: "Ram" }, { name: "Alice" }];

  res.send(user);
});

// 404
app.use((req, res, next) => {
  res.status(404).json({
    error: "Not Found",
    message: `The endpoint '${req.method} ${req.originalUrl}' does not exist.`,
  });
});

// 500
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    error: "Internal Server Error",
    message: err.message || "Something unexpected happened",
  });
});
app.listen(PORT, () => console.log("server is working"));
