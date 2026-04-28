// jobs should have this:
// id, 
// position, 
// company, 
// application_status, 
// job_location, 
// company_location, 
// post_link, 
// notes
require('dotenv').config()
const { constants } = require('buffer');
const mysql = require('mysql2') 
const path = require('path');

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})

connection.connect()

exports.index = (req, res) => {
    //When someone makes a request on the root level of a web server, respond with this html file
    res.sendFile(path.join(__dirname, 'hello.html'));
};

exports.jobs = (req, res) => {
    connection.query('SELECT * FROM jobs', (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
    
}

exports.getJobById = (req, res) => {
    connection.query(`SELECT * FROM jobs WHERE id=?`,[req.params.id], (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
}

exports.deleteJobById = (req, res) => {
    connection.query(`DELETE FROM jobs WHERE id=?`, [req.params.id], (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })    
}

exports.updateJob = (req, res) => {   
    // grabs the body of the request {company="newCompany"} and stores it
    const job_object = req.body
    //Iterates through the keys in job_object, and performs commands on each one
    Object.keys(job_object).forEach(key => {
        console.log("This is job_object[key] (the value were updating to ('companyName'))", job_object[key])
        console.log("This is Object.keys(job_object) (the request body's key ('company'))", Object.keys(job_object))
        
        connection.query(`UPDATE jobs SET ${key} = ? WHERE id=?`, [job_object[key],req.params.id], (err, rows, fields) => {
            if (err) throw err
            res.send(rows)
        }) 
    })
}


exports.createJob = (req, res) => {
    connection.query('INSERT INTO jobs (id, position, company, application_status, job_location, company_location, post_link, notes) VALUES(uuid(), ?, ?, ?, ?, ?, ?, ?)', [req.body.position, req.body.company, req.body.application_status, req.body.job_location, req.body.company_location, req.body.post_link, req.body.notes], (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
}