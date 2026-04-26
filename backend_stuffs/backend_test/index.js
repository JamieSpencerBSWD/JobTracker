//This is where I will make and relearn Node and JavaScript as well as Express for creating API's :3

//Backend will be created with Express/NodeJS and the databse will be managed through MYSQL
const routes = require('./routes/routes')

const express = require('express');

const app = express();

app.use(express.json())

app.get('/', routes.index)
app.get('/users', routes.users)
app.get('/users/:id', routes.getUserById)

app.post('/users', routes.createUser)

app.patch('/users/:id', routes.updateUser)

app.delete('/users/:id', routes.deleteUserById)

const PORT = 3000

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));