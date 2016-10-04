var express = require('express');
var exApp = express();

/*********************************************************************
Defining your default views Renderer & Engine
**********************************************************************/
var engines = require('consolidate');
exApp.engine('hbs',engines.handlebars);//force handlebars as the default templating engine

	exApp.set('views','./views'); // get views from ./views
	// exApp.set('view engine','jade');
	exApp.set('view engine','hbs'); //user hbs template engine
/**********************************************************************/


/*********************************************************************
Define Your Static Files Provider
**********************************************************************/
exApp.use('/images',express.static('public/images/pics'));//means: any request to /images return with the public/images directory
exApp.use(express.static('public'));// this is a default request directory
/**********************************************************************/


/*********************************************************************
Remove X-Powered-By →Express from header
**********************************************************************/
exApp.use(function(req,res,next){
	res.set('X-Powered-By','Ahmed Badawy');
	next();
})
/**********************************************************************/



/*********************************************************************
Get JSON File Content
**********************************************************************/
var fs = require('fs');
var path = require('path');
var _ = require('lodash');


function get_users(){
	var users = [];
	fs.readFile('./users.json',{encoding:'utf8'},function(err,data){
		if(err) throw err
			JSON.parse(data).forEach(function(user){
				user.full_name = _.startCase(user.name+" - "+user.id);
				users.push(user);
			})
	})
	return users;
}
function save_users(users){
	var users_json = JSON.stringify(users,null,"\t");
	fs.writeFile("./users.json", users_json, function(err) {
	    if(err) return console.log(err);
	    console.log("The file was saved!");
	});
}

function find_user(id){
	var output;
	users.forEach(user=>{ if(user.id==id) output = user });
	return output || false;
}

var users = get_users();
/**********************************************************************/





/*********************************************************************
Process Post & Put (FORM) Requests
**********************************************************************/
var bodyParser = require('body-parser');
exApp.use( bodyParser.urlencoded( {extended:true} ) );

//Use Postman to test them
exApp.post("/users",function(req,result,next){
	console.log(req.params);
	console.log(req.body);

	var form_input = req.body;
	var user = {id:Math.random(10), name:form_input.name, email:form_input.email, url:form_input.url}
	users.push(user);
	save_users(users);

	result.redirect("/template-view");
});
exApp.put("/users/:user_id",function(req,result,next){
	console.log(req.params);
	console.log(req.body);
	result.send("done PUT");
});
exApp.delete("/users/:user_id",function(req,result,next){
	console.log(req.params);
	console.log(req.body);
	result.send("done DELETE");
});




/**********************************************************************/
function do_something(params){
	console.log("user name is: "+params.username);
	console.log("age is: "+params.age);
}




//this is how to create a route
exApp.get('/',function(request,result,next){
	// next(); this will end the current route & go on to the next route that matches the request
	// result.redirect('/err'); this will redirect you to a defined route
	// result.status(404).send("No Page Found Here"); //return the message with a 404 status

	result.send("Hello World fuck you man1222asdf!");
})
exApp.get('/route-name',function(request,result){
	result.send("this is the route result");
})
//template view
exApp.get('/template-view',function(request,result){
	users = get_users();
	result.render("jade-view-return",{users:users});
//if you need to user jade just define the extension in the file like this:-
	// result.render("jade-view-return.jade",{users:users});
})




exApp.get('/users',function(request,result){
	var buffer = '';
	users.forEach(user=>{
		buffer += "<a href='users/"+user.id+"'>"+user.name+"</a><br>";
	});
	result.send( buffer );
})
// this is :param
exApp.get('/users/:user_id',function(request,result,next){
	var user_id = request.params.user_id;
	var user = find_user(user_id)
	if(!user) next(); //if didn't find user go to next route
	result.render("singleuser",{user:user});
})


//regex is allowed in url. try any link start with big
exApp.get(/big.*/,function(request,result,next){
	console.log("this is Big Route console log");
	next();
})


//download response
exApp.get('/download/*.img',function(request,result){
	result.download('./download-files/me.jpg','private-img.jpg'); //return a download file
	// result.send("image was downloaded");
})



/*************************************************************
Require External code bits
*************************************************************/
var external_model = require("./external_model");
var nums = external_model.nums;
console.log("Data from external file", nums);
/**********************************************************************/


/*************************************************************
External Route Group
*************************************************************/
	var ExternalRouter = require("./ex_router")
	exApp.use("/external",ExternalRouter)

//define a route to an action1 with optional param
	exApp.use("/action1/:param?",ExternalRouter.action1)//tie a route to an action
/**********************************************************************/



/********************************************
    Emitting & Listening to events
********************************************/
var Emitter = require('events').EventEmitter;
var myEmitter = new Emitter();

exApp.get('/emit',function(request,result){
	var somedata = {name:"ahmed",age:26}

//now we are writing emitters:-
	myEmitter.emit("event1",somedata);
	myEmitter.emit("event2",somedata);

	result.send( "<h1>Done Emitting</h1>" );
})

//now we will write listeners
myEmitter.on('event1',function(somedata){ console.log("event 1",somedata) })
myEmitter.on('event2',function(somedata){ console.log("event 2",somedata) })

//------------------------------------------




//404 route if non any found
exApp.get(/.*/,function(request,result){
	result.send("<h1>Sorry! This is 404 Page man</h1>");
})





var server = exApp.listen(3000,function(){
	//fire this on start
	console.log("Server Running at http://localhost:"+server.address().port);
});
