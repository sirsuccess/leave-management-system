$(document).ready(() => {
    var submit = $("#submit");
    submit.click(function () {
        var userName = $("#username").val();
        var pass = $("#password").val();

        $.ajax({
            url:"http://localhost:3000/users",
            type: 'GET',
            dataType: 'json',
            error: function() {
            alert('error')
            },
            success: function(data) {
              alert('done')
              data.map(user=>{
                // console.log(user.username)
                if(user.username===userName && pass===user.password){
                    window.location.href = "./staff/home.html";
                }else{
                    console.log("not found")
                }
              })
            }
            });

            
    })
})