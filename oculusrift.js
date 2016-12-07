var wish = [];
var cart = [];

$(document).ready(function(){
      $("#wishlist").click(function() {
        var price = 799;
        var description = "Oculus Rift VR";
        var quantity = parseInt(window.prompt("Please enter a quantity: "));
        var total = (price * quantity);
        var item = (description + "|" + price + "|" + quantity + "|" + total);
        wish.push(item);
        window.localStorage.setItem("oculusWish", (wish.join(";")));
        alert("Oculus Rift added to wish list");
      })

      $("#shoppingcart").click(function() {
        var price = 799;
        var description = "Oculus Rift VR";
        var quantity = parseInt(window.prompt("Please enter a quantity: "));
        var total = (price * quantity);
        var item = (description + "|" + price + "|" + quantity + "|" + total);
        cart.push(item);
        window.localStorage.setItem("oculusCart", (wish.join(";")));
        alert("Oculus Rift added to cart");
      });
});
