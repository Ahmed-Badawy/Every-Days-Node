
console.log("--------------------------Const--------------------------");




console.log("is block-scoped"," : ",function(){
	const bar = 123;
	{ const bar = 456; }
	return bar === 123;
}());

console.log("cannot be in statements"," : ",function(){
	const bar = 1;
	try {
	  Function("if(true) const baz = 1;")();
	} catch(e) {
	  return true;
	}
}());

console.log("for-in loop iteration scope"," : ",function(){
	var scopes = [];
	for(const i in { a:1, b:1 }) {
	  scopes.push(function(){ return i; });
	}
	return (scopes[0]() === "a" && scopes[1]() === "b");
}());

console.log("for-of loop iteration scope"," : ",function(){
	var scopes = [];
	for(const i of ['a','b']) {
	  scopes.push(function(){ return i; });
	}
	return (scopes[0]() === "a" && scopes[1]() === "b");
}());



console.log("--------------------------block-level function declaration--------------------------");
console.log("block-level function declaration"," : ",function(){
	if (f() !== 1) return false;
	function f() { return 1; }
	{ //in this block fn() is == 1, no matter where is the function being declared.
		if (f() !== 2) return false;
		function f() { return 2; }
		if (f() !== 2) return false;
	}
	if (f() !== 2) return false;
	return true;
}());




