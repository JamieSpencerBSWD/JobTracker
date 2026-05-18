const database = require('../database/dbconn')
const bcrypt = require('bcrypt');
const path = require('path');
exports.index = (req, res) => {
    //When someone makes a request on the root level of a web server, respond with this html file
    res.sendFile(path.join(__dirname, 'hello.html'));
};
//GETS
exports.createNewJob = (req, res) => {
    database.manyOrNone('SELECT * FROM jobs')
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.createNewApplication = (req, res) => {
    /*
    *INSERT INTO applications (
        job_id,
        status
    )
    VALUES
    (
        'b36c7491-25ab-41c4-a7bb-f1d01cb16674',
        'applied'
    ),
    (
        'ab2f44fc-cb25-4652-9b5c-f8e4760b0bae',
        'interview_scheduled'
    );
     */
    database.manyOrNone('SELECT * FROM applications')
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.createNewUser = (req, res) => {
    // VALIDATE THAT THE USER HAS THE CORRECT BODY SENT THROUGH
        //If not, return an error and stop the operation

    // HASH PASSWORD WITH BCRYPT ON THE Backend
    // authentication is handdled in the middleware
    
        // INSERT INTO users (email, password)
        // VALUES
        // ('hope@example.com', 'hashed_password_123');
    
    // HASH PASSWORD:
        //BCrypt Hashing
        //Get password from middleware or request body
    const saltRounds = 10;
    const myPlaintextPassword = 's0/\/\P4$$w0rD';
    const someOtherPlaintextPassword = 'not_bacon';

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
            // Store hash in your password DB.
        });
    });

    //BELOW IS THE DATABASE connection


    // database.manyOrNone('SELECT * FROM users')
    // .then((data) => {
    //     console.log('DATA:', data)
    //     res.send(data)
    // })
    // .catch((error) => {
    //     console.log('ERROR:', error)
    // })
}

exports.createNewJobTag = (req, res) => {
    database.manyOrNone('SELECT * FROM job_tags')
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}

exports.createNewTag = (req, res) => {
    /**
     * INSERT INTO tags (tag_name)
     * VALUES
     * ('react'),
     * ('node'),
     * ('typescript'),
     * ('fullstack'),
     * ('entry-level'); 
     **/
    database.manyOrNone('SELECT * FROM tags')
    .then((data) => {
        console.log('DATA:', data)
        res.send(data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })
}