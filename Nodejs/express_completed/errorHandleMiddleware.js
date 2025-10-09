const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const { id, name } = req.query;
  throw new Error("this is working");

  res.send(`name: ${name}, id: ${id}, time: ${today}`);
});

app.use("/", (err, req, res, next) => {
  console.error(err);
  res.end("this is working");
});

app.listen(3000, () => {
  console.log("server is running");
});
