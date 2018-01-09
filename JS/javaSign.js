// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
 jQuery(function($) {
                $.scrollTo(0);
                $('.BTN_offer').click(function() { $.scrollTo($('.logotype').offset().top - 50, 900); });
              }
            );
                
            function slideMenu() {
                $("nav > ul > li").slideToggle(500);
            }
function slideMenu() {
                $("nav > ul > li").slideToggle(500);
            }
// variable to store HTML5 audio element
var music = document.getElementById('music');

function playAudio() {
	if (music.paused) {
		music.play();
		pButton.className = "";
		pButton.className = "pause";
	} else {
		music.pause();
		pButton.className = "";
		pButton.className = "play";
	}
}
$(function bxSlider() {
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
  });
});