function SubtractSum(n){
var sum =0;
var arr = n.toString().split("")
for (var i =0; i<arr.length; i++){
	var reNum = parseInt(arr[i]);
	sum +=reNum;
	console.log(sum)
}
n = n-sum;
console.log(n)
if(n<=100 && n>0){
  console.log("n = " + n)
  // fruit name like "apple"
  }else {
	console.log("onward")
  SubtractSum(n)
  }
}

SubtractSum(21)
//but the list of fruits with associated numbers  will always result in apple so the simplest thing to do is just return apple.

// 10-19 -> 9
//20-29 ->18
//30-39-> 27 and so on...
//kata writers arranged the list of fruits so that multiples of 9 were all apples.
