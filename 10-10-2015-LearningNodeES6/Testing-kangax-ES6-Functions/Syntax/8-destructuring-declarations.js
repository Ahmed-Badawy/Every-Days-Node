console.log("With Arrays"," : ",function(){
	var [a, , [b], c] = [5, null, [6]];
	return a === 5 && b === 6 && c === undefined;
}());

console.log("with sparse arrays"," : ",function(){
	var [a, , b] = [,,,];
	return a === undefined && b === undefined;
}());

console.log("with Strings"," : ",function(){
	var [a, b, c] = "ab";
	return a === "a" && b === "b" && c === undefined;
}());

console.log("with objects"," : ",function(){
	var {c, x:d, e, } = {c:7, x:8 ,};
	return c === 7 && d === 8 && e === undefined;
}());

console.log("computed properties"," : ",function(){
	var qux = "corge";
	var { [qux]: grault } = { corge: "garply" };
	return grault === "garply";
}());

console.log("multiples in a single var statement"," : ",function(){
	var [a,b,k] = [5,6], {c,d} = {c:7,d:8};
	return a === 5 && b === 6 && c === 7 && d === 8 && k === undefined;
}());

console.log("nested"," : ",function(){
	var [e, {x:f, g}] = [9, {x:10}];
	var {h, x:[i]} = {h:11, x:[12]};
	return e === 9 && f === 10 && g === undefined
	  && h === 11 && i === 12;
}());

console.log("in for-in loop heads"," : ",function(){
	let out1,out2;
	for(var [i, j, k] in { qux: 1 }) {
	  out1 = i === "q" && j === "u" && k === "x";
	}
	for(var [i, j, k] of [[1,2,3]]) {
	  out2 = i === 1 && j === 2 && k === 3;
	}
	return out1 && out2
}());

console.log("rest"," : ",function(){
	var [a, ...b] = [3, 4, 5];
	var [c, ...d] = [6];
	return a === 3 && b instanceof Array && (b + "") === "4,5" &&
	   c === 6 && d instanceof Array && d.length === 0;
}());

console.log("defaults"," : ",function(){
	var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
	var [d = 0, e = 5, f = 6] = [4,,undefined];
	return a === 1 && b === 2 && c === 3 && d === 4 && e === 5 && f === 6;
}());


console.log("chained object destructuring"," : ",function(){
	var a,b,c,d;
	({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
	return a === 1 && b === 2 && c === 3 && d === 4;
}());



console.log("--------------------------destructuring, parameters--------------------------");

console.log("with arrays"," : ",function([a, , [b], c]) {
 	return a === 5 && b === 6 && c === undefined;
}([5, null, [6]]));


console.log("with Objects"," : ",function({c, x:d, e}) {
  	return c === 7 && d === 8 && e === undefined;
}({c:7, x:8}));


console.log("defaults"," : ",(function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 && b === 2 && c === 3 && d === 4 &&
    e === 5 && f === 6 && g === 7 && h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined])));




console.log("--------------------------new.target--------------------------");
//The new.target property lets you detect whether a function or constructor was called using the new operator. In constructors and functions instantiated with the new operator
console.log("new.target functionality"," : ",function(){
	function Foo() {
	  if (!new.target) throw "Foo() must be called with new";
	  console.log("Foo instantiated with new");
	  return new.target; //this will return an object from the current function/class
	}
	// Foo(); // throws "Foo() must be called with new"
	console.log("new_obj_name is: ",new Foo().name); // logs "Foo instantiated with new" then logs Foo: the name of the function
	return true;
}());



// console.log(""," : ", );
// console.log(""," : ",function(){

// }());





