//Basically the controllers for the app
module exports = (app) => {
    const tickets = require('../controllers/note.controller.js');

    //Retrieve all tickets
    app.get('/rest/list', tickets.findAll);

    //Get a single ticket by Id/ticketId
    app.get('/rest/ticket/:ticketId', tickets.findOne);

    //Create a new ticket
    app.post('/rest/ticket/', tickets.create);

    //Delete a single ticket by ticketId
    app.delete('/rest/ticket/:ticketId', tickets.delete);

    //Update a ticket record based on ticketId
    app.put('/rest/ticket/:ticketId', tickets.update);

}