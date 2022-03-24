const { get } = require("http");
const { pool } = require("../database/databaseConfig");

function createTable() {
  pool.query(`CREATE TABLE IF NOT EXISTS Visitors(
        ID SERIAL PRIMARY KEY,
        NAME varchar(50) NOT NULL,
        Email varchar(100) NOT NULL,
        Password varchar(16) NOT NULL
);`);
}

function addNewVisitor(name, email, password) {
  pool.query(
    `INSERT INTO Visitors(name, email, password) VALUES($1, $2, $3);`,
    [name, email, password]
  );
}

async function  getVisitorId(){
    const result = await pool.query(`SELECT id, email, password FROM Visitors;`);
    return result;
}
async function  getVisitorDetails(email){
    const result = await pool.query(`SELECT * FROM Visitors WHERE email = $1;`, [email]);
    return result;
}
// getVisitorDetails("kaleemnike1@gmail.com").then((res) => console.log(res.rows))
module.exports = { createTable, addNewVisitor, getVisitorId, getVisitorDetails };
