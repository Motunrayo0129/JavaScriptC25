//1. function declaration
//2. function expression


	//function declaration
/*function greet(){
	console.log("Hello")
};
greet();

function greet(){
	let reply = "Hello"
	return "reply"
};
	//function expression
console.log(greet());	

const greet = function() {
	let reply = "hello"
	return reply
};
console.log(greet());  */

let userName = "Motun";
let number = "enum";

	const greet = function(numberOne, name){
	let concat = numberOne + ""+name
	return concat
	}
console.log(greet(userName, number)); 