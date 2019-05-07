//Used the best tutorial that helped me understand the atual entire process of setting up a CRUD app on Node.js; without the hep
//of scaffolding like in .NET framework.
//Tutorial website is : https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/

/* Create the web server. */
const express = require('express');
const bodyParser = require('body-parser');

//Create the express app
const app = express();

//Parse requests of content-type - application/json
app.use(bodyParser.json())

//Configure the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting.', err);
    process.exit();
});

//Define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to the help desk ticket system. Basic CRUD operations are available for tickets represented in JSON format."});
});

//Listen for requests on define port
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});