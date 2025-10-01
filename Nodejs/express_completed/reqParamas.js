const express = require("express");
const app = express();

app.get("/class/:id/:name", (req, res) => {
  const { id, name } = req.params;
  const today = new Date().toLocaleString();

  res.send(`name: ${name}, id: ${id}, time: ${today}`);
});

app.listen(3000);
