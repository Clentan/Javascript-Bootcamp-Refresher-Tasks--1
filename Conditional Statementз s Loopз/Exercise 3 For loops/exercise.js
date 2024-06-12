/*Exercise 3: For loops
1. Print numbers from 1 to 10.
2. Print all even numbers between 1 and 20.
3. Calculate the sum of all numbers from 1 to 100 and print the 
result. Hint:‘+=’
4. const numbers = [1, 2, 3, 4, 5]. Given the array of numbers, 
print each element to the console.
5. const numbers = [3, 7, 2, 5, 10, 6].Giventhe array of numbers, 
find and print the largest number.
#Hint: current value and previous value
*/
for (i = 1; i <= 10; i++) {
    console.log(i);
};
for (i = 2; i <= 20; i = i + 2) {
    console.log(i)
};
let sum = 0;
for (i = 1; i <= 100; i++) {
    console.log(sum += i);
}
console.log(sum);
const array = [3, 7, 2, 5, 10, 6];
for (b = 0; b <= 5; b++) {
    console.log(array[b])
}

//const numbers = [3, 7, 2, 5, 10, 6].Giventhe array of numbers, 
//find and print the largest number.

const numbers = [3, 7, 2, 5, 10, 6];
const highestNumber = Math.max(...numbers);
console.log("The highest number is:", highestNumber);