const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Database connected");
});

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(port, () => {
  console.log(`server running ${port}`);
});
