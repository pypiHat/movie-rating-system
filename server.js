const express = require("express")
const app = express()

app.use(express.json())
require('dotenv').config()


const user = require('./routes/user.route')

require('./routes')(app) // register routes

app.use('api/v1/', user)


const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`server running on port ${port}.`);
})