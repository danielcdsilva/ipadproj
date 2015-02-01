$(document).ready(function() {
    //The following is a function to setup the links
    // you may need to edit the '#main-nav a' part to match your code
    $('#main-nav a').click(function(e){
        e.preventDefault();
        pageToggle($(this));
    });
    
	$('#page1 a').click(function(e){
        e.preventDefault();
        pageToggle($(this));
    });
	
	$('#page2 a').click(function(e){
        e.preventDefault();
        pageToggle($(this));
    });
	
    //Another listener for the sub nav inside the home box
    $('.sub-nav a').click(function(e){
        e.preventDefault();
        boxToggle($(this));
    });
});

function pageToggle(whichNav) {
    // select the page we want to show
    var pageToShow = $(whichNav.attr("href"));
    $('#content section').slideUp(250);
    pageToShow.slideDown(750);
}


function boxToggle(whichNav) {
    // select the box inside home we want to show
    var pageToShow = $(whichNav.attr("href"));
    $('#content .thing-boxes').fadeOut(250);
    pageToShow.fadeIn(750);
}