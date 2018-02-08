
function cutIt(arr){
  var beSorted = arr;
 var ordered = beSorted.sort((a,b)=>{
   return a.length -b.length;
 })
 var shortest = ordered[0].length
 var str = "";
 var newArr = [];
 for(var i= 0; i<arr.length; i++){
   str = arr[i]
   newArr.push(str.substr(0, shortest))

 }

//There is no string splice method: https://walsh9.net/programming/slicing-and-splicing

// #Task
// Coding in function ```cutIt```, function accept 1 parameter:```arr```. ```arr``` is a string array.
//
// The first mission: Traversing ```arr```, find the shortest string length.
//
// The second mission: Traversing ```arr``` again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.
//
// for example:
//
// ```
// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
// ```
