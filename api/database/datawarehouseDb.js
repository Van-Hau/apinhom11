'use strict';
const mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10, //important
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "datawarehouse",
  debug: false
});
// const db = mysql.createConnection({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASS || "",
//   database: process.env.DB_NAME || "datawarehouse"
// });

module.exports = pool