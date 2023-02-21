const http = require('http');

const app = http;

const port = 1245;

const server = app.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

server.listen(port, () => '');

module.exports = app;
