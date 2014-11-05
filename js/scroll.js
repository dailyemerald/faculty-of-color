var navShow = $(window).scroll(function () {


    var when = $(window).scrollTop();

    if (when > 840) {
        $(".banner").slideDown();
    } else if (when < 880) {
        $(".banner").slideUp();
    }
    console.log(when);
});

$(function () {
    $(window).scroll(function () {

        var scrollAmount = $('body').scrollTop();
        console.log(scrollAmount);

        if (scrollAmount == "1418" && scrollAmount<"1422") {

            $("#videoHolder").html(
                '<video width="100%" autoplay controls preload="auto">' +

                '<source src="img/InnovationLamina.mp4" width="100%"></source>' +

                '</video>'); 
        } else if(scrollAmount > "1668" || scrollAmount < "1668") {
        	$("videoHolder").html('autoplay', false); 
        }
    });
});
$(function () {
    $(window).scroll(function () {

        var scrollAmount = $('body').scrollTop();
        console.log(scrollAmount);

        if (scrollAmount == "3983" && scrollAmount<"3990") {

            $("#videoCont").html(
                '<video width="100%" autoplay controls>' +

                '<source src="img/" width="100%"></source>' +

                '</video>'); 
        } else if(scrollAmount > "4088") {
        	$("videoCont").html('autoplay', false);
        }
    });
});