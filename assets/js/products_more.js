$(function(){
    $(".products_img a").click(function(){
        $("figure img").attr("src", $(this).attr("href"));
        return false;
        });
    });
    