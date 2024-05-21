// copied from course1 lesson 9 and modified
const http = require("node:http");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  // in case all the headers are the same we can just declare them here, and all of the response will share it instead of writting one in each
 /*  res.setHeader("Content-Type", "text/html; charset=utf-8"); */

  if (req.url === "/") {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    // or text/html, or application/json, or image etc etc etc
    res.end("Welcome to my main page")
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>Contact page</h1>");
  } else {
    res.statusCode = 404
     res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("404 page not found")
  }
}

const server = http.createServer(processRequest);

  server.listen(desiredPort, () => {
    console.log(`server listening on http://localhost:${desiredPort}`);
  });


