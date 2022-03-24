const { pool } = require("../database/databaseConfig");
const cors = require("cors");
const express = require("express");
const PORT = process.env.PORT || 5000; 
const app = express();
const bodyParser = require("body-parser");
const {
  createTable,
  addNewVisitor,
  getVisitorId,
  getVisitorDetails,
} = require("./databaseFunctions");
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
createTable();
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
app.get("/Profile:id", (req, res) => {
  console.log("Welcome");
})
app.post("/api", async (req, res) => {
  const { name, email, password1 } = req.body;
  const result = await getVisitorDetails(email);
  addNewVisitor(name, email, password1);
}); 
// app.get("sign-up", (req, res) => {

// })
app.get("/visitors", async (req, res) => {
  const result = await getVisitorId();
  res.json({ message: result.rows });
});
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
