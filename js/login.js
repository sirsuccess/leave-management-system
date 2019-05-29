$(document).ready(() => {

    var submit = $("#submit")
    submit.click(function () {
        $.ajax({
            url: "http://localhost:3000/users",
            type: 'GET',
            success: function (data) {
                alert(data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    })
})