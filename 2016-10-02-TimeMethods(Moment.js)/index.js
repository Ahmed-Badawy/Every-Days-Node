
var myTime = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
console.log("Time: ", myTime);


var myDate1 = new Date().toDateString();
console.log("Full Date: ", myDate1);


var myDate2 = new Date().toISOString().replace(/.*(\d{4}-\d{2}-\d{2}).*/, "$1");
console.log("Date: ", myDate2);


var myDate3 = new Date().getTime();
console.log("timestamp: ", myDate3);



//------------------------------------------




var moment = require('moment');

var out1 = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
var out2 = moment().format("ddd, hA");                       // "Sun, 3PM"
var out3 = moment("2016-10-1").from(moment([2016, 11, 1])); 

console.log(out1);
console.log(out2);
console.log(out3);




               

