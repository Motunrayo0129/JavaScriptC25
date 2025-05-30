let array = [2, 3, 4, 5, 6];

for(let number of array) {
	console.log(number)
	}

let obj = {
	color: "black",
	age: 12,
	isValid: true
};
  
for(let key in obj) {
	console.log(obj[key])
	};

for(let value of array) {
	console.log(value)
	};
for(let index in array) {
	console.log("I am the index of the arr", index)
	console.log("I am the index of the arr", array[index])
	};
for(index = 0; index < array.length; index++) {
	console.log("I am the index of the arr", index)
	console.log("I am the index of the arr", array[index])
	};