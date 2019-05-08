const mongoose = require('mongoose');

//Create Ticket schema for JSON obects
const TicketSchema = mongoose.Schema({
    id: Number,
    created_at: Date,
    updated_at: Date,
    type: String,
    subject: String,
    description: String,
    priority: String,
    recipient: String,
    assignee_id: Number,
    follower_ids: Number,
    tags
}, {
    timestamps: true
});

module.exports = mongoose.model('Ticket', TicketSchema);