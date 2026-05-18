const database = require('../database/dbconn')
const path = require('path');
exports.index = (req, res) => {
    //When someone makes a request on the root level of a web server, respond with this html file
    res.sendFile(path.join(__dirname, 'hello.html'));
};
//GETS
exports.getAllJobs = (req, res) => {
    database.manyOrNone('SELECT * FROM jobs')
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.getJobById = (req, res) => {
    database.one('SELECT * FROM jobs WHERE id::text = $1', [req.params.id])
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.getAllApplications = (req, res) => {
    database.manyOrNone('SELECT * FROM applications')
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.getApplicationById = (req, res) => {
    database.one('SELECT * FROM applications WHERE id::text = $1', [req.params.id])
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.getAllUsers = (req, res) => {
    database.manyOrNone('SELECT * FROM users')
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.getUserById = (req, res) => {
    database.one('SELECT * FROM users WHERE id::text = $1', [req.params.id])
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.getAllJobTags = (req, res) => {
    database.manyOrNone('SELECT * FROM job_tags')
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.getJobTagById = (req, res) => {
    database.one('SELECT * FROM job_tags WHERE id::text = $1', [req.params.id])
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.getAllTags = (req, res) => {
    database.manyOrNone('SELECT * FROM tags')
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.getTagById = (req, res) => {
    database.one('SELECT * FROM tags WHERE id::text = $1', [req.params.id])
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}