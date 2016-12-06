
function display(){
  var itemString = window.localStorage.getItem("wishListArray");
  var iList = itemString.split(";")
  var toScreen = document.getElementById("wishlistDisplay");
  toScreen.innerHTML = iList;

  var temp = "<table><tr><td>Description</td><td>Price</td><td>Quantity</td><td>Total</td></tr>";
  for(var i in iList)
  {
    var item = iList[i].split("|");
    temp = "<tr><td>" + item[0] + "</td><td>" + item[1] + "</td><td>" + item[2] + "</td><td>" + item[3] + "</td></tr>";
  }
  temp += "</table>";
  toScreen.innerHTML = temp;
}

window.addEventListener("load" ,display , false)
