
$(document).ready(function() {
    var id = sessionStorage.getItem("user");
    console.log(id)
    $.ajax({
        method: 'GET',
        url: `http://localhost:3000/leaves?=${id}`,
        dataType: 'json'
      }).done(function(data) {
        console.log(data);
        $.map(data, function(post, i) {
          var add = '<tr>';
          add += '<td>' + post.id + '</td>';
          add += '<td>' + post.type + '</td>';
          add += '<td>' + post.reason + '</td>';
          add += '<td>' + post.startDate+ '</td>';
          add += '<td>' + post.endDate + '</td>';
          add += '<td>' + post.status + '</td>';
          add += '<td>' + `<button class="btn btn-warning">Edit</button>` + '</td>';
          add += '<td>' + `<button class="btn btn-danger">DELETE</button>` + '</td>';
          add += '</tr>';
      
          $('table tbody').append(add);
        });
      });
});