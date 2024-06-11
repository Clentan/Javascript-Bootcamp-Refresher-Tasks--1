/*Exercise 4: While loops
1. Print numbers from 1 to 10.
2. Print all even numbers between 1 and 20.
3. Calculate the sum of all numbers from 1 to 100 and print the 
result.
4. Print all multiples of 5 less than 50. 
# Hint: ‘%’
*/
let Number = 1;
let total = 0;
while (Number <= 10) {
    console.log(Number);
    Number++;
}
let Num = 2;
while (Num <= 20) //condition statement
{
    console.log(Num);
    Num += 2;
}
while (Number <= 100) {
    console.log(Number);
    total = total + Number;
    Number++;
}
console.log(total);

let Numbers = 5;
while (Numbers <= 50) {
    console.log(Numbers);
    Numbers += 5;
}


