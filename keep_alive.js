
import http from 'http';
const app = http()

http.createServer(function(req, res) {
  res.write(`Bot Online`);
  res.end();
}).listen(3000);