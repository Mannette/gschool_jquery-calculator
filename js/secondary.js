$(document).ready(function() {


  //------------------------------------------------
    function resetCalculator(currentValue) {
      $('#screen').val(currentValue);
      $(operatorButtons).removeClass('pendingFunction');
      $('#screen').data('isPendingFunction', false);
      $('#screen').data('thePendingFunction', '');
      $('#screen').data('valueOneLocked', false);
      $('#screen').data('valueTwoLocked', false);
      $('#screen').data('valueOne', currentValue);
      $('#screen').data('valueTwo', 0);
      $('#screen').data('fromPrevious', false);
    }
  //-------------------------------------------------
    // select number buttons
    numButtons.on('click', function() {
      // do stuff
      // console.log($(this).html());

      // prints number on screen
      // $('#screen').html($(this).html());

      if ($('#screen').data('fromPrevious') === true) {

        resetCalculator($(this).text());

      } else if (($('#screen').data('isPendingFunction') === true) && ($('#screen').data('valueOneLocked') === false)) {

        $('#screen').data('valueOne', $('#screen').val());
        $('#screen').data('valueOneLocked', true);

        $('#screen').val($(this).text());
        $('#screen').data('valueTwo', $('#screen').val());
        $('#screen').data('valueTwoLocked', true);

      // clicking number again after first number is locked
    } else if (($('#screen').data('isPendingFunction') === true) && ($('#screen').data('valueOneLocked') === true)) {

      var curValue = $('#screen').val();
      var toAdd = $(this).text();

      var newValue = curValue + toAdd;

      $('#screen').val(newValue);

      $('#screen').data('valueTwo', $('#screen').val());
      $('#screen').data('valueTwoLocked', true);

    }
    // clicking on number fresh
    else {

      var curValue = $('#screen').val();
      if (curValue === '0') {
        curValue = '';
      }

      var toAdd = $(this).text();

      var newValue = curValue + toAdd;

      $('#screen').val(newValue);
    }

    });
  //------------------------------------------------
    // select operator buttons
    operatorButtons.on('click', function(event) {
      // do stuff
      console.log('operators!');
      console.log($(this).html());

      if ($('#screen').data('fromPrevious') === true) {
        resetCalculator ($('#screen').val());
        $('#screen').data('valueOneLocked', false);
        $('#screen').data('fromPrevious', false);
      }

      // function has been selected
      var pendingFunction = $(this).text();
      $('#screen').data('isPendingFunction', true);
      $('#screen').data('thePendingFunction', pendingFunction);

      // visually represent function
      operatorButtons.removeClass('pendingFunction');
      $(this).addClass('pendingFunction');

      // cache one operator
      //
    });
  //-------------------------------------------------
  // select clear button
    $('#cancel').on('click', function() {
      // do stuff
      console.log('cancels!');
      console.log($(this).html());

      resetCalculator('0');

    });
  //-------------------------------------------------
  // select equals button
    $('#calc').on('click', function() {
      // do stuff
      console.log('equals');
      console.log($(this).html());

      if (($('#screen').data('valueOneLocked') === true) && ($('#screen').data('valueTwoLocked') === true)) {

        if ($('#screen').data('thePendingFunction') === '+') {
          var finalValue = parseFloat($('#screen').data('valueOne')) + parseFloat($('#screen').data('valueTwo'));
        } else if ($('#screen').data('thePendingFunction') === '-') {
          var finalValue = parseFloat($('#screen').data(valueOne)) - parseFloat($('#screen').data(valueTwo));
        } else if ($('#screen').data('thePendingFunction') === 'x') {
          var finalValue = parseFloat($('#screen').data(valueOne)) * parseFloat($('#screen').data(valueTwo));
        } else if ($('#screen').data('thePendingFunction') === '&divide') {
          var finalValue = parseFloat($('#screen').data(valueOne)) / parseFloat($('#screen').data(valueTwo));
        }

        $('#screen').val(finalValue);

        resetCalculator(finalValue);
        $('#screen').data('fromPrevious', true);

      } else {
        // numbers not locked, do nothing
      }

    });

});
