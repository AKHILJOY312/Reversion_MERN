import express from "express";
const app = express();

// Admin middleware
function adminMiddleware(req, res, next) {
  const role = req.headers.role;

  if (!role) {
    return res.status(401).send("Role not provided");
  }

  if (role !== "admin") {
    return res.status(403).send("Only admin can access this route");
  }

  next();
}

app.get("/", (req, res) => {
  res.send("Home Page");
});

// Admin route
app.get("/admin", adminMiddleware, (req, res) => {
  res.send("Welcome Admin");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
