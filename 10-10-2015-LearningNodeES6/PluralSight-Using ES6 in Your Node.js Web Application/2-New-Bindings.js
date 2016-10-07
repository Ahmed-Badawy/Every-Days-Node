//the problem with var binding (Block Scope)
var x = 1;
for(var x=0; x<10; x++){ }
console.log("x = " + x); //will output 10
//--------------------------------------------

let y = 1;
for(let y=0; y<10; y++){ }
console.log("y = " + y); 


//----------------------------------------------------





//Const
const env = 'dev';
if(true){ const env = 'pro' }
console.log(env); //const can't be changed, & it's block scope


