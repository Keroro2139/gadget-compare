const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
});

// open the MySQL connection
connection.connect(error => {
    console.log('Connecting database...');
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;
