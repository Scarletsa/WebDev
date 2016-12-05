function start(){
  var button = document.getElementById("displayIt");
  button.addEventListener("click" , table , false);
  var itemString = window.localStorage.getItem("wishlistArray");
  var iList = itemString.split(" ");
  var display = document.getElementById("wishlistDisplay");
  display.innerHTML = iList;
}

function table(){
  var table = "<table>";
  for(var i in iList)
  {
    var item = iList[i].split("|");
    temp = "<tr><td>" + item[0] + "</td><td>" + item[1] + "</td><td>" + item[2] + "</td><td>" + item[3] + "</td></tr>";
  }
  table += "</table>";
  display.innerHTML = temp;
}

  window.addEventListener("load" , start , false)
