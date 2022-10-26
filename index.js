const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");
const catagories = require("./data/courseCategory.json");

app.get("/", (req, res) => {
  res.send("Courses API running successfully");
});

app.get("/catagories", (req, res) => {
  res.send(catagories);
});

app.get("/category/:CatID", (req, res) => {
  const id = req.params.CatID;

  const categoryCourses = courses.filter((c) => c.CatID === id);
  console.log(categoryCourses);
  res.send(categoryCourses);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log("server running on port", port);
});
