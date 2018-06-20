var position = function() {
  var closest = null;
  var index1 = null;
  var index2 = null;
  var pt = null;
  var pl = null;
  var dt = null;
  var dl = null;

  for (var i = 0; i < window.dancers.length; i++) {
    var positionTop = window.dancers[i]._top;
    var positionLeft = window.dancers[i]._left;
    for (var j = 0; j < window.dancers.length; j++) {
      var positionTop2 = window.dancers[j]._top;
      var positionLeft2 = window.dancers[j]._left;
      if (i === j) {
        //do nothing
      } else {
        var distanceTop = (positionTop - positionTop2);
        var distanceLeft = (positionLeft - positionLeft2);
        var distance = Math.sqrt((distanceLeft * distanceLeft) + (distanceTop * distanceTop));
        if (closest === null) {
          closest = distance;
          index1 = i;
          index2 = j;
          pt = positionTop;
          pl = positionLeft;
          dt = distanceTop;
          dl = distanceLeft;
        } else if (distance < closest) {
          closest = distance;
          index1 = i;
          index2 = j;
          pt = positionTop;
          pl = positionLeft;
          dt = distanceTop;
          dl = distanceLeft;
        }
      }
    }
  }

  window.dancers[index1].$node.animate({top: '50%', left: '50%'});
  window.dancers[index2].$node.animate({top: '50%', left: '50%'});
  
  var randomBool = true;
  
  if (Math.random() >= 0.5) {
    randomBool = false;
  }

  if (randomBool === true) {
    setTimeout(function() { 
      window.dancers[index2].$node.css({'content': 'url(explosion.gif)'});
    
    }, 300);
    setTimeout(function() { 

      window.dancers[index1].$node.animate({
        'top': $('body').height() * Math.random() * .8,
        'left': $('body').width() * Math.random() * .8
      });
      window.dancers[index2].$node.remove();
      window.dancers.splice(index2, 1); 
    }, 1000);
  } else {
    setTimeout(function() { 
      window.dancers[index1].$node.css({'content': 'url(explosion.gif)', 'z-index': '9999999'});
      
    }, 300);
    setTimeout(function() { 

      window.dancers[index2].$node.animate({
        'top': $('body').height() * Math.random() * .8,
        'left': $('body').width() * Math.random() * .8,
      });
      window.dancers[index1].$node.remove();
      window.dancers.splice(index1, 1); 
    }, 1000);

  }
  
  
  // makeDancer.prototype.setPosition.call()



};

