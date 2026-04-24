// dates
/*
all the dates are begined and calculated from January 1, 1970
*/

// const start = Date.now()
// console.log(`Waiting time.....`)
// const end = Date.now() - start      
// console.log(end);                // gives you mili seconds


let firstDate = new Date()       // instant initialisation of today
// console.log(firstDate)                      // 2026-04-24T17:44:35.993Z
// console.log(firstDate.toDateString())       // Fri Apr 24 2026
// console.log(firstDate.toLocaleString())     // 24/4/2026, 11:14:35 pm
// console.log(firstDate.toString())           // Fri Apr 24 2026 23:14:35 GMT+0530 (India Standard Time)

let birthday = new Date("August 11, 2002 22:25:30")
console.log(birthday.toDateString());   
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getMonth());

console.log(birthday.valueOf());

