$(document).ready(function(){

	$('.dmb-cont-projects').slick();

    var allHidden = true;

    function resetNavColors(){
    	$('.dmb-bio').css('background-color', 'white');
		$('.dmb-bio-a').css('color', 'black');
		$('.dmb-resume').css('background-color', 'white');
		$('.dmb-resume-a').css('color', 'black');
		$('.dmb-projects').css('background-color', 'white');
		$('.dmb-projects-a').css('color', 'black');
		$('.dmb-contact').css('background-color', 'white');
		$('.dmb-contact-a').css('color', 'black');
    }

	$('.dmb-content div').hide();

	$('.dmb-welcome').show("fast");

    $('.dmb-bio, .dmb-bio-a').click(function(){
		$('#dmb-welcome').hide();
		resetNavColors();
		$('.dmb-bio').css('background-color', 'black');
		$('.dmb-bio-a').css('color', 'white');
		$('#dmb-cont-bio').fadeIn("fast");
		$('#dmb-cont-resume, .dmb-cont-projects, .proj-child, #dmb-cont-contact').hide();

    });

    $('.dmb-resume, .dmb-resume-a').click(function(){
    	$('#dmb-welcome').hide();
    	resetNavColors();
    	$('.dmb-resume').css('background-color', 'black');
		$('.dmb-resume-a').css('color', 'white');
		$('#dmb-cont-resume').fadeIn("fast");
		$('#dmb-cont-bio, .dmb-cont-projects, .proj-child, #dmb-cont-contact').hide();

    });

    $('.dmb-projects, .dmb-projects-a').click(function(){
		$('#dmb-welcome').hide();
		resetNavColors();
		$('.dmb-projects').css('background-color', 'black');
		$('.dmb-projects-a').css('color', 'white');
		$('.dmb-cont-projects, .proj-child').fadeIn("fast");
		$('#dmb-cont-bio, #dmb-cont-resume, #dmb-cont-contact').hide();

    });

    $('.dmb-contact, .dmb-contact-a').click(function(){
    	$('#dmb-welcome').hide();
    	resetNavColors();
    	$('.dmb-contact').css('background-color', 'black');
		$('.dmb-contact-a').css('color', 'white');
    	$('.dmb-cont-contact').fadeIn("fast");
		$('#dmb-cont-bio, #dmb-cont-resume, .dmb-cont-projects, .proj-child').hide();
     
    });

    //Make the list items clickable as well as the text
    $(function() {
    	$('li').css('cursor', 'pointer').click(function() {
    		window.location = $('a', this).attr('href');
    	});
	});
});