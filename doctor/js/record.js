$(".startStop").click(function () {
    $(".startStop").addClass('stop')

    $(".stop").click(function () {
        $(".save_record").show()
    })
})

$(".save_cancel").click(function () {
    $(".save_record").hide()
})
$(".save_sure").click(function () {
    $(".save_record").hide()
})
$(".finish").click(function () {
    $(".finish_mask").show()
})
$(".finish_cancel").click(function () {
    $(".finish_mask").hide()
})
$(".close").click(function () {
    $(".set_price").hide()
})
$(".release").click(function () {
    $(".set_price").show()
})