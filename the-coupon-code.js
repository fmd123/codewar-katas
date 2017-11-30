function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
      let currDate = Date.parse(currentDate)
      let expDate = Date.parse(expirationDate)

  if(enteredCode === correctCode && expDate >=currDate){
      return true
  }else {return false}
 }

 //less code:
//  function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
// }

 //7kyu
//  Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
//
// Your mission:
// Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.
//
// A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

//https://www.w3schools.com/js/js_date_methods.asp
