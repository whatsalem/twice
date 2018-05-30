setInterval(function(){ 
	$(".mainlogo1").effect( "shake", {times:4}, 5000  );
 }, 3000);
setInterval(function(){ 
	$(".mainlogo2").effect( "shake", {times:4}, 1000 );
 }, 5000);
setInterval(function(){ 
	$(".mainlogo3").effect( "shake", {times:4}, 1000  );
 }, 7000);
$(".mainlogo1").hover(function() {
	$(".mainlogo2").toggleClass('hover');
	$(".mainlogo3").toggleClass('hover');
	$(".mainlogo1").toggleClass('hover');
	$(".mainlogo2").stop();
	$(".mainlogo3").stop();
	$(".mainlogo1").stop();
	$(".video1").fadeToggle("slow");
	$(".video1").get(0).volume = 0.1;
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
