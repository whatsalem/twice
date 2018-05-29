$(".mainlogo").hover(function() {
	$("video").fadeToggle("slow");
	$("video").get(0).volume = 0.2;
	if ($("video").get(0).paused) {
		$("video").get(0).play();
	} else {
		$("video").get(0).pause();
	}
});
