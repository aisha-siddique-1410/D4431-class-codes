const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());



app.post("/addStudent", (req, res) => {

  const { id, name, email, course } = req.body;

  const sql = "INSERT INTO students (id, name, email, course) VALUES (?,?, ?, ?)";

  db.query(sql, [name, email, course], (err, result) => {

    if (err) {
      console.log(err);
      res.send("Error inserting data");
    } else {
      res.send("Student Added Successfully");
    }

  });

});



app.listen(5000, () => {
  console.log("Server running on port 5000");
});