$(".tab .tab_item").click(function() {
    $(".tab .tab_item").eq($(this).index()).addClass("active").siblings().removeClass('active');
    $("ul").hide().eq($(this).index()).show();
    if($(this).hasClass('active')&&$(this).text()=='提现明细'){
        $('.mask').toggle()
    }
    if($(this).text()=='收入明细'){
        $(".mask").hide()
    }
});
$(".mask span").click(function () {
    $(".mask").hide()
})
