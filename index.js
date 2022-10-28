const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
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
app.get("/subject/:subject", (req, res) => {
  const sub = req.params.subject;
  const selectedSubject = courses.filter((course) => course.subject === sub);
  res.send(selectedSubject);
});

// get single subject
app.get("/level/:level", (req, res) => {
  const levl = req.params.level;
  const selectedlevel = courses.filter((course) => course.level === levl);
  res.send(selectedlevel);
});

// get single course api
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((c) => c.id === id);
  res.send(selectedCourse);
});

// get all courses Api
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
