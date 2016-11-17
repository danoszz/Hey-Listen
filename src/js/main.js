/**
 * main.js
 */


/**
 * A couple useful scripts for the Grom CSS framework
 * (found in the src directory)
 */

// populate the mobile nav
$(".navmobile").html($(".navmain").html());

$(".navmobile-trigger").click(function(){
  if ($(".navmobile ul").hasClass("expanded")) {
    $(".navmobile ul.expanded").removeClass("expanded").slideUp(250);
    $(this).removeClass("open");
  } else {
    $(".navmobile ul").addClass("expanded").slideDown(250);
    $(this).addClass("open");
  }
});

// Init the hamburger menu icon
var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
  // Do something else, like open/close menu
});



/**
 * Global scroll-to-anchor
 * You can just remove it if you don't want to use it,
 * along with the jquery.easing stuff
 */

/* 
You must add .scrollanchor class to the action (the link)
Possible easing methods: jquery.easing.1.3.js ( https://jqueryui.com/easing/ )
*/

$(".scrollanchor").click(function(event){

  /*
  Determine how far from the top we are, and increase the scroll duration slightly, 
  the farther down we are. This isn't necessary, but is a nice visual effect, 
  so that really long pages have a more natural scroll-up.
  */

  var howfar = $(this).offset().top
  if ( howfar < 1000 ){
    var scrollspeed = 500;
  } else if ( howfar > 1000 && howfar < 2000 ){
    var scrollspeed = 600;
  } else if ( howfar > 2000 && howfar < 3000 ){
    var scrollspeed = 700;
  } else if ( howfar > 3000 && howfar < 4000 ){
    var scrollspeed = 800;
  } else if ( howfar > 4000 && howfar < 5000 ){
    var scrollspeed = 900;
  } else if ( howfar > 5000 ){
    var scrollspeed = 1000;
  }

  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, scrollspeed, 'easeInOutQuint');

});



/**
 * If you use the responsive slider plugin
 * ( It's a bit old, should be replaced with something else, but it's still simple & effective )
 */

/*
The responsive slideshow settings.
You need to create separate instances if:
1. you have more than one slideshow per page
2. you want each slideshow to have different settings
For example: #slider_1, #slider_2, #slider_3 (each with its own settings)
*/

/*
$(function() {
  $("#slider").responsiveSlides({
    auto: true,           // Boolean:  Animate automatically, true or false
    speed: 500,           // Integer:  Speed of the transition, in milliseconds
    timeout: 5000,        // Integer:  Time between slide transitions, in milliseconds
    pager: true,          // Boolean:  Show pager, true or false
    nav: true,            // Boolean:  Show navigation, true or false
    random: false,        // Boolean:  Randomize the order of the slides, true or false
    pause: true,          // Boolean:  Pause on hover, true or false
    pauseControls: false, // Boolean:  Pause when hovering controls, true or false
    prevText: "Previous", // String:   Text for the "previous" button
    nextText: "Next",     // String:   Text for the "next" button
    maxwidth: "",         // Integer:  Max-width of the slideshow, in pixels
    navContainer: "",     // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: "",   // Selector: Declare custom pager navigation
    namespace: "rslides", // String:   Change the default namespace used
    before: function(){}, // Function: Before callback
    after: function(){}   // Function: After callback
  });
});
*/
