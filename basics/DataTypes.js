// Primitive datatypes

let number = 123    // this represents both int and float     
/*
will range till 2^53
can have special values like Infinity and NaN
*/

let bigint = 7483286163
/*
Used arbitarily for large number which cannot be held in number type
*/

let string = "Hello buddy"
// works like a string in CPP

let boolean = true
// either true/false

let undefined;
/* 
the value is not initialised
different than null
*/

let Null = null
/*
Null is a form of initialising a value with no value
It means it is initialised but has empty value
*/

let symbol;
/* it is a unique and immutable value assigned as a key
mostly used in React
*/

// Non primitive data types
// object

// let us see the use of "typeof"
console.log(typeof true);       // prints boolean
console.log(typeof undefined);  // prints undefined
console.log(typeof null);       // prints as "OBJECT" and not as "null"
