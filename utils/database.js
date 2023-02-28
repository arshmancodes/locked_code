const mysql = require('mysql2');

const pool = mysql.createPool({
    database: "cm_verified",
    password: "",
    host : "localhost",
    user: "root"
});


module.exports = pool.promise();

