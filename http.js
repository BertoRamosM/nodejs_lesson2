// copied from course1 lesson 9 and modified
const http = require("node:http");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  // in case all the headers are the same we can just declare them here, and all of the response will share it instead of writting one in each
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  // or text/plain, or application/json, or image etc etc etc

  if (req.url === "/") {
    //default code = 200 its actually the default
 /*    res.statusCode = 200; */
    res.end("<h1>Welcome to my main page</h1>");
  } else if (req.url === "/contact") {
    res.end("<h1>Contact page</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404 page not found</h1>");
  }
}

const server = http.createServer(processRequest);

  server.listen(desiredPort, () => {
    console.log(`server listening on http://localhost:${desiredPort}`);
  });


//status code list:
/*    100 - 199 = informative response
      200 - 299 = satisfactory response
      300 - 399 = redirection
      400 - 499 = client errors
      500 - 599 = server errors
 */

