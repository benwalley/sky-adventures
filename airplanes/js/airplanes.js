var logo = $("#logo");
var wind = $(window);
var links = $(".navLi")
var hamburger = $("#hamburger");
var dropdown = $(".dropdowna")
var dropped = false
var space = $("#spacer");
var p1Images = $(".p1Images");
var p2Images = $(".p2Images");
var count = 0

var showing = false;

$(window).scroll(function() {
  if ($(document).scrollTop() > 75) {
  	$("#navBar").height("10vh")

    $('.navLi, .s').addClass('shrink');
   	logo.height("10vh");
   	space.height("10vh")

  } else {
  	$("#navBar").height("19vh")
    $(' .navLi, .s').removeClass('shrink');
    logo.height("19vh");
    space.height("19vh")
  }
});

resize();

// hamburger click listener
hamburger.on("click", function(){
	if(dropped == false){
		dropped = true
		var x = 0
			var animate = window.setInterval(function(){
				if(x < dropdown.length){
					dropdown[x].style.display = "block";
					x++	
				}else{
					clearInterval(animate);
				}
					
			
			}, 50)
			
	}else if(dropped == true){
		dropped = false
		var x = (dropdown.length -1)
			var animateBack = window.setInterval(function(){
				if(x >= 0){
					dropdown[x].style.display = "none";
					x--
				}else{
					clearInterval(animateBack);
				}
					
			
			}, 50)
			
	}
	
});



$(window).resize(function(){
	
	resize()
})


function addLinks(){
	for(var i = 0; i < links.length; i++){
		links[i].classList.remove("hide")
		
	}
}

function removeLinks(){
	for(var i = 0; i < links.length; i++){
		links[i].classList.add("hide")
	}
}




function resize(){
	if(wind.width() > 767){
		$("#hamburger").removeClass("show");
		addLinks();
	}else if(wind.width() <= 767){
		$("#hamburger").addClass("show");
		removeLinks();

	}
}

// FOR SLIDESHOW

function changeForeward(group){
	group[count].style.display = "none"

	if(count >= group.length -1){
		count = 0;
	}else{
		count++
	}
	group[count].style.display = "block"
	console.log(count)
}

function changeBackward(group){
	group[count].style.display = "none"

	if(count >= group.length -1){
		count = 0;
	}else{
		count++
	}
	group[count].style.display = "block"
	console.log(count)
}


$(".oneRight").click(function(){
	changeForeward(p1Images)
})

$(".slide1").click(function(){
	changeForeward(p1Images)
})

$(".twoRight").click(function(){
	changeForeward(p2Images)
})

$(".slide2").click(function(){
	changeForeward(p2Images)
})