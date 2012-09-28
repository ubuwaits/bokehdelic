$(function() {
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function newBubble () {
    var canvasWidth = $(document).width();
    var canvasHeight = $(document).height();

    var radius = getRandomInt(10, 200);

    var thisBubble = $("<div />").appendTo("#bubbles");

    $(thisBubble).css ({
      'border-radius': radius/2,
      'height': radius,
      'left': getRandomInt(radius, canvasWidth - radius),
      'margin-top': -radius/2,
      'margin-left': -radius/2,
      'top': getRandomInt(radius, canvasHeight - radius),
      '-webkit-animation-duration': getRandomInt(2, 10) + 's',
      'width': radius
    });
  }

  function generateBubbles() {
    newBubble();

    clearInterval(timer);
    timer = setInterval(generateBubbles, getRandomInt(853, 3583));
  }

  var timer = setInterval(generateBubbles, 1000);
});

