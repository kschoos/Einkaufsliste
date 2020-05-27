var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('node_modules/popper.js/dist/umd'));

app.get('/', function (req, res) {
    // res.send()
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});