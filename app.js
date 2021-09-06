const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

app.use(express.static('views'));



app.use(express.static(__dirname + '/views/assets/css'));




app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.render('index.html', {quote: null, error: null});
})

app.get('/Home', function (req, res) {
  res.render('/html/home.html', {quote: null, error: null});
})

app.get('/Contact Us', function (req, res) {
  res.render('/html/contact.html', {quote: null, error: null});
})

app.get('/Our Menu', function (req, res) {
  res.render('/html/menu.html', {quote: null, error: null});
})

app.get('/Our Locations', function (req, res) {
  res.render('/html/locations.html', {quote: null, error: null});
})

app.get('/Message Board', function (req, res) {
  res.render('/html/forum.html', {quote: null, error: null});
})




//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
	res.status(404).render('notfound');
});

app.listen(3000, function () {
	console.log('This app listening on port 3000!')
})