const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routeLocataire = require('../Routes/RouteLocataire.js')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

localhost:3000

app.get('/', (req, res) => {
    res.send('App is working')
})


app.use("/",routeLocataire)




app.listen(3000, () => console.log('Server running on port 3000 ...'))

module.exports = app