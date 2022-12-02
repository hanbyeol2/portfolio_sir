$(document).ready(function(){
    $("#search_icon").click(function(){
        $("#search_pb").addClass("disB");
    });
    $("#close_sp").click(function(){
        $("#search_pb").removeClass("disB");
    });

    $("#FAQ .container .faqwrap dt").click(function(){
        $("+dd",this).slideDown(300).siblings("dd").slideUp(300);
    });
    $("#FAQ .container .faqwrap dd").click(function(){
        $(this).slideUp(300);
    });

    $("#help_mid .container .faqwrap dt").click(function(){
        $("+dd",this).slideDown(300).siblings("dd").slideUp(300);
    });
    $("#help_mid .container .faqwrap dd").click(function(){
        $(this).slideUp(300);
    });

    $(".move_cart").click(function(){
        var gksquf = confirm("장바구니에 상품을 담았습니다. 장바구니로 이동하시겠습니까?");
        if(gksquf == true){
            $(".move_cart a").attr("href","/sub/my_page/cart.html");
        }else{
            $(".move_cart a").attr("href","#none");
        }
    });

    $(".cart_btn").click(function(){
        var ksjkd = confirm("장바구니에 상품을 담았습니다. 장바구니로 이동하시겠습니까?");
        if(ksjkd == true){
            $(".cart_btn").attr("href","/sub/my_page/cart.html");
        }else{
            $(".cart_btn").attr("href","#none");
        }
    });

    $("#all_agree").click(function(){
        if($("#all_agree").prop("checked")){
            $(".agree_all").prop("checked",true);
        }else{
            $(".agree_all").prop("checked",false);
        }
    });
    $(".remove_cart_1").click(function(){
        $(".cart_01").hide();
    });
    $(".remove_cart_2").click(function(){
        $(".cart_02").hide();
    });

    $(".close_wf").click(function(){
        $("#workflow").addClass("disN");
    });
});