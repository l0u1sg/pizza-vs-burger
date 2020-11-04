var nbPizza = 0;
var nbBurger = 0;
const pizza = document.getElementById("countPizza");
const burger = document.getElementById("countBurger");



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
