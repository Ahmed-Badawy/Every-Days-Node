//npm i -D lodash
var _ = require('lodash');

var main = {};

main.out1 = _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
main.out2 = _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

main.out3 = _.kebabCase('Foo Bar');
// => 'foo-bar'
 
_.kebabCase('fooBar');
main.out4 = // => 'foo-bar'
 
main.out5 = _.kebabCase('__FOO_BAR__');
// => 'foo-bar'



for(i=1;i<=5;i++){
	console.log(main[`out${i}`]);
}
