var otherDancer = function(top, left, timeBetweenSteps) {
// this = Object.create(otherDancer.prototype)  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<a href="#" class="blueDancer" data-dancer-maker-function-name="transform"></a>');
  this.setPosition(top, left);
//return this
};

otherDancer.prototype = Object.create(makeDancer.prototype);
otherDancer.prototype.constructor = otherDancer;

otherDancer.prototype.step = function() {
  

  makeDancer.prototype.step.call(this);

  // this.$node.toggle();
};

