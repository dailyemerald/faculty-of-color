var navShow = $(window).scroll(function () {


    var when = $(window).scrollTop();

    if (when > 880) {
        $(".banner").slideDown();
    } else if (when < 880) {
        $(".banner").slideUp();
    }
    console.log(when);
});



