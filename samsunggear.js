var quantity = 0;
var gear = [];
function start() {
  var button = document.getElementById("wishlistSamsung");
  button.addEventListener("click", wish, false);
  var buttons = document.getElementById("shoppingCartSamsung");
  buttons.addEventListener("click", cart, false);
}

function wish() {
  var price = 799;
  var description = "Samsung Gear VR";
  quantity ++;
  var total = (price * quantity);
  var item = (description + "|" + price + "|" + quantity + "|" + total);
  oculus.push(item);
  window.localStorage.setItem("wishListArray", oculus.join(";"));
  alert("Samsung Gear added to wish list");

}

function cart() {
  var price = 799;
  var quantity = /* retrieve integer from cart page */
  alert("Samsung Gear added to cart");
}
window.addEventListener("load", start, false);
