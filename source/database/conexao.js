const mysql = require('mysql');

const connection = mysql.createConnection({

    host: 'localhost',
    port: 3306,
    user: 'userteste',
    password: 'password',
    database: 'alurachallenge_api'

});

module.exports = connection;