// copied from course1 lesson 9 and modified
const http = require("node:http");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  if (req.url === "/") {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    // or text/html, or application/json, or image etc etc etc
    res.end("Welcome to my main page")
  }
}

const server = http.createServer(processRequest);

  server.listen(desiredPort, () => {
    console.log(`server listening on http://localhost:${desiredPort}`);
  });


