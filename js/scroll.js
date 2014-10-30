$(window).scroll(function () {

    var scrollAmount = $('body').scrollTop();
    console.log(scrollAmount);

    if (scrollAmount >= "1708" && scrollAmount <= "2400") {
        document.getElementById("vid").setAttribute('autoplay', true);
    }
    if (scrollAmount >= "3290" && scrollAmount <= "4010") {
    	document.getElementById("vid-2").setAttribute('autoplay', true);
    }
});
