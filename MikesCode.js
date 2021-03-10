// load library and create app object
const express = require('express')
const app = express()
const path = require('path')
// "database"
let users = []
// Parse URL-encoded bodies (as sent by HTML forms)
// app.use(express.urlencoded());
// Serve static files
app.use(express.static(__dirname + '/public'))
// home route
app.get('/', function (req, res) {  
    res.sendFile(__dirname + '/index.html')
})
// data routes
app.get('/createUser', function(req, res){
    users.push(req.query)
    // res.status(201).redirect('/')
})
// app.post('/createUser', function(req, res){
//     console.log(req.body)
//     res.status(201).send()
// })
// app listen on a PORT
app.listen(9001)
console.log('running')