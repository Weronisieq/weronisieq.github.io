$( document ).ready()
$(function()
{
	if(localStorage && localStorage.getItem('background'))
	{   
		var colour = localStorage.getItem('background'); 
		$('body').css("background-color", colour);
    } 
 

	$('#selColour').change(function() {
	console.log($('#selColour').val()); 
	localStorage.setItem('background', $('#selColour').val()); 
	$('body').css("background-color", $('#selColour').val());
	})
});
