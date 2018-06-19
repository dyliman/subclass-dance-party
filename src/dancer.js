// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this._top = top;
  this._left = left;
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(this._top, this._left);
  this.imageNames = ['rocketship.png', 'rocketship1.png'];
};
  

makeDancer.prototype.step = function() {
  var that = this;
  setTimeout(function() { that.step(); }, this._timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

  // this.$node.css({'content: url("' +this.imageNames[0] + '")'});
};

makeDancer.prototype.randomImage = function() {
  this.$node.css({'content': 'url(' + this.imageNames[Math.floor(Math.random() * this.imageNames.length)] + ')'});
};