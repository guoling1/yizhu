$(".tab .tab_item").click(function() {
    $(".tab .tab_item").eq($(this).index()).addClass("active").siblings().removeClass('active');
    $("ul").hide().eq($(this).index()).show();
});
