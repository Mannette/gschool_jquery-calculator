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
  var numArr = [];
  // var secondValArr = [];
  var operatorArr = [];



// --------------------------------------------------

  var operatorButtons = $('.operator').not('#cancel').not('#calc');


  operatorButtons.on('click', function() {

    // console.log('operators!');
    console.log($(this).html());
    // pushes operators to array
    // can only select on operator at a time
    operatorArr = [];
    operatorArr.push($(this).text());
    console.log(operatorArr);

  });

//--------------------------------------------------
// selecting number buttons
  var numButtons = $('span').not('.operator');
  // console.log(numButtons.text());
  numButtons.on('click', function() {

    // console.log('numbers!');
    // console.log($(this).text());

    // clears array
    numArr = [];
    // selects number
    numArr.push($(this).text());
    // appends number to screen
    $('#screen').append(numArr);
    // firstVal = [];
    // firstVal = numArr.join('');
    // console.log(firstVal);
    // $('#screen').append(firstVal);


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
