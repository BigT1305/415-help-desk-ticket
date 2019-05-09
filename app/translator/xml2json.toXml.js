//Converting a document to XML format from JSON format
var fs = require('fs');
var parser = require('xml2json');
var Number = new Number();

function readXmlFile()
fs.readFile( './ticket.xml', function(err, data) {
  var json = JSON.parse(parser.toJson(data, {reversible: true}));
  var tickets = json["Ticket"]["id"];
  for (var i = 0; i < tickets.length; i++) {
    var ticket = tickets[i];
    tickets.ticketId = i;
  }

  var stringified = JSON.stringify(json);
  var xml = parser.toXml(stringified);
  fs.writeFile('ticket-converted.xml', xml, function(err, data) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Converted:)');
    }
  });
});

module.exports = ("xml2json");