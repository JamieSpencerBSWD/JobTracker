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
const path = require('path');
const pgpromise = require('pg-promise')(/* options */)
const database = pgpromise(`postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`)


const allowedTables = ["jobs", "applications", "users", "tags", "job_tags"];

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
    // connection.query(`SELECT * FROM jobs WHERE id=?`,[req.params.id], (err, rows, fields) => {
    //     if (err) throw err
    //     res.send(rows)
    // })
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
    // connection.query(`SELECT * FROM jobs WHERE id=?`,[req.params.id], (err, rows, fields) => {
    //     if (err) throw err
    //     res.send(rows)
    // })
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
    // connection.query(`SELECT * FROM jobs WHERE id=?`,[req.params.id], (err, rows, fields) => {
    //     if (err) throw err
    //     res.send(rows)
    // })
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
    // connection.query(`SELECT * FROM jobs WHERE id=?`,[req.params.id], (err, rows, fields) => {
    //     if (err) throw err
    //     res.send(rows)
    // })
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
    // connection.query(`SELECT * FROM jobs WHERE id=?`,[req.params.id], (err, rows, fields) => {
    //     if (err) throw err
    //     res.send(rows)
    // })
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
    // connection.query(`SELECT * FROM jobs WHERE id=?`,[req.params.id], (err, rows, fields) => {
    //     if (err) throw err
    //     res.send(rows)
    // })
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
    // connection.query(`SELECT * FROM jobs WHERE id=?`,[req.params.id], (err, rows, fields) => {
    //     if (err) throw err
    //     res.send(rows)
    // })
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
    // connection.query(`SELECT * FROM jobs WHERE id=?`,[req.params.id], (err, rows, fields) => {
    //     if (err) throw err
    //     res.send(rows)
    // })
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
    // connection.query(`SELECT * FROM jobs WHERE id=?`,[req.params.id], (err, rows, fields) => {
    //     if (err) throw err
    //     res.send(rows)
    // })
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
    // connection.query(`SELECT * FROM jobs WHERE id=?`,[req.params.id], (err, rows, fields) => {
    //     if (err) throw err
    //     res.send(rows)
    // })
}

//DELETE (update DELETEDAT column)

exports.deleteJobById = (req, res) => {
    connection.query(`DELETE FROM jobs WHERE id=?`, [req.params.id], (err, rows, fields) => {
        if (err) throw err
        res.send({msg:"Job Deleted Successfully"})
    })    
}

//UPDATE
exports.updateJob = (req, res) => {   
    // grabs the body of the request {company="newCompany"} and stores it
    const job_object = req.body
    //Iterates through the keys in job_object, and performs commands on each one
    Object.keys(job_object).forEach(key => {
        // console.log("This is job_object[key] (the value were updating to ('companyName'))", job_object[key])
        // console.log("This is Object.keys(job_object) (the request body's key ('company'))", Object.keys(job_object))
        
        connection.query(`UPDATE jobs SET ${key} = ? WHERE id=?`, [job_object[key],req.params.id], (err, rows, fields) => {
            if (err) throw err
        }) 
    })
    res.send({msg:"Job Updated Successfully"})
}

//CREATE
exports.createJob = (req, res) => {
    connection.query('INSERT INTO jobs (id, position, company, application_status, job_location, company_location, post_link, notes) VALUES(uuid(), ?, ?, ?, ?, ?, ?, ?)', [req.body.position, req.body.company, req.body.application_status, req.body.job_location, req.body.company_location, req.body.post_link, req.body.notes], (err, rows, fields) => {
        if (err) throw err
        res.send({msg:"Job Created Successfully"})
    })
}