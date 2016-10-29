//you can either put export at the beginning:-
	// export function sumFn1(a=1,b=2){ return a+b }
	// export function sumFn2(a=1,b=2){ return a+b }

//or you can put the exprot at the end:-
function sumFn(a=1,b=2){ return a+b }
function sumMul(...args){ 
	let count = 0 ; 
	args.forEach(function(n){ count+=n });
	return count;
}
export { sumFn,sumMul };