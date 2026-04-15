const name = "Omkar"                // string defined
const email = "omkar@gmail.com"
const tutorial = "String"

console.log(name);
console.log(typeof email)

let newname = new String("Omkar_Chikkodi")  
// another type of sysntax which explicitly tells that this is a object of class string
/*
this can be used to access many functions from the prototype (__proto__)
use can see all the prototype function in browser
*/
console.log(newname)
console.log(typeof newname)

/*
Output till here:
Omkar
string
[String: 'Omkar_Chikkodi']
object
*/

/* see that 1st is a string type but 2nd is a object of string */


console.log(newname.toUpperCase())      
/* 
note that there is no change in the original string
 as string is a primitive datatype and 
 in primitive datatype it is always call by value, not referennce 
*/
console.log(newname)    // prints the same initial value
console.log(newname.at(-8))    // prints the value at index -1
console.log(newname.indexOf('r'))    // prints the index value of 'r'

const substring = newname.substring(0, 8)
const substring_from_negative = newname.substring(-12, 8)
const slice = newname.slice(0, 8)
const slice_from_negative = newname.slice(-12, 8)

console.log(substring)    // prints the substrig from 0 to 8 (end excluded)
console.log(substring_from_negative)    // prints the substrig from 0 to 8 (end excluded) as negative index not accepted
console.log(slice)    // prints the substrig from 0 to 8 (end excluded)
console.log(slice_from_negative)    // prints the substrig from -8 to 8 (end excluded) as negative index accepted

const emptyWhiteSpaces = "     Hey there      is gap   all 3    sides"
console.log(emptyWhiteSpaces.trim())        // removes both starting and ending whote spces
console.log(emptyWhiteSpaces.trimStart())   // removes startind but keeps ending
console.log(emptyWhiteSpaces.trimEnd())     // removes ending but keeps starting
// but in all 3 cases, spaces stuck between cannot be removed

const url = "https://omkar.com/my%20portfolio"
console.log(url.replace("my", "omkar's"));      // this does not changes the value in original
console.log(url);
console.log(url.replace("%20", "-"));           // as can be seen here

const statement = "This is my dog. My dog name is nicky.    Dogs are good creatures. This dog is one among them."
console.log(statement.replace('dog', "pet"))        // replaces only 1st occurance
console.log(statement.replaceAll('dog', "pet"))     // replaces all occurance
console.log(statement.replace(/\bis\b/, "was"))     // replaces only 1st occurance of 'is'
console.log(statement)
console.log(statement.replace(/\bis\b/g, "was"))    // replaces all occurance of 'is'

console.log(statement.split());     // split on white spaces and gives array of all
console.log(statement.split(''));     // split on chars
console.log(statement.split('')[24]);     // split on chars and accessed by index
console.log(statement.split(' '));     // split on white spaces results to words
console.log(statement.split('    '));     // split on white spaces of len '    '
console.log(statement.split('. '));     // split on sentences

console.log(`Hey ${name}, you have completed ${tutorial}. Hurrey!!`)