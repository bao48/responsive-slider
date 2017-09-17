jQuery(document).ready(function() {

	jQuery(".carousel").each(function() {
		findID = "myCarousel" + x;
		findIDh = "#" + findID;
		console.log(findID);
		jQuery(this).attr("id", findID);
		arrow = "#" + findID + " .carousel-control";
		dot = "#" + findID + " .carousel-indicators li";
		first = "#" + findID + " .item";
		second = "#" + findID + " .item img";
		findLowest();
		setArrDot();
		x++;
	});
		
		
	document.addEventListener("touchstart", function(){}, true); 	
});

  function isEmpty( el ) {
      return !jQuery.trim(el.html())
  }

var heights = [],
smallest,
temp,
findID,
findIDh,
first,
second,
x=0,
arrow,
dot,
n=0;
		
function findLowest() {
	jQuery(first).each(function() {
		heights.push(jQuery(this).height());
		console.log(jQuery(this).height());
	});
	
	smallest = Math.min.apply(Math, heights);
	console.log(smallest);
	temp = "max-height:" + smallest + "px";
	
	
	jQuery(second).each(function() {
		jQuery(this).attr("style", temp);
		console.log("max-height:" + smallest + "px;");
	});
}


function setArrDot() {
	jQuery(arrow).each(function() {
		jQuery(this).attr("href", findIDh);
	});
	
	jQuery(dot).each(function() {
		jQuery(this).attr("data-target", findIDh);
		jQuery(this).attr("data-slide-to", n);
		if (n===0) {
			jQuery(this).attr("class", "active");
		}
		n++;
	});
	n = 0;
}

jQuery(window).on("resize orientationchange", function () {
	smallest = 0, heights.length = 0;
	findLowest();
});
