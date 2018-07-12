$(document).ready(function () {
    $("#selectall").change(function(){
        $("input[name=chk]:checkbox").each(function(){
            if($("#selectall").is(":checked")){
                $(this).prop("checked", true);
            }else{
                $(this).prop("checked", false);
            }
        });
    });
});