const static = require('node-static');
const server = new static.Server('./element-visibility');
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    server.serve(request, response);
  }).resume();
}).listen(process.env.PORT || 3000);