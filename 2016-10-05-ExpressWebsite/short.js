var express = require('express');
var exApp = express();


/*********************************************************************
Define Your Static Files Provider
**********************************************************************/
exApp.use('/htmls',express.static('htmls')); //http://localhost:3000/htmls/1.html
/**********************************************************************/

exApp.get('/route-name',function(request,result){
	result.send("text");
	// result.render("jade-view-return",{users:users});
})



var server = exApp.listen(3000,function(){
	//fire this on start
	console.log("Server Running at http://localhost:"+server.address().port);
});


