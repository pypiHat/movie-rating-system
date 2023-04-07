const express = require("express")
const app = express()

app.use(express.json())
require('dotenv').config()


const movie = require('./routes/movie.route')

require('./routes')(app) // register routes

app.use('api/v1/movie', movie)


const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`server running on port ${port}.`);
})