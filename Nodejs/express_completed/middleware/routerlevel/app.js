const express = require("express");
const app = express();

const userRouter = require("./router");

app.use("/api", userRouter);

app.listen(3000);
