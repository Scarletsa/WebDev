total = 0;

function display(){
  var itemString = window.localStorage.getItem("oculusCart");
  var iList = itemString.split(";")
  var toScreen = document.getElementById("cart");
  toScreen.innerHTML = iList;

  var temp = "<table><tr><td>Description</td><td>Price</td><td>Quantity</td><td>Total</td></tr>";

  for(var i in iList)
  {
    var item = iList[i].split("|");
    temp += "<tr><td>" + item[0] + "</td><td>" + item[1] + "</td><td><input name='quantityRift' id='quantityRift' type='text' value='" + item[2] + "'  style='width:40px'></td><td>" + item[3] + "</td></tr>";
    total += parseInt(item[3]);
  }

  var itemString = window.localStorage.getItem("gearCart");
  var iList = itemString.split(";");

  for(var i in iList)
  {
    var item = iList[i].split("|");
    temp += "<tr><td>" + item[0] + "</td><td>" + item[1] + "</td><td><input name='quantityGear' id='quantityGear' type='text' value='" + item[2] + "' style='width:40px'></td><td>" + item[3] + "</td></tr>";
      total += parseInt(item[3]);
  }

  var itemString = window.localStorage.getItem("viveCart");
  var iList = itemString.split(";");

  for(var i in iList)
  {
    var item = iList[i].split("|");
    temp += "<tr><td>" + item[0] + "</td><td>" + item[1] + "</td><td><input name='quantityVive' id='quantityVive' type='text' value='" + item[2] + "'  style='width:40px'></td><td>" + item[3] + "</td></tr>";
    total += parseInt(item[3]);
  }

  temp += "</table>";
  toScreen.innerHTML = temp;

  var gt = document.getElementById("total");
  temp2 = total;
  gt.innerHTML = temp2;


$('#quantityRift').click(function() {
  var price = 799;
  var description = "Oculus Rift VR";
  var quantity = parseInt(window.prompt("Please enter a quantity: "));
  var total = (price * quantity);
  var item = (description + "|" + price + "|" + quantity + "|" + total);
  window.localStorage.setItem("oculusCart", (item));
  display()
});

$('#quantityGear').click(function() {
  var price = 99;
  var description = "Samsung Gear VR";
  var quantity = parseInt(window.prompt("Please enter a quantity: "));
  var total = (price * quantity);
  var item = (description + "|" + price + "|" + quantity + "|" + total);
  window.localStorage.setItem("gearCart", (item));
  display();
});

$('#quantityVive').click(function() {
  var price = 799;
  var description = "HTC Vive VR";
  var quantity = parseInt(window.prompt("Please enter a quantity: "));
  var total = (price * quantity);
  var item = (description + "|" + price + "|" + quantity + "|" + total);
  window.localStorage.setItem("viveCart", (item));
  display();
});
}

window.addEventListener("load" ,display , false)
