// copied from course1 lesson 9 and modified
const http = require("node:http");
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  // in case all the headers are the same we can just declare them here, and all of the response will share it instead of writting one in each
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  // or text/plain, or application/json, or image etc etc etc

  if (req.url === "/") {
    //default code = 200 its actually the default
 /*    res.statusCode = 200; */
    res.end("<h1>Welcome to my main page</h1>");
    //to download an image
  } else if (req.url === "/pink.jpg") {
    fs.readFile('./pink.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end("<h1>Internal server error</h1>")
      } else {
        //actually not needed, 200 its defualt
        res.statusCode = 200;
        //important to change the header to inform that its an image and only if 200
        res.setHeader("Content-Type", "image/jpg");
        res.end(data)
      }
    })
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

  // if -watch dosnt work we can install nodemon (slower, but more powerfull), we can install it as a dev dependency locally to this project and add scripts to npm, its always better than install it globally

//status code list:
//in "http.cat" we have a list illustrated with cats with all the possible responses

/*    100 - 199 = informative response
      200 - 299 = satisfactory response
      300 - 399 = redirection
      400 - 499 = client errors
      500 - 599 = server errors

      the most typical status codes:
      200 = ok
      301 = moved permanently (redirect)
      400 = bad request
      404 = not found
      500 = internal server error

 */

    

