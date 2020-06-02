var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

app.use(express.static('public'));
app.use(express.static('node_modules/jquery/dist'));


var ShelfSchema = new mongoose.Schema({
  name: String,
  type: String
}, {collection: 'shelves'})

var ShopSchema = new mongoose.Schema({
  name: String,
  shelves: [ShelfSchema]
}, {collection: 'shops'});

var ItemSchema = new mongoose.Schema({
  name: String,
  shops: [ShopSchema],
  shelf: ShelfSchema
}, {collection: 'items'});

var Shop = mongoose.model('Shop', ShopSchema);
var Shelf = mongoose.model('Shelf', ShelfSchema);
var Item = mongoose.model('Item', ItemSchema);

// kuehlRegal = new Shelf({name: "Kühlregal", type: "kuehl"});
// rewe = new Shop({name: "Rewe", shelves: [kuehlRegal]});
// kinderPinguin = new Item({name: "Kinder Pinguin", shops: [rewe], shelf: kuehlRegal});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // Shop.deleteMany({}, console.log);
  // Shelf.deleteMany({}, console.log);
  // Item.deleteMany({}, console.log);

  // we're connected!
  // kuehlRegal.save(function (err, kuehlRegal) {
  //   if (err) return console.error(err);
  // })
  // rewe.save(function (err, rewe) {
  //   if (err) return console.error(err);
  // })
  // kinderPinguin.save(function (err, pingu) {
  //   if (err) return console.error(err);
  // })
});

app.get('/', function (req, res) {
    // res.send()
});

app.get('/shops', function (req, res) {
  // res.send(Shop.find({}));
  Shop.find({}, function(err, shops){
    res.send(shops);
  });
})

app.put('/shops/:shopName', function(req, res){
  Shop.find({name: req.params.shopName}, function(err, shops){
    if(shops.length){
      res.status(400).end();
    }
    else {
      newShop = new Shop({name: req.params.shopName, shelves: []});
      newShop.save()
    }
  })
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT);
});