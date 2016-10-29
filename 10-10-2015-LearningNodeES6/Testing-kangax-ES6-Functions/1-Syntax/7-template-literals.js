

console.log("octal literals"," : ", function(){
	var a = "ba", b = "QUX";
	return `foo bar
	${a + "z"} ${b.toLowerCase()}` === "foo bar\n	baz qux";
}());


console.log("toString conversion"," : ",function(){
	var a = {
	  toString: function() { return "foo"; },
	  valueOf: function() { return "bar"; },
	};
	return `${a}` === "foo";
}());


console.log("tagged template literals"," : ",function(){
	var called = false;
	function fn(parts, a, b){	//parts is the parts of the text. & a,b is the inserted literals vars.
	  called = true;			//this means it can access the parent scope
	  return parts instanceof Array &&
	    parts[0]     === "foo"      &&
	    parts[1]     === "bar\n"    &&
	    parts.raw[0] === "foo"      &&
	    parts.raw[1] === "bar\\n"   &&
	    a === 123                   &&
	    b === 456;						
	}
	return fn `foo${123}bar\n${456}` && called;
}());



/*
The Object.freeze() method freezes an object: that is, prevents new properties from being added to it; 
prevents existing properties from being removed; 
and prevents existing properties, or their enumerability, configurability, or writability, from being changed. 
In essence the object is made effectively immutable. The method returns the object being frozen.
*/
console.log("passed array is frozen"," : ",function(){
	return (function(parts) {
	  return Object.isFrozen(parts) && Object.isFrozen(parts.raw);
	}) `foo${0}bar${0}baz`;
}());




// console.log(""," : ", );

// console.log(""," : ",function(){

// }());
