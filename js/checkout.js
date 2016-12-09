function display(){
  total = 0;

  var oculusString = window.localStorage.getItem("oculusCart");
  var oItem = oculusString.split("|");
  var gearString = window.localStorage.getItem("gearCart");
  var gItem = gearString.split("|");
  var viveString = window.localStorage.getItem("viveCart");
  var vItem = viveString.split("|");
  var toScreen = document.getElementById("cart");
  var totalCheck = document.getElementById("total").value;

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

//J-Query for Oculus Rift Add to Shopping Cart
$('#quantityRift').click(function() {
  var price = 799;
  var description = "Oculus Rift VR";
  var quantity = parseInt(window.prompt("Please enter a quantity: "));
  var total = (price * quantity);
  var item = (description + "|" + price + "|" + quantity + "|" + total);
  window.localStorage.setItem("oculusCart", (item));
  display()
});

//J-Query for Samsung Gear Add to Shopping Cart
$('#quantityGear').click(function() {
  var price = 99;
  var description = "Samsung Gear VR";
  var quantity = parseInt(window.prompt("Please enter a quantity: "));
  var total = (price * quantity);
  var item = (description + "|" + price + "|" + quantity + "|" + total);
  window.localStorage.setItem("gearCart", (item));
  display();
});

//J-Query for HTC Vive Add to Shopping Cart
$('#quantityVive').click(function() {
  var price = 799;
  var description = "HTC Vive VR";
  var quantity = parseInt(window.prompt("Please enter a quantity: "));
  var total = (price * quantity);
  var item = (description + "|" + price + "|" + quantity + "|" + total);
  window.localStorage.setItem("viveCart", (item));
  display();
});

//J-Query for Checkout form submission
$('#signup').click(function(){
  var flag = true;
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

  //Get total cost of cart
  total = 0;

  var oculusString = window.localStorage.getItem("oculusCart");
  var oItem = oculusString.split("|");
  var gearString = window.localStorage.getItem("gearCart");
  var gItem = gearString.split("|");
  var viveString = window.localStorage.getItem("viveCart");
  var vItem = viveString.split("|");
  var toScreen = document.getElementById("cart");
  var totalCheck = document.getElementById("total").value;

  total += parseInt(oItem[3]);
  total += parseInt(gItem[3]);
  total += parseInt(vItem[3]);

  //Trimmed Strings
  var userTrim = user.trim();
  var firstTrim = first.trim();
  var lastTrim = last.trim();
  var addressTrim = address.trim();
  var cityTrim = city.trim();
  var emailTrim = email.trim();
  //Lengths for verification
  var stateLength = state.toString().trim().length;
  var zipLength = zip.toString().trim().length;
  var phoneLength = phone.toString().trim().length;
  var passLength = password.toString().trim().length;
  var passvLength = passv.toString().trim().length;
  var ccNumberLength = creditCardNumber.toString().trim().length;
  var ccExperiationLength = ccExpiration.toString().trim().length;
  var ccVVLength = ccVerifyValue.toString().trim().length;

  if(userTrim == ""){
    document.getElementById("user").value = "";
    document.getElementById("user").style.backgroundColor = "red";
    flag = false;
  }
  if(firstTrim == ""){
    document.getElementById("first").value = "";
    document.getElementById("first").style.backgroundColor = "red";
    flag = false;
  }
  if(lastTrim == ""){
    document.getElementById("last").value = "";
    document.getElementById("last").style.backgroundColor = "red";
    flag = false;
  }
  if(addressTrim == ""){
    document.getElementById("address").value = "";
    document.getElementById("address").style.backgroundColor = "red";
    flag = false;
  }
  if(cityTrim == ""){
    document.getElementById("city").value = "";
    document.getElementById("city").style.backgroundColor = "red";
    flag = false;
  }
  if(emailTrim == ""){
    document.getElementById("email").value = "";
    document.getElementById("email").style.backgroundColor = "red";
    flag = false;
  }
  if(stateLength < 2){
    document.getElementById("state").value = "";
    document.getElementById("state").style.backgroundColor = "red";
    flag = false;
  }
  if(!(zipLength == 5)){
    document.getElementById("zip").value = "";
    document.getElementById("zip").style.backgroundColor = "red";
    flag = false;
  }
  if(!(phoneLength == 10)){
    document.getElementById("phone").value = "";
    document.getElementById("phone").style.backgroundColor = "red";
    flag = false;
  }
  if(passLength < 6)
  {
    document.getElementById("password").value = "";
    document.getElementById("password").style.backgroundColor = "red";
    flag = false;
  }
  if(passvLength < 6)
  {
    document.getElementById("passv").value = "";
    document.getElementById("passv").style.backgroundColor = "red";
    flag = false;
  }
  if(password != passv) {
    alert("Passwords do not match. Please re enter password");
    document.getElementById("password").value = "";
    document.getElementById("passv").value = "";
    document.getElementById("password").style.backgroundColor = "red";
    document.getElementById("passv").style.backgroundColor = "red";
    flag = false;
  }
  if(!(ccNumberLength == 16)){
    document.getElementById("ccNumber").value = "";
    document.getElementById("ccNumber").style.backgroundColor = "red";
    flag = false;
  }
  if(!(ccExperiationLength == 4)){
    document.getElementById("ccExp").value = "";
    document.getElementById("ccExp").style.backgroundColor = "red";
    flag = false;
  }
  if(!(ccVVLength== 3)){
    document.getElementById("cvv").value = "";
    document.getElementById("cvv").style.backgroundColor = "red";
    flag = false;
  }
  if(flag == true && total > 0) {
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
  if(flag == true && total == 0)
  {
    alert("You must have at least one item in your cart to make a purchase");
  }

  });

  $('#clear').click(function() {
    document.getElementById("registration").reset();
    document.getElementById("user").style.backgroundColor = "white";
    document.getElementById("first").style.backgroundColor = "white";
    document.getElementById("last").style.backgroundColor = "white";
    document.getElementById("address").style.backgroundColor = "white";
    document.getElementById("city").style.backgroundColor = "white";
    document.getElementById("state").style.backgroundColor = "white";
    document.getElementById("zip").style.backgroundColor = "white";
    document.getElementById("email").style.backgroundColor = "white";
    document.getElementById("password").style.backgroundColor = "white";
    document.getElementById("passv").style.backgroundColor = "white";
    document.getElementById("phone").style.backgroundColor = "white";
    document.getElementById("ccName").style.backgroundColor = "white";
    document.getElementById("ccNumber").style.backgroundColor = "white";
    document.getElementById("ccExp").style.backgroundColor = "white";
    document.getElementById("cvv").style.backgroundColor = "white";

  });

  $('#user').keydown(function(){
    var user = document.getElementById("user").value;
    var userLength = user.toString().trim().length;

    if(userLength >= 1)
    {
      document.getElementById("user").style.backgroundColor = "lightgreen";
    }
  });
  $('#first').keydown(function(){
    var first = document.getElementById("first").value;
    var firstLength = first.toString().trim().length;

    if(firstLength >= 1)
    {
      document.getElementById("first").style.backgroundColor = "lightgreen";
    }
  });
  $('#last').keydown(function(){
    var last = document.getElementById("last").value;
    var lastLength = last.toString().trim().length;

    if(lastLength >= 1)
    {
      document.getElementById("last").style.backgroundColor = "lightgreen";
    }
  });
  $('#address').keydown(function(){
    var address = document.getElementById("address").value;
    var addressLength = address.toString().trim().length;

    if(addressLength >= 1)
    {
      document.getElementById("address").style.backgroundColor = "lightgreen";
    }
  });
  $('#city').keydown(function(){
    var city = document.getElementById("city").value;
    var cityLength = city.toString().trim().length;

    if(cityLength >= 1)
    {
      document.getElementById("city").style.backgroundColor = "lightgreen";
    }
  });
  $('#state').keydown(function(){
    var state = document.getElementById("state").value;
    var stateLength = state.toString().trim().length;

    if(stateLength >= 1)
    {
      document.getElementById("state").style.backgroundColor = "lightgreen";
    }
  });
  $('#zip').keydown(function(){
    var zip = document.getElementById("zip").value;
    var zipLength = zip.toString().trim().length;

    if(zipLength == 4)
    {
      document.getElementById("zip").style.backgroundColor = "lightgreen";
    }
    if(zipLength > 4)
    {
      document.getElementById("zip").style.backgroundColor = "red";
    }
  });
  $('#email').keydown(function(){
    var email = document.getElementById("email").value;
    var emailLength = email.toString().trim().length;

    if(emailLength >= 1)
    {
      document.getElementById("email").style.backgroundColor = "lightgreen";
    }
  });
  $('#password').keydown(function(){
    var password = document.getElementById("password").value;
    var passwordLength = password.toString().trim().length;

    if(passwordLength >= 5)
    {
      document.getElementById("password").style.backgroundColor = "lightgreen";
    }
  });
  $('#passv').keydown(function(){
    var passv = document.getElementById("passv").value;
    var passvLength = passv.toString().trim().length;
    var password = document.getElementById("password").value;
    if(passvLength >= 5)
    {
      document.getElementById("passv").style.backgroundColor = "lightgreen";
    }
  });
  $('#phone').keydown(function(){
    var phone = document.getElementById("phone").value;
    var phoneLength = phone.toString().trim().length;

    if(phoneLength == 9)
    {
      document.getElementById("phone").style.backgroundColor = "lightgreen";
    }
    if(phoneLength > 9)
    {
      document.getElementById("phone").style.backgroundColor = "red";
    }
  });

  $('#ccNumber').keydown(function(){
    var ccNumber = document.getElementById("ccNumber").value;
    var ccNumberLength = ccNumber.toString().trim().length;

    if(ccNumberLength == 15)
    {
      document.getElementById("ccNumber").style.backgroundColor = "lightgreen";
    }
    if(ccNumberLength > 15)
    {
      document.getElementById("ccNumber").style.backgroundColor = "red";
    }
  });
  $('#ccExp').keydown(function(){
    var ccExp = document.getElementById("ccExp").value;
    var ccExpLength = ccExp.toString().trim().length;

    if(ccExpLength == 3)
    {
      document.getElementById("ccExp").style.backgroundColor = "lightgreen";
    }
    if(ccExpLength > 3)
    {
      document.getElementById("ccExp").style.backgroundColor = "red";
    }
  });
  $('#cvv').keydown(function(){
    var cvv = document.getElementById("cvv").value;
    var cvvLength = cvv.toString().trim().length;

    if(cvvLength >= 2)
    {
      document.getElementById("cvv").style.backgroundColor = "lightgreen";
    }
    if(cvvLength > 3)
    {
      document.getElementById("cvv").style.backgroundColor = "red";
    }
  });
}

window.addEventListener("load" ,display , false)
