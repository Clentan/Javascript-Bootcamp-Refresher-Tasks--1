/*Write a code using if else statements to check if a number is 
divisible by 2, 3, or both:
• Ifthe numberis divisible both by 2 and 3, print"Divisible 
by both."
• If the number is divisible by only 2, print "Divisible by 2."
• If the number is divisible by only 3, print "Divisible by 3."
• If the number is not divisible by either, print "Not 
divisible by 2 or 3."
2. Re-write the code using switch statements. 
*/
let number = prompt("Enter your number here::");
if (number % 2 == 0) {
    console.log("is only divisible by 2");
}
else if (number % 2 == 0 && number % 3 == 0) {
    console.log("Divisible by both 3 and 2");
}

else if (number % 3 == 0) {
    console.log("Divisible by 3")
}
else {
    console.log("divisible by 2 or 3");
}

switch (true) {
    case (number % 2 == 0):
        console.log("Divisible by 2");
        break;

    case (number % 2 == 0 && number % 3 == 0):
        console.log("Divisinle ny both");
        break;
    case (number % 3 == 0):
        console.log("Divisile by 3");
        break;
    default:
        console.log("Diviible bt 2 or 3");
        break;
}
