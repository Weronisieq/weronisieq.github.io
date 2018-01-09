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

$(document).ready(function (){

    for (let i = 0; i < sizes.length; i++) {
        $('.sizes').append($.parseHTML(`<div class="size size-${i + 1}"></div>`))
        $(`.size-${i + 1}`).css('width', `${sizes[i]}px`)
            .css('height', `${sizes[i]}px`)
    }

    for (let i = 0; i < colors.length; i++) {
        let color = colors[i]
        $('.colors').append($.parseHTML(`<div class="color color-${i + 1}"></div>`))
        $(`.color-${i + 1}`).css('background', `rgb(${color.r}, ${color.g}, ${color.b}`)
            .css('box-shadow', `0 0 5px rgba(${color.r}, ${color.g}, ${color.b}, 0.3`)
    }

    $('.sizes').on('click', '.size', event => {
        let classes = $(event.target).attr('class')
        let index = parseInt(classes.substr(classes.length - 1, classes.length)) - 1
        size = sizes[index]
    })

    $('.colors').on('click', '.color', event => {
        let classes = $(event.target).attr('class')
        let index = parseInt(classes.substr(classes.length - 1, classes.length)) - 1
        color = colors[index]
    })

})
$(function()
{
	if(localStorage && localStorage.getItem('background'))
	{   
		var colour = localStorage.getItem('background'); 
		$('.top-container').css("background-color", colour);
    } 
 

	$('#selColour').change(function() {
	console.log($('#selColour').val()); 
	localStorage.setItem('background', $('#selColour').val()); 
	$('.top-container').css("background-color", $('#selColour').val());
	})
});