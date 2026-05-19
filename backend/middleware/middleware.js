//Add Validation Middleware here (using express-router)
/*
    For all post routes, check if valid data is being passed through the correct endpoints.
    Correct data types, correct request body, correct headers, everything.
    THEN, pass the request body's through to the correct routes.
*/

const {body, validationRequest} = require('express-validator');


