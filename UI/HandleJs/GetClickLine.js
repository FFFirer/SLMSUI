$(document).ready(function () {
    $("td").on('click', function () {
        //e.preventDefault();
        var des = $(this).siblings()[1].html();
        alert(des);
        // $("#myInfo").modal('hide');
        // $(".modal-body").html("<h3>所选Id为：" + des + "</h3>");
        // $("#myInfo").modal('show');
    });
});