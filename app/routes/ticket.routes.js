module.exports = (app) => {
    const tickets = require('../controllers/ticket.controller.js');

    //Endpoint to retrieve all tickets
    app.get('/rest/list/', tickets.findAll);

    //Endpoint to get a single ticket based on id
    app.get('/rest/ticket/:ticketId', tickets.findOne);

    //Endpoint to create a new ticket based on id
    app.post('/rest/ticket/', tickets.create);

    //Endpoint to delete a single ticket
    app.delete('/rest/ticket/:ticketId', tickets.delete);

    //Endpoint to update an existing ticket
    app.put('/rest/ticket/:ticketId', tickets.update);
}