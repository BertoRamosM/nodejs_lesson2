// copied from course1 lesson 9 and modified
const http = require("node:http");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
console.log("Request recieved:", req.url)
res.end('Hello world')
}
const server = http.createServer(processRequest);

  server.listen(desiredPort, () => {
    console.log(`server listening on http://localhost:${desiredPort}`);
  });


