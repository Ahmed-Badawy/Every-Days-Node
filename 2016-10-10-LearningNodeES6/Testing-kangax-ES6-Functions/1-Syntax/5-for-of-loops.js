
console.log("with arrays"," : ",function(){
	var arr = [5];
	for (var item of arr)
	  return item === 5;
}());


console.log("with sparse arrays"," : ",function(){
	var arr = [,,];
	var count = 0;
	for (var item of arr)
	  count += (item === undefined);
	return count === 2;
}());


console.log("with generator instances"," : ",function(){
	var result = "";
	var iterable = (function*(){ yield 1; yield 2; yield 3; }());
	for (var item of iterable) {
	  result += item;
	}
	return result === "123";
}());




// console.log(""," : ",function(){

// }());
