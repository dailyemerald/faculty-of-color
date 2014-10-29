$(document).ready(function() {
$(window).scroll(function() {

var scrollAmount = $('body').scrollTop();
  console.log(scrollAmount);

if(scrollAmount >="1720" && scrollAmount <= "2170") {
	document.getElementById("vid").setAttribute('autoplay', true);	
};
});
});