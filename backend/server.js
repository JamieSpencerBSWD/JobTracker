//This is where I will make and relearn Node and JavaScript as well as Express for creating API's :3

//Backend will be created with Express/NodeJS and the databse will be managed through Postgres
const routes = require('./routes/routes')

const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get('/', routes.index)
/**
 * GET
 *  jobs
 *  applications 
 *  users 
 *  tags 
 *  job_tags
*/

//GET JOBS
app.get('/jobs', routes.getAllJobs)
app.get('/jobs/:id', routes.getJobById)

//GET USERS
app.get('/users', routes.getAllUsers)
app.get('/users/:id', routes.getUserById)

//GET APPLICATIONS
app.get('/applications', routes.getAllApplications)
app.get('/applicationss/:id', routes.getApplicationById)

//GET TAGS
app.get('/tags', routes.getAllTags)
app.get('/tags/:id', routes.getTagById)

//GET JOB TAGS
app.get('/job_tags', routes.getAllJobTags)
app.get('/job_tags/:id', routes.getJobTagById)

/**
 * POST
 *  jobs
 *  applications 
 *  users 
 *  tags 
 *  job_tags
*/

app.post('/jobs', routes.createJob)

/**
 * PATCH
 *  jobs
 *  applications 
 *  users 
 *  tags 
 *  job_tags
*/

app.patch('/jobs/:id', routes.updateJob)

/**
 * DELETE
 *  jobs
 *  applications 
 *  users 
 *  tags 
 *  job_tags
*/

app.delete('/jobs/:id', routes.deleteJobById)

const PORT = 3000

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
