
console.log("computed properties"," : ",function(){
	var x = 'y';
	return { [x]: 1 }.y === 1; //the [x] is replaced by the y
}());


console.log("shorthand properties"," : ",function(){
	var a = 7, b = 8, c = {a,b}; //you can assign from previous items in the same var.
	return c.a === 7 && c.b === 8;
}());


console.log("shorthand methods"," : ", { y(){return "value"} }.y() === "value" );


console.log("string-keyed shorthand methods"," : ",function(){
	return { "foo bar"() { return 4; } }["foo bar"]() === 4; //this is true power. you can assign names to the functions & call the names as functions
}());


console.log("computed shorthand methods"," : ",function(){
	var x = 'y';
	return { [x](){ return 1 } }.y() === 1;
}());



console.log("computed accessors"," : ",function(){
	var x = 'y',
	    valueSet,
	    obj = {
	      get [x] () { return 1 },
	      set [x] (value) { valueSet = value }
	    };
	obj.y = 'foo';
	return obj.y === 1 && valueSet === 'foo';
}());