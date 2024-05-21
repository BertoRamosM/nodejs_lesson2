const http = require("node:http");

//commonJS(modules) we can import a json a saco
const ditoJSON = require('./pokemon.json')

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
