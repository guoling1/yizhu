$(".pay li").click(function () {
    $(".pay ul i").eq($(this).index()).addClass("select")
    $(".pay li").eq($(this).index()).siblings().find('i').removeClass('select');
})
$("#upload").click(function () {
    $(".upload_mask").show()
})

$(".upload_mask .close").click(function () {
    $(".upload_mask").hide()
})