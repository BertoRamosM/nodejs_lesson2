const express = require("express")
const fs = require("node:fs")

const app = express()

const PORT = process.env.PORT ?? 1234

app.get("/", (req, res) => {
  res.status(200).send('<h1>My main page in express!</h1>')
  //we could also send a json like this
  /* 
  res.json({message: "Hello world!"})
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


app.listen(PORT, () => {
  console.log(`Listing server in port ${PORT}`)
})