
var logout = document.getElementById("logout")
    console.log("am good")
    logout.click(function (e) {
        alert("is working")
        sessionStorage.removeItem("user");
        sessionStorage.clear();
        window.location.href = "./index.html";  
    })
