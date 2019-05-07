//The schema represents the fields of the JSON tickets.
const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
    id: Number,
    created_at:  Date,
    updated_at: Date,
    type: String,
    subject: String,
    description: String,
    priority: String,
    recipient: String,
    submitter: String,
    assignee_id: Number,
    follower_ids: Number,
    tags: String,
});

module.exports = mongoose.model('Ticket', TicketSchema);

