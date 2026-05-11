// jobs should have this:
// id, 
// position, 
// company, 
// application_status, 
// job_location, 
// company_location, 
// post_link, 
// notes
// require('dotenv').config()
// const path = require('path');
// const pgpromise = require('pg-promise')(/* options */)
// const database = pgpromise(`postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`)
const database = require('../database')

const allowedTables = ["jobs", "applications", "users", "tags", "job_tags"];

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