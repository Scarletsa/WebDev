var wish = [];
var cart = [];

$(document).ready(function(){
      $("#wishListHTC").click(function() {
        var price = 799;
        var description = "HTC Vive VR";
        var quantity = parseInt(window.prompt("Please enter a quantity: "));
        var total = (price * quantity);
        var item = (description + "|" + price + "|" + quantity + "|" + total);
        wish.push(item);
        window.localStorage.setItem("viveWish", (wish.join(";")));
        alert("HTC Vive added to wish list");
      })

      $("#shoppingCartHTC").click(function() {
        var price = 799;
        var description = "HTC Vive VR";
        var quantity = parseInt(window.prompt("Please enter a quantity: "));
        var total = (price * quantity);
        var item = (description + "|" + price + "|" + quantity + "|" + total);
        cart.push(item);
        window.localStorage.setItem("viveCart", (cart.join(";")));
        alert("HTC Vive added to cart");
      });
});
