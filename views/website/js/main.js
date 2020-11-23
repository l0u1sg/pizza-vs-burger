var nbPizza = 0;
var nbBurger = 0;
const pizza = document.getElementById("countPizza");
const burger = document.getElementById("countBurger");

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://publicuser:publicuser@burgervspizza.qblzm.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("count");
  console.log(collection.count.find({item: "pizza"}))
  
  client.close();
});



function countPizza() {
  nbPizza = nbPizza + 1;
  pizza.innerHTML = nbPizza;
}

function countBurger() {
  nbBurger = nbBurger + 1;
  burger.innerHTML = nbBurger;
}

pizza.innerHTML = nbPizza;
burger.innerHTML = nbBurger;
