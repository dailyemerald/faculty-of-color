$(document).ready(function () {
    $('.slider').each(function () {

        var $this = $(this); // current logo 
        var $cont = $this.find('.inner'); //inside of the carousel
        var $logo = $this.find('.logo'); // logos
        var buttonArray = []; // empty array to store buttons associated with logos
        var currentIndex = 0; // have the current logo be zero index
        var timeout;


        function move(newIndex) { // creates new index 
            var slideLeft, animateLeft; // declare the variable

            advance(); // when slide moves call advance again

            if ($cont.is(':animated') || currentIndex === newIndex) { // if current slide is showing do nothing
                return;
            }

            buttonArray[currentIndex].removeClass('active'); // removes the assigned class active from current logo
            buttonArray[newIndex].addClass('active'); // adds the class active to new logo

            if (newIndex > currentIndex) { // if true
                slideLeft = '100%'; // sits the new logo to the right
                animateLeft = '-100%'; // annimate current group to left
            } else { // if false
                slideLeft = '-100%'; //sits the new logo to the left
                animateLeft = '100%'; //animate the current group to the right 
            }

            function advance() {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    if (newIndex < ($logo.length - 1)) { // when @ end of index returns to beginning  
                        move(currentIndex + 1);
                    } else {
                        move(0); // returns to original zero indexed 
                    }
                }, 4000);
            }

            $slides.eq(newIndex).css({
                left: slideLeft,
                display: 'block'
            });

            $group.animate({
                left: animateLeft
            }, function () { // Animate slides and
                $slides.eq(currentIndex).css({
                    display: 'none'
                }); // Hide previous slide      
                $slides.eq(newIndex).css({
                    left: 0
                }); // Set position of the new item
                $group.css({
                    left: 0
                }); // Set position of group of slides
                currentIndex = newIndex; // Set currentIndex to the new image
            });
        }

        $.each($logo, function (index) { // create button element for the button 
            var $button = $('<button type="button" class="slide-btn">&bull;</button>');
            if (index === currentIndex) { // if index is the current item add class active
                $button.addClass('active');
            }
            $button.on('click', function () { // event handler for the button  
                move(index);
            }).appendTo('.slide-buttons');
            buttonArray.push($button); // add it to button array     
        });
           advance();
    });
});