var mysql = require('mysql');
var connection;

if (process.env.) {
    connection = mysql.createConnection(process.env.);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: '',
        password: '',
        database: 'workout_buddy'
    });
};

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;