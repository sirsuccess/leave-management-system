
$(document).ready(function () {

  //window.location.href = "login.html";

  var submit = $("#submit");


  // fName.blur(function () {
  //   console.log(fName.val())
  // })


  submit.click(function (event) {
    // event.preventDefault();
    console.log("am seeing you")
    var fName = $("#fName").val();
    var lName = $("#lName").val();
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val()

    console.log("list item" + [lName, username, fName, email, password])
    console.log("am inside function");
    var url = "http://localhost:3000/users";
    $.post(url, {
      "first-name": fName,
      "last-name": lName,
      "email": email,
      "username": username,
      "password": password,
      "roleID": 1
    }, function (data) {
      alert("success" + data.fName);
      // $("#mypar").html(response.amount);
    });
  });
});