let express = require('express')
let path = require('path')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
let app = express()
const port = 8081;
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.use('/public', express.static(path.join(__dirname, '/public')))

app.use(express.urlencoded({
  extended: true
}))
app.get('/', (req, res) => {
 res.render('index',{ title:"Article Management System"});
});

app.get('/articles', (req, res) => {
 res.render('articles',{ title:"Articles"});
});
app.get('/search', (req, res) => {
  let sQuery=req.body.Q;
 res.render("search",{
  searchQ:sQuery
 });
});
app.post('/loginUser', (req, res) => {
 //console.log(req.query.username);
 const username = req.body.username
 res.send("Login Sucessfull");
console.log(username);
 res.end()
});

app.get('/home', (req, res) => {
    res.render('index')
  });

  app.get('/articles/add', (req, res) => {
      res.render('add-article',{title:"Add New Art"})
    });

app.get('/about', (req, res) => {
    res.render("about",{title:"About"})
  });

//this always redirects to the 404.html page when requested resources are not available
app.get("*", function (req, res) {
    res.render("404",{title:"Not Found"});
})
app.post("*", function (req, res) {
    res.render("404",{title:"Not Found"});
})


const server = app.listen(port, function () {
    const host = server.address().address;
    //const port = server.address().port;
    console.log('Express Application Running at http://%s:%s', host, port);
  });
