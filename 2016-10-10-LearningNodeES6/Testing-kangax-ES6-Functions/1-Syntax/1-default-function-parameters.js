
console.log("basic functionality"," : ", function(a = 1, b = 2){ return a === 3 && b === 2; }(3) );
console.log("explicit undefined defers to the default"," : ", function(a = 1, b = 2) { return a === 1 && b === 3; }(undefined, 3) );
console.log("defaults can refer to previous params"," : ", function (a, b = a) { return b === 5; }(5) );

console.log("arguments object interaction"," : ", function (a = "baz", b = "qux", c = "quux") {
  a = "corge";
  // The arguments object is not mapped to the parameters, even outside of strict mode.
  return arguments.length === 2 && arguments[0] === "foo"&& arguments[1] === "bar";
}("foo", "bar"));

console.log("temporal dead zone"," : ", function(x = 1) {
  try {
    eval("(function(a=a){}())");
    return false;
  } catch(e) {}
  try {
    eval("(function(a=b,b){}())");
    return false;
  } catch(e) {}
  return true;
}() );

console.log("separate scope"," : ", function( a=function(){return typeof b === 'undefined'; }){
  var b = 1;
  return a();
}());

// new Function ([arg1[, arg2[, ...argN]],] functionBody)
console.log("new Function() support"," : ", new Function("a = 1", "b = 2","return a === 3 && b === 2")(3)  );




















