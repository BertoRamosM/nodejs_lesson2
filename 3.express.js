const express = require("express")
const fs = require("node:fs")
const ditto = require("./pokemon/ditto.json")

const app = express()

//we delete the watermark of express in our request
app.disable("x-powered-by")

const PORT = process.env.PORT ?? 1234

//in the url of the middleware we can add the specific route that will be applied or all of them by no specifying like the example
//or for example in all the url that start for something: "/pokemon/*" 
app.use(/* "/" */(req, res, next) => {
  console.log("My first middleware")
  /* here we can do several things, such as trackinig the request to the db, check if users has cookies etc... */

  //DO NOT forget the next()!!
   next()
})

app.get("/pokemon/ditto", (req, res) => {
  //we can send a json easily:
  res.json(ditto);
  /* we could also send html like this:
   res.status(200).send('<h1>My main page in express!</h1>')
  */
})

app.post('/pokemon', (req, res) => {
    let body = ``
  req.on("data", chunk => {
      body += chunk.toString()
  })
  req.on("end", () => {
    const data = JSON.parse(body)
    data.timeStamp = Date.now()
    res.status(201).json(data)
  })
})


app.get("/pink", (req, res) => {
  fs.readFile("./pink.jpg", (error, data) => {
    if (error) {
      console.error("Error", error)
      res.status(500).send("Internal server error")
    } else {
      res.status(200).header("Content-Type", "image/jpeg").send(data)
    }
  })
});

// the 404 has to be always the last route to be declared, without path
//the method "use" its like "*"(all), for any method(get, post...) we do the following...
app.use((req, res) => { 
  res.status(400).send('<h1>404 page not found</h1>')
})


//always set a listen port
app.listen(PORT, () => {
  console.log(`Listing server in port ${PORT}`)
})