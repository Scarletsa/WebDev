$(document).ready(function(){
      $("#wishListSamsung").click(function() {
        var price = 99;
        var description = "Samsung Gear VR";
        var quantity = parseInt(window.prompt("Please enter a quantity: "));
        var total = (price * quantity);
        var item = (description + "|" + price + "|" + quantity + "|" + total);
        window.localStorage.setItem("gearWish", item);
        alert("Samsung Gear added to wish list");
      })

      $("#shoppingCartSamsung").click(function() {
        var price = 99;
        var description = "Samsung Gear VR";
        var quantity = parseInt(window.prompt("Please enter a quantity: "));
        var total = (price * quantity);
        var item = (description + "|" + price + "|" + quantity + "|" + total);
        window.localStorage.setItem("gearCart", item);
        alert("Samsung Gear added to cart");
      });
});
