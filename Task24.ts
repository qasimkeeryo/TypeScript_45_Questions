let city1 = 'Karachi';
let city2 = 'Lahore';

console.log("Tests for equality and inequality with strings:");
console.log(city1 === 'Karachi');
console.log(city2 !== 'Karachi');

let word = 'Hello';
let lowerWord = word.toLowerCase();

console.log("\nTests using the lower case function:");
console.log(lowerWord === 'hello');

let num1 = 10;
let num2 = 20;

console.log("\nNumerical tests:");
console.log(num1 === 10);
console.log(num2 !== 10);
console.log(num1 < num2);
console.log(num2 > num1); 
console.log(num1 >= 10); 
console.log(num2 <= 20); 

let a = true;
let b = false;

console.log("\nTests using 'and' and 'or' operators:");
console.log(a && b);
console.log(a || b);

let colors = ['red', 'green', 'blue'];

console.log("\nTest whether an item is in an array:");
console.log(colors.includes('green'));

console.log("\nTest whether an item is not in an array:");
console.log(!colors.includes('yellow'));