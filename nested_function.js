/*let numberOne = 3;
function getProduct(number) {
let numberTwo = 4;

	//nested function
function multiply(value) {
	let product = numberTwo * number
		return product
};
return multiply(numberTwo)
};
console.log(getProduct(numberOne))*/

let numberOne = 3;
let numberTwo = 4;

function getAnswer(number, secondNumber){
	let numberThree = 6;
	function multiply(){
	let result = secondNumber * number * numberThree
	return result
	}; 

	return multiply();
	};

console.log(getAnswer(numberOne, numberTwo));