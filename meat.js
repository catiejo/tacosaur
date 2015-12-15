var main = function () {
  $('.button').mouseenter(function() {
      $('.button').fadeTo('fast', 1);
  });

  $('.button').mouseleave(function() {
      $('.button').fadeTo('fast', 0.5);
  });

/*
  $('.button').click(function() {
    $('.button').toggle(red, orange, yellow);
  });
*/

/*
  $('.tacotaco').click(function() {
    $('.tacotaco').confirm("Click 'ok' to accept me as master of the INTERNET");
  });
*/
}

var red = function() {
  $('.button').css('background-color', 'red');
}

var orange = function() {
  $('.button').css('background-color', 'orange');
}

var yellow = function() {
  $('.button').css('background-color', 'yellow');
}

$(document).ready(main);
