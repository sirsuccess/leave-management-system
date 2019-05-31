$(document).ready(() => {
  var submit = $("#submit");

  submit.click(function (e) {
    e.preventDefault()
    var userName = $("#username").val();
    var pass = $("#password").val();
    //console.log(pass)

    $.ajax({
      url: "http://localhost:3000/users",
      type: 'GET',
      // dataType: 'json',
      error: function () {
        alert('error')
      },
      success: function (data) {
        console.log('done')
        data.map(user => {
          // console.log(user.username)
          if (user.username === userName && user.password == pass) {
            if (user.roleID == 1) {

              window.location.href = "./staff/home.html";
            }
            window.location.href = "./managemnt/home.html"
          }
        })
        $("p").append("Opps..! incorrect credentials, try again")
      }
    });


  })
})