
$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/users',
        dataType: 'json'
      }).done(function(data) {
        console.log(data);
        $.map(data, function(post, i) {
          var add = '<tr>';
          add += '<td>' + post.id + '</td>';
          add += '<td>' + post.fullname + '</td>';
          add += '<td>' + post.email + '</td>';
          add += '<td>' + post.amount + '</td>';
          add += '<td>' + post.phone_number + '</td>';
          add += '</tr>';
      
          $('table tbody').append(add);
        });
      });
});