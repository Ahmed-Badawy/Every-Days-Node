// import {sum} from "./imports/import1";

var import1 = require("./imports/import1.js");
console.log( "Sum is: ", import1.sum(1,2) );





/*********************************************************************
	Promises
**********************************************************************/
//promise class will take two params (resolve & reject) resolve will fire the .then & reject will fire the .catch
	var d = new Promise( (resolve, reject)=>{
		setTimeout( _=>{
			if(true){ resolve('Hello world') }
			else{ reject("Sorry, Rejected") }
		}, 2000);
	});
	d.then( data=>console.log('Resolved: ',data) );
	d.catch( err=>console.log('Rejected: ',err) );
//you can do them both in one .then function like this:-
	// d.then( data=>console.log('Resolved: ',data) , err=>console.log('Rejected: ',err))


//you can also call multiple .then() functions to call them in successsion:-
	d.then(data=>console.log("second: ",data))
	d.then(data=>console.log("third: ",data))

//notice that the .catch will be fired if any error happend during the whole operation:-
	d.then(function(data){
		console.log("forth: ",data);
		throw new Error('error thrown, what\'s your probelm!');
	});


/**********************************************************************/


