//This is the main tutorial I followed and the one that described how to create a web service, better than the other ones.
//It was written and published on https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
//Also used https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website as a guide in setting up my project
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

//Converting a document to XML format from JSON format
var fs = require('fs');
var parser = require('xml2json');
var reader = require('./app/translator/xml2json');
var reader2 = require ('./app/translator/xml2json.toXml');

//Parse requests content type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//Parse request of content type - application/json
app.use(bodyParser.json())

//Configure the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI || dbConfig;
mongoose.Promise = global.Promise;
//Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Successfully connected to the database');
}).catch(err => {
    console.log('Could not connect to the database. Exiting.', err);
    process.exit();
});

//Add routes to middleware
app.get('/', (req, res) => {
    res.json({"message": "Welcome to the help desk ticketing system.  You may see any tickets, delete, or update any that you see fit.  Project for Dr. Burris, CMPS 415 Spring 2019."});
});
//Import the ticket route
require('./app/models/ticket.model', Router);
require('./app/routes/ticket.routes.js', Router);
require('./app/controllers/ticket.controller', Router);

//Listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});

//Export the module
module.exports = app;