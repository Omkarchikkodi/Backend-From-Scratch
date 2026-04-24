// ************** Number ************* //
const rollNumber = 512
const serialNumber = new Number(1002)

/* 
First is assigned as number explicitly by javascript compiler
But the 2nd is implicitly declared as Number
This can result us in getting new opportunities of function to use for Number class object
*/

console.log(rollNumber)
console.log(typeof rollNumber)
console.log(serialNumber)
console.log(typeof serialNumber)
/*
512
number
[Number: 1002]
object
*/

console.log(serialNumber.toString())        // converts Number to a string value
console.log((123.45678).toPrecision(1))     // scientific conversions from left -> range given() : 1e+2
console.log((123.45678).toPrecision(3))     // 123
console.log((123.45678).toPrecision(5))     // 123.46
console.log((123.45678).toPrecision(7))     // 123.4568

