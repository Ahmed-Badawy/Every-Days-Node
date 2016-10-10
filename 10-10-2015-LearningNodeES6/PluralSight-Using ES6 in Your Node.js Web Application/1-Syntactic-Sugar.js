console.log("----------------------------------Default Values----------------------------------");
function one( a=2, b=a*2 ){ return a+b }

console.log("normal: ", one(2,2) );  //outs 4
console.log("empty: ", one());       //outs 6
console.log("undefined values: ", one(undefined) );   //outs 6

//Also you can assign it a function too
function myFn(  callback = _=>console.log("This is Default Value Function")  ){
	var msg = "Hello World";
	callback(msg);
}
myFn( 
	// n=>console.log("callback is: ",n) 
);
/**********************************************************************/




console.log("----------------------------------Arguments----------------------------------");
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


//also you can use it to push stuff:-
	let array_one = ["one","two"];
	array_one.push(...["three","four","five","six"]); //multiple push to an array
	console.log("array_one is: ",array_one);


/**********************************************************************/






console.log("----------------------------------Object Lineral Notation----------------------------------");
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
/**********************************************************************/



console.log("----------------------------------For Of Loop----------------------------------");
	let list = [1,2,3,4], output=[];
	for(item of list){
		output.push(item+10);
	}
	console.log(output);
/**********************************************************************/



console.log("----------------------------------Template Literal----------------------------------");
	let name = 'Ahmed';
	let info = {age: 33};
	console.log(`Hello World, I'm ${name} & i'm ${info.age} yo`);
//you can also put functions & programing operations ins there:-
	console.log(`it's ${new Date().getHours()} O'clock & i'm ${10+6} years old`);

//you can add a tag method to help you evauate what gets appended to the string:-
	function tag(strings,...values){
		console.log("Strings Are: ",strings);
		console.log("Values Are: ",values);
		var the_return = "";
		strings.forEach(function(string,index,strings){
			the_return+=string+(values[index]||'') + "--append--";
		});
		// strings.for( i=0; i<strings.length; i++ ){ the_return += strings[i]+value[i]; }
		return the_return;
	}
	let msg66 = tag`it's ${new Date().getHours()} O'clock & i'm ${10+6 + " Years Old"}`;
	console.log(msg66);
/**********************************************************************/



console.log("-------------------------------------Destructing an object-------------------------------");
	let firstname = "Ahmed", lastname = "Badawy";

	// let person1 = { firstname: firstname , lastname: lastname }// 
//OR:-
	let person1 = { firstname, lastname } //same as the obove, this is destructing an object. you will get the two values inside the object by this;
	console.log(person1);

	let person2 = {firstname:"Mona"}
	let person3 = {firstname:"Ali"}
	let people = { person1, person2, person3 }// this will assign it the three objects
	console.log("people are:", people);

	function live(n){ console.log(n) }
	var obj_name = "fly";

	let some_body = {
		live : live,							//this is define function inside an obj
		eat : function(n){ console.log(n) }, //this is the es5 way to define functions
		drink(n){ console.log(n) },		// this is the es6 shortcut way to define a function (using Destructing) you will can ommit the value: in the begining
		walk : n=>console.log(n),	//arrow function es6 way
		["swim"]: n=>console.log(n),   //this is the same as the next one
		[obj_name]: n=>console.log(n)  //you can even use a pre-defined string
	}
	some_body["swim2"] = n=>console.log(n);

	some_body.live("lives");
	some_body.eat("eats"); 
	some_body.drink("drinks");
	some_body.walk("walks");
	some_body.swim("Swims 1");
	some_body.swim2("Swims 2");
	some_body.fly("it Flys");
console.log("-----------------------------------------------------------------");
	
	let { firstname33, lastname33 } = { firstname33: "Ahmed too33", lastname33: "badawy man33"}; //you can getout the obj properties this way
	console.log("Destructing is: ",firstname33 , lastname33);

//you can even rename them to another var:-
	let { firstname22:myfirst, lastname22:mylast } = { firstname33: "Ahmed too33", lastname33: "badawy man33"}; //you can getout the obj properties this way
	console.log("Destructing 2 is: ",myfirst,mylast);

//you can also get a defined values from an array by index:-
	var [first,,,fourth,,sixth] = [1,2,3,4,5,6];
	console.log("Numbers are: ", first, fourth, sixth);



//this enables us to do something like listing:-
	let names_list = [];
	let people_list = [person1, person2, person3];
	people_list.forEach( ( {firstname} )=>names_list.push(firstname) ); //get persons firstname then push it to the list
	console.log("List of Persons firstname: ", names_list);

	let [,second_person] = people_list; //get the second person
	function log_firstname({firstname}){ console.log("log says: ",firstname) } //get the firstname property then log it
	log_firstname(second_person);

console.log("-----------------------------------------------------------------");




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

