function start() {
  var button1 = document.getElementById("wishlist");
  button1.addEventListener("click", wish, false);
  var button2 = document.getElementById("shoppingcart");
  button2.addEventListener("click", cart, false);
}

function wish() {
  var price = 99;
  var quantity = 1;
  samsung.push(price, quantity);
  alert("Samsung gear added to wish list");
}

function cart() {
  var price = 99;
  var quantity = /* retrieve integer from cart page */
  alert("Samsung gear added to cart");
}

window.addEventListener("load", start, false);
var samsung = [];
