$(document).ready(function () {
    $("td").not("li input").on('click', function (e) {
        e.preventDefault();
        //先判断是否有checkbox后代
        // var now_elm = $(this).find("[name=chk]:checkbox")
        // if (now_elm.length <= 0) {
        //     var des = $(this).parent().children("td:eq(1)").html();
        //     //alert(des);
        //     $("#myInfo").modal('hide');
        //     $(".modal-body").html("<h3>所选Id为：" + des + "</h3>");
        //     $("#myInfo").modal('show');
        // }
        var des = $(this).parent().children("td:eq(1)").html();
        //alert(des);
        $("#myInfo").modal('hide');
        $(".modal-body").html("<h3>所选Id为：" + des + "</h3>");
        $("#myInfo").modal('show');
        // if($(this).find("[name=chk]:checkbox").is(":checked") == true){
        //     $(this).find("[name=chk]:checkbox").prop("checked", false);
        // }else{
        //     $(this).find("[name=chk]:checkbox").prop("checked", true);
        // }
    });
});