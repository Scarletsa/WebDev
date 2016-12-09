function display() {
  total = 0;

  if (window.localStorage.getItem("oculusWish") == null) {
  var price = 799;
  var description = "Oculus Rift VR";
  var quantity = 0;
  var total = (price * quantity);
  var item = (description + "|" + price + "|" + quantity + "|" + total);
  window.localStorage.setItem("oculusWish", (item));
} else {
  var oculusString = window.localStorage.getItem("oculusWish");
  var oItem = oculusString.split("|");
}

if (window.localStorage.getItem("gearWish") == null) {
  var price = 99;
  var description = "Samsung Gear VR";
  var quantity = 0;
  var total = (price * quantity);
  var item = (description + "|" + price + "|" + quantity + "|" + total);
  window.localStorage.setItem("gearWish", (item));
} else {
  var gearString = window.localStorage.getItem("gearWish");
  var gItem = gearString.split("|");
}


if (window.localStorage.getItem("viveWish") == null) {
  var price = 799;
  var description = "HTC Vive VR";
  var quantity = 0;
  var total = (price * quantity);
  var item = (description + "|" + price + "|" + quantity + "|" + total);
  window.localStorage.setItem("viveWish", (item));
} else {
  var viveString = window.localStorage.getItem("viveWish");
  var vItem = viveString.split("|");
}

  var toScreen = document.getElementById("wishlistDisplay");

  var temp = "<table><tr><td>Description</td><td>Price</td><td>Quantity</td><td>Total</td></tr>";
  temp += "<tr><td>" + oItem[0] + "</td><td>" + oItem[1] + "</td><td><input name='quantityRift' id='quantityRift' type='text' value='" + oItem[2] + "'  style='width:40px'></td><td>" + oItem[3] + "</td></tr>";
  total += parseInt(oItem[3]);
  temp += "<tr><td>" + gItem[0] + "</td><td>" + gItem[1] + "</td><td><input name='quantityGear' id='quantityGear' type='text' value='" + gItem[2] + "' style='width:40px'></td><td>" + gItem[3] + "</td></tr>";
  total += parseInt(gItem[3]);
  temp += "<tr><td>" + vItem[0] + "</td><td>" + vItem[1] + "</td><td><input name='quantityVive' id='quantityVive' type='text' value='" + vItem[2] + "'  style='width:40px'></td><td>" + vItem[3] + "</td></tr>";
  total += parseInt(vItem[3]);
  temp += "</table>";

  toScreen.innerHTML = temp;

  var gt = document.getElementById("total");
  gt.innerHTML = total;

  $('#zero').click(function (){
    var price = 799;
    var description = "Oculus Rift VR";
    var quantity = 0;
    var total = (price * quantity);
    var item = (description + "|" + price + "|" + quantity + "|" + total);
    window.localStorage.setItem("oculusWish", item);
    var price = 99;
    var description = "Samsung Gear VR";
    var quantity = 0;
    var total = (price * quantity);
    var item = (description + "|" + price + "|" + quantity + "|" + total);
    window.localStorage.setItem("gearWish", item);
    var price = 799;
    var description = "HTC Vive VR";
    var quantity = 0;
    var total = (price * quantity);
    var item = (description + "|" + price + "|" + quantity + "|" + total);
    window.localStorage.setItem("viveWish", item);
    display();
  });

  $('#cart').click(function () {
    window.localStorage.setItem("oculusCart", oItem.join('|'));
    window.localStorage.setItem("gearCart", gItem.join('|'));
    window.localStorage.setItem("viveCart", vItem.join('|'));
    display();
  });

  $('#quantityRift').click(function() {
    var price = 799;
    var description = "Oculus Rift VR";
    var quantity = parseInt(window.prompt("Please enter a quantity: "));
    while (isNaN(quantity)) {
        var quantity = parseInt(window.prompt("Please enter a quantity: "));
    }
    var total = (price * quantity);
    var item = (description + "|" + price + "|" + quantity + "|" + total);
    window.localStorage.setItem("oculusWish", (item));
    display()
  });

  $('#quantityGear').click(function() {
    var price = 99;
    var description = "Samsung Gear VR";
    var quantity = parseInt(window.prompt("Please enter a quantity: "));
    while (isNaN(quantity)) {
        var quantity = parseInt(window.prompt("Please enter a quantity: "));
    }
    var total = (price * quantity);
    var item = (description + "|" + price + "|" + quantity + "|" + total);
    window.localStorage.setItem("gearWish", (item));
    display();
  });

  $('#quantityVive').click(function() {
    var price = 799;
    var description = "HTC Vive VR";
    var quantity = parseInt(window.prompt("Please enter a quantity: "));
    while (isNaN(quantity)) {
        var quantity = parseInt(window.prompt("Please enter a quantity: "));
    }
    var total = (price * quantity);
    var item = (description + "|" + price + "|" + quantity + "|" + total);
    window.localStorage.setItem("viveWish", (item));
    display();
  });
};

window.addEventListener("load" ,display , false)
