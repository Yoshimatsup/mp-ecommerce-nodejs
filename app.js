require('dotenv').config();
var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000

var mp = require('mercadopago')
var app = express();

const public_token='TEST-560060d2-6043-4fd3-b752-6e74586afa3f'
const secret_token='TEST-3300541393630167-120714-97fbcca39e84ccfc893c2e93bafed1a5-270969919'

app.use(bodyParser.urlencoded({ extended: true }))
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('assets'));
 
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
    res.render('home');
});

app.post('/payment_processing', function (req, res){
    console.log(req.body);
    res.send();
})

app.get('/detail', function (req, res) {
    console.log(mp)
    res.render('detail', req.query);
});

app.listen(port);