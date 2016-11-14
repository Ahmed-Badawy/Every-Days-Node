
console.log("is block-scoped"," : ",function(){
	class C {}
	var c1 = C;
	{
	  class C {}
	  var c2 = C;
	}
	return C === c1;
}());


console.log("constructor & prototype methods"," : ",function(){
	class C {
	  constructor() { this.x = 1; }
	  method() { return 2; }
	}
	return C.prototype.constructor === C && new C().x === 1 && 
					typeof C.prototype.method === "function" && new C().method() === 2;
}());


console.log("string-keyed methods"," : ",function(){
	class C {
	  "foo bar"() { return 2; }
	}
	return typeof C.prototype["foo bar"] === "function"
	  		&& new C()["foo bar"]() === 2;
}());


console.log("computed prototype methods"," : ",function(){
	var foo = "method";
	class C {
	  [foo]() { return 2; }
	}
	return typeof C.prototype.method === "function"
	  		&& new C().method() === 2;
}());



console.log("static methods"," : ",function(){
	class C {
	  static method(num=3) { return num; }
	}
	return typeof C.method === "function" && C.method(4) === 4;
}());



console.log("accessor properties"," : ",function(){
	var baz = false;
	class C {
	  get foo() { return "foo"; }
	  set bar(x) { baz = x; }
	}
	new C().bar = true;
	return new C().foo === "foo" && baz;
}());





// console.log(""," : ",function(){

// }());

