const express = require("express");

const router = express.Router();

// 🔹 Router-level middleware
router.use((req, res, next) => {
  console.log("Router middleware triggered");
  next();
});

// 🔹 Route
router.get("/user", (req, res) => {
  res.send("User route");
});

module.exports = router;
