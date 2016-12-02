function start() {
  var button1 = document.getElementById("wishlist");
  button1.addEventListener("click", wish, false);
  var button2 = document.getElementById("shoppingcart");
  button2.addEventListener("click", cart, false);
}

function wish() {
  var price = 799;
  var quantity = 1;
  oculus.push(price, quantity);
  alert("Oculus Rift added to wish list");
}

function cart() {
  var price = 799;
  var quantity = /* retrieve integer from cart page */
  alert("Oculus Rift added to cart");
}
window.addEventListener("load", start, false);
var oculus = [];
