var quantity = 0;
var gear = [];
function start() {
  var button = document.getElementById("wishListSamsung");
  button.addEventListener("click", wish, false);
  var buttons = document.getElementById("shoppingCartSamsung");
  buttons.addEventListener("click", cart, false);
}

function wish() {
  var price = 799;
  var description = "SamsungGear VR";
  quantity ++;
  var total = (price * quantity);
  var item = (description + "|" + price + "|" + quantity + "|" + total);
  gear.push(item);
  window.localStorage.setItem("wishListGear", gear.join(";"));
  alert("Samsung Gear VR added to wish list");
}

function cart() {
  var price = 799;
  var quantity = /* retrieve integer from cart page */
  alert("Samsung Gear VR added to cart");
}
window.addEventListener("load", start, false);
