let http = require('http');

let handleRequest = function(req, res) {
  console.log('Request url : ' + req.url);
  res.writeHead(200);
  res.end('Hello World Again!');
};
let www = http.createServer(handleRequest);
www.listen(8080, () => {
  console.log('Server started on port 8080');
});
