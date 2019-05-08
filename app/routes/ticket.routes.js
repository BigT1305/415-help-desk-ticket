module.exports = (app) => {
    const ticket = require('../controllers/ticket.controller.js');

    //Endpoint to retrieve all tickets
    app.get('/rest/list/', ticket.findAll);

    //Endpoint to get a single ticket based on id
    app.get('/rest/ticket/:ticketId', ticket.findOne);

    //Endpoint to create a new ticket based on id
    app.post('/rest/ticket/', ticket.create);

    //Endpoint to delete a single ticket
    app.delete('/rest/ticket/:ticketId', ticket.delete);

    //Endpoint to update an existing ticket
    app.put('/rest/ticket/:ticketId', ticket.update);
}