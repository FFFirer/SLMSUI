$(document).ready(function () {
    $("#btnDelete").on('click', function () {
        var all_info = "";
        $("input[name=chk]:checkbox").each(function () {
            if($(this).is(":checked")){
                var line = $(this).parent().siblings();
                all_info += "<p>" + line.eq(0).html() + "&nbsp;:&nbsp;" + line.eq(1).html() + "</p>"
            }
        })
        if (all_info == "") {
            alert("请先选择要删除的分拣线！")
        } else {
            $("#mydel").modal('hide');
            $(".modal-body").html(all_info);
            $("#mydel").modal('show');
        }
    });
});