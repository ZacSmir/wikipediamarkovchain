var util = require('util');
var fs = require('fs');

var markov = require('markov');
var m = markov(1);

var s = fs.createReadStream(__dirname + text);
console.log()
m.seed(s, function () {
  var stdin = process.openStdin();
  util.print('> ');

  stdin.on('data', function (line) {
    var res = m.respond(line.toString()).join(' ');
    console.log(res);
    util.print('> ');
  });
});