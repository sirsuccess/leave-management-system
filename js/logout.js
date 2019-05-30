$(document).ready(() =>{
    var logout = $("#logout")
    console.log("am good")
    alert("is working")
    logout.click(function (e) {
        alert("is working")
        sessionStorage.clear();
        window.location.href = "./index.html";  
    })
})