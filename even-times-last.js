function evenLast(numbers) {
  let sum = 0;
  if(numbers.length === 0){
    return 0;
  }
  for (let i = 0; i<numbers.length; i++){
  if(i%2 ===0){
    sum += numbers[i]
    }
  }
  return sum * numbers[numbers.length-1]

}
//7 kyu
//Given an array of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

//If the array is empty, you should return 0.
