function validation() {
  var email = document.getElemetById("email").value;
  var firstname = document.getElemetById("firstname").value;
  var lastname = document.getElemetById("lastname").value;
  var phonenumber = document.getElemetById("phonenumber").value;
  var password = document.getElemetById("password").value;
  var error_message = document.getElemetById("error_message");
  var text;

  error_message.style.padding = "10px";

  if (firstname.length < 2) {
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
  }

  return false;
}
