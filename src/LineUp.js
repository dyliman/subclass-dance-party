var LineUp = function() {
  var left = 0;
  var top = 50;
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].$node.css({'left': left, 'top': top});
    left += 50;
    if (left > 1000) {
      top += 50;
      left = 0;
    }
  }
};

