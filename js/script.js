var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    $("body").addClass("noscroll");

});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
	$("body").removeClass("noscroll")
	modal.style.display = "none";
}

//To use esc to exit modal
$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    $("body").removeClass("noscroll")
    modal.style.display = "none";
  }
});