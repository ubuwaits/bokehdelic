$(function() {
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function newBubble () {
    var canvasWidth = $(document).width();
    var canvasHeight = $(document).height();
    var radius = getRandomInt(10, 208);

    if (event) {
      var left = event.clientX;
      var top = event.clientY;
    }
    else {
      var left = getRandomInt(radius, canvasWidth - radius);
      var top = getRandomInt(radius, canvasHeight - radius);
    }

    var thisBubble = $("<div />").appendTo("#bubbles");

    $(thisBubble).css ({
      'height': radius,
      'left': left,
      'margin-top': -radius/2,
      'margin-left': -radius/2,
      'top': top,
      '-webkit-animation-duration': getRandomInt(4.2, 9.8) + 's',
      'width': radius
    });
  }

  function generateBubbles() {
    newBubble();

    if ($("#bubbles > div").length > 25) {
      $("#bubbles > div:first-child").remove();
    }

    clearInterval(timer);
    timer = setInterval(generateBubbles, getRandomInt(252, 2542));
  }

  var timer = setInterval(generateBubbles, 500);

  $("body").click(function() {
    newBubble();
  });

});

