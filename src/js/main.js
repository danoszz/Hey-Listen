(function($, window, document, undefined) {

  'use strict';

  $(function() {

    // Changing Title
    var messages = ['Hey!?', 'Why so serious...!?', 'Do it, seriously do it!', 'Be Right Back!', 'Hey! What?'];
    var original;

    $(window).focus(function() {
      if (original) {
        document.title = original;
      }
    }).blur(function() {
      var title = $('title').text();
      var choosenMessage = messages[Math.floor(Math.random() * messages.length)];
      if (title !== choosenMessage) {
        original = title;
      }
      document.title = choosenMessage;
    });

    // Random hover color

    $(function() {
      var classes = ['red', 'green', 'blue'];

    $(".fancy__link").hover(
      function() {
        var randomClass = classes[Math.floor(Math.random() * classes.length)];
        $(this).addClass(randomClass);
        console.log(randomClass);
      }, function() {
        if ($(this).hasClass('red')) {
          $(this).removeClass('red');
        }
        else if ($(this).hasClass('green')) {
          $(this).removeClass('green');
        }
        else if ($(this).hasClass('blue')) {
          $(this).removeClass('blue');
        }
        else {
          $(this).removeClass(randomClass);
        }

      }
    );
    });

  //   $(".fancy__link").hover(function(e) {
  //     var randomClass = getRandomClass();
  //     $(e.target).removeClass(randomClass).addClass(randomClass);
  // //    $(this).attr('style', 'background-color:' + randomClass);
  //
  //   });
  //
  //
  //   function getRandomClass() {
  //     //Store available css classes
  //     var classes = new Array("red", "green", "blue");
  //
  //     //Give a random number from 0 to 3
  //     var randomNumber = Math.floor(Math.random() * 4);
  //
  //     return classes[randomNumber];
  //   }

  });

})(jQuery, window, document);
