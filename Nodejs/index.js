import express from "express";

const app = express();
const router = express.Router();

router.use((req, res, next) => {
  console.log("middleware is called");
  next();
});

router.get("/a1", (req, res) => {
  res.send("a1 is working fine..");
});

router.all("/a2", (req, res) => {
  console.log("a2 is called", req.method);
  res.send("a2 is working");
});

app.use("/admin", router);

app.listen(3000, () => {
  console.log("Server is running");
});
