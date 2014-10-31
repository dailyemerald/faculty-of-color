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

        if (scrollAmount == "1670" && scrollAmount <= "2367" ) {

            $("#videoHolder").html(
                '<video width="100%" autoplay controls>' +

                '<source src="img/ducks.mov" width="100%"></source>' +

                '</video>'); 
        }
    });
});
$(function () {
    $(window).scroll(function () {

        var scrollAmount = $('body').scrollTop();
        console.log(scrollAmount);

        if (scrollAmount == "" && scrollAmount <= "" ) {

            $("#videoCont").html(
                '<video width="100%" autoplay controls>' +

                '<source src="img/ducks.mov" width="100%"></source>' +

                '</video>'); 
        }
    });
});