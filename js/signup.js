function start() {
  var button = document.getElementById("signup");
  button.addEventListener("click", save, false);
  var button = document.getElementById("clear");
  button.addEventListener("click", clear, false);
  var p = document.getElementById("password");
  p.addEventListener("keydown", validated, false);
  var pv = document.getElementById("passv");
  pv.addEventListener("keydown", validated, false);
}

function save() {
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var passv = document.getElementById("passv").value;
  var phone = document.getElementById("phone").value;

  if(password != passv) {
    alert("Passwords do not match. Please re enter password");
    document.getElementById("password").value = "";
    document.getElementById("passv").value = "";
    document.getElementById("password").style.backgroundColor = "red";
    document.getElementById("passv").style.backgroundColor = "red";
  }
}

function validated() {

  var password = document.getElementById("password").value;
  var passv = document.getElementById("passv").value;

  if (password != "") {
    document.getElementById('password').style.backgroundColor= "white";
    document.getElementById('password').style.color= "black";
  }

  if (passv != "") {
    document.getElementById('passv').style.backgroundColor= "white";
    document.getElementById('passv').style.color= "black";
  }

  if (passv == password) {
    document.getElementById('password').style.backgroundColor= "green";
    document.getElementById('password').style.color= "black";
    document.getElementById('passv').style.backgroundColor= "green";
    document.getElementById('passv').style.color= "black";
  }
}

function clear() {
  document.getElementById("registration").reset();
}

window.addEventListener("load", start, false);
var member = [];
