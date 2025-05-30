/*function add(param1, param2){
	return param1 + param2;

	add(6, 1)
console.log(add)
}*/

function f() {return  arguments }
var args = f('a', 'b', 'c');
args.length
3
args[0]
console.log(args[0])

function pair(x, y) {
	if (arguments.length !== 2)  {
	throw new Error('Need exactly two argumets');
}

	}

 function getPerson(id) {
 if (id < 0) {
 throw new Error('ID must not be negative: '+id);
 }
 return { id: id }; 
 }
 function getPersons(ids) {
 var result = [];
 ids.forEach(function (id) {
 try {
 var person = getPerson(id);
 result.push(person);
 } catch (exception) {
 console.log(exception);
 }
 });
 return result;
 }

 function foo() {
 var x = -512;
 if (x < 0) {  
 var tmp = -x;
 }
 console.log(tmp);  
 }

 