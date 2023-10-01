const mysql = require('mysql2');

// Create a single database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sql1234',
    database: 'bmsapi',
});


// Export the connection for use in other modules
module.exports = connection;