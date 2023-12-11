const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const router = require("./src/Router");
// const auth = require("./src/Middlewere/auth");
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/img", express.static("./src/images"));
// app.use(auth);
app.use(router);

app.listen(port, () =>
  console.log(`Server connected to http://localhost:${port}`)
);
