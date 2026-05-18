const database = require('../database/dbconn')
const path = require('path');
exports.index = (req, res) => {
    //When someone makes a request on the root level of a web server, respond with this html file
    res.sendFile(path.join(__dirname, 'hello.html'));
};
//GETS
exports.deleteJob = (req, res) => {
    database.manyOrNone('SELECT * FROM jobs')
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.deleteApplication = (req, res) => {
    database.manyOrNone('SELECT * FROM applications')
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.deleteUser = (req, res) => {
    // HASH PASSWORD WITH BCRYPT ON THE Backend
    // authentication is handdled in the middleware
    // INSERT INTO users (email, password)
    // VALUES
    // ('hope@example.com', 'hashed_password_123');


    database.manyOrNone('SELECT * FROM users')
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.deleteJobTag = (req, res) => {
    database.manyOrNone('SELECT * FROM job_tags')
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.deleteTag = (req, res) => {
    database.manyOrNone('SELECT * FROM tags')
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}