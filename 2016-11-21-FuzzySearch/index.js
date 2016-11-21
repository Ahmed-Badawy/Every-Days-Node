function fuzzysearch (needle, haystack){
  var hlen = haystack.length, nlen = needle.length;
  if(nlen>hlen) return false;
  if(nlen==hlen) return needle === haystack;
  outer: for(var i=0,j=0; i<nlen; i++) {
    var nch = needle.charCodeAt(i);
    while (j < hlen){ if(haystack.charCodeAt(j++)==nch) continue outer }
    return false;
  }
  return true;
}

function fuzzysearch2(pattern,str){
    pattern = pattern.split("").reduce(function(a,b){ return a+".*"+b; });
    return (new RegExp(pattern)).test(str);
};

function fuzzysearch_regex(pattern, str){
  return pattern.test(str);
}



console.log(fuzzysearch("he","hello"));
console.log(fuzzysearch("hl","hello"));
console.log(fuzzysearch("eh","hello"));
console.log(fuzzysearch("welo","welcme man hello"));

console.log("--------------------------with regex--------------------------");

console.log(fuzzysearch2("he","hello"));
console.log(fuzzysearch2("hl","hello"));
console.log(fuzzysearch2("eh","hello"));
console.log(fuzzysearch2("welo","welcme man hello"));


console.log(fuzzysearch2("cost","coot"));



console.log(fuzzysearch_regex(/hel/ig,"Hello world"));




