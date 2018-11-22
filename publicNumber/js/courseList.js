$(".tab div").click(function() {
    $(".tab div").eq($(this).index()).addClass("active").siblings().removeClass('active');
    $(".tab_item").hide().eq($(this).index()).show();
});
$(".tab_item li").click(function () {
    $(".upload_mask").show()
})
$(".close").click(function () {
    $(".upload_mask").hide()
})