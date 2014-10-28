$(document).ready(function() {
$(window).scroll(function(e) {

var scrollAmount = $('body').scrollTop();
  console.log(scrollAmount);


if(scrollAmount >="1800") {
	document.getElementById("vid").setAttribute('autoplay', true);
};
});
});