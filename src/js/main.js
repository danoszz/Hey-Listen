(function ($, window, document, undefined) {

  'use strict';

  $(function () {

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

  });

})(jQuery, window, document);
