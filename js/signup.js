var member = [];
function start() {
  var button1 = document.getElementById("signup");
  button1.addEventListener("click", save, false);
  var button2 = document.getElementById("clear");
  button2.addEventListener("click", clear, false);
  var p = document.getElementById("password");
  p.addEventListener("keydown", validated, false);
  var pv = document.getElementById("passv");
  pv.addEventListener("keydown", validated, false);
}

function save() {
  var user = document.getElementById("user").value;
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
  var passLength = password.toString().length;

  if(password != passv) {
    alert("Passwords do not match. Please re enter password");
    document.getElementById("password").value = "";
    document.getElementById("passv").value = "";
    document.getElementById("password").style.backgroundColor = "red";
    document.getElementById("passv").style.backgroundColor = "red";
  }
  else if(passLength < 6)
  {
    alert("Password needs to be at least six characters.");
    document.getElementById("password").value = "";
    document.getElementById("passv").value = "";
    document.getElementById("password").style.backgroundColor = "red";
    document.getElementById("passv").style.backgroundColor = "red";
  }
  else{
    var person = (user + "|" + first + "|" + last + "|" + address + "|" + city + "|" + state + "|" + zip + "|" + email + "|" + password + "|" + passv + "|" + phone);
    member.push(person);
    window.localStorage.setItem("memberArray", member.join(";"));
    alert("You are now registered!");
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
