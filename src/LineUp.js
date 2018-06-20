var LineUp = function() {
  var left = 50;
  var top = 400;
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].$node.css({'left': left, 'top': top});
    left += 80;
    if (left > 1100) {
      top += 100;
      left = 50;
    }
  }
};

