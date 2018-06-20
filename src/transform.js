var transform = function() {
  this.css({'background-image': 'url(dancingAlien.gif)', 'background-size': '100%', 'background-repeat': 'no-repeat'});
  this.css({'content': 'url(dancingAlien2.png)'});
  var randomIndex = Math.floor(Math.random() * window.heads.length);
  this.css({'content': 'url(' + window.heads[randomIndex] + ')'});
  window.heads.splice(randomIndex, 1);
};

