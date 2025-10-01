const express = require("express");
const app = express();
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Router example");
});
app.use("/api", router);

app.listen(3000, () => {
  console.log("server is running");
});
