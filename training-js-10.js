// https://www.codewars.com/kata/5721a78c283129e416000999/solutions/javascript

function pickIt(arr){
  var odd=[],even=[];
  for (i = 0; i<arr.length; i++){
    arr[i]%2 ===0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  return [odd,even];
}
//even better with for in loop:
// function pickIt (arr) {
//
//   let odd = []
//   let even =[]
//
//   for (var x of arr) {
//       ((x % 2) ? odd : even).push(x)
//   }
//
//   return [odd, even]
// }
