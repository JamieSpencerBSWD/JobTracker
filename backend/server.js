//This is where I will make and relearn Node and JavaScript as well as Express for creating API's :3

//Backend will be created with Express/NodeJS and the databse will be managed through Postgres
const express = require('express');

const routes = require('./routes/routes');
const getroutes = require('./routes/getRoutes');
const postroutes = require('./routes/postRoutes');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//app.request('/', middleware function, controller function)
//request = get, post, put, patch, delete
//controller = functions like getRoutes.getUserById

/*
  middlewareFunction(req, res, next)

  if middleware succeeded:
      controllerFunction(req, res)
*/

app.get('/', getroutes.index)
/**
 * GET
 *  jobs
 *  applications 
 *  users 
 *  tags 
 *  job_tags
*/

//GET JOBS
app.get('/jobs', getroutes.getAllJobs)
app.get('/jobs/:id', getroutes.getJobById)

//GET USERS
app.get('/users', getroutes.getAllUsers)
app.get('/users/:id', getroutes.getUserById)

//GET APPLICATIONS
app.get('/applications', getroutes.getAllApplications)
app.get('/applicationss/:id', getroutes.getApplicationById)

//GET TAGS
app.get('/tags', getroutes.getAllTags)
app.get('/tags/:id', getroutes.getTagById)

//GET JOB TAGS
app.get('/job_tags', getroutes.getAllJobTags)
app.get('/job_tags/:id', getroutes.getJobTagById)

/**
 * POST
 *  jobs
 *  applications 
 *  users 
 *  tags 
 *  job_tags
*/

app.post('/jobs', postroutes.createNewJob)
app.post('/users', postroutes.createNewUser)

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
