// load library and create app object
const express = require('express')
const app = express()
const path=require('path');
// "database"
let users = [];
app.use(express.static(__dirname + '/public'))
app.get('/', function (req, res) {  
    res.sendFile(__dirname + '/index.html')
})
app.get('/createUser', function(req, res){
    let user = {
        name: req.query.firstName,
        score: parseInt(req.query.score)
    }
    users.push(user)
    res.status(201).redirect('/')
})
// show all users
app.get('/showUsers', function(req, res){
    let data = JSON.stringify(users)
    res.send(data)
})

// calculate user w highest score
app.get('/highest', function(req, res){
    let highest = 0
    let name = '' 
    for (let user of users) {
        console.log(user)
        if (user.score > highest) {
            console.log(user)
            highest = user.score
            name = user.name
        }
    }
    console.log(name)
    res.send(name)
})
// app listen on a PORT
app.listen(9001)
console.log('running')
