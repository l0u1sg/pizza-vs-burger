const express = require("express");
const app = express();
const port = process.env.PORT || 4444;

app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("website/index.ejs");
});
app.get("/error", (req, res) => {
  res.render("error/index.ejs");
});

app.listen(port, () => {
  console.log(`Pizza VS Burger app listening at http://localhost:${port}`);
});
