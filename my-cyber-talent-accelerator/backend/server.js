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
  addStudentProfile,
  getStudentProfile,
  createCompanyTable,
  addNewBusinessCompany,
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
createCompanyTable();

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
  const studentResult = await getStudentProfile(userID);
  res.json({
    message: resultMessage,
    id: userID,
    profileExist: studentResult.rows,
  });
});
app.post("/jobs", (req, res) => {
  const { jobTitle, company, salary, city, description } = req.body;
  postJob(jobTitle, company, salary, city, description);
});
app.get("/getJobs", async (req, res) => {
  const result = await pool.query(`SELECT * FROM JobPosts ORDER BY id DESC;`);
  // console.log(result.rows);
  res.send({ data: result.rows.slice(0, 8) });
});
app.get("/user-profile:id", async (req, res) => {
  const result1 = await pool.query(`SELECT * FROM StudentProfile;`);
  const result2 = await pool.query(`SELECT * FROM Visitors;`);
  res.json({ userProfile: result2.rows, studentProfile: result1.rows });
});
app.post("/studentProfile:id", (req, res) => {
  const { ID, Uname, Pname, location, skill1, skill2, skill3, AboutYou } =
    req.body;
  addStudentProfile(
    ID,
    Uname,
    Pname,
    location,
    skill1,
    skill2,
    skill3,
    AboutYou
  );
});
app.get("/Student-grid", async (req, res) => {
  const result = await pool.query(
    `SELECT * FROM Visitors INNER JOIN StudentProfile ON Visitors.id = StudentProfile.id;`
  );
  res.json({ studentData: result.rows });
});

app.get("/View-StudentProfile:id", async (req, res) => {
  const result = await pool.query(
    `SELECT * FROM Visitors INNER JOIN StudentProfile ON Visitors.id = StudentProfile.id;`
  );
  console.log(result.rows);
  res.json({ studentData: result.rows });
});

app.post("/newCompanyBusiness", async (req, res) => {
  const {
    BusinessName,
    Pname,
    password,
    location,
    businessEmail,
    industry,
    AboutCompany,
  } = req.body;
  const date = new Date().toISOString().toString().slice(0, 10);
  addNewBusinessCompany(
    BusinessName,
    Pname,
    password,
    location,
    date,
    businessEmail,
    industry,
    AboutCompany
  );
});
app.post("/Business-Sign-In", async (req, res) => {
  let resultData = "Incorrect";
  let id = 0;
  try {
    const result = await pool.query(
      `SELECT * FROM companybusiness WHERE businessemail = $1;`, [req.body.email]
    );
    if(result.rows.length === 1){
      if(result.rows[0].password === req.body.password){
        resultData = "Correct";
        id = result.rows[0].id;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
  res.json({data: resultData, id: id})
});
app.get("/Business-GridPage", async(req, res) => {
  const result = await pool.query(`SELECT * FROM companybusiness;`)
  res.json({businessData: result.rows});
})
app.get("/View-Business-Profile:id", async(req, res) => {
  const result = await pool.query(`SELECT * FROM companybusiness;`)
  console.log("Hello");
  res.json({businessData: result.rows});
})
app.get("/business-sign-up", async(req, res) => {
  const result = await pool.query(`SELECT * FROM companybusiness;`)
  const emails = [];
  const companyName = [];
  const profileName = [];
  result.rows.map((val) => {
    emails.push(val.businessemail)
    companyName.push(val.companyname)
    profileName.push(val.profilename)
  });
  res.json({resultEmails: emails, resultCompanyName: companyName, resultProfileName: profileName})
})
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

