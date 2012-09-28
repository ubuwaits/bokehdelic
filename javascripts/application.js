$(function() {
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function newBubble () {
    var canvasWidth = $(document).width();
    var canvasHeight = $(document).height();

    var radius = getRandomInt(10, 208);

    var thisBubble = $("<div />").appendTo("#bubbles");

    $(thisBubble).css ({
      'border-radius': radius/2,
      'height': radius,
      'left': getRandomInt(radius, canvasWidth - radius),
      'margin-top': -radius/2,
      'margin-left': -radius/2,
      'top': getRandomInt(radius, canvasHeight - radius),
      '-webkit-animation-duration': getRandomInt(2.5, 10) + 's',
      'width': radius
    });
  }

  function generateBubbles() {
    newBubble();

    if ($("#bubbles > div").length > 10) {
      $("#bubbles > div:first-child").remove();
    }

    clearInterval(timer);
    timer = setInterval(generateBubbles, getRandomInt(252, 2542));
  }

  var timer = setInterval(generateBubbles, 500);
});

