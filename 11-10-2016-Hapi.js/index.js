'use strict'
const Hapi = require('hapi');
const Path = require('path');
const Boom = require('boom'); //to generate error statuses
const Joi = require('joi');


const server = new Hapi.Server()
server.connection({
	host: 'localhost',
	port: 8000
})


/*********************************************************************
	Logging with ( good & good-console )
**********************************************************************/
// let goodOptions = {
// 	reporters: [{
// 		reporter: require('good-console'),
// 		event: { log: "*", response: "*"}
// 	}]
// }

// server.register({
// 	register: require('good'),
// 	options: goodOptions
// }, err=>{

// });
/**********************************************************************/



server.route({
	method: 'GET',
	path: '/',
	handler: (req,reply)=>{
		console.log("----Responding----");
		reply('<h1>Hello Hapi !</h1>');
	}
})

server.route({
	method: 'GET',
	path: '/users/{userId?}', //prams are in {} & for opional params we add ?
							//also if we use the * it will hold unlimited number of parameters
	handler: (request,reply)=>{
		let rep = reply('<h1>These are users</h1>')
			.code(418) //change response code
			.type('text/plain') //change response type
			.header('Username','Ahmed Badawy') //add header
			.state("Cookie1","fuckyou") //add session cookie
	}
})


server.register(require('inert'),()=>{ //inert plugin enable files to returned
	//route to serve the whole directory
	server.route({ //ex:  http://localhost:8000/access/1.jpg
		method: 'GET',
		path: '/access/{param*}',
		handler: {
			// file: Path.join(__dirname,'public/1.jpg') // this will return a file
			directory:{ path: Path.join(__dirname,'public') } //this will return a directory. just try http://localhost:8000/access/1.jpg
		}
	})
})


/********************************************
    Post & put
********************************************/
server.route({   //ust postmane app & puth some data in the (body) area
	method: ["POST","PUT"],
	path: '/saveuser',
	config: {
		payload:{ 
			output: 'data', //this is the default
			// parse: false,  //this means parse to json or not
			// allow: 'application/json' // don't know what does it means
		}
	},
	handler: function(req,res){ 
		res(req.payload)       //in hapi any time you try to return an obj it will get stringified into json text.
	}
})
//------------------------------------------


/********************************************
    Validation with joi
********************************************/
server.route({   //ust postmane app & puth some data in the (body) area
	method: ["POST","GET"],
	path: '/validate/{id?}',
	config: {
		validate: {
			params: Joi.object({
				id: Joi.number(), //this will generate an error if the id isn't a number
			}),
			// payload: Joi.object({
			// 	id: Joi.number(),
			// 	// email: Joi.string()
			// })
			// .unknown() //this will allow access of unvalidated params
		}
	},
	handler: function(req,reply){ 
		reply({
			params: req.params,
			query: req.query,
			payload: req.payload
		});     
	}
})
//------------------------------------------



/********************************************
  	Extending the Request with Life cycle events
********************************************/
server.route({
	method: "GET",
	path: '/lifeCycle',
	handler: function(req,rep){
		console.log("handler");
		rep("Done")
	}
})
// server.ext('onRequest',(request,reply)=>{ console.log("onRequest"); reply.continue() });
// server.ext('onPreAuth',(request,reply)=>{ console.log("onPreAuth"); reply.continue() });
// server.ext('onPostAuth',(request,reply)=>{ console.log("onPostAuth"); reply.continue() });
// server.ext('onPreHandler',(request,reply)=>{ console.log("onPreHandler"); reply.continue() });
// server.ext('onPostHandler',(request,reply)=>{ console.log("onPostHandler"); reply.continue() });
// server.ext('onPreResponse',(request,reply)=>{ console.log("onPreResponse"); reply.continue() });
//------------------------------------------


/********************************************
    Now Using the Views
********************************************/
var vision = require('vision');
server.register(vision,()=>{

	server.views({
		engines:{
			hbs: require('handlebars')
		},
//then you need to define where is the views:-
		relativeTo: __dirname,
		layout: true, //this line is for layout support
		path: 'views' //dir of the views
	})

	server.route({
		method: 'GET',
		path: '/view1/{name?}', //try access view1/Ahmed
		handler: function(req,rep){
			console.log("hello boy");
			rep.view('home', {name:req.params.name || 'World'} ) //return home with name param
		}
	})

	server.route({
		method: 'GET',
		path: '/newuser',
		handler: function(req,rep){
			rep.view('newuser')
		}
	})

})
//------------------------------------------




/********************************************
		Error Message
********************************************/
server.route({
	method: 'GET',
	path: '/error',
	handler: function(req,reply){
		// reply(Boom.badRequest()); //this will replay with a badrequest error.
		reply(Boom.notFound()); //this will output 404 error & continue to the error page
	}
})
// server.ext('onPreResponse',(req,reply)=>{
// 	let response = req.response;
// 	if(!response.isBoom) return reply.continue(); //if !error continue

// 	console.log("error msg");
// 	reply.view('error',response.output.payload).code(response.output.statusCode);
// })
//------------------------------------------




server.start(()=>console.log(`App Started Listening at: ${server.info.uri}`))
