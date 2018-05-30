setInterval(function(){ 
	$(".mainlogo2").effect( "shake", {times:4}, 1000  );
 }, 1000);
$(".mainlogo1").hover(function() {
	$(".mainlogo2").toggleClass('hover');
	$(".mainlogo3").toggleClass('hover');
	$(".mainlogo1").toggleClass('hover');
	$(".mainlogo2").stop();
	$(".video1").fadeToggle(500);
	$(".video1").get(0).volume = 0.25;
	if ($(".video1").get(0).paused) {
		$(".video1").get(0).play();
	} else {
		$(".video1").get(0).pause();
	}
});
$(".mainlogo2").hover(function() {
	$(".mainlogo2").stop();
	$(".mainlogo2").toggleClass('hover');
	$(".mainlogo3").toggleClass('hover');
	$(".mainlogo1").toggleClass('hover');
	$(".video2").fadeToggle(500);
	$(".video2").get(0).volume = 0.2;
	if ($(".video2").get(0).paused) {
		$(".video2").get(0).play();
	} else {
		$(".video2").get(0).pause();
	}
});
$(".mainlogo3").hover(function() {
	$(".mainlogo2").stop();
	$(".mainlogo2").toggleClass('hover');
	$(".mainlogo3").toggleClass('hover');
	$(".mainlogo1").toggleClass('hover');
	$(".video3").fadeToggle(500);
	$(".video3").get(0).volume = 0.2;
	if ($(".video3").get(0).paused) {
		$(".video3").get(0).play();
	} else {
		$(".video3").get(0).pause();
	}
});
