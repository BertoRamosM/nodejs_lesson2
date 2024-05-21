const http = require("node:http");
//remember: nodejs is event based

//commonJS(modules) we can import a json a saco
const ditoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(ditoJSON))  
        default:
          res.statusCode = 404
           res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end('<h1>404Not found</h1>')
      }

    case 'POST':
      switch (url) {
        case "/pokemon": {
          let body = ``;
          //the server has to read the request and listen for the "data event" gradually (think about the example of the water in the pipes) and we store in the body chunk by chunk
          //BUT
          //the chunk its a binary buffer! so we transform to string
          req.on("data", chunk => {
            body += chunk.toString() 
          })
          req.on("end", () => {
            const data = JSON.parse(body)
            //we could do other things, such as connect a db from here to store the info, etc
            //201 because we saved the new resouce
            res.writeHead(201, { "Content-Type": "application/json; charset=urf-8"})
            res.end(JSON.stringify(data))
         })
        }
        
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404Not found</h1>");
      }
  }
};

const server = http.createServer(processRequest);

server.listen(1234, () => {
  console.log(`server listening on port http://localhost:1234`);
});

//list of methods
/* 

GET = request to recieve data
HEAD = to check if we can get the request but no body
POST = to create an entity of a resource
PUT = to replace/update an existing resource
DELETE = to delete an existing resource
OPTIONS = describe what we can do in the path        (usually link with CORS problems)

*/
