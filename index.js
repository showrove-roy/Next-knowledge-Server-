const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const courses = require("./data/courses.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Next knowledge Server Running ");
});
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
