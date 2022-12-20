'use strict';
const mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 50, //important
  host: process.env.DB_HOST || "containers-us-west-87.railway.app",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "iGP2jGedHXYSS0qR2sqY",
  port: process.env.DB_PORT || "7297",
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
