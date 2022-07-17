const mysql = require ('mysql2')

const connection =mysql.createConnection({
    host: "localhost",
    user: "root",
    password:'root',
    database: "Ships",
    port:8889
})

module.exports = connection