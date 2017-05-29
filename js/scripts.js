// scripts.js
var a = prompt("Enter first number");
var b = prompt("Enter second number");
var value = (a*a) + (2 * a * b) -(b * b);

console.log("(a*a) + (2 * a * b) -(b * b) , where a is equal " + a + " and b is equal " + b + " is egual " + value);

if (value > 0) {
	console.log("The result is positive");
}

else if (value < 0) {
	console.log("The resalt is negative");
}

else if (value == 0) {
	console.log("Te resalt is 0 ");
}

else {
	console.log("This is not a number!");
}
