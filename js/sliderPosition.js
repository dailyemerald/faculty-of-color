function winResized() {
	var $video=$('#vid');
	if ($video.size()) {
		var f=Math.max(winw/iw,winh/ih);
		var iwr=Math.round(iw*f);
		var ihr=Math.round(ih*f);
		var winw=$(window).width();
		var winh=$(window).height();
		var iw=$video.width();
		var ih=$video.height();
		
		$video.css({
			'position':'relative',
			'width': iwr,
			'height': ihr,
			'left': (Math.round(winw-iwr)/2)+'px',
			'top': (Math.round(winh-ihr)/2)+'px'
		});
	}
}
$(window).load(function() {
	winResized();
}).bind('resize',function() {
	winResized();
});

