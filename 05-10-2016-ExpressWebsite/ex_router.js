var express= require('express');
var router = express.Router({
	mergeParams:true   //allow u to get the params from the parent
});




var helpers = {
	eq: function(val1,val2){ return (val1==val2) },
	t: true
}


// respond to:     external/
router.get("/",function(request,result){
	result.send("this is the basic route inside /external route")
})

// respond to:     external/router1
router.get("/router1",function(request,result){
	result.send("this is the /external/route1 answer")
})


/*********************************************************************
This is how we define route group
**********************************************************************/
router.route("/router-group/:newuser?")
	.all(function(req,res,next){
		console.log("this runs the first thing");
		next();//path to the next match
	})
	.get(function(req,res){
		// console.log(req.body);
		res.render("render_msg",{
					msg:'this is the /external/router-group (get) answer',
					type:'get', 
					helpers:helpers,
					get_params:JSON.stringify(req.query), 
					post_params:JSON.stringify(req.body),
					url_params:JSON.stringify(req.params)
				});
	})
	.post(function(req,res){
		// console.log(req.body);
		res.render("render_msg",{
					msg:'this is the /external/router-group (post) answer',
					type:'post', 
					helpers:helpers,
					get_params:JSON.stringify(req.query), 
					post_params:JSON.stringify(req.body),
					url_params:JSON.stringify(req.params)
				});
		// res.send("this is the /external/router-group (post) answer")
	});
/**********************************************************************/




module.exports = router;
module.exports.action1 = function(req,res){
	console.log(req.params);
	res.send("this is the Action")
};





