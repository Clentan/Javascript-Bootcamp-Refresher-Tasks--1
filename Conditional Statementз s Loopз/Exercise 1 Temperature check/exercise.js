/*xercise 1: Temperature check
1. Write a code using if else statements to check the 
temperature and print a message based on the following 
conditions:
• Ifthe temperature is below 0, print"It's freezing!"
• Ifthe temperature is between 0 and 15, print"It's cold."
• Ifthe temperature is between 16 and 25, print"It's mild."
• Ifthe temperature is above 25, print"It's warm."
2. Re-write the code using switch statements. 
*/
// switch statement
let temperature = prompt("Enter the temperature::");
switch (true) {
    case (temperature < 0):
        console.log("it is freezing");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It is cold");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It is mild");
        break;
    default:
        console.log("it is worm");
        break;
}
//if else statement

if (temperature < 0) {
    console.log("It's freezing!");
}
else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
}
else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
}
else { console.log("It's warm."); }