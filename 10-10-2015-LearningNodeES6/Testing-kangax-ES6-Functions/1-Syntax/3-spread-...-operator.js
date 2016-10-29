
console.log("with arrays, in function calls"," : ", Math.max(...[1, 2, 3]) === 3  );

console.log("with arrays, in array literals"," : ", [...[1, 2, 3]][2] === 3 );

console.log("with sparse arrays, in function calls"," : ", 
	function(){
		var a = Array(...[,,]);
		return "0" in a && "1" in a && '' + a[0] + a[1] === "undefinedundefined";
	}());

console.log("with sparse arrays, in array literals"," : ", function(){
	var a = [...[,,]];
	return "0" in a && "1" in a && '' + a[0] + a[1] === "undefinedundefined";
}() );

console.log("with strings, in function calls"," : ", Math.max(..."1234") === 4 );

console.log("with strings, in array literals"," : ", ["a", ..."bcd", "e"][3] === "d" );

console.log("with astral plane strings, in array literals"," : ", [..."𠮷𠮶"][0] === "𠮷" );

console.log("with generator instances, in calls"," : ",  function(){
	var iterable = (function*(){ yield 1; yield 2; yield 3; }());
	return Math.max(...iterable) === 3;
}());

console.log("with generic iterables, in calls"," : ",  function(){
	var iterable = global.createIterableObject([1, 2, 3]);
	return Math.max(...iterable) === 3;
}());



// console.log(""," : ",  );
// console.log("item"," : ",  );
// console.log("item"," : ",  );

