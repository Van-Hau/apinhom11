'use strict';
const mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 50, //important
  host: process.env.DB_HOST || "202.151.176.61",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "LIStty60764",
  database: process.env.DB_NAME || "controller",
  debug: false
});
// const db = mysql.createConnection({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASS || "",
//   database: process.env.DB_NAME || "controller"
// });

module.exports = pool
