var navShow = $(window).scroll(function () {


    var when = $(window).scrollTop();

    if (when > 690) {
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

        if (scrollAmount == "1668") {

            $("#videoHolder").html(
                '<video width="100%" autoplay controls>' +

                '<source src="img/ducks.mov" width="100%"></source>' +

                '</video>'); 
        } else if(scrollAmount > "1668") {
        		'<video width="100%" mute controls>' +

                '<source src="img/ducks.mov" width="100%"></source>' +

                '</video>'; 
        }
    });
});
$(function () {
    $(window).scroll(function () {

        var scrollAmount = $('body').scrollTop();
        console.log(scrollAmount);

        if (scrollAmount == "3237") {

            $("#videoCont").html(
                '<video width="100%" autoplay controls>' +

                '<source src="img/ducks.mov" width="100%"></source>' +

                '</video>'); 
        } else if(scrollAmount > "3237") {
        		'<video width="100%" controls>' +

                '<source src="img/ducks.mov" style="z-index: 10;" width="100%"></source>' +

                '</video>'; 
        }
    });
});