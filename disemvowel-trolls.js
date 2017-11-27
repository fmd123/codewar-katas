function disemvowel(str) {
  var arr = str.split('');
  var newArr = arr.filter((char)=>{
    return !/[aeiou]/i.test(char)
  });
  str = newArr.join('')
  return str;
}
//https://stackoverflow.com/questions/5488028/how-do-i-check-for-vowels-in-javascript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
// Note: for this kata y isn't considered a vowel.


//someone else's solution...
// function disemvowel(str) {
//   return (str || "").replace(/[aeiou]/gi, "");
// }
