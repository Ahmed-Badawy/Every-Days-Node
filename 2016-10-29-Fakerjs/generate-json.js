var faker = require('faker');
var fs = require('fs');


let str='', items_num=10;
let remove_spaces = true;



for(let i=0;i<items_num;i++){
	str +=`{
		"name":  "${faker.name.findName()}",
		"email": "${faker.internet.email()}",
		"color": "${faker.commerce.color()}"
	}`
	if(i!=items_num-1) str+=`,`;
}

json_obj =`[
${str}
]`;

if(remove_spaces) json_obj = json_obj.replace(/([^"]+)|("[^"]+")/g, function($0, $1, $2) {
    if ($1) {
        return $1.replace(/\s/g, '');
    } else {
        return $2; 
    } 
});





console.log(json_obj);
fs.writeFileSync('data.json',json_obj);





