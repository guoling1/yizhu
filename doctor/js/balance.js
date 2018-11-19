$(".tab div").click(function() {
    $(".tab div").eq($(this).index()).addClass("active").siblings().removeClass('active');
    $("ul").hide().eq($(this).index()).show();

});