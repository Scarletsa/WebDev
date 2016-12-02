function start() {
  var button1 = document.getElementById("wishlist");
  button1.addEventListener("click", wish, false);
  var button2 = document.getElementById("shoppingcart");
  button2.addEventListener("click", cart, false);
}

function wish() {
  var price = 799;
  var quantity = 1;
  htc.push(price, quantity);
  alert("HTC Vive added to wishlist");
}

function cart() {
  var price = 799;
  var quantity = /* retrieve integer from cart page */
  alert("HTC vive added to cart");
}

window.addEventListener("load", start, false);
var htc = [];
