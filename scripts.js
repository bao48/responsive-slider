jQuery(document).ready(function() {

	
	jQuery(".frontContainer").each(function() {
		if (isEmpty(jQuery(this).children().children())) {
			console.log(jQuery(this).children().children().attr("class"));
			jQuery("<h3>Continue Reading</h3>").appendTo(jQuery(this).parent());
			jQuery(this).remove();
		} else if (!(jQuery(this).find(".frontRight").children().is("img"))) {
			console.log(jQuery(this).find(".frontLeft").attr("class"));
			jQuery(this).find(".frontLeft").attr("class", "");
			jQuery(this).attr("style", "margin-top: 1.5em;");
			jQuery(this).find(".frontRight").remove();
		} else {
			var heightLeft = "height: " + jQuery(this).find(".frontRight").find("img").height() + "px";
			jQuery(this).find(".frontLeft").find(".content").attr("style", heightLeft);
			console.log(heightLeft);
		}
	});
	
	jQuery(".topMain div").clone().appendTo("#rwd-top-nav");
	jQuery(".widget").clone().appendTo(".rwd-sidebar");
	
	// toggle menu button: 3 lines --> X
	jQuery('#rwd-navbutton').click(function(){
		jQuery(this).toggleClass('open');
	});
	
	// toggle blog-menu
	jQuery("#rwd-navbutton").click(function(){
    	jQuery("#rwd-top-nav").slideToggle();
	});
	
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
