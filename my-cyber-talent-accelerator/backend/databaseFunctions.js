const { get } = require("http");
const { pool } = require("../database/databaseConfig");

function createTable() {
  pool.query(`CREATE TABLE IF NOT EXISTS Visitors(
        ID SERIAL PRIMARY KEY,
        NAME varchar(50) NOT NULL,
        Email varchar(100) NOT NULL,
        Password varchar(16) NOT NULL,
        MemberSince varchar(20)
);`);
}

function addNewVisitor(name, email, password, member) {
  pool.query(
    `INSERT INTO Visitors(name, email, password, membersince) VALUES($1, $2, $3, $3);`,
    [name, email, password, member]
  );
}
function postJob(jobTitle, company, salary, city, description) {
  pool.query(
    `INSERT INTO JobPosts(title, company, salary, city, description) VALUES($1, $2, $3, $4, $5);`,
    [jobTitle, company, salary, city, description]
  );
}

async function createJobPostTable() {
  pool.query(`CREATE TABLE IF NOT EXISTS JobPosts(
    ID SERIAL PRIMARY KEY,
    Title varchar(50) NOT NULL,
    Company varchar(50) NOT Null,
    Salary varchar(100) NOT NULL,
    City varchar(50) NOT NULL,
    Description varchar(250),
    Proposals int DEFAULT 0
);`);
}
function addStudentProfile(
  id,
  UniversityName,
  ProfileName,
  YourLocation,
  Skill1,
  Skill2 = "",
  Skill3 = "",
  Description
) {
  pool.query(
    `INSERT INTO StudentProfile(id, universityname, profilename, yourlocation, skill1, skill2, skill3, description) VALUES($1, $2, $3, $4, $5, $6, $7, $8);`,
    [
      id,
      UniversityName,
      ProfileName,
      YourLocation,
      Skill1,
      Skill2,
      Skill3,
      Description,
    ]
  );
}

async function createStudentProfileTable() {
  pool.query(`CREATE TABLE IF NOT EXISTS StudentProfile(
    StudentID serial PRIMARY KEY,
    ID int NOT NULL,
    UniversityName varchar(50) NOT NULL,
    ProfileName varchar(50) NOT Null,
    YourLocation varchar(100) NOT NULL,
    Skill1 varchar(50) NOT NULL,
    Skill2 varchar(50) NOT NULL,
    Skill3 varchar(50) NOT NULL,
    Description varchar(250),
    FOREIGN KEY (ID)
    REFERENCES visitors (ID)
  )`);
}
async function getVisitorId() {
  const result = await pool.query(`SELECT id, email, password FROM Visitors;`);
  return result;
}
async function getVisitorDetails(email) {
  const result = await pool.query(`SELECT * FROM Visitors WHERE email = $1;`, [
    email,
  ]);
  return result;
}
// getVisitorDetails("kaleemnike1@gmail.com").then((res) => console.log(res.rows))
module.exports = {
  createTable,
  addNewVisitor,
  getVisitorId,
  getVisitorDetails,
  createJobPostTable,
  postJob,
  createStudentProfileTable,
  addStudentProfile,
};
