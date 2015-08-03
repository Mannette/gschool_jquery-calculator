// click numbers
// numbers appear on screen
// click operator
// lock total as number1
// click numbers
// click equals
// lock total as number 2
// perform respective operator
// final number on screen
// clear screen
// repeat


$(document).ready(function() {
  console.log('sanity check');
  var target = event.target;
  // var secondValArr = [];
  var firstVal = '';
  var secondVal = '';
  var operatorButtons = $('.operator').not('#cancel').not('#calc');
  var currentVal = 0;
  var operatorArr = [];


// --------------------------------------------------
  operatorButtons.on('click', function() {

    // console.log('operators!');
    console.log($(this).html());
    // pushes operators to array
    // can only select on operator at a time
    operatorArr = [];
    currentVal = 1;
    operatorArr.push($(this).text());

    $('#screen').append(operatorArr);
    console.log(operatorArr);


  });

//--------------------------------------------------
// selecting number buttons
  var numButtons = $('span').not('.operator');
  // var currentVal = [];

  numButtons.on('click', function() {

    // if no operator is selected
    if (currentVal === 0) {
    firstVal += ($(this).text());
    console.log(firstVal);
  }
    // once operator is selected
    else {
      secondVal += ($(this).text());
      console.log(secondVal);
    }

    // appends numbers to screen
    $('#screen').append($(this).text());

  });

  $('#calc').on('click', function() {

    // var numArr = [];
    // numArr.push($('#screen').text());
    // // console.log($('#screen').text().split());
    // $('#screen').empty();
    // console.log(numArr);

    // firstVal.join('');
    // secondVal.join('');
    // console.log(firstVal.join(''));
    // console.log(secondVal.join(''));

    $('#screen').empty();

    switch (operatorArr[0]) {
      case '+':
      // debugger;
        var sum = parseInt(firstVal) + parseInt(secondVal);
        $('#screen').append(sum);
        break;
      case '-':
      // debugger;
        var subtract = parseInt(firstVal) - parseInt(secondVal);
        $('#screen').append(subtract);
        break;
      case 'x':
      // debugger;
        var multiply = parseInt(firstVal) * parseInt(secondVal);
        $('#screen').append(multiply);
        break;
      case '\u00F7':
      // debugger;
        var divide = parseInt(firstVal) / parseInt(secondVal);
        $('#screen').append(divide);
        break;
    }
    firstVal = $('#screen').text();
    secondVal = '';

  });
  // this works
  $('#cancel').on('click', function() {

    // clears screen
    $('#screen').empty();
    // emptys array
    firstVal = '';
    secondVal = '';
    operatorArr = [];
    currentVal = 0;
  });


});
// end jquery
