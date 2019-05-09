module.exports = (app) => {
    const tickets = require('../controllers/ticket.controller.js');

    //Endpoint to retrieve all tickets
    app.get('/rest/list/', tickets.findAll);

    //Endpoint to get a single ticket based on id
    app.get('/rest/ticket/:ticketId', tickets.findOne);

    //Endpoint to get a single ticket returned as an XML document; should use the existing endpoint /rest/ticket/id to get the info as a JSON object, and return it in XML format
    app.get('/rest/xml/ticket/:ticketId', ticket.module(findALl));

    //Endpoint to create a new ticket based on id
    app.post('/rest/ticket/', tickets.create);

    //Ednpoint to add a single ticket send as an XML document
    app.put('/rest/xml/ticket/:ticketId', ticket.module(create));

    //Endpoint to delete a single ticket
    app.delete('/rest/ticket/:ticketId', tickets.delete);

    //Endpoint to update an existing ticket
    app.put('/rest/ticket/:ticketId', tickets.update);
}