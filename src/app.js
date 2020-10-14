const express = require("express");
const nunjucks = require("nunjucks");

const app = express();
const PORT = process.env.PORT || 5000;

nunjucks.configure(__dirname + "/views", {
  autoescape: true,
  express: app,
});

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(PORT, () => console.log(`Application running on port: ${PORT}`));
