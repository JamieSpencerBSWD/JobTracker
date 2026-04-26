//This is where I will make and relearn Node and JavaScript as well as Express for creating API's :3

//Backend will be created with Express/NodeJS and the databse will be managed through MYSQL
const routes = require('./routes/routes')

const express = require('express');

const app = express();

app.use(express.json())

app.get('/', routes.index)
app.get('/jobs', routes.jobs)
app.get('/jobs/:id', routes.getJobById)

app.post('/jobs', routes.createJob)

app.patch('/jobs/:id', routes.updateJob)

app.delete('/jobs/:id', routes.deleteJobById)

const PORT = 3000

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));