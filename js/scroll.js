var navShow = $(window).scroll(function () {


    var when = $(window).scrollTop();

    if (when > 700) {
        $(".banner").slideDown();
    } else if (when < 780) {
        $(".banner").slideUp();
    }
    console.log(when);
});

$(function () {
    $(window).scroll(function () {

        var scrollAmount = $('body').scrollTop();
        console.log(scrollAmount);

        if (scrollAmount == "1647" && scrollAmount<"1652") {

            $("#videoHolder").html(
                '<video width="100%" autoplay controls preload="auto">' +

                '<source src="img/ducks.mov" width="100%"></source>' +

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

                '<source src="img/ducks.mov" width="100%"></source>' +

                '</video>'); 
        } else if(scrollAmount > "4088") {
        	$("videoCont").html('autoplay', false);
        }
    });
});