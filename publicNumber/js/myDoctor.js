$(".tab div").click(function() {
    $(".tab div").eq($(this).index()).addClass("active").siblings().removeClass('active');
    $(".tab_item").hide().eq($(this).index()).show();
});