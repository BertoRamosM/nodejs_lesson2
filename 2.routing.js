const http = require('node:http')

const processRequest = (req, res) => {

}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log(`server listening on port http://localhost:1234`)
})


//list of methods
/* 

GET = request to recieve data
HEAD = to check if we can get the request but no body
POST = to create an entity of a resource
PUT = to replace/update an existing resource
DELETE = to delete an existing resource
OPTIONS = describe what we can do in the path        (usually link with CORS problems)

*/