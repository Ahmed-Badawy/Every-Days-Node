//default values

function one( a=2, b=a*2 ){ return a+b }

console.log("normal: ", one(2,2) );  //outs 4
console.log("empty: ", one());       //outs 6
console.log("undefined values: ", one(undefined) );   //outs 6



//arguments:-
function two(){
	console.log(arguments);//arguments will output all args of the method
}
console.log( two("one","two","three") ); //outs { '0': 'one', '1': 'two', '2': 'three' }



//... means convert to csv format:    ...obj  == obj[0],obj[1],obj[2]
function three(param1, ...params){
	console.log("params are: ", params);
}
console.log(three("one","two","three","four")); //outs [ 'two', 'three', 'four' ]

var obj3 = [ {a:'a'},{b:'b'},{c:'c'} ];
console.log(three('param1', ...obj3 )); //works out just like:   three('param1', obj3[0], obj3[1] )

var obj4 = [ "first param", ...obj3 ];
console.log(obj4);



//Object Lineral Notation:-
	function greeting(name){
		var sayHi = function()	{ return 'sayHi'  }
		var sayBye = function()	{ return 'sayBye' }
		// return { sayHi: sayHi, sayBye: sayBye }
		return { sayHi,sayBye } //this is the same as the previous one. 
	}
	console.log( greeting('Ahmed').sayHi() )


	function greeting2(name){
		return { //this way is the same as the previous two.
			sayHi2(){ return 'sayHi2' },
			sayBye2(){ return 'sayBye2' }
		}
	}
	console.log( greeting2('Ahmed').sayHi2() );



//For Of Loop
	let list = [1,2,3,4], output=[];
	for(item of list){
		output.push(item+10);
	}
	console.log(output);



//Template Literal
	let name = 'Ahmed';
	console.log(`Hello World, I'm ${name}`);



//Destructing an object
	function fn1(name){
		return { 
			inner_fn(){return name},
			inner_fn2(){return name+"2"}
		} 
	}

	var fn1_inner1 = fn1('Destructing1').inner_fn; 	//this will assign a function to the variable
	console.log( fn1_inner1() ); 					// thie will inflate the function

	var { inner_fn, inner_fn2 } = fn1('Destructing2');		//this will assign a function to the var. the {} is a shortcut for the inner method.
	console.log( inner_fn() , inner_fn2() );			// thie will inflate the function
//you can even rename them after returning. let's rename them to m1 & m2
	var { inner_fn:m1, inner_fn2:m2 } = fn1('Destructing2');		
	console.log( m1() , m2() );			


//Destructing an array
	var [x] = [1,2,3,4];//this means assign x to the first item
	console.log("first item of array is: ", x );
	var [,y] = [1,2,3,4];//this means assign y to the second item
	console.log("Second Item of array is: ", y );

