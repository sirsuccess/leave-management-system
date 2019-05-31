$(document).ready(function() {
    
    var user = sessionStorage.getItem("user");
    console.log(user)
    console.log("i am here")
 
        var add = '<tr>';
        add += '<td>' + user.id + '</td>';
        add += '<td>' + user.first-name + '</td>';
        add += '<td>' + user.last-name + '</td>';
        add += '<td>' + user.username + '</td>';
        add += '<td>' + post.phone_number + '</td>';
        add += '</tr>';
    
        $('body').append(add);
})