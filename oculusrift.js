var quantity = 0;
var oculus = [];
function start() {
  var button = document.getElementById("wishlist");
  button.addEventListener("click", wish, false);
  var buttons = document.getElementById("shoppingcart");
  buttons.addEventListener("click", cart, false);
}

function wish() {
  var price = 799;
  var description = "Oculus Rift VR";
  quantity += 1;
  var total = (price * quantity);
  oculus.push(description + "|" + price + "|" + quantity + "|" + total;);
  window.localStorage.setItem("wishListArray", oculus.join(";"));
  alert("Oculus Rift added to wish list");
}

function cart() {
  var price = 799;
  var quantity = 0;/* retrieve integer from cart page */
  alert("Oculus Rift added to cart");
}
window.addEventListener("load", start, false);
