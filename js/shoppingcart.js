function display(){
  total = 0;
  var oculusString = window.localStorage.getItem("oculusCart");
  var oItem = oculusString.split("|");
  var gearString = window.localStorage.getItem("gearCart");
  var gItem = gearString.split("|");
  var viveString = window.localStorage.getItem("viveCart");
  var vItem = viveString.split("|");
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

  $('clear').click(function (){

  })
};

window.addEventListener("load" ,display , false)
