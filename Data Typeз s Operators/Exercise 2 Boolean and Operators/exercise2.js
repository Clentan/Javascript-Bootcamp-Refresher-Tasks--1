/*Exercise 2: Boolean and Operators
1. Use comparison operators to compare two numbers and
store the results in boolean variables.
2. Declare two variables x and y with the values 8 and 12 
respectively.
Use comparison operators to check and print the following:
• If x is greater than y.
• If x is less than or equalto y.
• If x is equalto y.
• If x is not equalto y.
3. Declare the variables a and b with values true and false, 
determine and print the result of the following logical 
operations:
• a AND b
• a OR b
• NOT a
*/
const number1 = 23;
const number2 = 40;
const comparison1 = number1 > number2;//boolean stroing
const comparison2 = number1 > number2;
const comparison3 = number1 === number2;
const comparison4 = number1 != number2;
const comparison5 = number1 !== number2;
const x = 8;
const y = 12;
// Check if x is greater than y
console.log(x > y);
// Check if x is less than or equal to y
console.log(x <= y);
// Check if x is equal to y
console.log(x == y);
// Check if x is not equal to y
console.log(x != y);

const a = true;
const b = false;
console.log(a && b);
console.log(a || b);
console.log(a != b);

let p = 10;

p += 5;
console.log(p);
p -= 3;
console.log(p);
p *= 2;
console.log(p);
p /= 4;
console.log(p);
p %= 3;
console.log(p);

