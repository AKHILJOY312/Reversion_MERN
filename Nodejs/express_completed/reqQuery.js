const express = require("express");
const app = express();

app.get("/class", (req, res) => {
  const { id, name } = req.query;
  const today = new Date().toLocaleString();

  res.send(`name: ${name}, id: ${id}, time: ${today}`);
});

app.listen(3000);
