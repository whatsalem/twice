$(".mainlogo1").hover(function() {
	$(".mainlogo1").toggleClass('hover');
	$(".mainlogo2").toggleClass('hover');
	$(".mainlogo3").toggleClass('hover');
	$(".video1").fadeToggle("slow");
	$(".video1").get(0).volume = 0.2;
	if ($(".video1").get(0).paused) {
		$(".video1").get(0).play();
	} else {
		$(".video1").get(0).pause();
	}
});

$(".mainlogo2").hover(function() {
	$(".mainlogo2").toggleClass('hover');
	$(".mainlogo3").toggleClass('hover');
	$(".mainlogo1").toggleClass('hover');
	$(".video2").fadeToggle("slow");
	$(".video2").get(0).volume = 0.1;
	if ($(".video2").get(0).paused) {
		$(".video2").get(0).play();
	} else {
		$(".video2").get(0).pause();
	}
});
$(".mainlogo3").hover(function() {
	$(".mainlogo2").toggleClass('hover');
	$(".mainlogo3").toggleClass('hover');
	$(".mainlogo1").toggleClass('hover');
	$(".video3").fadeToggle("slow");
	$(".video3").get(0).volume = 0.15;
	if ($(".video3").get(0).paused) {
		$(".video3").get(0).play();
	} else {
		$(".video3").get(0).pause();
	}
});
