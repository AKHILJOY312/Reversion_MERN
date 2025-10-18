const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/users", (req, res) => {
  let user = [{ name: "sam" }, { name: "Ram" }, { name: "Alice" }];

  res.send(user);
});

app.listen(PORT, () => console.log("server is working"));
