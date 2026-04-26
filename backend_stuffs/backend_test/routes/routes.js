let users = [{
    id:0, 
    name:"Hope",
    age:25
},{
    id:1,
    name:"Philip",
    age:24
}
]

exports.index = (req, res) => {
    //When someone makes a request on the root level of a web server, respond with this function
    res.send('<h1>Hello World!</h1>');
};

exports.users = (req, res) => {
    
    res.send(users)
}

exports.getUserById = (req, res) => {
    
    //outputs whatever you set the id in the browser "/id"
    const id = parseInt(req.params.id);
    //Grab the ID from the url params (users/:id)

    const user = users.find(u => u.id === id);
    //chech if the user exists in the users array

    if (!user) {
        return res.status(404).json({ msg: "User Not Found" });
        //if no user is found, send a 404 status code
    }

    //Send back a status 200 (request OK), as wella s the found data
    res.status(200).json(user);
}

exports.deleteUserById = (req, res) => {
    
    //outputs whatever you set the id in the browser "/id"
    const id = parseInt(req.params.id);
    //Grab the ID from the url params (users/:id)

    const user = users.find(user => user.id === id);
    //chech if the user exists in the users array

    if (!user) {
        return res.status(404).json({ msg: "User Not Found. It may have already been deleted, or never existed at all!" });
        //if no user is found, send a 404 status code
    }

    const index = users.findIndex(user => user.id === id)
    //find the index that matches the users id

    if (index === -1) {
        return res.status(404).json({ msg: "User Not Found. It may have already been deleted, or never existed at all!" });
        //if no user is found, send a 404 status code
    }

    users.splice(index, 1)
    // removes the user at the index found
    
    //Send back a status 200 (request OK), as wella s the found data
    //splice array at the index in which youre trying to remove, and return the user deleted
    res.status(200).json(user);
}

exports.updateUser = (req, res) => {
    //outputs whatever you set the id in the browser "/id"
    const id = parseInt(req.params.id);
    //Grab the ID from the url params (users/:id)

    const user = users.find(u => u.id === id);
    //chech if the user exists in the users array

    if(!user){
        return res.status(404).json({msg: "User not found."})
    }
    //returns an error if the user is not found

    //update only what exists.
    if(req.body.name !== undefined){
        user.name = req.body.name
    }

    //update only what exists.
    if(req.body.age !== undefined){
        user.age = req.body.age
    }
    //this checks if the request in the body is not undefined and if it isnt, change the users name or age to the new name or age

    res.json(user);
}


exports.createUser = (req, res) => {
    const user = {id:users.length,name:req.body.name, age:req.body.age}
    users.push(user)
    res.json({msg: "User Created"})
}