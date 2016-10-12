
console.log("----------------------------------Let & Var----------------------------------");
//the problem with var binding (Block Scope)
var x = 1;
for(var x=0; x<10; x++){ }
console.log("x = " + x); //will output 10
//--------------------------------------------

let y = 1;
for(let y=0; y<10; y++){ }
console.log("y = " + y); 
/**********************************************************************/



//Const
const env = 'dev';
if(true){ const env = 'pro' }
console.log(env); //const can't be changed by referance that means if it's an object, it's objects can change . & it's block scope just like let

const info = {name: "ahmed", age: 22 };
info.age = 55;  //as you can see this worked & the const changed
console.log(info);
info = "ahmed"; //as you can see this didn't work & outputed an error. you can't change it's referance/type

