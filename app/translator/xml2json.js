//Should convert a raw XML string into a JSON response.
var fs = require('fs');
var parser = require('xml2json');

fs.readFile( './ticket.xml', function(err, data) {
  var json = JSON.parse(parser.toJson(data, {reversible: true}));
});

module.exports = ("xml2json");