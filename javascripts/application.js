$(function() {
  function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function newBubble () {
    var radius = randomInt(10, 208);
    var animationDuration = randomInt(4.2, 11.8);

    if (event) {
      var left = event.clientX;
      var top = event.clientY;
    }
    else {
      var left = randomInt(0, $(document).width());
      var top = randomInt(0, $(document).height());
    }

    $("<div />").appendTo("#bubbles")
    .css ({
      'height': radius,
      'left': left,
      'margin-top': -radius/2,
      'margin-left': -radius/2,
      'top': top,
      '-webkit-animation-duration': animationDuration + 's',
      'width': radius
    })
    .delay(animationDuration * 1000)
    .queue(function() {
      $(this).remove();
    });
  }

  function generateBubbles() {
    newBubble();

    clearInterval(timer);
    timer = setInterval(generateBubbles, randomInt(252, 2542));
  }

  var timer = setInterval(generateBubbles, 500);

  $('section#container').click(function() {
    newBubble();
  });

});

