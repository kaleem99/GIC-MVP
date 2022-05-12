const { pool } = require("../database/databaseConfig");
const cors = require("cors");
const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
app.use(
  session({
    secret: "pass",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
const {
  createTable,
  addNewVisitor,
  getVisitorId,
  getVisitorDetails,
  createJobPostTable,
  postJob,
  createStudentProfileTable,
  addStudentProfile
} = require("./databaseFunctions");
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

createTable();
createJobPostTable();
createStudentProfileTable();
app.use(bodyParser.json());
app.get("/api", async (req, res) => {
  // console.log("Hello1") 
  const result = await getVisitorId();
  const emails = [];
  result.rows.filter((obj) => {
    emails.push(obj.email);
  });
  res.json({ message: emails });
});
// app.get("/Profile:id", (req, res) => {
//   // addStudentProfile(2, "Princeton", "Nick@22", "California", "Security+", "CompTIA PenTest+", "CISM", "Love ethical hacking and penetration testing");
//   console.log(req.params['id'])
// }); 
app.post("/api", async (req, res) => {
  const { name, email, password1 } = req.body;
  const result = await getVisitorDetails(email);
  addNewVisitor(name, email, password1, new Date().toDateString());
});
// app.get("sign-up", (req, res) => {

// })
app.post("/visitors", async (req, res) => {
  let resultMessage = "";
  const { email, password } = req.body;
  let userID = 0;
  const result = await getVisitorDetails(email);
  if (result.rows.length === 1) {
    userID = result.rows[0].id;
  }
  if (result.rowCount === 1) {
    if (result.rows[0].password === password) {
      resultMessage = "correct";
    } else {
      resultMessage = "Incorrect Password";
    }
  } else {
    resultMessage = "User Does not exist";
  }
  res.json({ message: resultMessage, id: userID });
});
app.post("/jobs", (req, res) => {
  const { jobTitle, company, salary, city, description } = req.body;
  postJob(jobTitle, company, salary, city, description);
});
app.get("/getJobs", async(req, res) => {
  const result = await pool.query(`SELECT * FROM JobPosts ORDER BY id DESC;`);
  // console.log(result.rows);
  res.send({data: result.rows.slice(0, 8)});
})
app.get("/users-students", (req, res) => {

})
app.post("/studentProfile:id", (req, res) => {
  console.log(req.body);
})
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
