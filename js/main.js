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



// --------------------------------------------------

  var operatorButtons = $('.operator').not('#cancel').not('#calc');
  var operatorArr = [];

  operatorButtons.on('click', function() {

    // console.log('operators!');
    console.log($(this).html());
    // pushes operators to array
    // can only select on operator at a time
    operatorArr = [];
    operatorArr.push($(this).text());

    numArr.push(operatorArr);

    $('#screen').append(operatorArr);
    console.log(operatorArr);

  });

//--------------------------------------------------
// selecting number buttons
  var numButtons = $('span').not('.operator');
  var numArr = [];
  // var currentVal = [];

  // console.log(numButtons.text());
  numButtons.on('click', function() {
    var currentVal = [];
    currentVal.push($(this).text());
    console.log(currentVal);

    // console.log('numbers!');
    // console.log($(this).text());

    // pushes numbers to array
    // currentVal.push($(this).text());
    // console.log(currentVal);

    // making an array of arrays
    numArr.push(currentVal);
    console.log(numArr);
    // appends numbers to screen
    $('#screen').append($(this).text());



    // // sets first value if operand is not selected
    // if (/*--- operator array is empty ---*/) {
    //   firstValArr.push($(this).text());
    //   console.log(firstValArr);
    // }
    // // sets second value if operand is selected
    // else if (/*--- operator array is not empty ---*/) {
    //   secondValArr.push($(this).text());
    //   console.log(secondValArr);
    // }

  });

  $('#calc').on('click', function() {

    $('#screen').empty();

    switch (numArr[1]) {
      case '+':
        var sum = numArr[0] + numArr[2];
        $('#screen').append(sum);
        break;
      case '-':
        var subtract = numArr[0] - numArr[2];
        $('#screen').append(subtract);
        break;
      case '*':
        var multiply = numArr[0] * numArr[2];
        $('#screen').append(multiply);
        break;
      case '\u00F7':
        var divide = numArr[0] / numArr[2];
        $('#screen').append(divide);
        break;
    }
    numArr = [];

  });

  $('#cancel').on('click', function() {

    // clears screen
    $('#screen').empty();
    // emptys array
    numArr = [];
  });


});
// end jquery


// var operators;
// var operatorArr = [];

// //-----------------------------------------
// // sum function
// function addition(num1, num2) {
//   var total = 0;
//   total = num1 + num2;
//   return total;
// }
// // ----------------------------------------
// // subtraction function
// function subtraction(num1, num2) {
//   var total = 0;
//   total = num1 - num2;
//   return total;
// }
// // ----------------------------------------
// // multiplication function
// function multiplication(num1, num2) {
//   var total = 0;
//   total = num1 * num2;
//   return total;
// }
// // ----------------------------------------
// // division function
// function division(num1, num2) {
//   total = 0;
//   total = num1 / num2;
//   return total;
// }
// // ----------------------------------------
// // clear function
// function clear() {
//   // clear screen
// }
// // ----------------------------------------
// // equals function
// function equals() {
//   // writes total to screen
// }
