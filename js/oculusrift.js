$(document).ready(function(){
      $("#wishlist").click(function() {
        var price = 799;
        var description = "Oculus Rift VR";
        var quantity = parseInt(window.prompt("Please enter a quantity: "));
        var total = (price * quantity);
        var item = (description + "|" + price + "|" + quantity + "|" + total);
        window.localStorage.setItem("oculusWish", item);
        alert("Oculus Rift added to wish list");
      })

      $("#shoppingcart").click(function() {
        var price = 799;
        var description = "Oculus Rift VR";
        var quantity = parseInt(window.prompt("Please enter a quantity: "));
        var total = (price * quantity);
        var item = (description + "|" + price + "|" + quantity + "|" + total);
        window.localStorage.setItem("oculusCart", item);
        alert("Oculus Rift added to cart");
      });
});
