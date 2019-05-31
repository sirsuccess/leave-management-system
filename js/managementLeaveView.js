
$(document).ready(function () {
    var id = sessionStorage.getItem("user");
    // console.log(id)
    $.ajax({
      method: 'GET',
      url: "http://localhost:3000/leaves",
      dataType: 'json'
    }).done(function (data) {
      console.log(data);
      $.map(data, function (post, i) {
        var add = '<tr>';
        add += '<td>' + post.id + '</td>';
        add += '<td>' + post.type + '</td>';
        add += '<td>' + post.reason + '</td>';
        add += '<td>' + post.startDate + '</td>';
        add += '<td>' + post.endDate + '</td>';
        add += '<td>' + post.status + '</td>';
        add += '<td>' + `<button  class="btn  btn-success">Approve</button>` + '</td>';
        add += '<td>' + `<button   sessionStorage.setItem("id", post.id); class="btn deleteItem btn-danger">DELETE</button>` + '</td>';
        add += '</tr>';
  
        $('table tbody').append(add);
      });
      if(data.length<1){
        $("p").append("You don't have any leave record")
      }
      var deleteItem = $(".deleteItem");
      
      deleteItem.click((e, id) => {
        e.preventDefault();
        alert($("#id"))
        // $("td").remove()
        console.log(ten)
        console.log("i can hear you")
        // console.log(find)
      })
    
    });
  
  
    function numCount(x){
      x += x
      return x
    }
    
  });