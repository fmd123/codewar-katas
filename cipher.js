// Description:
//
// This cipher involves taking each character of a string and multiplying their char codes by 6.
//
// For example, Hello World! would become ưɞʈʈʚÀȊʚʬʈɘÆ.

//You must write two functions:
//encode to encode a given string,
//decode to decode a given string.


function encode(str) {
  let encoded = '';
  for(let i =0; i<str.length; i++){
    let newChar = '';
    let timesSix = '';
    timesSix = str.charCodeAt(i)*6;
    newChar = String.fromCharCode(timesSix);
    encoded += newChar;
  }
  return encoded;
}

function decode(str) {
    let decoded = '';
    for(let i =0; i<str.length; i++){
    let newChar = '';
    let divideSix = '';
    divideSix = str.charCodeAt(i)/6;
    newChar = String.fromCharCode(divideSix);
    decoded += newChar;
  }
  return decoded;

}

//https://www.w3schools.com/jsref/jsref_charCodeAt.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

//I need to learn how to use [...] operator!
//a best practice solution:

// function encode(str) {
//   return [...str].map(c=>String.fromCharCode(c.charCodeAt()*6)).join('');
// }
//
// function decode(str) {
//   return [...str].map(c=>String.fromCharCode(c.charCodeAt()/6)).join('');
// }
