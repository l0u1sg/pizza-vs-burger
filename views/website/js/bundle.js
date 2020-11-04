(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
var nbPizza = 0;
var nbBurger = 0;
var fs = require('fs'), 
	filePath = './js/countPizza.txt'; 
var file = fs.readFileSync(filePath, 'utf8'); 
console.log(css); 

// function readFile(file) {
// 	fs.readFile(file, 'uft8', function(err, data) {
// 		if (err) {
// 			return console.log(err)
// 		}
// 		console.log(data)
// 	});
// }
// readFile('../website/js/countPizza.txt')

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

},{"fs":1}]},{},[2]);
