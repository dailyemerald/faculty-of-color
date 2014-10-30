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
    $(window).scroll(function (e) {

        var scrollAmount = $('body').scrollTop();
        console.log(scrollAmount);

        if (scrollAmount >= "1700" && scrollAmount <= "1701") {

            $("#videoHolder").html(
                '<video width="100%" autoplay controls>' +

                '<source src="img/ducks.mov" width="100%"></source>' +

                '</video>');
        } else if (scrollAmount >= "1800") {

            $("#videoHolder").html(
            document.getElementById('#videoHolder').attr('autoplay', false));
        }
    });
});
