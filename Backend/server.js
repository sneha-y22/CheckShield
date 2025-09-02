const http = require('http');

const hostname = '127.0.0.1'; // Localhost
const port = 3000;

// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response HTTP header with a status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body "Hello World"
  res.end('Hello World from Node.js Server!\n');
});

// Listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
