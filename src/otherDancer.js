var otherDancer = function(top, left, timeBetweenSteps) {
// this = Object.create(otherDancer.prototype)  

  makeDancer.call(this, top, left, timeBetweenSteps);
//return this
};

otherDancer.prototype = Object.create(makeDancer.prototype);
otherDancer.prototype.constructor = otherDancer;

otherDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

