function display(){
  total = 0;

  var oculusString = window.localStorage.getItem("oculusCart");
  var oItem = oculusString.split("|");
  var gearString = window.localStorage.getItem("gearCart");
  var gItem = gearString.split("|");
  var viveString = window.localStorage.getItem("viveCart");
  var vItem = viveString.split("|");
  var toScreen = document.getElementById("cart");

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

$('#signup').click(function(){
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
  var creditCardName = document.getElementById("ccName").value;
  var creditCardNumber = document.getElementById("ccNumber").value;
  var ccExpiration = document.getElementById("ccExp").value;
  var ccVerifyValue = document.getElementById("cvv").value;

  //Trimmed Strings
  var userTrim = user.trim();
  var firstTrim = first.trim();
  var lastTrim = last.trim();
  var addressTrim = address.trim();
  var cityTrim = city.trim();
  var emailTrim = email.trim();
  //Lengths for verification
  var stateLength = state.toString().length;
  var zipLength = zip.toString().length;
  var phoneLength = phone.toString().length;
  var passLength = password.toString().length;
  var ccNumberLength = creditCardNumber.toString().length;
  var ccExperiationLength = ccExpiration.toString().length;
  var ccVVLength = ccVerifyValue.toString().length;

  if(userTrim == ""){
    alert("User must enter atleast a 1 character user-name");
    document.getElementById("user").value = "";
    document.getElementById("user").style.backgroundColor = "red";
  }
  else if(firstTrim == ""){
    alert("User must enter atleast a 1 character for first name");
    document.getElementById("first").value = "";
    document.getElementById("first").style.backgroundColor = "red";
  }
  else if(lastTrim == ""){
    alert("User must enter atleast a 1 character for last name");
    document.getElementById("last").value = "";
    document.getElementById("last").style.backgroundColor = "red";
  }
  else if(addressTrim == ""){
    alert("User must enter atleast a 1 character for address");
    document.getElementById("address").value = "";
    document.getElementById("address").style.backgroundColor = "red";
  }
  else if(cityTrim == ""){
    alert("User must enter atleast a 1 character for city");
    document.getElementById("city").value = "";
    document.getElementById("city").style.backgroundColor = "red";
  }
  else if(emailTrim == ""){
    alert("User must enter atleast a 1 character for email");
    document.getElementById("email").value = "";
    document.getElementById("email").style.backgroundColor = "red";
  }
  else if(stateLength < 2){
    alert("States or State Abbreviation must be atleast 2 characters");
    document.getElementById("state").value = "";
    document.getElementById("state").style.backgroundColor = "red";
  }
  else if(!(zipLength == 5)){
    alert("Zip code must be 5 digits.");
    document.getElementById("zip").value = "";
    document.getElementById("zip").style.backgroundColor = "red";
  }
  else if(!(phoneLength == 10)){
    alert("Phone number must be 10 digits.");
    document.getElementById("phone").value = "";
    document.getElementById("phone").style.backgroundColor = "red";
  }
  else if(passLength < 6)
  {
    alert("Password needs to be at least six characters.");
    document.getElementById("password").value = "";
    document.getElementById("password").style.backgroundColor = "red";
  }
  else if(password != passv) {
    alert("Passwords do not match. Please re enter password");
    document.getElementById("password").value = "";
    document.getElementById("passv").value = "";
    document.getElementById("password").style.backgroundColor = "red";
    document.getElementById("passv").style.backgroundColor = "red";
  }
  else if(!(ccNumberLength == 16)){
    alert("Credit cards must be 16 digits.");
    document.getElementById("ccNumber").value = "";
    document.getElementById("ccNumber").style.backgroundColor = "red";
  }
  else if(!(ccExperiationLength == 4)){
    alert("Credit card expiration dates must be 4 digits (mmyy)");
    document.getElementById("ccExp").value = "";
    document.getElementById("ccExp").style.backgroundColor = "red";
  }
  else if(!(ccVVLength== 3)){
    alert("Credit card verification value must be 3 digits.");
    document.getElementById("cvv").value = "";
    document.getElementById("cvv").style.backgroundColor = "red";
  }
  else {
    alert("Success! Purchase made. You will recieve a receipt via email.")
    document.getElementById("user").style.backgroundColor = "green";
    document.getElementById("first").style.backgroundColor = "green";
    document.getElementById("last").style.backgroundColor = "green";
    document.getElementById("address").style.backgroundColor = "green";
    document.getElementById("city").style.backgroundColor = "green";
    document.getElementById("state").style.backgroundColor = "green";
    document.getElementById("zip").style.backgroundColor = "green";
    document.getElementById("email").style.backgroundColor = "green";
    document.getElementById("password").style.backgroundColor = "green";
    document.getElementById("passv").style.backgroundColor = "green";
    document.getElementById("phone").style.backgroundColor = "green";
    document.getElementById("ccName").style.backgroundColor = "green";
    document.getElementById("ccNumber").style.backgroundColor = "green";
    document.getElementById("ccExp").style.backgroundColor = "green";
    document.getElementById("cvv").style.backgroundColor = "green";
  }
  });

  $('clear').click(function() {
    document.getElementById("registration").reset();
  });

}

window.addEventListener("load" ,display , false)
