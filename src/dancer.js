// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this._top = top;
  this._left = left;
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();


  this.setPosition(this._top, this._left);
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
};