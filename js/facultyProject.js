$('.logo').each(function () {
    var $logo = $('.logo');
    var $this = $(this);
    var $cont = $(this).find('.inner');
    var buttonArray = [];
    var current = 0;

    function move(newIndex) {
        var slideLeft;

        if (newIndex > currentIndex) {
            slideLeft = '100%';

        } else {
            //do nothing
        }

        if (newIndex < ($logo.length - 1)) { //when gets to end goes back to beginning 
            move(currentIndex + 1);
        } else {
            move(0);
        }

        buttonArray[currentIndex].removeClass('active');
        buttonArray[newIndex].assClass('active');

        $logo.eq(newIndex).css({
            left: slideLeft
        });
        $logo.eq(currentIndex).css({
            display: 'none'
        });
        $logo.eq(newIndex).css({
            left: 0
        });
        $cont.css({
            left: 0
        });
        currentIndex = newIndex;

        $each($logo, function (index) {
            var $button = $('<button type="button" class="slide-btn">&bull;</button>');
            if (index === currentIndex) {
                $button.on('click', function () {
                    move(index);
                }).appendTo('.slide-buttons');
                buttonArray.push($button);
            }
        });
    }
});