// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//Old School for loops...

//function accum(s) {
//   s = s.toLowerCase();
// 	let output = '';
//
// 	for(let i=0; i<s.length;i++){
// 		let letters = '';
// 		for(let k = -1 ; k<i; k++){
// 			letters += s[i];
// 		}
// 		letters = letters[0].toUpperCase() + letters.slice(1)
//     output += (letters + '-')
// //     console.log (letters);
// //     console.log (output);
// 	}
//   output = output.slice(0,-1);
//   return output;
// }

//Modern JS
function accum(s) {
	return s.toLowerCase().split('').map((c, i)=>{
      return c.toUpperCase() + c.repeat(i);
  }).join('-');
}
