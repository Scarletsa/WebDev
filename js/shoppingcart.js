function display() {
  total = 0;

  if (window.localStorage.getItem("oculusCart") == null) {
  var price = 799;
  var description = "Oculus Rift VR";
  var quantity = 0;
  var total = (price * quantity);
  var item = (description + "|" + price + "|" + quantity + "|" + total);
  window.localStorage.setItem("oculusCart", (item));
} else {
  var oculusString = window.localStorage.getItem("oculusCart");
  var oItem = oculusString.split("|");
}

if (window.localStorage.getItem("gearCart") == null) {
  var price = 99;
  var description = "Samsung Gear VR";
  var quantity = 0;
  var total = (price * quantity);
  var item = (description + "|" + price + "|" + quantity + "|" + total);
  window.localStorage.setItem("gearCart", (item));
} else {
  var gearString = window.localStorage.getItem("gearCart");
  var gItem = gearString.split("|");
}


if (window.localStorage.getItem("viveCart") == null) {
  var price = 799;
  var description = "HTC Vive VR";
  var quantity = 0;
  var total = (price * quantity);
  var item = (description + "|" + price + "|" + quantity + "|" + total);
  window.localStorage.setItem("viveCart", (item));
} else {
  var viveString = window.localStorage.getItem("viveCart");
  var vItem = viveString.split("|");
}

  var toScreen = document.getElementById("cartDisplay");

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

  $('#clear').click(function (){
    var price = 799;
    var description = "Oculus Rift VR";
    var quantity = 0;
    var total = (price * quantity);
    var item = (description + "|" + price + "|" + quantity + "|" + total);
    window.localStorage.setItem("oculusCart", item);
    var price = 99;
    var description = "Samsung Gear VR";
    var quantity = 0;
    var total = (price * quantity);
    var item = (description + "|" + price + "|" + quantity + "|" + total);
    window.localStorage.setItem("gearCart", item);
    var price = 799;
    var description = "HTC Vive VR";
    var quantity = 0;
    var total = (price * quantity);
    var item = (description + "|" + price + "|" + quantity + "|" + total);
    window.localStorage.setItem("viveCart", item);
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
    window.localStorage.setItem("oculusCart", (item));
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
    window.localStorage.setItem("gearCart", (item));
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
    window.localStorage.setItem("viveCart", (item));
    display();
  });
};

window.addEventListener("load" ,display , false)
