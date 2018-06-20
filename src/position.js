var position = function() {
  var closest = null;
  for (var i = 0; i < window.dancers.length; i++) {
    var positionTop = window.dancers[i]._top;
    var positionLeft = window.dancers[i]._left;
    for (var j = 0; j < window.dancers.length; j++) {
      var positionTop2 = window.dancers[j]._top;
      var positionLeft2 = window.dancers[j]._left;
      if (i === j) {
      } else {
        var distanceTop = Math.abs(positionTop - positionTop2);
        var distanceLeft = Math.abs(positionLeft - positionLeft2);
        var distance = Math.sqrt((distanceLeft * distanceLeft) + (distanceTop * distanceTop));
        if (closest === null) {
          closest = distance;
        } else if (distance < closest) {
          closest = distance;
        }
      }
    }
  }
  
};

