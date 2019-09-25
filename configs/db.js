require('dotenv').config();

const mysql = require('mysql');
const conn = mysql.createConnection({
    host : process.env.DB_HOST ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_DATABASE 
})

conn.connect((err) => {
    if(err) console.log(err);
})

module.exports = conn;