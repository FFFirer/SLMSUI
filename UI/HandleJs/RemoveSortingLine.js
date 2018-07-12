$(document).ready(function () {
    $("span.glyphicon-trash").on('click', function () {
        var des = $(this).parentsUntil("tr").siblings("td:eq(1)").html();
        $("#mydel").modal('hide');
        $(".modal-body").html("<p>" + des + "</p>");
        $("#mydel").modal('show');
    });
});