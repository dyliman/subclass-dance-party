var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
// this = Object.create(makeBlinkyDancer.prototype)  

  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.setPosition((1000 * Math.random()), 0);
  var that = this;
  setTimeout(function() { that.$node.remove(); }, 4000);
  makeDancer.prototype.randomImage.call(this);
//return this
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  // this.$node.toggle();
};

