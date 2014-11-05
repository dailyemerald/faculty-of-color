var navShow = $(window).scroll(function () {


    var when = $(window).scrollTop();

    if (when > 800) {
        $(".banner").slideDown();
    } else if (when < 880) {
        $(".banner").slideUp();
    }
    console.log(when);
});

