
console.log("----------------------------------Arrow Functions----------------------------------");
var fn1 = a=>a+10; //if you only have one param you can ommit the ()... for one line of code don't need to use {}. it will imped the return.
var fn2 = (a,b)=>{ //if you need two params you need the (a,b). if you put {}  you can't remove the return.
	return a + b;
}
var fn3 = _=>33;  // if you have only one argument you can put _ instead
console.log( fn1(3) );
console.log( fn2(3,5) );
console.log( fn3() );
/**********************************************************************/



console.log("----------------------------------Classes----------------------------------");
class class1{
	constructor(name){ this.name = name };
	method1(){ return "this is the method1 from class1" }; //this is almost on a prototype
}

class class2 extends class1{
	constructor(name){ 
		super(name); // call the parten constructor with the super()
		this.name2= name+"2" 
	}
	method2(){ return "this is method 2" }
	method1(){ 	//this is overriding
		let str = super.method1(); //call the partent method with the super.method()
		return str+" & this is from class 2"
	}
}

console.log( new class1('hello') );
console.log( new class1('hello').method1() );

console.log( new class2("Ahmed") );
console.log( new class2("Ahmed").method1() );




console.log("----------------------------------Generators----------------------------------");
function* gen(input){

//do stuff
	console.log("First Time");
	var nextInput = yield(input);

//do more stuff
	console.log("Second Time");
	yield(nextInput);

	console.log("Third Time");
	yield("finished");
}

var it = gen("Init Man");//will init & return the 
console.log( it.next() );
console.log( it.next('my Input Man') );
console.log( it.next() );
if( it.next().done ) console.log('Finished Every Thing');




// -----------------
console.log("------------Pagination with Generators");
function* MyList(num){
	var list = ["one","two","three","four","five","six","seven","eight","nine","ten"];
	var out = [];
	for(item of list){
		out.push(item);
		if(out.length >= num){
			num = yield out;
			out = [];
		}
	}
	yield out;
}

var repo = MyList(2);
console.log(repo.next());
console.log(repo.next(4));
console.log(repo.next(3));
console.log(repo.next(4));


