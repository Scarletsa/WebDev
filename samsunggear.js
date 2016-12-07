var wish = [];
var cart = [];

$(document).ready(function(){
      $("#wishListSamsung").click(function() {
        var price = 99;
        var description = "Samsung Gear VR";
        var quantity = parseInt(window.prompt("Please enter a quantity: "));
        var total = (price * quantity);
        var item = (description + "|" + price + "|" + quantity + "|" + total);
        wish.push(item);
        window.localStorage.setItem("gearWish", (wish.join(";")));
        alert("Samsung Gear added to wish list");
      })

      $("#shoppingCartSamsung").click(function() {
        var price = 99;
        var description = "Samsung Gear VR";
        var quantity = parseInt(window.prompt("Please enter a quantity: "));
        var total = (price * quantity);
        var item = (description + "|" + price + "|" + quantity + "|" + total);
        cart.push(item);
        window.localStorage.setItem("gearCart", (cart.join(";")));
        alert("Samsung Gear added to cart");
      });
});
