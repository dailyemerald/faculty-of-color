$(window).scroll(function () {

    var scrollAmount = $('body').scrollTop();
    console.log(scrollAmount);

    if (scrollAmount >= "890" && scrollAmount <= "1490") {
        document.getElementById("vid").setAttribute('autoplay', true);
    }
});
