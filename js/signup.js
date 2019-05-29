
$(document).ready(function(){

    var submit = $("#test")
    console.log("am seeing you")
    submit.click(function(){
      console.log("am inside function");
    var url ="http://localhost:3000/roles"
      // $.post("http://localhost:3000/roles",
      // {
      //   role: "Donald Duck",
      // },
      // function(data,status){
      //   alert("Data: " + data + "\nStatus: " + status);
      // });
      $.post("http://localhost:3000/roles", {
        role:'amani'
      }, function(response){ 
      alert("success");
      // $("#mypar").html(response.amount);
});
    });
  });