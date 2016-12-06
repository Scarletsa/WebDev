var quantity = 0;
var htc = [];
function start() {
  var button = document.getElementById("wishListHTC");
  button.addEventListener("click", wish, false);
  var buttons = document.getElementById("shoppingCartHTC");
  buttons.addEventListener("click", cart, false);
}

function wish() {
  var price = 799;
  var description = "HTC Vive";
  quantity ++;
  var total = (price * quantity);
  var item = (description + "|" + price + "|" + quantity + "|" + total);
  oculus.push(item);
  window.localStorage.setItem("wishListArray", oculus.join(";"));
  alert("HTC Vive added to wish list");

}

function cart() {
  var price = 799;
  var quantity = /* retrieve integer from cart page */
  alert("HTC Vive added to cart");
}
window.addEventListener("load", start, false);
