/*const prompt = require("prompt-sync")();
let score = prompt("What is your Score?: ");
console.log(score + "is your score. "); 

let score = 60;

(score < 50)? console.log("fail"):console.log("pass")  */

		console.log("1 for add");
		console.log("2. for substract");
		console.log("3. for multiplication");
		console.log("4. for division");
		console.log("5. for division");

//const prompt = require("prompt-sync")();
//let input = prompt("Enter your operator number: ");

	let left_operand = 45;
	let right_operand = 5;
	let ans;
	let operator = 4;
	switch(operator){
		case 1: 
	ans = left_operand + right_operand;
		console.log("The sum is", ans);
			break;
		case 2: 
	ans = left_operand - right_operand;
		console.log("The substraction is", ans);
			break;
		case 3: 
	ans = left_operand * right_operand;
		console.log("The multiplication is", ans);
			break;

		case 4: 
	ans = left_operand / right_operand;
		console.log("The division is", ans);
			break;
		default:
		console.log("NaN");
}
