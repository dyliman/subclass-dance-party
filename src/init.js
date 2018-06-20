$(document).ready(function() {
  window.dancers = [];
  window.heads = ['heads/1.png', 'heads/2.png', 'heads/3.png', 'heads/4.png', 'heads/5.png', 'heads/6.png', 'heads/7.png', 'heads/8.png', 'heads/9.png', 'heads/10.png', 'heads/11.png', 'heads/12.png', 'heads/13.png', 'heads/14.png', 'heads/15.png', 'heads/16.png', 'heads/17.png', 'heads/18.png', 'heads/19.png', 'heads/20.png', 'heads/21.png', 'heads/22.png', 'heads/23.png', 'heads/24.png', 'heads/25.png', 'heads/26.png', 'heads/27.png', 'heads/28.png', 'heads/29.png', 'heads/30.png', 'heads/31.png', 'heads/32.png', 'heads/33.png', 'heads/34.png', 'heads/35.png', 'heads/36.png', 'heads/37.png', 'heads/38.png', 'heads/39.png', 'heads/40.png'];
  
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
    */
     
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $(dancer.$node).addClass('transform');
    $(dancer.$node).on('click', function() {
      
      var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

      // get the maker function for the kind of dancer we're supposed to make
      var dancerMakerFunction = window[dancerMakerFunctionName];

      // make a dancer with a random position

      dancerMakerFunction.call(dancer.$node);

    });
    $('body').append(dancer.$node);
    // $(dancer.$node).attr('href', '#');
    
    window.dancers.push(dancer);
  });
  
});

$('.addLineUpButton').on('click', function(event) {
     
  var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

  // get the maker function for the kind of dancer we're supposed to make
  var dancerMakerFunction = window[dancerMakerFunctionName];

  // make a dancer with a random position

  dancerMakerFunction();

});

$('.addRocketDancerButton').on('click', function(event) {
  /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

  /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
    */
     
  var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

  // get the maker function for the kind of dancer we're supposed to make
  var dancerMakerFunction = window[dancerMakerFunctionName];

  // make a dancer with a random position

  var dancer = new dancerMakerFunction(
    $("body").height() * Math.random(),
    $("body").width() * Math.random(),
    Math.random() * 1000
  );
  $('body').append(dancer.$node);
});

// $('.transform').on('click', function(event) {
     
//   var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

//   // get the maker function for the kind of dancer we're supposed to make
//   var dancerMakerFunction = window[dancerMakerFunctionName];

//   // make a dancer with a random position

//   dancerMakerFunction();

// });

