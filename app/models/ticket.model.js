var mongoose = require('mongoose');

var Schema = mongoose.Schema;
//Create Ticket schema for JSON obects
var TicketSchema = new Schema({
    id: {type: Schema.ObjectId, required: true},
    created_at: {type: Date, required: false},
    updated_at: {type: Date, required: false},
    type: String,
    subject: String,
    description: String,
    priority: String,
    recipient: String,
    assignee_id: BigInt,
    follower_ids: {type:BigInt},
    tags: {type: String, required: false},
}, {
    timestamps: true
});

//Virtual for this ticket instance URL
TicketSchema
.virtual('url')
.get(function () {
    return '/rest/ticket/'+ this.id;
});
//Export model
module.exports = mongoose.model('Ticket', TicketSchema);