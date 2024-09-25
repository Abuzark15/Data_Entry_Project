const mysql = require('mysql2');

const db = {
    host: 'localhost',
    user: 'root', 
    password: 'smart@2099', 
    database: 'Assignment1',  
};

const connection = mysql.createConnection(db);


module.exports = connection; 



