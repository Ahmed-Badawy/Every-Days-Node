

console.log("basic"," : ", (() => 5)() === 5 );



console.log("lexical 'this' binding"," : ",function(){
	var d = { 
		x : "bar", 
		y : function(){ return z => this.x + z; }
	}.y();

	var e = { x : "baz", y : d };
	return d("ley") === "barley" && e.y("ley") === "barley";
}());



console.log("lexical 'super' binding in constructors"," : ",function(){
	var received;
	class B {
	  constructor (arg) {
	    received = arg;
	  }
	}
	class C extends B {
	  constructor () {
	    var callSuper = () => super('foo');
	    callSuper();
	  }
	}
	return new C instanceof C && received === 'foo'
}());




console.log("lexical 'super' binding in methods"," : ",function(){
	class B {
	  qux() {
	    return "quux";
	  }
	}
	class C extends B {
	  baz() {
	    return x => super.qux();
	  }
	}
	var arrow = new C().baz();
	return arrow() === "quux";
}());





// console.log(""," : ",function(){

// }());