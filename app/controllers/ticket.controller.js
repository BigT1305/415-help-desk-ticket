const Ticket = require('../models/ticket.model.js');

//Retrieve all notes from the database
exports.findAll = (req, res) => {
    Ticket.find()
    .then(tickets => {
        res.send(tickets);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while retrieving tickets."
        });
    });
};

//Find a single ticket
exports.findOne = (req, res) => {
    Ticket.findById(req.params.ticketId)
    .then(tickets => {
        if(!tickets) {
            return res.status(404).send({
                message: "Ticket with id " + req.params.ticketId + " not found."
            });
        }
        res.sen(tickets);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Ticket with id " + req.params.ticketId + "not found."
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.ticketId
        });
    });
};

//Create and save a new ticket
exports.create = (req, res) => {
    //Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Ticket content cannot be empty"
        });
    }
    //Create a Ticket
    const ticket = new Ticket({
        id: req.body.id,
        created_at: req.body.createdat,
        updated_at: req.body.updatedat,
        type: req.body.type,
        subject: req.body.subject,
        description: req.body.description,
        priority: req.body.priority,
        status: req.body.status,
        recipient: req.body.recipient,
        submitter: req.body.submitter,
        assignee_id: req.body.assignee_id,
        follower_id: req.body.follower_id,
        tags: req.body.tags,
    });
    
    //Save Ticket in the database
    ticket.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while creating the Ticket."
        });
    });
};

//Delete a single ticket
exports.delete = (req, res) => {
    Ticket.findByIdAndRemove(req.params.ticketId)
    .then(ticket => {
        if(!ticket) {
            return res.status(404).send({
                message: "Ticket with id " + req.params.ticketId + " not found."
            });
        }
        res.send({message: "Ticket deleted successfully."});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Ticket with id " + req.params.ticketId + " not found."
            })
        }
        return res.status(500).send({
            message: "Could not delete ticket with id " + req.params.i
        });
    });
};

//Update a single ticket
exports.update = (req, res) => {
    //Validate request
    if(!req.body.content) {
        return res.staus(400).send({
            message: "Ticket content cannot be empty!"
        });
    }

    //Find ticket and update it with the request body
    Ticket.findByIdAndUpdate(req.params.ticketId, {
        id: req.body.id,
        createdat: req.body.createdat,
        updatedat: req.body.updatedat,
        type: req.body.type,
        subject: req.body.subject,
        description: req.body.description,
        priority: req.body.priority,
        status: req.body.status,
        recipient: req.body.recipient,
        submitter: req.body.submitter,
        assignee_id: req.body.assignee_id,
        follower_id: req.body.follower_id,
        tags: req.body.tags
    }, {new: true})
    .then(ticket => {
        if(!ticket) {
            return res.status(404).send({
                message: "Ticket with id " + req.params.ticketId + " not found."
            });
        }
        res.send(ticket);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Ticket with id " + req.params.ticketId + " not found."
            });
        }
        return res.status(500).send({
            message: "Error updating ticket with id " + req.params.ticketId
        });
    });
};


