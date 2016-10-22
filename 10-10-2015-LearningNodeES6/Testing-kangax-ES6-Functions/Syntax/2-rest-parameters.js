

console.log("basic functionality"," : ", function (foo, ...args) {
  return args instanceof Array && args + "" === "bar,baz";
}("foo", "bar", "baz") );

//length will output the length of the parameters. with out the ...
console.log("function 'length' property"," : ", function(a, ...b){}.length === 1 && function(...c){}.length === 0 );

console.log("arguments object interaction"," : ", function (foo, ...args) {
  foo = "qux";
  // The arguments object is not mapped to the parameters, even outside of strict mode.
  return arguments.length === 3
    && arguments[0] === "foo"
    && arguments[1] === "bar"
    && arguments[2] === "baz";
}("foo", "bar", "baz") );


console.log("can't be used in setters"," : ", function (...args) {
  try {
    eval("({set e(...args){}})");
  } catch(e) {
    return true;
  }
}() );


console.log("new Function() support"," : ", new Function("a", "...b","return b instanceof Array && a+b === 'foobar,baz';")('foo','bar','baz'));


// console.log("item"," : ",  );