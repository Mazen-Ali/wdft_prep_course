// Exercise #1
// Write your solution below
var block = "#";
var line = '';
for (var i=0; i < 7; i++) {
    line += block;
    console.log(line);
}

/* 
- We need 2 Variables, # & Empty space.
- We add for loop to iterate through it and it should start with 0, the condition less than 7 and it should get incremented by 1.
- We add an action to sum to the previous start another block in new line.
- then print the new line.
 
*/




// Exercise #2
// Write your solution below
function isEven(number) {
    if (number % 2 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
};
isEven(5);

/* 
Write your explanation for Exercise #2 here
- First We create a function with an argument.
- Then we add if loop to check if the number has a remainder or not.
- if it has a remainder then print false.
- if it does not have a remainder then print true.
- we call the function with a number to check.


*/
