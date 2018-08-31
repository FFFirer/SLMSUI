$(document).ready(function () {
    $(".panel-heading").click(function () {
        $(this).find("span").toggleClass("glyphicon-chevron-down");
        $(this).find("span").toggleClass("glyphicon-chevron-right");
        // $(this).siblings(".panel-heading").each(function () {
        //     if ($(this).find("span").hasClass("glyphicon-chevron-down")) {
        //         $(this).find("span").toggleClass("glyphicon-chevron-right");
        //     }
        // });
        $(this).siblings(".panel-heading").find("span").each(function(){
            if($(this).hasClass("glyphicon-chevron-down")){
                $(this).toggleClass("glyphicon-chevron-right");
                $(this).toggleClass("glyphicon-chevron-down");
            }
        })
    });
});