http://byronsalau.com/blog/converting-numbers-to-negative-values-and-back-again-with-javascript/
function makeNegative(num) {
  var sign = Math.sign(num)
  if(sign === -1){
    return num;
  }
  if(sign === 1){
    return -Math.abs(num);
  }
  if(sign === 0){
   return 0;
  }
}

// someone else's solution
//works because -0 === 0;
//take absolute value of num and make negative.
// function makeNegative(num) {
//   return -Math.abs(num);
// }
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//
// Example:
//
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// Notes:
//
// The number can be negative already, in which case no change is required.
// Zero (0) can't be negative, see examples above.
