const accountId = 123456                // this value cannot be changed
let accountEmail = "omkar@gmail.com"    // You can change this value whenever you need
var accountPassword = "Om@123"          // Similar to let but can cause issue with the scope
accountCity = "Hubli"                   // non defined datatype
let accountAge

// accountId = 456789                   // this cannot be done
accountEmail = "omkarpc@gmail.com"
accountPassword = "Omkar@789"

/*
Try to avoid var as much as possible as it can lead to 
issue in block scope and function scope {}
*/

console.log(accountId)                 // prints the value of the variable
console.table([accountEmail, accountPassword, accountCity, accountAge])     // prints in the form of table


