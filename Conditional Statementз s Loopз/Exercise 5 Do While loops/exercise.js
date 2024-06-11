/*Exercise 5: Do While loops
1. Print numbers from 1 to 10.
2. Calculate the sum of all numbers from 1 to 100 and print the 
result.
3. Prompt the user to enter a number greater than 10. Keep 
asking untilthey enter a valid number.
4. Create a simple guessing game where the user must guess a 
number between 1 and 10. The game continues until the user 
guesses the correct number.
*/
let i = 1;
do {
    console.log(i);
    i++;
}
while (i <= 10);

let digit = 1;
let total = 0;
do {
    console.log(digit);
    total = total + digit;
    ++digit;
}
while (digit <= 100);
console.log(total);


let enter;
do {
    enter = prompt("Enter a number greater than 10:");
} while (enter <= 10);
console.log(enter);

let guess;
do {
    guess = prompt("Enter the number you want::");
} while (guess >= 10)
console.log(guess);