var faker = require('faker');


for(let i=0;i<20;i++) console.log(`
{
	"name":  "${faker.name.findName()}",
	"email": "${faker.internet.email()}",
	"color": "${faker.commerce.color()}"
},
`);

//all api at: https://www.npmjs.com/package/faker


