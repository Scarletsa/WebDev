$(document).ready(function(){
      $("#wishListHTC").click(function() {
        var price = 799;
        var description = "HTC Vive VR";
        var quantity = parseInt(window.prompt("Please enter a quantity: "));
        var total = (price * quantity);
        var item = (description + "|" + price + "|" + quantity + "|" + total);
        window.localStorage.setItem("viveWish", item);
        alert("HTC Vive added to wish list");
      })

      $("#shoppingCartHTC").click(function() {
        var price = 799;
        var description = "HTC Vive VR";
        var quantity = parseInt(window.prompt("Please enter a quantity: "));
        var total = (price * quantity);
        var item = (description + "|" + price + "|" + quantity + "|" + total);
        window.localStorage.setItem("viveCart", item);
        alert("HTC Vive added to cart");
      });
});
