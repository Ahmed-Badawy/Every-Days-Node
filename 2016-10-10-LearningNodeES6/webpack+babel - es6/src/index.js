
/*********************************************************************
	Importing:          https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/import
**********************************************************************/
//you can import like this:-
	// import {sumFn,sumMul} from './imports/import2.js';
	// console.log( sumFn(3,2) );
	// console.log( sumMul(10,200,90) );


//or you can use aliases like this:-
		// import {sumFn as sumFnNew , sumMul as Mulnew} from './imports/import2.js';
		// console.log( sumFnNew(3,2) );
		// console.log( Mulnew(10,200,90) );


//or you can import every thing 
		import * as import2 from './imports/import2.js';
		console.log( import2.sumFn(3,2) );
		console.log( import2.sumMul(10,200,90) );














