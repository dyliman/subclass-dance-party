var otherDancer = function(top, left, timeBetweenSteps) {
// this = Object.create(otherDancer.prototype)  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blueDancer"></span>');
  this.setPosition(top, left);
//return this
};

otherDancer.prototype = Object.create(makeDancer.prototype);
otherDancer.prototype.constructor = otherDancer;

otherDancer.prototype.step = function() {
  

  makeDancer.prototype.step.call(this);

  // this.$node.toggle();
};

