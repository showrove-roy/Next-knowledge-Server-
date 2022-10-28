const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const courses = require("./data/courses.json");
const level = require("./data/level.json");
const subject = require("./data/subject.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Next knowledge Server Running ");
});
// get all level api
app.get("/level", (req, res) => {
  res.send(level);
});

// create all subject api url
app.get("/subject", (req, res) => {
  res.send(subject);
});

// get single subject
app.get("/course/:subject", (req, res) => {
  const sub = req.params.subject;
  const selectedSubject = courses.filter((course) => course.subject == sub);
  res.send(selectedSubject);
});

// get single level
app.get("/course/:level", (req, res) => {
  const lev = req.params.level;
  const selectedLevel = courses.filter((course) => course.level === lev);
  res.send(selectedLevel);
});

// get all courses Api
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
